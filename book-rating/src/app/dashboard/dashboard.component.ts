import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import 'rxjs/add/operator/map';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];
  d = new Date();

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<any[]>('http://api.angular.schule/books')
      .map(rawBooks => rawBooks.map(
        rawBook => new Book(
          rawBook.isbn,
          rawBook.title,
          rawBook.description,
          rawBook.rating)
        )
      )
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
}
