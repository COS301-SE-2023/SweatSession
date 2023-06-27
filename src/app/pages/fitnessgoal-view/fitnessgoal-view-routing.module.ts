import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitnessgoalViewPage } from './fitnessgoal-view.page';

const routes: Routes = [
  {
    path: '',
    component: FitnessgoalViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessgoalViewPageRoutingModule {}
