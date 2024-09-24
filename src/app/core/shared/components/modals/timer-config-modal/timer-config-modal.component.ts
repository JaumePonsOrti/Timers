import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timer-config-modal',
  templateUrl: './timer-config-modal.component.html',
  styleUrls: ['./timer-config-modal.component.scss'],
})
export class TimerConfigModalComponent implements OnInit {
  @Input() tittle: string = 'Cambiar nombre temporizador';
  @Input() strong2: string = '?';
  
  public formControl:FormControl = new FormControl();

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  saveSettings() {
    this.modal.close({ nombre: this.formControl.value});
  }
}
