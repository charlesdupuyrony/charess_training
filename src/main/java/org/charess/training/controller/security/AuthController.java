package org.charess.training.controller.security;


import org.charess.training.configuration.Token;
import org.charess.training.domain.security.JwtResponse;
import org.charess.training.domain.security.User;
import org.charess.training.service.security.AuthUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@CrossOrigin
public class AuthController {

    private AuthenticationManager authenticationManager;
    private Token token;
    private AuthUserService authUserService;
    private final Logger log = LoggerFactory.getLogger(AuthController.class);


    @Autowired
    public AuthController(AuthenticationManager authenticationManager, Token token, AuthUserService authUserService) {
        this.authenticationManager = authenticationManager;
        this.token = token;
        this.authUserService = authUserService;
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> generateAuthenticationToken(@RequestBody User user) throws Exception {
        log.info("user={}, password={}", user.getUsername(), user.getPassword());

        authenticate(user.getUsername(), user.getPassword());
        final UserDetails userDetails = authUserService.loadUserByUsername(user.getUsername());
        return ResponseEntity.ok(new JwtResponse(token.generateToken(userDetails)));
    }

    private void authenticate(String username, String password) throws Exception {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
