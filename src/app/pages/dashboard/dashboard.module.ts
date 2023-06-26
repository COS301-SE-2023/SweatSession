import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { DashboardPage } from './dashboard.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkoutSchedulingPageModule } from '../workout-scheduling/workout-scheduling.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    WorkoutSchedulingStateModule,
    WorkoutSchedulingPageModule
  ],
  declarations: [DashboardPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardPageModule {}
