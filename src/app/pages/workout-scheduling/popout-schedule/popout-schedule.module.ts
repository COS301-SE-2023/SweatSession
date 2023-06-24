import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { PopoutScheduleComponent } from './popout-schedule.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      WorkoutSchedulingStateModule
    ],
    declarations: [ PopoutScheduleComponent],
    exports: [ PopoutScheduleComponent]
})
export class PopupScheduleModule {}