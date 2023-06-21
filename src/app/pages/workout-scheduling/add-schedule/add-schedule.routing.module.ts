import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddScheduleComponent } from './add-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: AddScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSchedulePageRoutingModule {}
