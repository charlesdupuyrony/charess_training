package org.charess.training.service.security;

import org.charess.training.domain.security.Place;
import org.charess.training.repository.security.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service("placeService")
public class PlaceServiceImpl implements PlaceService {

    private PlaceRepository placeRepository;

    @Autowired
    public PlaceServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    public Page<Place> find(String filter, Pageable pageable){
        return placeRepository.find(filter==null?"":filter, pageable);
    }

    public Place save(Place place){
        return placeRepository.save(place);
    }

}
