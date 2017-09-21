import { Book } from '../shared/book';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  book = Book.empty();
  @Output() bookCreated = new EventEmitter<Book>();

  // @ViewChild('bookForm') bookForm: NgForm;
  @ViewChild(NgForm) bookForm: NgForm;

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.bookForm.reset(this.book);
  }
}
