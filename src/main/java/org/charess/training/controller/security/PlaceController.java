package org.charess.training.controller.security;

import org.charess.training.domain.security.Place;
import org.charess.training.service.security.PlaceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/place")
public class PlaceController {

    private PlaceService placeService;
    private final Logger log = LoggerFactory.getLogger(PlaceController.class);

    @Autowired
    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @RequestMapping(method= RequestMethod.GET)
    public Page<Place> find(Pageable pageable, @RequestParam(value = "filter", required = false) String filter) {
        return placeService.find(filter, pageable);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<String> save(@RequestBody Place place){
        try {
            if(place == null)
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            placeService.save(place);
            return new ResponseEntity<>("", HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }
}
