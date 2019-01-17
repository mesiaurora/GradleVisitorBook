import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarNavigationComponent } from './side-bar-navigation.component';

describe('SideBarNavigationComponent', () => {
  let component: SideBarNavigationComponent;
  let fixture: ComponentFixture<SideBarNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
