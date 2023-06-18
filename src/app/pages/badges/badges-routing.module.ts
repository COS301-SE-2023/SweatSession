import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgesPage } from './badges.page';

const routes: Routes = [
  {
    path: '',
    component: BadgesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgesPageRoutingModule {}
