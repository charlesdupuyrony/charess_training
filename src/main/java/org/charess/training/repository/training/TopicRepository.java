package org.charess.training.repository.training;

import org.charess.training.domain.training.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicRepository extends JpaRepository<Topic, Integer> {
}


