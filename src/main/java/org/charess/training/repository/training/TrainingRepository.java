package org.charess.training.repository.training;

import org.charess.training.domain.training.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TrainingRepository extends JpaRepository<Training, Integer> {

    @Query("select t " +
            " from Training t " +
            "where (lower(t.topic.title) like Concat('%', Concat(?1,'%')))")
    List<Training> search(String criteria);
}


