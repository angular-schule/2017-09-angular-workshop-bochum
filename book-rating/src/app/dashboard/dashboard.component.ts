import { AnimationKeyframe, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[];
  d = new Date();

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken...', 5),
      new Book('111', 'AngularJS', 'Eine praktische Einführung...', 4),
      new Book('111', 'Testbuch', 'Eine praktische Einführung...', 5)
    ];

    this.reorderBooks();
  }

  add(isbn: HTMLInputElement, title: HTMLInputElement, description: HTMLInputElement) {
    const book = new Book(
      isbn.value,
      title.value,
      description.value
    );

    this.books.push(book);
    this.reorderBooks();

    // isbn.value = '';
    // title.value = '';
    // description.value = '';

    this.clearFields(isbn, title, description);

  }

  private clearFields(...fields: HTMLInputElement[]) {
    fields.forEach(f => f.value = '');
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
