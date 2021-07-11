import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMentorDetailsComponent } from './edit-mentor-details.component';

describe('EditMentorDetailsComponent', () => {
  let component: EditMentorDetailsComponent;
  let fixture: ComponentFixture<EditMentorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMentorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMentorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
