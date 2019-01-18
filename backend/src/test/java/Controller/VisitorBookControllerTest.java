package Controller;

import Repositories.VisitorBookRepository;
import Repositories.VisitorEntryRepository;
import Repositories.VisitorRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@WebMvcTest(value = VisitorBookController.class)
public class VisitorBookControllerTest {

    @MockBean
    private VisitorBookController controller;

    @Autowired
    private WebApplicationContext webAppContext;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private VisitorRepository visitorRepo;

    @MockBean
    private VisitorEntryRepository entryRepo;

    @MockBean
    private VisitorBookRepository bookRepo;
    
    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webAppContext).build();
    }

    @After
    public void tearDown() {

    }



    @Test
    public void getVisitorBooks() {
    }

    @Test
    public void getVisitors() {
    }

    @Test
    public void addEntry() {
    }

    @Test
    public void getEntryById() {
    }

    @Test
    public void getEntries() {
    }
}