import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Book } from '../shared/book';
import { ShortenPipe } from '../shorten.pipe';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent, ShortenPipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = new Book('', 'title', '');
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('clicking "thumbs up" should call rateUp()', () => {
    const rateUpBtn = fixture.debugElement.query(By.css('.rate-up-btn'));

    spyOn(component, 'rateUp');
    rateUpBtn.nativeElement.click();

    expect(component.rateUp).toHaveBeenCalled();

  });

  it('rating a book up should emit event', async(() => {
    component.rated.subscribe((b) => {
      expect(b).toBe(component.book);
    });

    component.rateUp();
  }));

  it('should display the book title', () => {
    const heading = fixture.debugElement.query(By.css('h2'));

    expect(heading.nativeElement.textContent).toContain('title');

    component.book.title = 'New Title';
    fixture.detectChanges();
    expect(heading.nativeElement.textContent).toContain('New Title');

  });
});
