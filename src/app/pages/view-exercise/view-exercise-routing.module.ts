import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewExercisePage } from './view-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: ViewExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewExercisePageRoutingModule {}
