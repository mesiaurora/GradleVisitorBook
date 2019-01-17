import { Injectable } from '@angular/core';
import { EntryComponent } from '../entry/entry.component'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, RequestOptions, Headers  } from '@angular/http';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';

// Imports from own packages
import { Visitor } from './visitor.model'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: Http) {
  }

  getVisitor(): Observable<Visitor[]> {
    return this.http.get('/visitorBook//getVisitors')
        .map(res => res.json())
        .catch(this.handleError);
  }

  handleError(error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
   }
}
