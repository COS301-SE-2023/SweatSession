import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutSchedulingPage } from './workout-scheduling.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutSchedulingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutSchedulingPageRoutingModule {}
