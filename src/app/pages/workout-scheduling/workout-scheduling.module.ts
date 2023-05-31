import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSchedulingPage } from './workout-scheduling.page';
import { WorkoutSchedulingPageRoutingModule } from './workout-scheduling-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { PopoutScheduleComponent } from './popout-schedule/popout-schedule.component';
import { PopoutAddScheduleComponent } from "./popout-add-schedule/popout-add-schedule.component";
import { WorkoutSchedulingState, WorkoutSchedulingStateModule } from 'src/app/states';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutSchedulingPageRoutingModule,
    WorkoutSchedulingStateModule
  ],
  declarations: [WorkoutSchedulingPage,ScheduleComponent,PopoutScheduleComponent, PopoutAddScheduleComponent]
})
export class WorkoutSchedulingPageModule {}
