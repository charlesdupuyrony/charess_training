package org.charess.training.service.security;

import org.charess.training.repository.security.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthUserService implements UserDetailsService, UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        org.charess.training.domain.security.User usr = userRepository.findByUsername(username);
        return new User(usr.getUsername(), usr.getPassword(), usr.getAuthorities());
    }

    @Override
    public org.charess.training.domain.security.User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }


}


