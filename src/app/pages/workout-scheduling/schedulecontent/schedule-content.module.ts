import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { ScheduleContentComponent } from './schedule-content.component';
import { EditScheduleComponent } from '../edit-schedule/edit-schedule.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      WorkoutSchedulingStateModule,
    ],
    declarations: [ ScheduleContentComponent,EditScheduleComponent],
    exports: [ ScheduleContentComponent]
})
export class ScheduleContentModule {}