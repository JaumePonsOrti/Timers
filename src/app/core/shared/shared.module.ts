import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ExternalModulesModule } from './external-modules/external-modules.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ExternalModulesModule
  ],exports:[
    ComponentsModule,
    ExternalModulesModule
  ]
})
export class SharedModule { }
