package org.charess.training.repository.training;

import org.charess.training.domain.training.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParticipantRepository extends JpaRepository<Participant, Integer> {

    List<Participant> findByTrainingIdAndPartnerId(Integer trainingId, Integer partnerId);
    Participant findByTrainingIdAndPartnerIdAndPersonId(Integer trainingId, Integer partnerId, Integer personId);
}
