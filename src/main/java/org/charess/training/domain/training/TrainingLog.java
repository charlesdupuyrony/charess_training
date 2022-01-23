package org.charess.training.domain.training;

import org.charess.training.domain.security.Audit;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "training_log")
public class TrainingLog extends Audit implements Serializable {

    @ManyToOne
    @JoinColumn(name = "training")
    private Training training;

    @Column(name = "status", length = 30, nullable = false)
    private String status;

    @Column(name = "status_date")
    private LocalDateTime statusDate;

    @Column(name = "text", nullable = false, length = 400)
    private String text;

    public TrainingLog() {
    }

    public TrainingLog(Training training, String text) {
        this.training = training;
        this.status = training.getStatus();
        this.statusDate = training.getStatusDate();
        this.text = text;
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

    public LocalDateTime getStatusDate() {
        return statusDate;
    }

    public void setStatusDate(LocalDateTime statusDate) {
        this.statusDate = statusDate;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
