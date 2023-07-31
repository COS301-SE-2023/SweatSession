import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPersonalbestsPage } from './view-personalbests.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPersonalbestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPersonalbestsPageRoutingModule {}
