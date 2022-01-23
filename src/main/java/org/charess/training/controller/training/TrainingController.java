package org.charess.training.controller.training;

import org.charess.training.domain.training.Training;
import org.charess.training.domain.training.TrainingLog;
import org.charess.training.service.training.TrainingService;
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
    private final Logger log = LoggerFactory.getLogger(TrainingController.class);

    @Autowired
    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    @RequestMapping(value = "/{criteria}", method= RequestMethod.GET)
    public List<Training> search(@PathVariable(value = "criteria") String criteria) {
        return trainingService.search(criteria);
    }

    @RequestMapping(method= RequestMethod.GET)
    public List<Training> all() {
        return trainingService.all();
    }

    @RequestMapping(value ="request", method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody Training training){
        try {
            Training s = trainingService.save(training, "request");
            return training==null?new ResponseEntity<>("", HttpStatus.BAD_REQUEST):new ResponseEntity<>(s, HttpStatus.OK);
        } catch(Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @RequestMapping(value = "/log", method = RequestMethod.GET)
    public List<TrainingLog> log(@RequestParam("training") Integer training) {
        return trainingService.log(training);
    }
}
