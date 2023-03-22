package org.charess.training.domain.training;

import java.util.List;

public class TrainingParticipants {

    private Training training;
    private List<Participant> participants;

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }

    public List<Participant> getParticipants() {
        return participants;
    }

    public void setParticipants(List<Participant> participants) {
        this.participants = participants;
    }
}
