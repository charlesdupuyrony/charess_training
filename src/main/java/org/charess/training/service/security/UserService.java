package org.charess.training.service.security;

import org.charess.training.domain.security.User;

public interface UserService {
    User findByUsername(String username);
//    User getCurrentUser();
}
