package org.charess.training.service.training;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.security.Person;
import org.charess.training.domain.security.Place;
import org.charess.training.domain.security.Status;
import org.charess.training.domain.training.Participant;
import org.charess.training.domain.training.PartnerTrainingParticipants;
import org.charess.training.domain.training.Training;
import org.charess.training.repository.security.PersonRepository;
import org.charess.training.repository.training.ParticipantRepository;
import org.charess.training.service.security.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service("participantService")
public class ParticipantServiceImpl implements ParticipantService {

    private ParticipantRepository participantRepository;
    private PersonRepository personRepository;
    private UserService userService;
    private final Logger log = LoggerFactory.getLogger(ParticipantServiceImpl.class);

    @Autowired
    public ParticipantServiceImpl(ParticipantRepository participantRepository, UserService userService, PersonRepository personRepository) {
        this.participantRepository = participantRepository;
        this.userService = userService;
        this.personRepository = personRepository;
    }

    public String declare(PartnerTrainingParticipants partnerTrainingParticipants) {
        Training training = partnerTrainingParticipants.getTraining();
        Place partner = partnerTrainingParticipants.getPartner();
        Audit audit = new Audit(LocalDateTime.now(), userService.getCurrentUser().getId());
        List<Participant> participants = new ArrayList<>();
        List<Person> people = new ArrayList<>();

        if (training == null || partner == null)
            return null;

        Integer usr = userService.getCurrentUser().getId();
        LocalDateTime now = LocalDateTime.now();
        Participant participant = null;

        for(Person person: partnerTrainingParticipants.getParticipants()){
            personRepository.save(person);
            participant = participantRepository.findByTrainingIdAndPartnerIdAndPersonId(training.getId(), partner.getId(), person.getId());
            if(participant == null){
                participants.add(new Participant(training, partner, person, audit));
            }
        }

        participantRepository.saveAll(participants);





//        List<Person> createdPeople = new ArrayList<>();

//
//        List<Participant> participants = participantRepository.findByTrainingIdAndPartnerId(training.getId(), partner.getId());
//        if(!participants.isEmpty())
//            participantRepository.deleteAll(participants);
//
//        List<Person> people = personRepository.saveAll(partnerTrainingParticipants.getParticipants());
//        participants = new ArrayList<>();
//
//        for (Person person : people){
//            participants.add(new Participant(training, partner, person, audit));
//        }
//
//        participantRepository.saveAll(participants);
//
//        for(Person person: partnerTrainingParticipants.getParticipants()) {
//            people.add(person);
//        }
//
//        for(Person person: personRepository.saveAll(people)){
//
//        }

//        participantRepository.saveAll(participants);
        return new String();
    }


//    public List<Participant> declareParticipants(PartnerTrainingParticipants partnerTrainingParticipants) {
//        if (partnerTrainingParticipants == null || partnerTrainingParticipants.getTraining() == null || partnerTrainingParticipants.getPartner() == null ||
//                partnerTrainingParticipants.getParticipants().size() < 1 || !partnerTrainingParticipants.getTraining().getStatus().equals(Status.TRAINING_BROADCAST))
//            return null;
//
//        Training training = partnerTrainingParticipants.getTraining();
//        Place partner = partnerTrainingParticipants.getPartner();
//        List<Participant> participants = participantRepository.findByTrainingIdAndPartnerId(training.getId(), partner.getId());
//        Audit audit = new Audit(LocalDateTime.now(), userService.getCurrentUser().getId());
//
//        if(participants.size() > 1)
//            participantRepository.deleteAll(participants);
//
//        for(Person person: partnerTrainingParticipants.getParticipants())
//            participants.add(new Participant(training, partner, person, audit));
//
//        return participantRepository.saveAll(participants);
//    }



//    public List<Participant> getPartnerTrainingParticipants(Integer partnerId, Integer trainingId){
//        return participantRepository.findByTrainingIdAndPartnerId(trainingId, partnerId);
//    }


}
