import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, RequestOptions, Headers  } from '@angular/http';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';

// Imports from own packages
import { EntryFormComponent } from './entry-form.component'
import { Entry } from '../entry/entry.model';
import { EntryService } from '../entry/entry.service';
import { EntryComponent } from '../entry/entry.component'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EntryFormService {

  constructor(private http: HttpClient) {
  }

  // Post an entry
  sendEntry(entry: Entry) {
    return this.http.post<Entry>('/visitorBook/createEntry', entry, httpOptions).pipe(
      tap(entries => console.log(entry))
    );
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
