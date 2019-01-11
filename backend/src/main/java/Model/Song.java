package Model;

import javax.persistence.*;
import java.net.URI;
import java.util.Optional;

@Entity
@Table(name="Songs")
public class Song {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @Column(name = "visitor_idr")
    int visitorId;

    @Column(name = "artist")
    String artist;

    @Column(name = "song_name")
    String songName;

    @Column(name = "spotify_link")
    URI spotifyLink;

    private Song() {
        // Default constructor
    }

    public Song(int visitorId, String artist, String songName, Optional<URI> link) {
        this.visitorId = visitorId;
        this.artist = artist;
        this.songName = songName;
        if (link.isPresent()) {
            spotifyLink = link.get();
        }

    }
}
