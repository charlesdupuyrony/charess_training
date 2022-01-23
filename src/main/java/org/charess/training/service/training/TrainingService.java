package org.charess.training.service.training;

import org.charess.training.domain.training.Training;
import org.charess.training.domain.training.TrainingLog;

import java.util.List;

public interface TrainingService {

    List<Training> all();
    Training save(Training training, String type);
    List<Training> search(String criteria);
    List<TrainingLog> log(Integer training);
}
