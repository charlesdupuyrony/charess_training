package org.charess.training.domain.training;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Category;

import org.charess.training.domain.security.Place;
import org.charess.training.domain.security.Status;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "training",
        uniqueConstraints = @UniqueConstraint(columnNames = {"start_date", "end_date", "topic"}))
public class Training extends Audit implements Serializable {

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "request_start_date")
    private LocalDate requestStartDate;

    @Column(name = "request_end_date")
    private LocalDate requestEndDate;

    @Column(name = "length", length = 4) //en terme de nombre d'heures de crédit
    private Integer length;

    @ManyToOne
    @JoinColumn(name = "topic", nullable = false)
    private Topic topic;

    @ManyToOne
    @JoinColumn(name = "place") //where the training will be hold
    private Place place;

    @Column(name = "number_of_attendees", length = 4) //nombre éventuel de participant
    private Integer numberOfAttendees;

    @Column(name = "perdiem_allowed", length = 1)
    private String perdiemAllowed = "n";

    @ManyToOne
    @JoinColumn(name = "requester")
    private Place requester;

    @ManyToOne
    @JoinColumn(name = "attendee_category")
    private Category attendeeCategory;

    @Column(name = "requested")
    private LocalDate requested;

    @ManyToOne
    @JoinColumn(name = "sponsor")
    private Place sponsor;

    @ManyToOne
    @JoinColumn(name = "facilitator")
    private Place facilitator;

    @Column(name = "status", length = 30, nullable = false)
    private String status = Status.TRAINING_VALIDATED.toString();

    @Column(name = "status_date")
    private LocalDate status_date;

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

    public Integer getNumberOfAttendees() {
        return numberOfAttendees;
    }

    public void setNumberOfAttendees(Integer numberOfAttendees) {
        this.numberOfAttendees = numberOfAttendees;
    }

    public LocalDate getRequested() {
        return requested;
    }

    public void setRequested(LocalDate requested) {
        this.requested = requested;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Category getAttendeeCategory() {
        return attendeeCategory;
    }

    public void setAttendeeCategory(Category attendeeCategory) {
        this.attendeeCategory = attendeeCategory;
    }

    public LocalDate getStatus_date() {
        return status_date;
    }

    public void setStatus_date(LocalDate status_date) {
        this.status_date = status_date;
    }

    public LocalDate getRequestStartDate() {
        return requestStartDate;
    }

    public void setRequestStartDate(LocalDate requestStartDate) {
        this.requestStartDate = requestStartDate;
    }

    public LocalDate getRequestEndDate() {
        return requestEndDate;
    }

    public void setRequestEndDate(LocalDate requestEndDate) {
        this.requestEndDate = requestEndDate;
    }
}
