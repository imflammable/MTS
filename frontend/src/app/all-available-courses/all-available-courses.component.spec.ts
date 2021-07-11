import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAvailableCoursesComponent } from './all-available-courses.component';

describe('AllAvailableCoursesComponent', () => {
  let component: AllAvailableCoursesComponent;
  let fixture: ComponentFixture<AllAvailableCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAvailableCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAvailableCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
