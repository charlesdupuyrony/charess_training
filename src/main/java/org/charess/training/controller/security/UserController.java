package org.charess.training.controller.security;

import org.charess.training.domain.security.Profile;
import org.charess.training.domain.security.User;
import org.charess.training.service.security.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;
    private final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public List<Profile> getProfiles() {
        return userService.getProfiles();
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> register(@RequestBody User user) {
        HttpHeaders textPlainHeaders = new HttpHeaders();
        textPlainHeaders.setContentType(MediaType.TEXT_PLAIN);
        try {
            if(user == null)
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            if(user.getId() == null){
                if(userService.findByUsername(user.getUsername()) != null) {
                    return new ResponseEntity<>("username", textPlainHeaders, HttpStatus.CONFLICT);
                }
                if(userService.findByEmail(user.getPerson().getEmail()) != null){
                    return new ResponseEntity<>("email", textPlainHeaders, HttpStatus.CONFLICT);
                }
            }
            return new ResponseEntity<>(userService.register(user, true), HttpStatus.OK);
        } catch(UsernameNotFoundException ufe){
            return new ResponseEntity<>(ufe.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }

}
