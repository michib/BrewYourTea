import { TeaMaterialModule } from './../tea-material/tea-material.module';
import { SharedModule } from './../shared/shared.module';
import { TimerComponent } from './timer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TeaMaterialModule
  ],
  declarations: [
    TimerComponent,
    CountdownComponent
  ],
  exports: [
    TimerComponent
  ]
})
export class TimerModule { }
