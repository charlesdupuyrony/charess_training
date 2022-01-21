package org.charess.training.repository.training;

import org.charess.training.domain.training.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TopicRepository extends JpaRepository<Topic, Integer> {

    @Query("select t " +
            " from Topic t " +
            "where (lower(t.title) like Concat('%', Concat(?1,'%')))")
    List<Topic> search(String criteria);
}


