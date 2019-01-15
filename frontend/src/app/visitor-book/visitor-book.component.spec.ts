import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorBookComponent } from './visitor-book.component';

describe('VisitorBookComponent', () => {
  let component: VisitorBookComponent;
  let fixture: ComponentFixture<VisitorBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
