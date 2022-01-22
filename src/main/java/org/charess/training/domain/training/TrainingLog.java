package org.charess.training.domain.training;

import org.charess.training.domain.security.Audit;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "training_log")
public class TrainingLog extends Audit implements Serializable {

    @ManyToOne
    @JoinColumn(name = "training")
    private Training training;

    @Column(name = "status", length = 30, nullable = false)
    private String status;

    @Column(name = "status_date")
    private LocalDate status_date;

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

    public LocalDate getStatus_date() {
        return status_date;
    }

    public void setStatus_date(LocalDate status_date) {
        this.status_date = status_date;
    }
}
