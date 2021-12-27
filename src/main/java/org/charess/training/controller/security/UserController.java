package org.charess.training.controller.security;

import org.charess.training.service.security.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;
    private final Logger log = LoggerFactory.getLogger(UserController.class);




//    @Autowired
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @RequestMapping(value = "/current-user", method = RequestMethod.GET)
//    public ResponseEntity<User> getCurrentUser() {
//        User user = userService.getCurrentUser();
//        if (user != null){
//            return  new ResponseEntity<>(user, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @RequestMapping(value = "/profile", method = RequestMethod.GET)
//    public List<Profile> getAllProfiles() {
//        return userService.findAllProfiles();
//    }
//
//    @RequestMapping(value = "/register", method = RequestMethod.POST)
//    public ResponseEntity<String> register(@RequestBody User user) {
//        HttpHeaders textPlainHeaders = new HttpHeaders();
//        textPlainHeaders.setContentType(MediaType.TEXT_PLAIN);
//        try {
//            if(user == null)
//                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
//            if(user.getId() == null){
//                if(userService.findByUsername(user.getUsername()) != null) {
//                    return new ResponseEntity<>("username", textPlainHeaders, HttpStatus.CONFLICT);
//                }
//                if(userService.findByEmail(user.getPerson().getEmail()) != null){
//                    return new ResponseEntity<>("email", textPlainHeaders, HttpStatus.CONFLICT);
//                }
//            }
//            userService.register(user, true);
//            return new ResponseEntity<>("", HttpStatus.OK);
//        } catch(UsernameNotFoundException ufe){
//            return new ResponseEntity<>(ufe.getMessage(), HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//
//    @RequestMapping(value = "/register/{username:.+}", method = RequestMethod.GET)
//    public ResponseEntity<Boolean> isUsernameRegistered(@PathVariable String username) {
//        return new ResponseEntity<Boolean>(userService.findByUsername(username) != null, HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/register/address/{email:.+}", method = RequestMethod.GET)
//    public ResponseEntity<Boolean> isEmailRegistered(@PathVariable String email) {
//        return new ResponseEntity<Boolean>(userService.isEmailExisted(email), HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/register/xmail/{email:.+}", method = RequestMethod.GET)
//    public ResponseEntity<Boolean> isEmailExisted(@PathVariable String email) {
//        return new ResponseEntity<Boolean>(userService.isEmailExisted(email), HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/register/xcin/{cin:.+}", method = RequestMethod.GET)
//    public ResponseEntity<Boolean> isCinExisted(@PathVariable String cin) {
//        log.info("=========={}=================", cin);
//        return new ResponseEntity<Boolean>(userService.isCinExisted(cin), HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/register/xnif/{nif:.+}", method = RequestMethod.GET)
//    public ResponseEntity<Boolean> isNifExisted(@PathVariable String nif) {
//        return new ResponseEntity<Boolean>(userService.isNifExisted(nif), HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/account", method = RequestMethod.GET)
//    public Page<User> getAllUsers(Pageable pageable, @RequestParam(value = "filter", required = false) String filter) {
//        return userService.findUsersByCrirteria(filter, pageable);
//    }
//
//    @RequestMapping(value = "/account", method = RequestMethod.POST)
//    public ResponseEntity<?> updateUsers(@RequestBody List<User> users){
//        try {
//            for(User user: users)
//                userService.register(user, false);
//        } catch (Exception e){
//            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
//        }
//        return new ResponseEntity<>("", HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/reset-pswd", method = RequestMethod.POST)
//    public ResponseEntity<User> chgPswd(@RequestBody User usr){
//        if(usr == null)
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        userService.register(usr, true);
//        return new ResponseEntity<>(usr, HttpStatus.OK);
//    }



}
