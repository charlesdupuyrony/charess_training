package org.charess.training.service.training;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Status;
import org.charess.training.domain.security.User;
import org.charess.training.domain.training.Training;
import org.charess.training.domain.training.TrainingLog;
import org.charess.training.repository.training.TrainingLogRepository;
import org.charess.training.repository.training.TrainingRepository;
import org.charess.training.service.security.PlaceService;
import org.charess.training.service.security.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service("trainingService")
public class TrainingServiceImpl implements TrainingService{

    private TrainingRepository trainingRepository;
    private UserService userService;
    private PlaceService placeService;
    private TrainingLogRepository trainingLogRepository;
    private final Logger log = LoggerFactory.getLogger(TrainingServiceImpl.class);

    @Autowired
    public TrainingServiceImpl(TrainingRepository trainingRepository, UserService userService, TrainingLogRepository trainingLogRepository,
                               PlaceService placeService) {
        this.trainingRepository = trainingRepository;
        this.userService = userService;
        this.placeService = placeService;
        this.trainingLogRepository = trainingLogRepository;
    }

    public List<Training> all(){
        User usr = userService.getCurrentUser();
        List<Training> trainings = trainingRepository.findAll();
        if(usr.getInstitution()!=null && !usr.getInstitution().equals(placeService.defaultPlace()))
            trainings = trainingRepository.findAll().stream().filter(training -> training.getRequester().equals(usr.getInstitution())).collect(Collectors.toList());
        return trainings;
    }

    public Training save(Training training, String type){
        Audit audit = training;
        userService.inject(audit);
        String txt = "";
        TrainingLog log = null;
        if("request".equals(type)){
            txt = "Your training request has been susccefully made. Follow-up will be doing soon.";
            if(training.getCreator()!=null && training.getCreator().getInstitution()!=null){
                training.setRequested(LocalDate.now());
                training.setRequester(training.getCreator().getInstitution());
                txt = String.format(txt, training.getCreator().getPerson().getFirstName());
            }
            training.setStatus(Status.TRAINING_REQUESTED.toString());
            training.setStatusDate(LocalDateTime.now());
        }
        trainingRepository.save(training);

        log = new TrainingLog(training, txt);
        log.setCreator(training.getCreator());
        log.setCreated(training.getCreated());
        trainingLogRepository.save(log);

        return training;
    }

    public List<Training> search(String criteria){
        List<Training> trainings;
        if(criteria==null || criteria.length()<1)
            trainings = trainingRepository.findAll();
        else
            trainings = trainingRepository.search(criteria);
        return trainings;
    }

    public List<TrainingLog> log(Integer training){
        return trainingLogRepository.findByTrainingId(training);
    }
}
