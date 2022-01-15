package org.charess.training.controller.training;

import org.charess.training.domain.training.Topic;
import org.charess.training.service.training.TopicService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/topic")
public class TopicController {

    private TopicService topicService;
    private final Logger log = LoggerFactory.getLogger(TopicController.class);

    @Autowired
    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @RequestMapping(value = "/{criteria}", method= RequestMethod.GET)
    public List<Topic> search(@PathVariable(value = "criteria") String criteria) {
        return topicService.search(criteria);
    }

    @RequestMapping(method= RequestMethod.GET)
    public List<Topic> all() {
        return topicService.all();
    }

    @RequestMapping(value = "/{id}", method= RequestMethod.DELETE)
    public void delete(@PathVariable("id") Integer id) {
        topicService.delete(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<String> save(@RequestBody Topic topic){
        try {
            return topicService.save(topic)==null?new ResponseEntity<>("", HttpStatus.BAD_REQUEST):new ResponseEntity<>("", HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }
}
