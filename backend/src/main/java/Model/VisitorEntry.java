package Model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * @author keamesi
 */
@Entity
@Table(name="Entries")
public class VisitorEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="entry_id")
    private int id;

    @Column(name="visitorId")
    @OneToMany(mappedBy = "Visitors")
    private int visitorId;

    @Column(name="book_id")
    @OneToMany(mappedBy = "VisitorBooks")
    private int bookId;

    @Column(name="title")
    private String title;

    @Column(name="memory")
    private String memory;

    @Column(name="greeting")
    private String greeting;

    @Column(name="message")
    private String message;

    @Column(name="date")
    @Temporal(TemporalType.DATE)
    private Date date;


    List<Song> recommendedSongs;


    private VisitorEntry() {
        // Default constructor
    }

    // Constructor
    public VisitorEntry(int visitorId, int bookId) {
        this.visitorId = visitorId;
        this.bookId = bookId;
    }


    /**
     * Getters and setters
     */
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getVisitorId() {
        return visitorId;
    }

    public void setVisitorId(int visitorId) {
        this.visitorId = visitorId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMemory() {
        return memory;
    }

    public void setMemory(String memory) {
        this.memory = memory;
    }

    public String getGreeting() {
        return greeting;
    }

    public void setGreeting(String greeting) {
        this.greeting = greeting;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<Song> getRecommendedSongs() {
        return recommendedSongs;
    }

    public void setRecommendedSongs(List<Song> recommendedSongs) {
        this.recommendedSongs = recommendedSongs;
    }

    public void addSong(Song song) {
        recommendedSongs.add(song);
    }
}
