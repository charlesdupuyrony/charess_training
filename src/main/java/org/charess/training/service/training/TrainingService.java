package org.charess.training.service.training;

import org.charess.training.domain.training.Participant;
import org.charess.training.domain.training.PartnerTrainingParticipants;
import org.charess.training.domain.training.Training;
import org.charess.training.domain.training.TrainingPartner;

import java.util.List;

public interface TrainingService {

    Training broadcast(Training training);
    List<Training> all();
    List<TrainingPartner> getPartnerTrainings(Integer partnerId);
}
