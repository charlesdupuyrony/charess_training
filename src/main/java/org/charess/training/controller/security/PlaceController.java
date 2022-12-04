package org.charess.training.controller.security;

import org.charess.training.domain.security.Place;
import org.charess.training.service.security.PlaceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/place")
public class PlaceController {

    private PlaceService placeService;
    private final Logger log = LoggerFactory.getLogger(PlaceController.class);

    @Autowired
    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @RequestMapping(method= RequestMethod.GET)
    public List<Place> all() {
        return placeService.all();
    }

    @RequestMapping(value = "/{criteria}", method= RequestMethod.GET)
    public List<Place> search(@PathVariable(value = "criteria") String criteria) {
        return placeService.search(criteria);
    }

    @RequestMapping(value = "/{id}", method= RequestMethod.DELETE)
    public void delete(@PathVariable("id") Integer id) {
        placeService.delete(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<String> save(@RequestBody Place place){
        try {
            return placeService.save(place)==null?new ResponseEntity<>("", HttpStatus.BAD_REQUEST):new ResponseEntity<>("", HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }

}
