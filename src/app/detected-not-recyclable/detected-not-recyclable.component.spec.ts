import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectedNotRecyclableComponent } from './detected-not-recyclable.component';

describe('DetectedNotRecyclableComponent', () => {
  let component: DetectedNotRecyclableComponent;
  let fixture: ComponentFixture<DetectedNotRecyclableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectedNotRecyclableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectedNotRecyclableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
