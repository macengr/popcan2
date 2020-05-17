import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectedRecyclableYogurtComponent } from './detected-recyclable-yogurt.component';

describe('DetectedRecyclableYogurtComponent', () => {
  let component: DetectedRecyclableYogurtComponent;
  let fixture: ComponentFixture<DetectedRecyclableYogurtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectedRecyclableYogurtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectedRecyclableYogurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
