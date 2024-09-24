import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPickerComponent } from './timer-picker/timer-picker.component';
import { TimerDownComponent } from './timer-down/timer-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerConfigModalComponent } from './modals/timer-config-modal/timer-config-modal.component';
import { MenusModule } from './menus/menus.module';
import { ModalConfigComponent } from './modals/modal-config/modal-config.component';

@NgModule({
  declarations: [
    TimerPickerComponent,
    TimerDownComponent,
    TimerConfigModalComponent,
    ModalConfigComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MenusModule
  ],
  exports:[
    TimerPickerComponent,
    TimerDownComponent,
    TimerConfigModalComponent,
    ModalConfigComponent,
    MenusModule
  ]
})
export class ComponentsModule { }
