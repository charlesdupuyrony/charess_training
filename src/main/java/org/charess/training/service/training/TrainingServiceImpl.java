package org.charess.training.service.training;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.training.Training;
import org.charess.training.repository.training.TrainingRepository;
import org.charess.training.service.security.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service("trainingService")
public class TrainingServiceImpl implements TrainingService{

    private TrainingRepository trainingRepository;
    private UserService userService;
    private final Logger log = LoggerFactory.getLogger(TrainingServiceImpl.class);

    @Autowired
    public TrainingServiceImpl(TrainingRepository trainingRepository, UserService userService) {
        this.trainingRepository = trainingRepository;
        this.userService = userService;
    }

    public List<Training> all(){
        return trainingRepository.findAll();
    }

    public Training save(Training training){
        log.info("=status: {}, topic ={}=", training.getStatus(), training.getTopic().getId());
        return training==null?null:trainingRepository.save(training);
    }

    public List<Training> search(String criteria){
        List<Training> trainings;
        if(criteria==null || criteria.length()<1)
            trainings = trainingRepository.findAll();
        else
            trainings = trainingRepository.search(criteria);
        return trainings;
    }
}
