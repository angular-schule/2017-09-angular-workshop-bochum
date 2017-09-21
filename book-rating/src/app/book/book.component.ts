import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() even: boolean;

  @Output() rated = new EventEmitter<Book>();
  @Output() deleted = new EventEmitter<Book>();


  ngOnInit() {
  }

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  delete() {
    this.deleted.emit(this.book);
  }

  get stars() {
    return new Array(this.book.rating);
  }
}
