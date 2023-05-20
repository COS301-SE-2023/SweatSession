import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtheruserPage } from './otheruser.page';

const routes: Routes = [
  {
    path: '',
    component: OtheruserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtheruserPageRoutingModule {}
