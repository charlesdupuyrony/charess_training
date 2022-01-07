package org.charess.training.service.training;

import org.charess.training.domain.training.Topic;

import java.util.List;

public interface TopicService {

    List<Topic> all();
    void delete(Integer id);
    Topic save(Topic topic);
    List<Topic> search(String criteria);
}
