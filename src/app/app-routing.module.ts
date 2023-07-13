import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './pages/otheruser/friends/friends.component';
import { SchedulesComponent } from './pages/otheruser/schedules/schedules.component';
import {
  AuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { AddScheduleComponent } from './pages/workout-scheduling/add-schedule/add-schedule.component';

const redirectLoggedOut = () => redirectUnauthorizedTo(['login']);
const redirectLoggedIn = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'splash'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedIn },
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedIn },
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'splash',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then(m => m.LogoutPageModule)
  },
  {
    path: 'otheruser',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/otheruser/otheruser.module').then(m => m.OtheruserPageModule)
  },
  {
    path: 'friends',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/friends/friends.module').then(m => m.FriendsPageModule)
  },
  {
    path: 'groups',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/groups/groups.module').then(m => m.GroupsPageModule)
  },
  {
    path: 'userprofile',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/userprofile/userprofile.module').then(m => m.UserprofilePageModule)
  },
  {
    path: 'workout-scheduling',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/workout-scheduling/workout-scheduling.module').then(m => m.WorkoutSchedulingPageModule)
  },
  {
    path: 'workout-tracking',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/workout-tracking/workout-tracking.module').then(m => m.WorkoutTrackingPageModule)
  },
  {
    path: 'setprofile',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/setprofile/setprofile.module').then(m => m.SetprofilePageModule)
  },
  {
    path: 'fitnessgoals',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/fitnessgoals/fitnessgoals.module').then(m => m.FitnessgoalsPageModule)
  },
  {
    path: 'notifications',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'badges',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/badges/badges.module').then(m => m.BadgesPageModule)
  },
  {
    path: "otheruserFriends",
    component: FriendsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
  },
  {
    path: "otheruserSchedules",
    component: SchedulesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
  },
  {
    path: 'points',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/points/points.module').then(m => m.PointsPageModule)
  },
  {
    path: "addSchedule",
    component: AddScheduleComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
  },
  {
    path: 'otheruserbadges',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/otheruserbadges/other-user-badges.module').then(m => m.OtherUserBadgesPageModule)
  },
  {
    path: 'goalview',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/goalview/goalview.module').then( m => m.GoalviewPageModule)
  },
  {
    path: 'fitnessgoal-view',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/fitnessgoal-view/fitnessgoal-view.module').then( m => m.FitnessgoalViewPageModule)
  },
  {
    path: 'view-personalbests',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/view-personalbests/view-personalbests.module').then( m => m.ViewPersonalbestsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
