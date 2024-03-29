import { NgModule } from '@angular/core';
import {
  AuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
    // canActivate: [AuthGuard],
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
    loadChildren: () => import('./pages/otheruser/friends/friends.module').then(m => m.ScheduleComponentModule),
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
  },
  {
    path: "otheruserSchedules",
    loadChildren: () => import('./pages/otheruser/schedules/schedules.module').then(m => m.ScheduleComponentModule),
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
    path: 'chatroom',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/messages/chatroom/chatroom.module').then( m => m.ChatroomComponentModule )
  },
  {
    path: 'groupchatroom',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/messages/group-chatroom/group-chatroom.module').then( m => m.GroupChatroomComponentModule )
  },
  {
    path: 'creategroup',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/messages/create-group/create-group.module').then( m => m.CreateGroupComponentModule )
  },
  {
    path: 'view-personalbests',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/view-personalbests/view-personalbests.module').then( m => m.ViewPersonalbestsPageModule)
  },
  {
    path: 'add-personal-best',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/view-personalbests/add-personal-best/add-personal-best.module').then( m => m.AddPersonalbestsPageModule)
  },
  {
    path: 'chatbot',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/chatbot/chatbot.module').then( m => m.ChatbotPageModule)
  },
  {
    path: 'healthdata',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/healthdata/healthdata.module').then( m => m.HealthDataPageModule)
  },
  {
    path: 'exercise-explorer',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/exercise-explorer/exercise-explorer.module').then( m => m.ExerciseExplorerPageModule)
  },
  {
    path: 'download',
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/download/download.module').then( m => m.DownloadPageModule)
  },
  {
    path: 'calories-calculator', 
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/calories-calculator/calories-calculator.module').then( m => m.CaloriesCalculatorPageModule)
  },
  {
    path: 'group-homepage',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedOut },
    loadChildren: () => import('./pages/groups/group-home-page/group-home-page.module').then(m => m.GroupsHomePageModule)
  },
  {
    path: 'user-manual',
    loadChildren: () => import('./pages/user-manual/user-manual.module').then( m => m.UserManualPageModule)
  },
  {
    path: 'health-data-display',
    loadChildren: () => import('./pages/health-data-display/health-data-display.module').then( m => m.HealthDataDisplayPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
