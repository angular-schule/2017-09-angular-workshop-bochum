import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/switchMap';

import { Book } from './../shared/book';
import { BookStoreService } from './../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private store: BookStoreService) { }

  ngOnInit() {
    // let isbn = this.route.snapshot.params.isbn;

    // this.route.params
    //   // .map(params => params.isbn)
    //   .pluck('isbn')
    //   .subscribe((isbn: string) => this.book$ = this.store.getSingle(isbn));

    this.book$ = this.route.params
      .pluck('isbn')
      .switchMap((isbn: string) => this.store.getSingle(isbn));



  }

}
