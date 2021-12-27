package org.charess.training.domain.training;

import org.charess.training.domain.security.Audit;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "test")
public class Test extends Audit implements Serializable {

    @ManyToOne
    @JoinColumn(name = "training")
    private Training training;

    @ManyToOne
    @JoinColumn(name = "attendee")
    private Actor attendee;

    @Column(name = "test_date")
    private LocalDate testDate;

    @Column(name = "result", length=4)
    private Double result;

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }

    public Actor getAttendee() {
        return attendee;
    }

    public void setAttendee(Actor attendee) {
        this.attendee = attendee;
    }

    public LocalDate getTestDate() {
        return testDate;
    }

    public void setTestDate(LocalDate testDate) {
        this.testDate = testDate;
    }

    public Double getResult() {
        return result;
    }

    public void setResult(Double result) {
        this.result = result;
    }
}
