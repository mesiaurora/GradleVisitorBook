import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-visitor-book',
  templateUrl: './visitor-book.component.html',
  styleUrls: ['./visitor-book.component.css']
})

export class VisitorBookComponent implements OnInit {

  public id: number;
  public bookName: string;

  constructor(id: number, bookName: string) { }

  ngOnInit() {

  }

  getEntries() {

  }

}
