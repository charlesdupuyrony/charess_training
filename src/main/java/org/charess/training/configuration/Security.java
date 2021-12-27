package org.charess.training.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class Security extends WebSecurityConfigurerAdapter {

    @Autowired
    private AjaxAuthSuccess ajaxAuthSuccess;

    @Autowired
    private AjaxAuthFailure ajaxAuthFailure;

    @Autowired
    private AjaxLogoutSuccess ajaxLogoutSuccess;

    @Autowired
    private Http401EntryPoint authenticationEntryPoint;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12 );
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .headers()
            .frameOptions()
            .sameOrigin()
            .and()
            .csrf()
            .disable()
            .exceptionHandling()
            .authenticationEntryPoint(authenticationEntryPoint)
            .and()
            .authorizeRequests()
            .antMatchers("/api/user/register/**").permitAll()
            .antMatchers("/api/user/auto-reset-pwsd/**").permitAll()
            .antMatchers("/api/**").authenticated()
            .and()
            .sessionManagement()
            .invalidSessionUrl("/")
            .sessionAuthenticationErrorUrl("/")
            .maximumSessions(1)
            .expiredUrl("/")
            .maxSessionsPreventsLogin(false)
            .and()
            .and()
            .formLogin()
            .loginProcessingUrl("/api/authentication")
            .successHandler(ajaxAuthSuccess)
            .failureHandler(ajaxAuthFailure)
            .usernameParameter("username")
            .passwordParameter("password")
            .permitAll()
            .and()
            .logout()
            .logoutUrl("/api/logout")
            .logoutSuccessHandler(ajaxLogoutSuccess)
            .invalidateHttpSession(true)
            .deleteCookies("JSESSIONID")
            .permitAll();
    }
}