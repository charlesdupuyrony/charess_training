package org.charess.training.service.security;

import org.charess.training.controller.security.UserController;
import org.charess.training.domain.security.Status;
import org.charess.training.repository.security.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthUserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    private final Logger log = LoggerFactory.getLogger(AuthUserService.class);


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        org.charess.training.domain.security.User usr = userRepository.findByUsername(username);

        User user = (usr !=null && (usr.getStatus().equals(Status.USER_ACTIVE.toString()) || usr.getStatus().equals(Status.USER_PENDING.toString())))?
                new User(usr.getUsername(), usr.getPassword(), usr.getAuthorities()):null;
        return user;
    }

    public org.charess.training.domain.security.User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}


