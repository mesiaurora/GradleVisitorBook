import { Injectable } from '@angular/core';
import { EntryComponent } from '../entry/entry.component'
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

  sendEntry(entry: EntryComponent) {
    return this.http.post<EntryComponent>('/visitorBook/createEntry', entry, httpOptions).pipe(
      tap(entries => console.log(entry)),
      catchError(this.handleError([]))
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
