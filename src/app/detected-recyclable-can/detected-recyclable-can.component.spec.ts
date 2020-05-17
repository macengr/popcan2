import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectedRecyclableCanComponent } from './detected-recyclable-can.component';

describe('DetectedRecyclableCanComponent', () => {
  let component: DetectedRecyclableCanComponent;
  let fixture: ComponentFixture<DetectedRecyclableCanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectedRecyclableCanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectedRecyclableCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
