import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMentorsComponent } from './available-mentors.component';

describe('AvailableMentorsComponent', () => {
  let component: AvailableMentorsComponent;
  let fixture: ComponentFixture<AvailableMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
