import { Injectable } from '@angular/core';
import { EntryComponent } from '../entry/entry.component';
import { Entry } from '../entry/entry.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
      tap(entries => console.log(entry)),
      catchError(this.handleError([]))
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
