package org.charess.training.service.training;

import org.charess.training.domain.security.Audit;
import org.charess.training.domain.training.Topic;
import org.charess.training.repository.training.TopicRepository;
import org.charess.training.service.security.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service("topicService")
public class TopicServiceImpl implements TopicService {

    private TopicRepository topicRepository;
    private UserService userService;
    private final Logger log = LoggerFactory.getLogger(TopicServiceImpl.class);

    @Autowired
    public TopicServiceImpl(TopicRepository topicRepository, UserService userService) {
        this.topicRepository = topicRepository;
        this.userService = userService;
    }

    public List<Topic> all(){
        return topicRepository.findAll();
    }

    public void delete(Integer id){
        topicRepository.deleteById(id);
    }

    public Topic save(Topic topic){
        Audit audit = topic;
        if(topic.getId() != null && topic.getTheme() != null && topic.getId().equals(topic.getTheme().getId())){
            return null;
        }
        userService.inject(audit);
        return topic==null?null:topicRepository.save(topic);
    }

    public List<Topic> search(String criteria){
        List<Topic> topics;
        if(criteria==null || criteria.length()<1)
            topics = topicRepository.findAll();
        else
            topics = topicRepository.search(criteria);
        return topics;
    }

}
