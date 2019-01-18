package Controller;

import Model.Visitor;
import Model.VisitorBook;
import Model.VisitorEntry;
import Repositories.VisitorBookRepository;
import Repositories.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author keamesi
 */
@RestController
@RequestMapping("/visitorBook")
public class VisitorBookController {

    @Autowired
    VisitorRepository visitorRepository;

    @Autowired
    VisitorBookRepository visitorBookRepository;

    public VisitorBookController() {

    }

    @GetMapping("/getVisitorBooks")
    public List<VisitorBook> getVisitorBooks() {
        return visitorBookRepository.findAllBook();
    }

    @GetMapping("/getVisitors")
    public List<Visitor> getVisitors() {
        return visitorRepository.findAllVisitors();
    }

    @PutMapping("/addEntry")
    public String addEntry() {

        return "Successfully added an entry";
    }

    @RequestMapping("/getEntryById")
    public VisitorEntry getEntryById(@RequestParam("name") String name, @RequestParam("relationship") Optional<String> relationship) {
        // Todo: get entry from database
        Visitor visitor = new Visitor(name, relationship.get());
        // TODO: figure out default book
        return new VisitorEntry(visitor.getId(), 1);
    }

    @GetMapping("/getEntries")
    public List<VisitorEntry> getEntries() {

        // todo: get all entries
        List<VisitorEntry> allEntries = new ArrayList<>();

        visitorRepository.findAll();


        return allEntries;
    }


}
