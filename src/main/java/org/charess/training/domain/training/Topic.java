package org.charess.training.domain.training;

import org.charess.training.domain.security.Audit;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "topic")
public class Topic extends Audit implements Serializable {

    @Column(name = "title", nullable = false, length = 200)
    private String title;

    @ManyToOne
    @JoinColumn(name = "parent")
    private Topic parent;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Topic getParent() {
        return parent;
    }

    public void setParent(Topic parent) {
        this.parent = parent;
    }
}
