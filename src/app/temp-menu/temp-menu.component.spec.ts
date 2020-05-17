import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempMenuComponent } from './temp-menu.component';

describe('TempMenuComponent', () => {
  let component: TempMenuComponent;
  let fixture: ComponentFixture<TempMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
