package org.charess.training.service.security;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Person;
import org.charess.training.domain.security.Profile;
import org.charess.training.domain.security.User;

import java.util.List;

public interface UserService {
    User findByUsername(String username);
    User getCurrentUser();
    Audit inject(Audit audit);
    List<User> getUsers();
    List<Profile> getProfiles();
    Person findByEmail(String email);
    User register(User user, boolean encodePassword);
    void update(List<User> users);
}
