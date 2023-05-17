import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesPage } from './messages.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MessagesPage,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class MessagesPageRoutingModule {}
