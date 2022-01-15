package org.charess.training.service.security;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Place;
import org.charess.training.repository.security.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
@Service("placeService")
public class PlaceServiceImpl implements PlaceService {

    private PlaceRepository placeRepository;
    private UserService userService;

    @Autowired
    public PlaceServiceImpl(PlaceRepository placeRepository, UserService userService){
        this.placeRepository = placeRepository;
        this.userService = userService;
    }

    public List<Place> all(){
        return placeRepository.findAll();
    }

    public List<Place> search(String criteria){
        return (criteria==null || criteria.trim().isEmpty())?new ArrayList<>():placeRepository.search(criteria);
    }

    public void delete(Integer id){
        placeRepository.deleteById(id);
    }

    public Place save(Place place){
        Audit audit = place;
        userService.inject(audit);
        return (place==null || audit==null)?null:placeRepository.save(place);
    }

}
