package Repositories;

import Model.Visitor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VisitorRepository extends CrudRepository<Visitor, Integer> {


    @Query(value = "SELECT * FROM visitors WHERE first_name = (:firstName)", nativeQuery = true)
    public Visitor findByName(@Param("name") String name);

    @Query(value = "SELECT * FROM visitors", nativeQuery = true)
    public List<Visitor> findAllVisitors();


}
