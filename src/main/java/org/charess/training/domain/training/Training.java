package org.charess.training.domain.training;


import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Place;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name="training")
public class Training extends Audit implements Serializable {

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "length") //en terme de nombre d'heures de crédit
    private Integer length;

    @ManyToOne
    @JoinColumn(name = "topic")
    private Topic topic;

    @ManyToOne
    @JoinColumn(name = "place") // where the training will be hold
    private Place place;

    @Column(name = "perdiem_allowed", length = 1, nullable = false)
    private String perdiemAllowed = "n";

    @ManyToOne
    @JoinColumn(name = "requester")
    private Place requester;

    @ManyToOne
    @JoinColumn(name = "sponsor")
    private Place sponsor;

    @ManyToOne
    @JoinColumn(name = "facilitator")
    private Place facilitator;

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Integer getLength() {
        return length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public Place getPlace() {
        return place;
    }

    public void setPlace(Place place) {
        this.place = place;
    }

    public String getPerdiemAllowed() {
        return perdiemAllowed;
    }

    public void setPerdiemAllowed(String perdiemAllowed) {
        this.perdiemAllowed = perdiemAllowed;
    }

    public Place getRequester() {
        return requester;
    }

    public void setRequester(Place requester) {
        this.requester = requester;
    }

    public Place getSponsor() {
        return sponsor;
    }

    public void setSponsor(Place sponsor) {
        this.sponsor = sponsor;
    }

    public Place getFacilitator() {
        return facilitator;
    }

    public void setFacilitator(Place facilitator) {
        this.facilitator = facilitator;
    }
}
