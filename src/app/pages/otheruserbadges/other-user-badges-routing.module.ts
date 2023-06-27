import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherUserBadgesPage } from './other-user-badges.page';

const routes: Routes = [
  {
    path: '',
    component: OtherUserBadgesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherUserBadgesPageRoutingModule {}
