package org.charess.training.domain.training;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Person;
import org.charess.training.domain.security.Place;
import org.charess.training.domain.security.Status;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "participant", uniqueConstraints = @UniqueConstraint(columnNames = {"training", "partner", "person"}))
public class Participant extends Audit {

    @ManyToOne
    @JoinColumn(name = "training", nullable = false)
    private Training training;

    @ManyToOne
    @JoinColumn(name = "partner", nullable = false)
    private Place partner;

    @ManyToOne
    @JoinColumn(name = "person", nullable = false)
    private Person person;

    @Column(name = "status", length = 20, nullable = false) //declared, confirmed, participated, failed, succeed, abandoned
    private String status = Status.PARTICPANT_DECLARED.toString();

    @Column(name = "logistic", length = 15) //hotel,
    private String logistic;

    public Participant() {
    }

    public Participant(Training training, Place partner, Person person, Audit audit){
        super(audit);
        this.training = training;
        this.partner = partner;
        this.person = person;
        this.status = Status.PARTICPANT_DECLARED.toString();
    }

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }

    public Place getPartner() {
        return partner;
    }

    public void setPartner(Place partner) {
        this.partner = partner;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
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
