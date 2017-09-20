import {Book} from './book';

describe('Book', () => {
  let book: Book;

  beforeEach(() => {
    book = new Book('', '', '');
  });

  it('should create an instance', () => {
    expect(new Book('', '', '')).toBeTruthy();
  });

  it('should be possible to rate a book up', () => {
    book.rating = 1;
    book.rateUp();
    expect(book.rating).toBe(2);
  });

  it('should be possible to rate a book down', () => {
    book.rating = 1;
    book.rateDown();
    expect(book.rating).toBe(0);
  });

  it('rating should not be greater than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toBe(5);
  });

  it('rating should not be less than 0', () => {
    book.rating = 0;
    book.rateDown();
    expect(book.rating).toBe(0);
  });
});
