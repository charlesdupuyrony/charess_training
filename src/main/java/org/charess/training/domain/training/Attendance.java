package org.charess.training.domain.training;

import org.charess.training.domain.security.Audit;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "attendance")
public class Attendance extends Audit implements Serializable {

    @ManyToOne
    @JoinColumn(name = "actor")
    private Actor actor;

    @ManyToOne
    @JoinColumn(name = "training")
    private Training training;

    @Column(name = "day")
    private LocalDate day;

    @Column(name = "session")
    private Integer session;

    public Actor getActor() {
        return actor;
    }

    public void setActor(Actor actor) {
        this.actor = actor;
    }

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }

    public LocalDate getDay() {
        return day;
    }

    public void setDay(LocalDate day) {
        this.day = day;
    }

    public Integer getSession() {
        return session;
    }

    public void setSession(Integer session) {
        this.session = session;
    }
}
