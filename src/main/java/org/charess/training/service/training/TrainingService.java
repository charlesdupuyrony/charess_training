package org.charess.training.service.training;

import org.charess.training.domain.training.*;

import java.util.List;

public interface TrainingService {

    Training broadcast(Training training);
    void changeStatus(Integer trainingId, String status);
    List<Training> all();
    List<TrainingPartner> getPartnerTrainings(Integer partnerId);
    Training updateParticipants(Training training);
}
