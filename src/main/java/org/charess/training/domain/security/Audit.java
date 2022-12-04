package org.charess.training.domain.security;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.time.LocalDateTime;

@MappedSuperclass
public class Audit extends ID implements Serializable {

    @Column(name = "created")
    private LocalDateTime created;

    @Column(name = "creator")
    private Integer creator;

    @Column(name = "edited")
    private LocalDateTime edited;

    @Column(name = "editor")
    private Integer editor;

    public Audit() {
    }

    public Audit(Audit audit) {
        this.created = audit.created;
        this.creator = audit.creator;
        this.edited = audit.edited;
        this.editor = audit.editor;
    }

    public Audit(LocalDateTime created, Integer creator, LocalDateTime edited, Integer editor) {
        this.created = created;
        this.creator = creator;
        this.edited = edited;
        this.editor = editor;
    }

    public Audit(LocalDateTime created, Integer creator) {
        this.created = created;
        this.creator = creator;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public Integer getCreator() {
        return creator;
    }

    public void setCreator(Integer creator) {
        this.creator = creator;
    }

    public LocalDateTime getEdited() {
        return edited;
    }

    public void setEdited(LocalDateTime edited) {
        this.edited = edited;
    }

    public Integer getEditor() {
        return editor;
    }

    public void setEditor(Integer editor) {
        this.editor = editor;
    }
}
