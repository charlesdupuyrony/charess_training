package org.charess.training.configuration;

import io.jsonwebtoken.ExpiredJwtException;
import org.charess.training.service.security.AuthUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.apache.logging.log4j.util.Strings.isEmpty;

@Component
public class RequestFilter extends OncePerRequestFilter {

    @Autowired
    private AuthUserService authUserService;

    @Autowired
    private Token token;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException, IllegalArgumentException, ExpiredJwtException {

        final String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(isEmpty(header) || !header.startsWith("Bearer ")){
            chain.doFilter(request, response);
            return;
        }
        final String jwt = header.split(" ")[1].trim();
        String username = token.getUsernameFromToken(jwt);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.authUserService.loadUserByUsername(username);
            if (token.validateToken(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        chain.doFilter(request, response);
    }
}
