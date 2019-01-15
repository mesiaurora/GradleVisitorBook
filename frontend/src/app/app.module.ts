import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from './visitor/visitor.component';
import { VisitorBookComponent } from './visitor-book/visitor-book.component';
import { EntryComponent } from './entry/entry.component';
import { SongComponent } from './song/song.component';
import { EntryFormComponent } from './entry-form/entry-form.component';


@NgModule({
  declarations: [
    AppComponent,
    VisitorComponent,
    VisitorBookComponent,
    EntryComponent,
    SongComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
