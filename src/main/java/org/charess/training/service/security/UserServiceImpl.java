package org.charess.training.service.security;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.User;
import org.charess.training.repository.security.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Transactional
@Service("userService")
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    private final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);


    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User getCurrentUser() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();

        User user = null;
        if (authentication != null) {
            if (authentication.getPrincipal() instanceof org.springframework.security.core.userdetails.User){
                String username = ((org.springframework.security.core.userdetails.User) authentication.getPrincipal()).getUsername();
                user = userRepository.findByUsername(username);
            }
        }
        return user;
    }

    public Audit inject(Audit audit){
        if(audit==null)
            return audit;
        if(audit.getId() == null){
            audit.setCreator(getCurrentUser());
            audit.setCreated(LocalDateTime.now());
        } else {
            audit.setEditor(getCurrentUser());
            audit.setEdited(LocalDateTime.now());
        }
        return audit;
    }
}
