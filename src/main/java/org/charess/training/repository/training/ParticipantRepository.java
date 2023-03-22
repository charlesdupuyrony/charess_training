package org.charess.training.repository.training;

import org.charess.training.domain.security.Person;
import org.charess.training.domain.security.Place;
import org.charess.training.domain.training.Participant;
import org.charess.training.domain.training.Training;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParticipantRepository extends JpaRepository<Participant, Integer> {

    List<Participant> findByTrainingIdAndPartnerId(Integer trainingId, Integer partnerId);
    List<Participant> findByTrainingAndPartner(Training training, Place partner);
    Participant findByTrainingAndPartnerAndPerson(Training training, Place partner, Person person);
    void deleteAllByTraining(Training training);
}
