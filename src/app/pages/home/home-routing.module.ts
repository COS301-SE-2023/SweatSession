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
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
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
        path: 'workout-tracking',
        loadChildren: () => import('../workout-tracking/workout-tracking.module').then( m => m.WorkoutTrackingPageModule)
      },
      {
        path: 'workout-scheduling',
        loadChildren: () => import('../workout-scheduling/workout-scheduling.module').then( m => m.WorkoutSchedulingPageModule)
      }
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
