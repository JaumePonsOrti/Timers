import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerConfigModalComponent } from './timer-config-modal.component';

describe('ModalAutofocusComponent', () => {
  let component: TimerConfigModalComponent;
  let fixture: ComponentFixture<TimerConfigModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerConfigModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
