package org.charess.training.repository.security;

import org.charess.training.domain.security.Place;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PlaceRepository extends JpaRepository<Place, Integer> {

    @Query("select p " +
            " from Place p " +
            "where (p.name like Concat('%', Concat(?1,'%')))")
    Page<Place> find(String filter, Pageable pageable);

}


