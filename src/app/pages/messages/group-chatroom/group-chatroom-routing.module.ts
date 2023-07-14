import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupChatroomComponent } from './group-chatroom.component';

const routes: Routes = [
  {
    path: '',
    component: GroupChatroomComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class GroupChatroomComponentRoutingModule {}