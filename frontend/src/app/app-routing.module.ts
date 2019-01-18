import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports from own packages
import { AppComponent } from './app.component';
import { VisitorComponent } from './visitor/visitor.component';
import { VisitorBookComponent } from './visitor-book/visitor-book.component';
import { EntryComponent } from './entry/entry.component';
import { SongComponent } from './song/song.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { SideBarNavigationComponent } from './side-bar-navigation/side-bar-navigation.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';

// TODO: reconsider these
const routes: Routes = [
  {
    path: 'visitor',
    component: VisitorComponent
  },
  {
    path: 'visitorbook',
    component: VisitorBookComponent
  },
  {
    path: 'song',
    component : SongComponent
  },
  {
    path: 'entry',
    component : EntryComponent
  },
  {
    path: 'entry-form',
    component : EntryFormComponent
  },
  {
    path: 'side-bar',
    component : SideBarNavigationComponent
  },
    {
      path: 'header',
      component : HeaderBarComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
