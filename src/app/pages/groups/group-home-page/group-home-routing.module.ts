import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupHomePageComponent } from './group-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: GroupHomePageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class GroupHomePageRoutingModule {}
