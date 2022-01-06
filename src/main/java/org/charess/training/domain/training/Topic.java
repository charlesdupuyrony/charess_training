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
    @JoinColumn(name = "theme")
    private Topic theme;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Topic getTheme() {
        return theme;
    }

    public void setTheme(Topic theme) {
        this.theme = theme;
    }
}
