import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatroomComponent } from './chatroom.component';

const routes: Routes = [
  {
    path: '',
    component: ChatroomComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ChatroomComponentRoutingModule {}
