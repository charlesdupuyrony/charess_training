package org.charess.training.service.security;

import org.charess.training.domain.security.Place;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PlaceService {

    Page<Place> find(String filter, Pageable pageable);
    Place save(Place place);
}
