package org.charess.training.repository.security;

import org.charess.training.domain.security.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer> {
    Person findByEmail(String email);
    Person findByIdentifier(String identifier);
}
