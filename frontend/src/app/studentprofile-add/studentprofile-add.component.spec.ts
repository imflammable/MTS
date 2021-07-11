import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofileAddComponent } from './studentprofile-add.component';

describe('StudentprofileAddComponent', () => {
  let component: StudentprofileAddComponent;
  let fixture: ComponentFixture<StudentprofileAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentprofileAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentprofileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
