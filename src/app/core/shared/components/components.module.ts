import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPickerComponent } from './timer-picker/timer-picker.component';
import { TimerDownComponent } from './timer-down/timer-down.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalAutofocusComponent } from './modal-autofocus/modal-autofocus.component';
import { MenusModule } from './menus/menus.module';

@NgModule({
  declarations: [
    TimerPickerComponent,
    TimerDownComponent,
    ModalAutofocusComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenusModule
  ],
  exports:[
    TimerPickerComponent,
    TimerDownComponent,
    ModalAutofocusComponent,
    MenusModule
  ]
})
export class ComponentsModule { }
