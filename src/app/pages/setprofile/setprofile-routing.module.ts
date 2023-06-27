import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetprofilePage } from './setprofile.page';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SetprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule],
  exports: [RouterModule],
})
export class SetprofilePageRoutingModule {}
