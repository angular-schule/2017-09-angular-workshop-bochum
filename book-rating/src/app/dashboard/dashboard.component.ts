import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken...', 5),
      new Book('111', 'AngularJS', 'Eine praktische Einführung...', 4),
      new Book('111', 'Testbuch', 'Eine praktische Einführung...', 5)
    ];

    this.reorderBooks();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
