import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthdataPage } from './healthdata.page';

const routes: Routes = [
  {
    path: '',
    component: HealthdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthdataPageRoutingModule {}
