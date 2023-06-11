import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutTrackingPage } from './workout-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutTrackingPageRoutingModule {}
