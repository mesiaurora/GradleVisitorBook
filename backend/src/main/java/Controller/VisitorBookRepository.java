package Controller;

import Model.VisitorBook;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VisitorBookRepository extends CrudRepository<VisitorBook, Integer> {

    // TODO: find all entries
    // TODO: find count

    @Query(value = "SELECT * FROM VisitorBooks")
    public List<VisitorBook> findAllBook();


}
