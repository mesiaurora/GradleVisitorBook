import { Injectable } from '@angular/core';import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, RequestOptions, Headers  } from '@angular/http';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';

// Imports from own packages
import { Entry } from './entry.model'
import { EntryComponent } from './entry/entry.component'


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http: Http) {
  }

  // Get a list of entries from API
  getEntries(): Observable<Entry[]> {
    return this.http.get('/visitorBook/getEntries')
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
