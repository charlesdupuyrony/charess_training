package org.charess.training.domain.training;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Person;
import org.charess.training.domain.security.Place;
import org.charess.training.domain.security.Status;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "participant", uniqueConstraints = @UniqueConstraint(columnNames = {"person", "training", "partner"}))
public class Participant extends Audit {

    @ManyToOne
    @JoinColumn(name = "person", nullable = false)
    private Person person;

    @ManyToOne
    @JoinColumn(name = "partner", nullable = false)
    private Place partner;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "training", nullable = false)
    private Training training;

    @Column(name = "status", length = 20, nullable = false) //declared, confirmed, participated, failed, succeed, abandoned
    private String status = Status.PARTICPANT_DECLARED.toString();

    @Column(name = "logistic", length = 15) //hotel,
    private String logistic;

    public Participant() {
    }

    public Participant(Person person, Training training, Place partner, Audit audit){
        super(audit);
        this.person = person;
        this.training = training;
        this.partner = partner;
        this.status = Status.PARTICPANT_DECLARED.toString();
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Place getPartner() {
        return partner;
    }

    public void setPartner(Place partner) {
        this.partner = partner;
    }

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getLogistic() {
        return logistic;
    }

    public void setLogistic(String logistic) {
        this.logistic = logistic;
    }
}
