import { BookStoreService } from '../shared/book-store.service';
import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];
  d = new Date();

  constructor(private store: BookStoreService) { }

  ngOnInit() {
    this.store.getAll()
      .subscribe(books => {
        this.books = books;
        this.reorderBooks();
      });

  }

  createBook(book: Book) {
    this.books.push(book);
    this.reorderBooks();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  deleteBook(book: Book) {
    this.store.delete(book.isbn).subscribe();
  }
}
