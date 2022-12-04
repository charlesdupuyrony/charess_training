package org.charess.training.domain.security;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "place")
public class Place extends Name implements Serializable {

    @ManyToOne
    @JoinColumn(name = "location_address")
    private Location locationAddress;

    @ManyToMany(cascade={CascadeType.MERGE})
    @JoinTable(name="place_person", joinColumns={@JoinColumn(name="place")}, inverseJoinColumns={@JoinColumn(name="person")})
    private List<Person> managers;

    @Column(name = "text_address", length = 200)
    private String textAddress;

    @Column(name = "accronym", length = 20)
    private String accronym;

    @ManyToOne
    @JoinColumn(name = "parent")
    private Place parent;

    @Transient
    private String address;

    @Transient
    private String fullname;

    public String getAddress() {
        String str = "";
        if(textAddress != null)
            str += textAddress;
        if(locationAddress != null){
            str += str.length()>0?", ":"";
            str += locationAddress.getFullname();

        }
        return str;
    }

    public String getFullname(){
        return String.format("%s %s", this.getName(), this.accronym!=null?String.format("(%s)", this.accronym):"");
    }

    public Location getLocationAddress() {
        return locationAddress;
    }

    public void setLocationAddress(Location locationAddress) {
        this.locationAddress = locationAddress;
    }

    public List<Person> getManagers() {
        return managers;
    }

    public void setManagers(List<Person> managers) {
        this.managers = managers;
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

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAccronym() {
        return accronym;
    }

    public void setAccronym(String accronym) {
        this.accronym = accronym.toUpperCase();
    }
}
