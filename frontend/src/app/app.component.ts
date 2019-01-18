import { Component, Inject, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


// Imports from own packages
import { VisitorBook } from './visitor-book/visitor-book.model';
import { Visitor } from './visitor/visitor.model';
import { VisitorService } from './visitor/visitor.service';
import { Entry } from './entry.model'
import { EntryComponent } from './entry/entry.component'

export interface Testing {
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VisitorService],

})

export class AppComponent implements OnInit {

  public books: VisitorBook[];
  public visitors: Visitor[];
  public entries: Entry[];
  sampleform: FormGroup;
  errorMessage: string;

  // TODO: remove this when fully tested
  testing: Testing[] = [{value: 'Camel'}, {value: 'Horse'}, {value: 'Elephant'}]

  constructor(private visitorService : VisitorService, entryService : EntryService, fb: FormBuilder) {
    this.sampleform = fb.group({
            'visitorId': [null] })
  }

  ngOnInit()
  {
   this.getVisitors();
   this.getEntries();
  }

  // Get list of visitors to fill a dropdown list
  getVisitors() {
    this.visitorService.getVisitor().subscribe(res => this.visitors = res, error => this.errorMessage = <any>error);
  }

  // Get entries for the visitor book
  getEntries() {
    this.entryService.getEntries().subscrive(res => this.entries = res, error => this.errorMessage = <any>error);
  }

}


