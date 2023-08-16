import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseExplorerPage } from './exercise-explorer.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseExplorerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseExplorerPageRoutingModule {}
