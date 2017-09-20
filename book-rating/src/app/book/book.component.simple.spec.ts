import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  let comp: BookComponent;

  beforeEach(() => {
    comp = new BookComponent();
  });

  it('rateUp() should forward to book.rateUp()', () => {
    const book = { rateUp: () => { } } as Book;
    comp.book = book;
    spyOn(book, 'rateUp');

    comp.rateUp();
    expect(book.rateUp).toHaveBeenCalled();
  });

  it('rateDown() should forward to book.rateDown()', () => {
    const book = { rateDown: () => { } } as Book;
    comp.book = book;
    spyOn(book, 'rateDown');

    comp.rateDown();
    expect(book.rateDown).toHaveBeenCalled();
  });

  it('rating a book up should emit event', (done) => {
    comp.book = new Book('', '', '');

    comp.rated.subscribe((b) => {
      expect(b).toBe(comp.book);
      done();
    });

    comp.rateUp();
  });
});
