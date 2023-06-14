import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtheruserPage } from './otheruser.page';
import { FriendsComponent } from './friends/friends.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
  {
    path: '',
    component: OtheruserPage,
    children: [
      {
        path: "OtheruserFriends",
        component: FriendsComponent,
        pathMatch: 'full'
      },
      {
        path: "OtheruserSchedules",
        component: SchedulesComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtheruserPageRoutingModule {}
