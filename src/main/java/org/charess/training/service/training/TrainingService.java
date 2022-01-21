package org.charess.training.service.training;

import org.charess.training.domain.training.Training;

import java.util.List;

public interface TrainingService {

    List<Training> all();
    Training save(Training topic);
    List<Training> search(String criteria);
}
