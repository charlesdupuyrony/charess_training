package org.charess.training.domain.security;

import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="users")
public class User implements Serializable, UserDetails {

    @Id
    private Integer id;

    @OneToOne
    @JoinColumn(name = "id")
    @MapsId
    private Person person;

    @NotEmpty
    @Size(min = 3, max = 30)
    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @NotEmpty
    @Column(name = "password", length = 250, nullable = false)
    private String password;

    @NotEmpty
    @Column(name = "locale", nullable = false, length = 2)
    private String locale = Locale.FRANCAIS.getLocale();

    @Column(name = "status", length = 15, nullable = false)
    private String status = Status.USER_LOCKED.toString();

    @ManyToOne
    @JoinColumn(name = "profile")
    private Profile profile;

    @Column(name = "created", nullable = false)
    private LocalDateTime created = LocalDateTime.now();

    @Column(name = "creator", nullable = false)
    private Integer creator;

    @Column(name = "edited")
    private LocalDateTime edited;

    @Column(name = "editor")
    private Integer editor;

    public Collection<Profile> getAuthorities() {
        List<Profile> authorities = new ArrayList<Profile>();
        if(profile != null)
            authorities.add(profile);
        return authorities;
    }

    public boolean isAccountNonExpired() {
        return true;
    }

    public boolean isAccountNonLocked() {
        boolean isLocked = false;
        if (Status.USER_ACTIVE.toString().equals(this.status) || Status.USER_PENDING.toString().equals(this.status))
            isLocked = true;
        return isLocked;
    }

    public boolean isCredentialsNonExpired() {
        return true;
    }

    public boolean isEnabled() {
        boolean bool = true;
        if(getAuthorities().size() < 1)
            bool = false;
        return bool;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public Integer getCreator() {
        return creator;
    }

    public void setCreator(Integer creator) {
        this.creator = creator;
    }

    public LocalDateTime getEdited() {
        return edited;
    }

    public void setEdited(LocalDateTime edited) {
        this.edited = edited;
    }

    public Integer getEditor() {
        return editor;
    }

    public void setEditor(Integer editor) {
        this.editor = editor;
    }
}
