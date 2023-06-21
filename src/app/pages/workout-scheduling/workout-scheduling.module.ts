import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSchedulingPage } from './workout-scheduling.page';
import { WorkoutSchedulingPageRoutingModule } from './workout-scheduling-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleContentModule } from './schedulecontent/schedule-content.module';
import { AddScheduleComponent } from "./add-schedule/popout-add-schedule.component";
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { SearchComponentModule } from '../search/search/search.module';
import { ScheduleContentComponent } from './schedulecontent/schedule-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutSchedulingPageRoutingModule,
    WorkoutSchedulingStateModule,
    ScheduleContentModule,
    BackButtonDirectiveModule,
    SearchComponentModule,
  ],
  declarations: [WorkoutSchedulingPage, ScheduleComponent, AddScheduleComponent],
})
export class WorkoutSchedulingPageModule {}
