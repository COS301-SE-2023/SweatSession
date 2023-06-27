import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalviewPage } from './goalview.page';

const routes: Routes = [
  {
    path: '',
    component: GoalviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalviewPageRoutingModule {}
