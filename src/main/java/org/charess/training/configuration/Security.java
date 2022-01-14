package org.charess.training.configuration;

import org.charess.training.controller.security.AuthController;
import org.charess.training.service.security.AuthUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class Security extends WebSecurityConfigurerAdapter {

    @Autowired
    private EntryPoint entryPoint;

    @Autowired
    private AuthUserService authUserService;

    @Autowired
    private RequestFilter requestFilter;
    private final Logger log = LoggerFactory.getLogger(Security.class);


    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(authUserService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source =   new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http = http.cors().and().csrf().disable();
        http = http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and();
        http = http.exceptionHandling().authenticationEntryPoint(entryPoint).and();
        http.authorizeRequests()
            .antMatchers(HttpMethod.GET, "/api/place").permitAll()
            .antMatchers(HttpMethod.POST, "/api/user/password").permitAll()
            .antMatchers(HttpMethod.POST, "/api/user").permitAll()
            .antMatchers(HttpMethod.POST, "/api/authenticate").permitAll()
            .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
            .anyRequest().authenticated();
        http.addFilterBefore(requestFilter, UsernamePasswordAuthenticationFilter.class);
    }
}


//        httpSecurity.csrf().disable()
//            .authorizeRequests()
//            .antMatchers("/api/authenticate/place").permitAll()
//            .antMatchers("/api/authenticate").permitAll()
//            .antMatchers("/api/user/register").permitAll()
//            .antMatchers("/api/user/password").permitAll()
//            .antMatchers("/api/**").authenticated()
//            .and().exceptionHandling().authenticationEntryPoint(entryPoint)
//            .and().sessionManagement()
//            .sessionCreationPolicy(SessionCreationPolicy.STATELESS);


//
//        httpSecurity.csrf().disable()
//                .authorizeRequests()
//                    .antMatchers("/api/authenticate").permitAll()
//                    .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//                .anyRequest().authenticated()
//                    .and().exceptionHandling().authenticationEntryPoint(entryPoint)
//                    .and().sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);










//        .headers()
//                .frameOptions()
//                .sameOrigin()
//                .and()
//                .csrf()
//                .disable()
//                .exceptionHandling()
//                .authenticationEntryPoint(authenticationEntryPoint)
//                .and()
//                .authorizeRequests()
//                .antMatchers("/api/location/**").permitAll()
//                .antMatchers("/api/subscription/**").permitAll()
//                .antMatchers("/api/usr/register/**").permitAll()
//                .antMatchers("/api/usr/auto-reset-pwsd/**").permitAll()
//                .antMatchers("/api/**").authenticated()
//                .and()
//                .sessionManagement()
//                .invalidSessionUrl("/")
//                .sessionAuthenticationErrorUrl("/")
//                .maximumSessions(1)
//                .expiredUrl("/")
//                .maxSessionsPreventsLogin(false)
//                .and()
//                .and()
//                .formLogin()
//                .loginProcessingUrl("/api/authentication")
//                .successHandler(ajaxAuthSuccess)
//                .failureHandler(ajaxAuthFailure)
//                .usernameParameter("username")
//                .passwordParameter("password")
//                .permitAll()
//                .and()
//                .logout()
//                .logoutUrl("/api/logout")
//                .logoutSuccessHandler(ajaxLogoutSuccess)
//                .invalidateHttpSession(true)
//                .deleteCookies("JSESSIONID")
//                .permitAll();






