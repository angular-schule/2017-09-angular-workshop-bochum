import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retry';

import { Book } from './book';
import { BookResponse } from './book-response';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient,
    @Inject('BACKEND_URL') private backendUrl: string) { }

  getAll(): Observable<Book[]> {
    return this.http.get<BookResponse[]>(`${ this.backendUrl }/books`)
      .map(rawBooks => rawBooks.map(
          rawBook => new Book(
            rawBook.isbn,
            rawBook.title,
            rawBook.description,
            rawBook.rating)
        )
      );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookResponse>(`${this.backendUrl}/book/${isbn}`)
    .retry(3)
    .map(rawBook => new Book(
        rawBook.isbn,
        rawBook.title,
        rawBook.description,
        rawBook.rating)
      ).delay(2000);
  }

  delete(isbn: string): Observable<any> {
    return this.http.
      delete(`${ this.backendUrl }/book/${ isbn }`,
      {
        responseType: 'text'
      });
  }
}
