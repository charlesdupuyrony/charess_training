package org.charess.training.repository.training;

import org.charess.training.domain.training.TrainingLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrainingLogRepository extends JpaRepository<TrainingLog, Integer> {

    List<TrainingLog> findByTrainingId(Integer trainingId);
}
