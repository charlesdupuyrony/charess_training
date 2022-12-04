package org.charess.training.controller.security;

import org.charess.training.domain.security.Location;
import org.charess.training.service.security.LocationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/location")
public class LocationController {

    private LocationService locationService;
    private final Logger log = LoggerFactory.getLogger(PlaceController.class);


    @Autowired
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @RequestMapping(value = "/search/{criteria}", method= RequestMethod.GET)
    public List<Location> search(@PathVariable(value = "criteria") String criteria) {
        return locationService.search(criteria);
    }

}
