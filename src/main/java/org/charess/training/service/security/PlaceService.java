package org.charess.training.service.security;

import org.charess.training.domain.security.Place;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PlaceService {

    List<Place> all();
    void delete(Integer id);
    Place save(Place place);
}
