package Model;

import javax.persistence.*;
import java.util.List;
import java.util.Map;

@Entity
@Table(name="VisitorBooks")
public class VisitorBook {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="book_id")
    private int id;

    @Column(name="party__book_name")
    private String partyBookName;

    @Column(name="visitor_count")
    private int visitorCount;

    @Column(name="entries")
    @OneToMany(mappedBy = "VisitorEntry")
    private List<VisitorEntry> entries;

    // Default constructor
    private VisitorBook() {

    }

    // Constructor
    public VisitorBook(String name) {
        partyBookName = name;

    }

    /**
     * Getters and setters
     */
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPartyBookName() {
        return partyBookName;
    }

    public void setPartyBookName(String partyBookName) {
        this.partyBookName = partyBookName;
    }

    public int getVisitorCount() {
        return visitorCount;
    }

    public void setVisitorCount(int visitorCount) {
        this.visitorCount = visitorCount;
    }

    public List<VisitorEntry> getEntries() {
        return entries;
    }

    public void setEntries(List<VisitorEntry> entries) {
        this.entries = entries;
    }
}

