import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { ScheduleContentComponent } from './schedule-content.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      WorkoutSchedulingStateModule
    ],
    declarations: [ ScheduleContentComponent],
    exports: [ ScheduleContentComponent]
})
export class ScheduleContentModule {}