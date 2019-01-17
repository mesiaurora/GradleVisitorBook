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
  sampleform: FormGroup;
  errorMessage: string;

  testing: Testing[] = [{value: 'Camel'}, {value: 'Horse'}, {value: 'Elephant'}]

  constructor(private visitorService : VisitorService, fb: FormBuilder) {
    this.sampleform = fb.group({
            'visitorId': [null] })
  }

  ngOnInit()
  {
   this.getVisitors();
  }

  getVisitors() {
    this.visitorService.getVisitor().subscribe(res => this.visitors = res, error => this.errorMessage = <any>error);
  }

}


