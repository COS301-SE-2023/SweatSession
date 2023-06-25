import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home/dashboard',
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then((m) => m.MessagesPageModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('../leaderboard/leaderboard.module').then((m) => m.LeaderboardPageModule),
      },
      {
        path: 'leaderboard',
        loadChildren: () => import('../leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
      },
      {
        path: 'locations',
        loadChildren: () => import('../locations/locations.module').then( m => m.LocationsPageModule)
      },
      {
        path: 'chatbot',
        loadChildren: () => import('../chatbot/chatbot.module').then( m => m.ChatbotPageModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('../badges/badges.module').then( m => m.BadgesPageModule)
      },
      {
        path: 'points',
        loadChildren: () => import('../points/points.module').then( m => m.PointsPageModule)
      },
      {
        path: 'otheruserbadges',
        loadChildren: () => import('../otheruserbadges/other-user-badges.module').then( m => m.OtherUserBadgesPageModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
