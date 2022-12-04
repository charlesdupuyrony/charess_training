package org.charess.training.domain.training;

import org.charess.training.domain.security.Person;
import org.charess.training.domain.security.Place;

import java.util.List;

public class PartnerTrainingParticipants {

    private Training training;
    private Place partner;
    private List<Person> participants;

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

    public List<Person> getParticipants() {
        return participants;
    }

    public void setParticipants(List<Person> participants) {
        this.participants = participants;
    }
}
