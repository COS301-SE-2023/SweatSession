import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthDataPage } from './healthdata.page';

const routes: Routes = [
  {
    path: '',
    component: HealthDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthdataPageRoutingModule {}
