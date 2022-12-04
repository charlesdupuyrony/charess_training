package org.charess.training.domain.training;

import org.charess.training.domain.security.Person;
import org.charess.training.domain.security.Place;
import org.charess.training.domain.security.Status;

import java.util.List;

public class TrainingPartner {

    private Training training;
    private Place partner;
    private String status = "new"; //new - red, pending - orange, ongoing - yellow, completed: green, deprecated - purple
    private Integer participantsQuantity = 0;
    private List<Person> participants;

    public TrainingPartner() {
    }

    public TrainingPartner(Training training, Place partner, List<Person> participants) {
        this.training = training;
        this.partner = partner;
        this.participants = participants.isEmpty()?null:participants;
        this.participantsQuantity = participants.size();
        setStatus();
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getParticipantsQuantity() {
        return participantsQuantity;
    }

    public void setParticipantsQuantity(Integer participantsQuantity) {
        this.participantsQuantity = participantsQuantity;
    }

    public List<Person> getParticipants() {
        return participants;
    }

    public void setParticipants(List<Person> participants) {
        this.participants = participants;
        this.participantsQuantity = this.participants.size();
    }

    private void setStatus(){
        if(Status.TRAINING_COMPLETED.toString().equals(this.training.getStatus()))
            this.status = "completed";
        if(Status.TRAINING_REJECTED.toString().equals(this.training.getStatus()) || Status.TRAINING_UNCOMPLETED.toString().equals(this.training.getStatus()))
            this.status = "deprecated";
        if(Status.TRAINING_PENDING.toString().equals(this.training.getStatus()) || Status.TRAINING_VALIDATED.toString().equals(this.training.getStatus()))
            this.status = "ongoing";
        if(Status.TRAINING_BROADCAST.toString().equals(this.training.getStatus())){
            if(participantsQuantity > 0 && participantsQuantity < this.training.getCapacity())
                this.status = "pending";
            if(participantsQuantity == this.training.getCapacity())
                this.status = "set";
        }
    }
}
