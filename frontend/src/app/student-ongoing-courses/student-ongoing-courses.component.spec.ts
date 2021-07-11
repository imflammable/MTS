import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOngoingCoursesComponent } from './student-ongoing-courses.component';

describe('StudentOngoingCoursesComponent', () => {
  let component: StudentOngoingCoursesComponent;
  let fixture: ComponentFixture<StudentOngoingCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOngoingCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOngoingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
