package org.charess.training.repository.security;

import org.charess.training.domain.security.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}
