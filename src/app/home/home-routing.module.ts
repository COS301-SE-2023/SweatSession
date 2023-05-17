import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'messages',
            loadChildren: () => import('../messages/messages.module').then((m) => m.MessagesPageModule),
          },
          // {
          //   path: 'search',
          //   loadChildren: () => import('./search/search.module').then((m) => m.searchPageModule),
          // },
          // {
          //   path: 'boards',
          //   loadChildren: () => import('./boards/boards.module').then((m) => m.boardsPageModule),
          // },
          // {
          //   path: 'profile',
          //   loadChildren: () => import('./profile/profile.module').then((m) => m.profilePageModule),
          // },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
