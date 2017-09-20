import { Book } from '../shared/book';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  @Output() bookCreated = new EventEmitter<Book>();

  ngOnInit() {
  }

  add(isbn: HTMLInputElement, title: HTMLInputElement, description: HTMLInputElement) {
    const book = new Book(
      isbn.value,
      title.value,
      description.value
    );

    this.bookCreated.emit(book);
    this.clearFields(isbn, title, description);
  }

  private clearFields(...fields: HTMLInputElement[]) {
    fields.forEach(f => f.value = '');
  }

}
