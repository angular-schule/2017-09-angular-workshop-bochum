import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from './../shared/book';
import { BookStoreService } from './../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book: Book = Book.empty();

  constructor(
    private route: ActivatedRoute,
    private store: BookStoreService) { }

  ngOnInit() {
    this.isbn = this.route.snapshot.params.isbn;
    this.store.getSingle(this.isbn)
      .subscribe(b => this.book = b);
  }

}
