package org.charess.training.domain.security;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "place")
public class Place extends Name implements Serializable {

    @ManyToOne
    @JoinColumn(name = "location_address")
    private Location locationAddress;

    @ManyToOne
    @JoinColumn(name = "manager")
    private Person manager;

    @Column(name = "text_address", length = 200)
    private String textAddress;

    @ManyToOne
    @JoinColumn(name = "parent")
    private Place parent;

    public Location getLocationAddress() {
        return locationAddress;
    }

    public void setLocationAddress(Location locationAddress) {
        this.locationAddress = locationAddress;
    }

    public Person getManager() {
        return manager;
    }

    public void setManager(Person manager) {
        this.manager = manager;
    }

    public String getTextAddress() {
        return textAddress;
    }

    public void setTextAddress(String textAddress) {
        this.textAddress = textAddress;
    }

    public Place getParent() {
        return parent;
    }

    public void setParent(Place parent) {
        this.parent = parent;
    }
}
