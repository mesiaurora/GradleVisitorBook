package Repositories;

import Model.Visitor;
import Model.VisitorEntry;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

/**
 * @author keamesi
 */
public interface VisitorEntryRepository extends CrudRepository<VisitorEntry, Integer> {


    @Query(value = "SELECT * FROM entries WHERE visitor_id = (:visitorId)", nativeQuery = true)
    public List<VisitorEntry> findEntriesForUser(@Param("visitorId") int id);

    @Query(value = "SELECT * FROM entries WHERE date = (:date)", nativeQuery = true)
    public List<VisitorEntry> findEntriesSubmittedBeforeDate(@Param("date")Date date);

    // TODO: all entries
    // TODO: entry per book
    // TODO:
}
