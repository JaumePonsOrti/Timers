import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerPickerComponent } from './timer-picker.component';

describe('TimerPickerComponent', () => {
  let component: TimerPickerComponent;
  let fixture: ComponentFixture<TimerPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
