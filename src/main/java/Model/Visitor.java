package Model;

import javax.persistence.*;

@Entity
@Table(name="Visitors")
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="visitor_id")
    private Integer id;

    @Column(name="name")
    private String name;

    @Column(name="relationship")
    private String relationship;

    // Default constructor
    private Visitor() {

    }

    // Create visitor
    public Visitor(String name, String relationship) {
        this.name = name;
        this.relationship = relationship;
    }

    /**
     * Getters and setters
     */

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }
}
