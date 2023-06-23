import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'otheruser',
    loadChildren: () => import('./pages/otheruser/otheruser.module').then( m => m.OtheruserPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./pages/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./pages/groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'workout-scheduling',
    loadChildren: () => import('./pages/workout-scheduling/workout-scheduling.module').then( m => m.WorkoutSchedulingPageModule)
  },
  {
    path: 'userprofile',
      loadChildren: () => import('./pages/userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'setprofile',
    loadChildren: () => import('./pages/setprofile/setprofile.module').then( m => m.SetprofilePageModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./pages/badges/badges.module').then( m => m.BadgesPageModule)
  },
  {
    path: 'other-user-badges',
    loadChildren: () => import('./pages/otheruserbadges/other-user-badges/other-user-badges.module').then( m => m.OtherUserBadgesPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
