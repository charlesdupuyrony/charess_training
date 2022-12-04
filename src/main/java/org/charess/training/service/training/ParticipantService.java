package org.charess.training.service.training;

import org.charess.training.domain.training.Participant;
import org.charess.training.domain.training.PartnerTrainingParticipants;

import java.util.List;

public interface ParticipantService {

    String declare(PartnerTrainingParticipants partnerTrainingParticipants);
}
