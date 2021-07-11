import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningCoursesForStudentsComponent } from './running-courses-for-students.component';

describe('RunningCoursesForStudentsComponent', () => {
  let component: RunningCoursesForStudentsComponent;
  let fixture: ComponentFixture<RunningCoursesForStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningCoursesForStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningCoursesForStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
