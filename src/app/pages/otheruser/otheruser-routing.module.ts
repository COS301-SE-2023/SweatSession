import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtheruserPage } from './otheruser.page';

const routes: Routes = [
  {
    path: '',
    component: OtheruserPage,
    children: [
      {
        path: "OtheruserFriends",
        loadChildren: () => import("./friends/friends-routing.module").then((m)=> m.FriendsComponentRoutingModule)
      },
      {
        path: "OtheruserFriends",
        loadChildren: () => import("./friends/friends-routing.module").then((m)=> m.FriendsComponentRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtheruserPageRoutingModule {}
