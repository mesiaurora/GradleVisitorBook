import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Imports from own packages
import { EntryFormService } from './entry-form.service'
import { Entry } from '../entry/entry.model';
import { EntryService } from '../entry/entry.service';
import { EntryComponent } from '../entry/entry.component'

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})

export class EntryFormComponent {

  constructor() { }
}
