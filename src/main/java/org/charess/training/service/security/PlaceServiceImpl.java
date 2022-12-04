package org.charess.training.service.security;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Person;
import org.charess.training.domain.security.Place;
import org.charess.training.repository.security.PersonRepository;
import org.charess.training.repository.security.PlaceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
@Service("placeService")
public class PlaceServiceImpl implements PlaceService {

    private PlaceRepository placeRepository;
    private PersonRepository personRepository;
    private UserService userService;
    private final Logger log = LoggerFactory.getLogger(PlaceServiceImpl.class);

    @Autowired
    public PlaceServiceImpl(PlaceRepository placeRepository, UserService userService, PersonRepository personRepository){
        this.placeRepository = placeRepository;
        this.userService = userService;
        this.personRepository = personRepository;
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
        List<Person> people = new ArrayList<>();

        for(Person m: place.getManagers()){
            if(m.getId()==null)
                m = personRepository.save(m);
            people.add(m);
        }
        place.setManagers(people);

        return (place==null || audit==null)?null:placeRepository.save(place);
    }

}
