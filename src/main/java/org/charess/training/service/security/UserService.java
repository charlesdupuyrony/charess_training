package org.charess.training.service.security;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.User;

public interface UserService {
    User findByUsername(String username);
    User getCurrentUser();
    Audit inject(Audit audit);

}
