import { LOCALE_ID, NO_ERRORS_SCHEMA } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: LOCALE_ID, useValue: 'de' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show the date', () => {
    const dateBox = fixture.debugElement.query(By.css('.date-box')).nativeElement;


    expect(dateBox.textContent)
      .toContain(new DatePipe('de').transform(component.d, 'longDate'));

    component.d = new Date('2017-07-15 00:00:00');
    fixture.detectChanges();
    expect(dateBox.textContent).toContain('15. Juli 2017');
  });
});
