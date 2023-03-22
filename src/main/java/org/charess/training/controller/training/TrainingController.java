package org.charess.training.controller.training;

import org.charess.training.domain.security.Status;
import org.charess.training.domain.training.StatusTraining;
import org.charess.training.domain.training.Training;
import org.charess.training.domain.training.TrainingPartner;
import org.charess.training.service.training.TrainingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/training")
public class TrainingController {

    private TrainingService trainingService;
    private final Logger log = LoggerFactory.getLogger(TopicController.class);

    @Autowired
    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    @RequestMapping(value="/broadcast", method = RequestMethod.POST)
    public ResponseEntity<?> broadcast(@RequestBody Training training){
        try {
            training.setStatus(Status.TRAINING_BROADCAST.toString());
            Training trn = trainingService.broadcast(training);
            return trn==null?new ResponseEntity<>("", HttpStatus.BAD_REQUEST):new ResponseEntity<>(trn, HttpStatus.OK);
        } catch(Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @RequestMapping(value="/participants", method = RequestMethod.POST)
    public ResponseEntity<?> updateParticipants(@RequestBody Training training){
        try {
            training.setStatus(Status.TRAINING_BROADCAST.toString());
            Training t = trainingService.updateParticipants(training);
            return t==null?new ResponseEntity<>("", HttpStatus.BAD_REQUEST):new ResponseEntity<>(t, HttpStatus.OK);
        } catch(Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @RequestMapping(value="/status", method = RequestMethod.POST)
    public ResponseEntity<?> changeStatus(@RequestBody StatusTraining statusTraining){
        try {
            trainingService.changeStatus(statusTraining.getTraining(), statusTraining.getStatus());
            return new ResponseEntity<>("", HttpStatus.OK);
        } catch(Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Training> all() {
        return trainingService.all();
    }

    @RequestMapping(value="/partner/{id}", method = RequestMethod.GET)
    public List<TrainingPartner> getBroadcastTrainingPartner(@PathVariable("id") Integer id){
        return trainingService.getPartnerTrainings(id); //id: partner id
    }
}
