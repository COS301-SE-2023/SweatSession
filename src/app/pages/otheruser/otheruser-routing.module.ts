import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtheruserPage } from './otheruser.page';
import { FriendsComponent } from './friends/friends.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
  {
    path: '',
    component: OtheruserPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtheruserPageRoutingModule {}
