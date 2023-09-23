import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManualPage } from './user-manual.page';

const routes: Routes = [
  {
    path: '',
    component: UserManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManualPageRoutingModule {}
