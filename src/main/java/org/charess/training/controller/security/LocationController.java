package org.charess.training.controller.security;

import org.charess.training.domain.security.Location;
import org.charess.training.service.security.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/location")
public class LocationController {

    private LocationService locationService;

    @Autowired
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @RequestMapping(value = "/{criteria}", method = RequestMethod.GET)
    public List<Location> searchZones(@PathVariable String criteria) {
        return locationService.search(criteria);
    }

}
