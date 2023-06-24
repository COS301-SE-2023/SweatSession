import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSchedulingPage } from './workout-scheduling.page';
import { WorkoutSchedulingPageRoutingModule } from './workout-scheduling-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { SearchComponentModule } from '../search/search/search.module';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { ScheduleContentComponent } from './schedulecontent/schedule-content.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutSchedulingPageRoutingModule,
    WorkoutSchedulingStateModule,
    BackButtonDirectiveModule,
    SearchComponentModule,
  ],
  declarations: [WorkoutSchedulingPage, ScheduleComponent, AddScheduleComponent, ScheduleContentComponent,EditScheduleComponent],
  exports: [ScheduleComponent, AddScheduleComponent, ScheduleContentComponent,EditScheduleComponent]
})
export class WorkoutSchedulingPageModule {}
