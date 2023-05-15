import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetprofilePage } from './setprofile.page';

const routes: Routes = [
  {
    path: '',
    component: SetprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetprofilePageRoutingModule {}
