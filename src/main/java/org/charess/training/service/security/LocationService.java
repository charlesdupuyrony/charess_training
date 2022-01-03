package org.charess.training.service.security;

import org.charess.training.domain.security.Location;

import java.util.List;

public interface LocationService {

    List<Location> search(String criteria);

}
