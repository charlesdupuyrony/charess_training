package org.charess.training.repository.training;

import org.charess.training.domain.training.Participant;
import org.charess.training.domain.training.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TrainingRepository extends JpaRepository<Training, Integer> {

    @Query("select t " +
            " from Training t " +
       "inner join t.partners p " +
            "where p.id = ?1 " +
            "order by t.created desc ")
    List<Training> findPartnerTrainings(Integer partner);


    @Query("select t " +
            " from Training t " +
            "order by t.id desc ")
    List<Training> all();

}
