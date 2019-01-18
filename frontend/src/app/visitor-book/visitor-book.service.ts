import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Imports from own packages
import { EntryFormComponent } from '../entry-form/entry-form.component'
import { Entry } from '../entry/entry.model';
import { EntryService } from '../entry/entry.service';
import { EntryComponent } from '../entry/entry.component'
import { Visitor } from '../visitor/visitor.model'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VisitorBookService {

  entries: Entry[];

  constructor(private http: HttpClient) {
  }

}
