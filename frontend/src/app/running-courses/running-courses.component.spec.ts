import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningCoursesComponent } from './running-courses.component';

describe('RunningCoursesComponent', () => {
  let component: RunningCoursesComponent;
  let fixture: ComponentFixture<RunningCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
