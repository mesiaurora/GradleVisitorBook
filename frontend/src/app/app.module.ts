import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule} from '@angular/material';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { DemoMaterialModule} from '../material.module';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from './visitor/visitor.component';
import { VisitorBookComponent } from './visitor-book/visitor-book.component';
import { EntryComponent } from './entry/entry.component';
import { SongComponent } from './song/song.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { AppComponent } from './app.component';
import { SideBarNavigationComponent } from './side-bar-navigation/side-bar-navigation.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarNavigationComponent,
    HeaderBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
