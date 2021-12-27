package org.charess.training.domain.training;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Category;
import org.charess.training.domain.security.Person;
import org.charess.training.domain.security.Place;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "actor")
public class Actor extends Audit implements Serializable {

    @ManyToOne
    @JoinColumn(name = "person")
    private Person person;

    @ManyToOne
    @JoinColumn(name = "training")
    private Training training;

    @ManyToOne
    @JoinColumn(name = "category")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "work_place")
    private Place workPlace;

    @Column(name = "type", nullable = false, length = 60)
    private String type = Type.ATTENDEE.toString();

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Place getWorkPlace() {
        return workPlace;
    }

    public void setWorkPlace(Place workPlace) {
        this.workPlace = workPlace;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
