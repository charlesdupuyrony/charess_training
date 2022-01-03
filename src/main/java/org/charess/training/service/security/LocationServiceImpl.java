package org.charess.training.service.security;

import org.charess.training.domain.security.Location;
import org.charess.training.repository.security.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service("locationService")
public class LocationServiceImpl implements LocationService {

    private LocationRepository locationRepository;

    @Autowired
    public LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public List<Location> search(String criteria){
        return this.locationRepository.search(criteria!=null?criteria:"");
    }

}
