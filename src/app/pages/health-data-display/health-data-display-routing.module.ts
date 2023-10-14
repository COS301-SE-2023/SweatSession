import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthDataDisplayPage } from './health-data-display.page';

const routes: Routes = [
  {
    path: '',
    component: HealthDataDisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthDataDisplayPageRoutingModule {}
