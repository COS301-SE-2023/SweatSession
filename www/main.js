(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 68052:
/*!**********************************************!*\
  !*** ./src/app/actions/auth/auth.actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuth": () => (/* binding */ LoginAuth),
/* harmony export */   "Logout": () => (/* binding */ Logout),
/* harmony export */   "RegisterAuth": () => (/* binding */ RegisterAuth),
/* harmony export */   "SetUser": () => (/* binding */ SetUser),
/* harmony export */   "SubscribeToAuthState": () => (/* binding */ SubscribeToAuthState),
/* harmony export */   "getCurrentUserId": () => (/* binding */ getCurrentUserId)
/* harmony export */ });
class SubscribeToAuthState {}
SubscribeToAuthState.type = '[Auth] SubscribeToAuthState';

class SetUser {
  constructor(user) {
    this.user = user;
  }
}
SetUser.type = '[Auth] SetUser';

class LoginAuth {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  } //alert("In auth action register constuctor [Auth] login");
}
LoginAuth.type = '[Auth] Login';

class RegisterAuth {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  } //alert("In auth action register constuctor [Auth] Register")
}
RegisterAuth.type = '[Auth] Register';

class Logout {}
Logout.type = '[Auth] Logout';

class getCurrentUserId {}
getCurrentUserId.type = '[Auth] SetUser';


/***/ }),

/***/ 22918:
/*!***************************************!*\
  !*** ./src/app/actions/auth/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuth": () => (/* reexport safe */ _auth_actions__WEBPACK_IMPORTED_MODULE_0__.LoginAuth),
/* harmony export */   "Logout": () => (/* reexport safe */ _auth_actions__WEBPACK_IMPORTED_MODULE_0__.Logout),
/* harmony export */   "RegisterAuth": () => (/* reexport safe */ _auth_actions__WEBPACK_IMPORTED_MODULE_0__.RegisterAuth),
/* harmony export */   "SetUser": () => (/* reexport safe */ _auth_actions__WEBPACK_IMPORTED_MODULE_0__.SetUser),
/* harmony export */   "SubscribeToAuthState": () => (/* reexport safe */ _auth_actions__WEBPACK_IMPORTED_MODULE_0__.SubscribeToAuthState),
/* harmony export */   "getCurrentUserId": () => (/* reexport safe */ _auth_actions__WEBPACK_IMPORTED_MODULE_0__.getCurrentUserId)
/* harmony export */ });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ 68052);


/***/ }),

/***/ 56876:
/*!******************************************!*\
  !*** ./src/app/actions/friend.action.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFriendAction": () => (/* binding */ AddFriendAction),
/* harmony export */   "GetFriendsAction": () => (/* binding */ GetFriendsAction),
/* harmony export */   "RemoveFriendAction": () => (/* binding */ RemoveFriendAction)
/* harmony export */ });
class AddFriendAction {
  constructor(payload) {
    this.payload = payload;
  }
}
AddFriendAction.type = "[friends] Add Friend";

class RemoveFriendAction {
  constructor(payload) {
    this.payload = payload;
  }
}
RemoveFriendAction.type = "[friends] Remove Friend";

class GetFriendsAction {}
GetFriendsAction.type = "[friends] Get Friends";


/***/ }),

/***/ 56276:
/*!**********************************!*\
  !*** ./src/app/actions/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFriendAction": () => (/* reexport safe */ _friend_action__WEBPACK_IMPORTED_MODULE_0__.AddFriendAction),
/* harmony export */   "AddWorkoutSchedule": () => (/* reexport safe */ _workoutSchedule_action__WEBPACK_IMPORTED_MODULE_1__.AddWorkoutSchedule),
/* harmony export */   "GetFriendsAction": () => (/* reexport safe */ _friend_action__WEBPACK_IMPORTED_MODULE_0__.GetFriendsAction),
/* harmony export */   "GetOtheruserFriends": () => (/* reexport safe */ _otheruser_action__WEBPACK_IMPORTED_MODULE_5__.GetOtheruserFriends),
/* harmony export */   "GetOtheruserSchedules": () => (/* reexport safe */ _otheruser_action__WEBPACK_IMPORTED_MODULE_5__.GetOtheruserSchedules),
/* harmony export */   "GetProfileAction": () => (/* reexport safe */ _profile_action__WEBPACK_IMPORTED_MODULE_6__.GetProfileAction),
/* harmony export */   "GetUsersAction": () => (/* reexport safe */ _profile_action__WEBPACK_IMPORTED_MODULE_6__.GetUsersAction),
/* harmony export */   "GetWorkoutSchedules": () => (/* reexport safe */ _workoutSchedule_action__WEBPACK_IMPORTED_MODULE_1__.GetWorkoutSchedules),
/* harmony export */   "LoadOtherUserProfile": () => (/* reexport safe */ _otheruser_action__WEBPACK_IMPORTED_MODULE_5__.LoadOtherUserProfile),
/* harmony export */   "LoadSchedule": () => (/* reexport safe */ _workoutSchedule_action__WEBPACK_IMPORTED_MODULE_1__.LoadSchedule),
/* harmony export */   "Login": () => (/* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_4__.Login),
/* harmony export */   "LoginAuth": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.LoginAuth),
/* harmony export */   "Logout": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.Logout),
/* harmony export */   "Register": () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_2__.Register),
/* harmony export */   "RegisterAuth": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.RegisterAuth),
/* harmony export */   "RemoveFriendAction": () => (/* reexport safe */ _friend_action__WEBPACK_IMPORTED_MODULE_0__.RemoveFriendAction),
/* harmony export */   "RemoveUser": () => (/* reexport safe */ _otheruser_action__WEBPACK_IMPORTED_MODULE_5__.RemoveUser),
/* harmony export */   "RemoveWorkoutSchedule": () => (/* reexport safe */ _workoutSchedule_action__WEBPACK_IMPORTED_MODULE_1__.RemoveWorkoutSchedule),
/* harmony export */   "SetUser": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.SetUser),
/* harmony export */   "StageOtheruserInfo": () => (/* reexport safe */ _otheruser_action__WEBPACK_IMPORTED_MODULE_5__.StageOtheruserInfo),
/* harmony export */   "SubscribeToAuthState": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.SubscribeToAuthState),
/* harmony export */   "UpdateProfileAction": () => (/* reexport safe */ _profile_action__WEBPACK_IMPORTED_MODULE_6__.UpdateProfileAction),
/* harmony export */   "UpdateWorkoutAdded": () => (/* reexport safe */ _workoutSchedule_action__WEBPACK_IMPORTED_MODULE_1__.UpdateWorkoutAdded),
/* harmony export */   "UpdateWorkoutSchedule": () => (/* reexport safe */ _workoutSchedule_action__WEBPACK_IMPORTED_MODULE_1__.UpdateWorkoutSchedule),
/* harmony export */   "getCurrentUserId": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_3__.getCurrentUserId)
/* harmony export */ });
/* harmony import */ var _friend_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend.action */ 56876);
/* harmony import */ var _workoutSchedule_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workoutSchedule.action */ 22108);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ 71199);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ 22918);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ 40158);
/* harmony import */ var _otheruser_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otheruser.action */ 27509);
/* harmony import */ var _profile_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.action */ 90141);








/***/ }),

/***/ 40158:
/*!****************************************!*\
  !*** ./src/app/actions/login/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": () => (/* reexport safe */ _login_actions__WEBPACK_IMPORTED_MODULE_0__.Login)
/* harmony export */ });
/* harmony import */ var _login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.actions */ 72943);


/***/ }),

/***/ 72943:
/*!************************************************!*\
  !*** ./src/app/actions/login/login.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": () => (/* binding */ Login)
/* harmony export */ });
class Login {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  } //alert("In [Login] Login action")
}
Login.type = '[Login] Login';


/***/ }),

/***/ 27509:
/*!*********************************************!*\
  !*** ./src/app/actions/otheruser.action.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetOtheruserFriends": () => (/* binding */ GetOtheruserFriends),
/* harmony export */   "GetOtheruserSchedules": () => (/* binding */ GetOtheruserSchedules),
/* harmony export */   "LoadOtherUserProfile": () => (/* binding */ LoadOtherUserProfile),
/* harmony export */   "RemoveUser": () => (/* binding */ RemoveUser),
/* harmony export */   "StageOtheruserInfo": () => (/* binding */ StageOtheruserInfo)
/* harmony export */ });
class LoadOtherUserProfile {
  constructor() {}
}
LoadOtherUserProfile.type = "[otheruser] load profile of otheruser";

class GetOtheruserFriends {
  constructor() {}
}
GetOtheruserFriends.type = "[otheruser] get friends for another user";

class GetOtheruserSchedules {
  constructor() {}
}
GetOtheruserSchedules.type = "[otheruser] get workout schedules for another user";

class StageOtheruserInfo {
  constructor(payload) {
    this.payload = payload;
  }
}
StageOtheruserInfo.type = "[otheruser] get otheruser profile info";

class RemoveUser {
  constructor() {}
}
RemoveUser.type = "[otheruser] remove user form localstorage";


/***/ }),

/***/ 90141:
/*!*******************************************!*\
  !*** ./src/app/actions/profile.action.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetProfileAction": () => (/* binding */ GetProfileAction),
/* harmony export */   "GetUsersAction": () => (/* binding */ GetUsersAction),
/* harmony export */   "UpdateProfileAction": () => (/* binding */ UpdateProfileAction)
/* harmony export */ });
class GetProfileAction {
  constructor(payload) {
    this.payload = payload;
  }
}
GetProfileAction.type = "[profile] Get Profile";

class UpdateProfileAction {
  constructor(payload) {
    this.payload = payload;
  }
}
UpdateProfileAction.type = "[profile] Update Profile";

class GetUsersAction {
  constructor() {}
}
GetUsersAction.type = "[profile] get user profiles";


/***/ }),

/***/ 71199:
/*!*******************************************!*\
  !*** ./src/app/actions/register/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Register": () => (/* reexport safe */ _register_actions__WEBPACK_IMPORTED_MODULE_0__.Register)
/* harmony export */ });
/* harmony import */ var _register_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.actions */ 50335);


/***/ }),

/***/ 50335:
/*!******************************************************!*\
  !*** ./src/app/actions/register/register.actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Register": () => (/* binding */ Register)
/* harmony export */ });
class Register {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    alert("In [Register] Register action");
  }
}
Register.type = '[Register] Register';


/***/ }),

/***/ 22108:
/*!***************************************************!*\
  !*** ./src/app/actions/workoutSchedule.action.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddWorkoutSchedule": () => (/* binding */ AddWorkoutSchedule),
/* harmony export */   "GetWorkoutSchedules": () => (/* binding */ GetWorkoutSchedules),
/* harmony export */   "LoadSchedule": () => (/* binding */ LoadSchedule),
/* harmony export */   "RemoveWorkoutSchedule": () => (/* binding */ RemoveWorkoutSchedule),
/* harmony export */   "UpdateWorkoutAdded": () => (/* binding */ UpdateWorkoutAdded),
/* harmony export */   "UpdateWorkoutSchedule": () => (/* binding */ UpdateWorkoutSchedule)
/* harmony export */ });
class GetWorkoutSchedules {
  constructor( /*public payload: IGetWorkoutSchedules*/) {}
}
GetWorkoutSchedules.type = '[workoutSchedule] get workout schedule';

class AddWorkoutSchedule {
  constructor(payload) {
    this.payload = payload;
  }
}
AddWorkoutSchedule.type = '[workoutSchedule] add workout schedule';

class RemoveWorkoutSchedule {
  constructor(payload) {
    this.payload = payload;
  }
}
RemoveWorkoutSchedule.type = '[workoutSchedule] remove workout schedule';

class UpdateWorkoutSchedule {
  constructor(payload) {
    this.payload = payload;
  }
}
UpdateWorkoutSchedule.type = '[workoutSchedule] update workout schedule';

class UpdateWorkoutAdded {
  constructor(payload) {
    this.payload = payload;
  }
}
UpdateWorkoutAdded.type = '[Workout Scheduling] Update Workout Added';

class LoadSchedule {
  constructor(payload) {
    this.payload = payload;
  }
}
LoadSchedule.type = "[workoutSchedule] load workout schedule";


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _pages_otheruser_friends_friends_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/otheruser/friends/friends.component */ 42905);
/* harmony import */ var _pages_otheruser_schedules_schedules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/otheruser/schedules/schedules.component */ 47087);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth-guard */ 83200);
/* harmony import */ var _pages_workout_scheduling_add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/workout-scheduling/add-schedule/add-schedule.component */ 25818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);







const redirectLoggedOut = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.redirectUnauthorizedTo)(['login']);
const redirectLoggedIn = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.redirectLoggedInTo)(['home']);
const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'splash'
}, {
  path: 'home',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994)).then(m => m.HomePageModule)
}, {
  path: 'login',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedIn
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngxs_form-plugin_fesm2015_ngxs-form-plugin_js"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
}, {
  path: 'register',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedIn
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngxs_form-plugin_fesm2015_ngxs-form-plugin_js"), __webpack_require__.e("src_app_pages_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 60207)).then(m => m.RegisterPageModule)
}, {
  path: 'splash',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/splash/splash.module */ 71203)).then(m => m.SplashPageModule)
}, {
  path: 'settings',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 7850)).then(m => m.SettingsPageModule)
}, {
  path: 'logout',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_logout_logout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/logout/logout.module */ 91205)).then(m => m.LogoutPageModule)
}, {
  path: 'otheruser',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_workout-scheduling_workout-scheduling_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_otheruser_otheruser_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/otheruser/otheruser.module */ 88744)).then(m => m.OtheruserPageModule)
}, {
  path: 'friends',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_friends_friends_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/friends/friends.module */ 43026)).then(m => m.FriendsPageModule)
}, {
  path: 'groups',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_groups_groups_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/groups/groups.module */ 56188)).then(m => m.GroupsPageModule)
}, {
  path: 'userprofile',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_userprofile_userprofile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/userprofile/userprofile.module */ 210)).then(m => m.UserprofilePageModule)
}, {
  path: 'workout-scheduling',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_workout-scheduling_workout-scheduling_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/workout-scheduling/workout-scheduling.module */ 40325)).then(m => m.WorkoutSchedulingPageModule)
}, {
  path: 'workout-tracking',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_workout-tracking_workout-tracking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/workout-tracking/workout-tracking.module */ 38032)).then(m => m.WorkoutTrackingPageModule)
}, {
  path: 'setprofile',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_setprofile_setprofile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/setprofile/setprofile.module */ 1218)).then(m => m.SetprofilePageModule)
}, {
  path: 'fitnessgoals',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_fitnessgoals_fitnessgoals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fitnessgoals/fitnessgoals.module */ 12860)).then(m => m.FitnessgoalsPageModule)
}, {
  path: 'notifications',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.module */ 44558)).then(m => m.NotificationsPageModule)
}, {
  path: 'badges',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_badges_badges_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/badges/badges.module */ 11579)).then(m => m.BadgesPageModule)
}, {
  path: "otheruserFriends",
  component: _pages_otheruser_friends_friends_component__WEBPACK_IMPORTED_MODULE_0__.FriendsComponent,
  pathMatch: 'full',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  }
}, {
  path: "otheruserSchedules",
  component: _pages_otheruser_schedules_schedules_component__WEBPACK_IMPORTED_MODULE_1__.SchedulesComponent,
  pathMatch: 'full',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  }
}, {
  path: 'points',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_points_points_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/points/points.module */ 89807)).then(m => m.PointsPageModule)
}, {
  path: "addSchedule",
  component: _pages_workout_scheduling_add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_2__.AddScheduleComponent,
  pathMatch: 'full',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  }
}, {
  path: 'otheruserbadges',
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedOut
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_otheruserbadges_other-user-badges_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/otheruserbadges/other-user-badges.module */ 67038)).then(m => m.OtherUserBadgesPageModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/element/bundle */ 57590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 75992);



(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_0__.register)();
class AppComponent {
  constructor() {}
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRouterOutlet],
  styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/remote-config */ 57586);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/analytics */ 52591);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/app */ 89674);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/database */ 36139);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ 42111);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/functions */ 88833);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ 65417);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy
  }, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase), _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestoreModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_3__.NgxsModule.forRoot(), _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__.NgxsRouterPluginModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestoreModule, (0,_angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_12__.provideRemoteConfig)(() => (0,_angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_12__.getRemoteConfig)()), (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_13__.provideAnalytics)(() => (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_13__.getAnalytics)()), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.provideAuth)(() => {
    const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.getAuth)();
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.useEmulators) {
      (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.connectAuthEmulator)(auth, 'http://localhost:5002', {
        disableWarnings: true
      });
    }
    return auth;
  }), (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_15__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_15__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.provideFirestore)(() => {
    let firestore;
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.useEmulators) {
      // Long polling required for Cypress
      firestore = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.initializeFirestore)((0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_15__.getApp)(), {
        experimentalForceLongPolling: true
      });
      (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.connectFirestoreEmulator)(firestore, 'localhost', 5003);
    } else {
      firestore = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.getFirestore)();
    }
    return firestore;
  }), (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_17__.provideDatabase)(() => {
    const database = (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_17__.getDatabase)();
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.useEmulators) {
      (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_17__.connectDatabaseEmulator)(database, 'localhost', 5004);
    }
    return database;
  }), (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.provideStorage)(() => {
    const storage = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.getStorage)();
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.useEmulators) {
      (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.connectStorageEmulator)(storage, 'localhost', 5006);
    }
    return storage;
  }), (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_19__.provideFunctions)(() => {
    const functions = (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_19__.getFunctions)();
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.useEmulators) {
      (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_19__.connectFunctionsEmulator)(functions, 'localhost', 5005);
    }
    return functions;
  })]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestoreModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵNgxsRootModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__.NgxsRouterPluginModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestoreModule, _angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_12__.RemoteConfigModule, _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_13__.AnalyticsModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.AuthModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_15__.FirebaseAppModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.FirestoreModule, _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__.DatabaseModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.StorageModule, _angular_fire_functions__WEBPACK_IMPORTED_MODULE_19__.FunctionsModule]
  });
})();

/***/ }),

/***/ 10957:
/*!***************************************************************!*\
  !*** ./src/app/directives/backbutton/backbutton.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackbuttonComponent": () => (/* binding */ BackbuttonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 75992);



class BackbuttonComponent {
  constructor(navigation) {
    this.navigation = navigation;
  }
  ngOnInit() {}
  back() {
    this.navigation.back();
  }
}
BackbuttonComponent.ɵfac = function BackbuttonComponent_Factory(t) {
  return new (t || BackbuttonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__.NavigationService));
};
BackbuttonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BackbuttonComponent,
  selectors: [["backbutton"]],
  decls: 1,
  vars: 0,
  consts: [["name", "arrow-back-outline", 3, "click"]],
  template: function BackbuttonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-icon", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BackbuttonComponent_Template_ion_icon_click_0_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 42905:
/*!**************************************************************!*\
  !*** ./src/app/pages/otheruser/friends/friends.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsComponent": () => (/* binding */ FriendsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/backbutton/backbutton.component */ 10957);









function FriendsComponent_ion_card_10_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FriendsComponent_ion_card_10_ion_icon_6_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const friend_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.viewOtherUser(friend_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FriendsComponent_ion_card_10_ion_text_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "you");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FriendsComponent_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card")(1, "ion-item")(2, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FriendsComponent_ion_card_10_ion_icon_6_Template, 1, 0, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FriendsComponent_ion_card_10_ion_text_7_Template, 2, 0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const friend_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", friend_r1.profileURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](friend_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isCurrentUser(friend_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isCurrentUser(friend_r1));
  }
}
class FriendsComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.displayFriends();
  }
  viewOtherUser(friend) {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.StageOtheruserInfo(friend));
  }
  displayFriends() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.GetOtheruserFriends());
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.SubscribeToAuthState());
    this.friends$.subscribe(response => {
      this.friends = response;
    });
    this.userId$.subscribe(response => {
      this.userId = response;
    });
  }
  isCurrentUser(friend) {
    if (this.userId && friend.userId) {
      return this.userId === friend.userId;
    }
    return false;
  }
}
FriendsComponent.ɵfac = function FriendsComponent_Factory(t) {
  return new (t || FriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store));
};
FriendsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FriendsComponent,
  selectors: [["otheruser-friends"]],
  decls: 11,
  vars: 3,
  consts: [[3, "translucent"], [3, "fullscreen"], [1, "outer-container"], [1, "body-content"], [4, "ngFor", "ngForOf"], ["alt", "image here", 3, "src"], ["name", "chevron-forward-outline", "slot", "end", 3, "click", 4, "ngIf"], ["slot", "end", 4, "ngIf"], ["name", "chevron-forward-outline", "slot", "end", 3, "click"], ["slot", "end"]],
  template: function FriendsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header", 0)(2, "ion-toolbar")(3, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Friends");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 1)(8, "div", 2)(9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, FriendsComponent_ion_card_10_Template, 8, 4, "ion-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.friends);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_3__.BackbuttonComponent],
  styles: ["ion-item[_ngcontent-%COMP%] {\n  --highlight-height: 0;\n  --inner-border-width: 0;\n  --background: #457B9D;\n}\n\nion-card[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n\nion-avatar[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: url(\"/assets/Asset 2.png\") no-repeat center/cover fixed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb3RoZXJ1c2VyL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0kscUVBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLWJhY2tncm91bmQ6ICM0NTdCOUQ7XG59XG5cbmlvbi1jYXJkLCBpb24taXRlbSB7XG4gICAgb3BhY2l0eTogMC45O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9Bc3NldCAyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7IC8vICMxRDM1NTc7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.OtheruserState.returnOtherUserFriends)], FriendsComponent.prototype, "friends$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.AuthState.getCurrUserId)], FriendsComponent.prototype, "userId$", void 0);


/***/ }),

/***/ 47087:
/*!******************************************************************!*\
  !*** ./src/app/pages/otheruser/schedules/schedules.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulesComponent": () => (/* binding */ SchedulesComponent)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/backbutton/backbutton.component */ 10957);










function SchedulesComponent_ion_card_10_ion_card_content_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br")(5, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br")(9, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br")(13, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br")(17, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "br")(21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const schedule_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](schedule_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](schedule_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](schedule_r1.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](schedule_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", schedule_r1.duration, " minutes");
  }
}
function SchedulesComponent_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card")(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SchedulesComponent_ion_card_10_Template_ion_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const schedule_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.viewSchedule(schedule_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SchedulesComponent_ion_card_10_ion_card_content_7_Template, 22, 5, "ion-card-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const schedule_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", schedule_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isSlideShow);
  }
}
class SchedulesComponent {
  constructor(popoverController, store) {
    this.popoverController = popoverController;
    this.store = store;
    this.schedules = [];
    this.isSlideShow = false;
  }
  ngOnInit() {
    this.displayWorkoutSchedules();
  }
  viewSchedule(schedule) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isSlideShow = !_this.isSlideShow;
    })();
  }
  loadSchedule(schedule) {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_2__.LoadSchedule(schedule));
  }
  displayWorkoutSchedules() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_2__.GetOtheruserSchedules());
    this.schedules$.subscribe(response => {
      this.schedules = response;
    });
  }
}
SchedulesComponent.ɵfac = function SchedulesComponent_Factory(t) {
  return new (t || SchedulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
SchedulesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SchedulesComponent,
  selectors: [["otheruser-schedules"]],
  decls: 11,
  vars: 3,
  consts: [[3, "translucent"], [3, "fullscreen"], [1, "outer-container"], [1, "body-content"], [4, "ngFor", "ngForOf"], ["name", "receipt-outline"], ["slot", "end", 3, "click"], [4, "ngIf"], ["name", "barbell-outline"], [1, "schedule-value"], ["name", "calendar-outline"], ["name", "time-outline"], ["name", "location-outline"], ["name", "timer-outline"]],
  template: function SchedulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 0)(2, "ion-toolbar")(3, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "WorkoutSchedules");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 1)(8, "div", 2)(9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SchedulesComponent_ion_card_10_Template, 8, 2, "ion-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.schedules);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_4__.BackbuttonComponent],
  styles: ["ion-text[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --highlight-height: 0;\n  --inner-border-width: 0;\n  --background: #457B9D;\n}\n\nion-card[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: url(\"/assets/Asset 2.png\") no-repeat center/cover fixed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb3RoZXJ1c2VyL3NjaGVkdWxlcy9zY2hlZHVsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFFQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dCB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG5pb24taXRlbXtcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDU3QjlEO1xufVxuXG5pb24tY2FyZCwgaW9uLWl0ZW0ge1xuICAgIG9wYWNpdHk6IDAuOTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL0Fzc2V0IDIucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDsgLy8gIzFEMzU1Nztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_3__.OtheruserState.returnOtherUserSchedules)], SchedulesComponent.prototype, "schedules$", void 0);


/***/ }),

/***/ 25818:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/workout-scheduling/add-schedule/add-schedule.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddScheduleComponent": () => (/* binding */ AddScheduleComponent)
/* harmony export */ });
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/backbutton/backbutton.component */ 10957);






class AddScheduleComponent {
  constructor(popoverController, store) {
    this.popoverController = popoverController;
    this.store = store;
    this.schedule = {};
  }
  ngOnInit() {}
  closePopup() {
    this.popoverController.dismiss();
  }
  addSchedule() {
    this.setFields();
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_0__.AddWorkoutSchedule(this.schedule));
  }
  isDateTimeValid() {
    const currentDate = new Date();
    const selectedDateTime = new Date(`${this.schedule.date}T${this.schedule.time}`);
    return selectedDateTime > currentDate;
  }
  getMinTime() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours().toString().padStart(2, '0');
    const currentMinute = currentDate.getMinutes().toString().padStart(2, '0'); //time in ten minutes;
    return `${currentHour}:${currentMinute}`;
  }
  getMinDate() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');
    return `${currentYear}-${currentMonth}-${currentDay}`;
  }
  setFields() {
    this.schedule.createdAt = new Date();
    this.schedule.notified = false;
    this.schedule.completeAt = new Date(`${this.schedule.date}T${this.schedule.time}`);
    this.schedule.completeAt.setMinutes(this.schedule.completeAt.getMinutes() + this.schedule.duration);
    this.schedule.notifyAt = this.schedule.completeAt;
    this.schedule.notifyAt.setMinutes(this.schedule.notifyAt.getMinutes() - 5);
    this.schedule.status = "uncompleted";
  }
  isValidInput() {
    const {
      name,
      location,
      duration,
      time,
      date
    } = this.schedule;
    if (name && location && duration && time && date && this.isDateTimeValid()) return true;
    return false;
  }
}
AddScheduleComponent.ɵfac = function AddScheduleComponent_Factory(t) {
  return new (t || AddScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
AddScheduleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AddScheduleComponent,
  selectors: [["add-schedule"]],
  decls: 46,
  vars: 9,
  consts: [["href", "https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap", "rel", "stylesheet"], ["lines", "none"], [1, "larger-back-button"], [1, "ion-text-center"], ["src", "/assets/Asset 3.png", 1, "logo"], ["position", "stacked"], ["type", "time", 3, "ngModel", "min", "ngModelChange"], ["type", "date", 3, "ngModel", "min", "ngModelChange"], ["position", "floating"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "number", 3, "ngModel", "min", "ngModelChange"], ["expand", "block", 3, "disabled", "click"]],
  template: function AddScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "link", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-toolbar")(3, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "backbutton", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Add Workout Schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content")(8, "ion-card")(9, "ion-card-content")(10, "ion-grid")(11, "ion-row")(12, "ion-col");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "ion-img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-row")(15, "ion-col")(16, "ion-item")(17, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddScheduleComponent_Template_ion_input_ngModelChange_19_listener($event) {
        return ctx.schedule.time = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-row")(21, "ion-col")(22, "ion-item")(23, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddScheduleComponent_Template_ion_input_ngModelChange_25_listener($event) {
        return ctx.schedule.date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-row")(27, "ion-col")(28, "ion-item")(29, "ion-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddScheduleComponent_Template_ion_input_ngModelChange_31_listener($event) {
        return ctx.schedule.location = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-row")(33, "ion-col")(34, "ion-item")(35, "ion-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Duration (min)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddScheduleComponent_Template_ion_input_ngModelChange_37_listener($event) {
        return ctx.schedule.duration = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-row")(39, "ion-col")(40, "ion-item")(41, "ion-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Workout Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddScheduleComponent_Template_ion_input_ngModelChange_43_listener($event) {
        return ctx.schedule.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddScheduleComponent_Template_ion_button_click_44_listener() {
        return ctx.addSchedule();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.schedule.time)("min", ctx.getMinTime());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.schedule.date)("min", ctx.getMinDate());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.schedule.location);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.schedule.duration)("min", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.schedule.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isValidInput());
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_2__.BackbuttonComponent],
  styles: ["ion-card[_ngcontent-%COMP%] {\n  width: inherit;\n  height: 100%;\n  margin: 0 auto;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 40%;\n  height: auto;\n  margin: 0 auto;\n}\n\nion-card[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.larger-back-button[_ngcontent-%COMP%] {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  font-size: 24px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --background: #457b9d;\n  --background-hover: #558eb7;\n  --background-activated: #4a86a8;\n  --background-focused: #4a86a8;\n  border-radius: 12px;\n  --color: white;\n  margin: 15px;\n}\n\nion-grid[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nion-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #E63946 ;\n}\n\nion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #E63946 ;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd29ya291dC1zY2hlZHVsaW5nL2FkZC1zY2hlZHVsZS9hZGQtc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSDs7QUFDQTtFQUNHLHFDQUFBO0FBRUg7O0FBQ0M7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRUg7O0FBRUE7RUFDRyxVQUFBO0FBQ0g7O0FBRUE7RUFDRyxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNIOztBQUVBO0VBQ0cscUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxZQUFBO0FBQUg7O0FBR0M7RUFDRSxZQUFBO0FBQUg7O0FBR0M7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFBSDs7QUFFQztFQUNFLHNCQUFBO0FBQ0g7O0FBRUM7RUFDRSxzQkFBQTtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgd2lkdGg6IGluaGVyaXQ7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICBtYXJnaW46IDAgYXV0bztcbn1cbioge1xuICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiB9XG4gXG4gLmxvZ28ge1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBtYXgtd2lkdGg6IDQwJTsgXG4gICBoZWlnaHQ6IGF1dG87IFxuICAgbWFyZ2luOiAwIGF1dG87XG4gfVxuIFxuXG5pb24tY2FyZCwgaW9uLWl0ZW0ge1xuICAgb3BhY2l0eTogMTtcbn1cblxuLmxhcmdlci1iYWNrLWJ1dHRvbiB7XG4gICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7IFxuICAgLS1wYWRkaW5nLWVuZDogMTJweDsgXG4gICBmb250LXNpemU6IDI0cHg7IFxufVxuXG5pb24tYnV0dG9uIHtcbiAgIC0tYmFja2dyb3VuZDogIzQ1N2I5ZDtcbiAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU1OGViNztcbiAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM0YTg2YTg7XG4gICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzRhODZhODtcbiAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gXG4gICAtLWNvbG9yOiB3aGl0ZTtcbiAgIG1hcmdpbjogMTVweDtcbiB9XG5cbiBpb24tZ3JpZCB7XG4gICBoZWlnaHQ6IDEwMCU7XG4gfVxuXG4gaW9uLXJvdyB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgaGVpZ2h0OiAxMDAlO1xuIH1cbiBpb24tdG9vbGJhcntcbiAgIC0tYmFja2dyb3VuZDogI0U2Mzk0NlxuIH1cblxuIGlvbi10b29sYmFyIGlvbi1pdGVte1xuICAgLS1iYWNrZ3JvdW5kOiAjRTYzOTQ2XG4gfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 82269:
/*!*************************************************!*\
  !*** ./src/app/repository/badges.repository.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesRepository": () => (/* binding */ BadgesRepository)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);



class BadgesRepository {
  constructor(firestore) {
    this.firestore = firestore;
  }
  createBadgesDocument(currUserId) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // alert("In register repositry createProfileFunc");
      // const collectionRef: AngularFirestoreCollection<IProfileModel> = this.firestore.collection('profiles');
      // collectionRef.add(newProfile)
      //     .then((docRef) => {
      //         console.log('Document created successfully with ID:', docRef.id);
      //     })
      //     .catch((error) => {
      //         console.error('Error creating document:', error);
      //     });
      const badgesRef = _this.firestore.collection('badges').doc(currUserId);
      const newBadgesDocument = {
        receivedBadges: []
      };
      badgesRef.set(newBadgesDocument).then(docRef => {
        console.log('Document created successfully with ID:', docRef);
        // alert('Document created successfully with ID:' + docRef);
      }).catch(error => {
        console.error('Error creating document:', error);
      });
      //preturn await admin.firestore().collection('profiles').doc(newProfile.userId).create(newProfile);
    })();
  }
}

BadgesRepository.ɵfac = function BadgesRepository_Factory(t) {
  return new (t || BadgesRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore));
};
BadgesRepository.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BadgesRepository,
  factory: BadgesRepository.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 25273:
/*!**************************************************!*\
  !*** ./src/app/repository/friends.repository.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsRepository": () => (/* binding */ FriendsRepository)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var _otheruser_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otheruser.repository */ 54052);





class FriendsRepository {
  /**
   * collection: friends{
   *  document: userId {
   *      collection: friends {
   *          document: id {
   *              name: string,
   *              profileUrl: string
   *          }
   *      }
   *  }
   * }
   *
   *
   */
  constructor(firestore, repository) {
    this.firestore = firestore;
    this.repository = repository;
  }
  getFriends(request) {
    const friendsCollection = this.firestore.collection(`friends/${request.userId}/userFriends`);
    return friendsCollection.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(snapshot => {
      const friends = [];
      snapshot.forEach( /*#__PURE__*/function () {
        var _ref = (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
          const friend = {
            ...doc.payload.doc.data()
          };
          friends.push(friend);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return {
        userId: request.userId,
        friends: friends,
        validate: true
      };
    }));
  }
  addFriend(request) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (yield _this.repository.getProfile(request)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
        const docRef = _this.firestore.collection("friends").doc(request.userId).collection("userFriends").doc(request.friend.userId).set(request.friend);
        const friendDocRef = _this.firestore.collection("friends").doc(request.friend.userId).collection("userFriends").doc(request.userId).set(res);
        const friend = {
          ...request.friend
        };
        const response = {
          userId: request.userId,
          friend: friend,
          validate: true
        };
        return response;
      }));
    })();
  }
  removeFriend(request) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        //remove from own document
        const docRef = yield _this2.firestore.collection("friends").doc(request.userId).collection("userFriends").doc(request.friend.userId).delete();
        //remove from friend document
        const docRefFriend = yield _this2.firestore.collection("friends").doc(request.friend.userId).collection("userFriends").doc(request.userId).delete();
        //response
        const response = {
          userId: request.userId,
          validate: true
        };
        return response;
      } catch (error) {
        alert("error: " + error);
        const response = {
          userId: request.userId,
          validate: false
        };
        return response;
      }
    })();
  }
}
FriendsRepository.ɵfac = function FriendsRepository_Factory(t) {
  return new (t || FriendsRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_otheruser_repository__WEBPACK_IMPORTED_MODULE_1__.OtheruserRepository));
};
FriendsRepository.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: FriendsRepository,
  factory: FriendsRepository.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 56953:
/*!*************************************!*\
  !*** ./src/app/repository/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesRepository": () => (/* reexport safe */ _badges_repository__WEBPACK_IMPORTED_MODULE_2__.BadgesRepository),
/* harmony export */   "FriendsRepository": () => (/* reexport safe */ _friends_repository__WEBPACK_IMPORTED_MODULE_0__.FriendsRepository),
/* harmony export */   "WorkoutscheduleRepository": () => (/* reexport safe */ _workoutSchedule_repository__WEBPACK_IMPORTED_MODULE_1__.WorkoutscheduleRepository)
/* harmony export */ });
/* harmony import */ var _friends_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends.repository */ 25273);
/* harmony import */ var _workoutSchedule_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workoutSchedule.repository */ 14057);
/* harmony import */ var _badges_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badges.repository */ 82269);



//export * from "./profile.repository";

/***/ }),

/***/ 54052:
/*!****************************************************!*\
  !*** ./src/app/repository/otheruser.repository.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtheruserRepository": () => (/* binding */ OtheruserRepository)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);




class OtheruserRepository {
  constructor(firestore) {
    this.firestore = firestore;
  }
  getProfiles() {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const collectionRef = _this.firestore.collection("profiles");
      return collectionRef.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(snapshot => {
        let profiles = [];
        snapshot.forEach(doc => {
          const profile = {
            ...doc.payload.doc.data()
          };
          profiles.push(profile);
        });
        return profiles;
      }));
    })();
  }
  getProfile(request) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const docRef = _this2.firestore.collection("profiles").doc(request.userId);
      return docRef.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(snapshot => {
        const otheruser = {
          ...snapshot.payload.data()
        };
        return otheruser;
      }));
    })();
  }
}
OtheruserRepository.ɵfac = function OtheruserRepository_Factory(t) {
  return new (t || OtheruserRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore));
};
OtheruserRepository.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: OtheruserRepository,
  factory: OtheruserRepository.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 50873:
/*!*************************************************!*\
  !*** ./src/app/repository/points.repository.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsRepository": () => (/* binding */ PointsRepository)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);



class PointsRepository {
  constructor(firestore) {
    this.firestore = firestore;
  }
  createPointsDocument(currUserId) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const pointsRef = _this.firestore.collection('points').doc(currUserId);
      const newPointsDocument = {
        userPoints: 0
      };
      pointsRef.set(newPointsDocument).then(docRef => {
        console.log('Document created successfully with ID:', docRef);
      }).catch(error => {
        console.error('Error creating document:', error);
      });
    })();
  }
}
PointsRepository.ɵfac = function PointsRepository_Factory(t) {
  return new (t || PointsRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore));
};
PointsRepository.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PointsRepository,
  factory: PointsRepository.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 81578:
/*!**************************************************!*\
  !*** ./src/app/repository/profile.repository.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRepository": () => (/* binding */ ProfileRepository)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ 26009);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);






class ProfileRepository {
  constructor(firestore) {
    this.firestore = firestore;
  }
  getProfile(request) {
    // temp : string = request.userId;
    // alert("getProfile" + request.userId + "================");
    return this.firestore.collection('profiles').doc(request.userId)
    // .doc('izwEZ4i1DvbBuOT8aszFAiotOrW2')
    .get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(snapshot => {
      // if(snapshot.exists) {
      //   alert("==============snapshot exists================");
      // }
      const data = snapshot.data();
      const id = snapshot.id;
      // console.log(id);
      if (data) {
        return {
          id,
          ...data
        };
      } else {
        console.log(data);
        throw new Error('Profile does not exist for UserID: ' + request.userId);
      }
    }));
    // getProfile(request: IGetProfile): Observable<IProfileModel | undefined> {
    //   return this.firestore
    //     .collection('profiles')
    //     .doc<IProfileModel>(request.userId)
    //     .valueChanges()
    //     .pipe(
    //       map((data: IProfileModel | undefined) => {
    //         console.log(data);
    //         if (data) {
    //           return data;
    //         } else {
    //           console.log(data);
    //           throw new Error('Profile does not exist for UserID: ' + request.userId);
    //         }
    //       })
    //     );
  }

  addProfile(profile) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.firestore.collection('profiles').doc(profile.userId).set(profile)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => profile), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)( /*#__PURE__*/(0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return undefined;
    })));
  }
  updateProfile(request) {
    return this.firestore.collection('profiles').doc(request.userId).set(request);
  }
}
ProfileRepository.ɵfac = function ProfileRepository_Factory(t) {
  return new (t || ProfileRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore));
};
ProfileRepository.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ProfileRepository,
  factory: ProfileRepository.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 19190:
/*!***************************************************!*\
  !*** ./src/app/repository/register.repository.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterRepository": () => (/* binding */ RegisterRepository)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);



class RegisterRepository {
  constructor(firestore) {
    this.firestore = firestore;
  }
  createUser(newUser) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const createCollectionRef = this.firestore.collection("users");
      // const doc = await createCollectionRef.doc('dummy').get().toPromise();
      // if (!doc || !doc.exists) {
      //     // Create the collection by adding a dummy document
      //     await createCollectionRef.doc('dummy').set({})
      //         .then(() => {
      //             alert('User Collection created successfully');
      //         })
      //         .catch(() => {
      //             alert('User Collection not created');
      //         });
      //     console.log('Collection created:', "users");
      // } else {
      //     console.log('Collection already exists:', "users");
      // }
      // alert("In register repositry createUser");
      // const collectionRef: AngularFirestoreCollection<IUserModel> = this.firestore.collection('users');
      // collectionRef.add(newUser)
      //     .then((docRef) => {
      //         console.log('Document created successfully with ID:', docRef.id);
      //         alert('Document created successfully with ID:' + docRef.id);
      //     })
      //     .catch((error) => {
      //         console.error('Error creating document:', error);
      //         console.error('Error creating document:', error);
      //     });
      const userRef = _this.firestore.collection('users').doc(newUser.id);
      userRef.set(newUser).then(docRef => {
        console.log('Document created successfully with ID:', docRef);
        // alert('Document created successfully with ID:' + docRef);
      }).catch(error => {
        console.error('Error creating document:', error);
      });
      //return await getFirestore().collection('user').doc(newUser.id).create(newUser);
    })();
  }

  createProfile(newProfile) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // alert("In register repositry createProfileFunc");
      // const collectionRef: AngularFirestoreCollection<IProfileModel> = this.firestore.collection('profiles');
      // collectionRef.add(newProfile)
      //     .then((docRef) => {
      //         console.log('Document created successfully with ID:', docRef.id);
      //     })
      //     .catch((error) => {
      //         console.error('Error creating document:', error);
      //     });
      const profileRef = _this2.firestore.collection('profiles').doc(newProfile.userId);
      profileRef.set(newProfile).then(docRef => {
        console.log('Document created successfully with ID:', docRef);
        // alert('Document created successfully with ID:' + docRef);
      }).catch(error => {
        console.error('Error creating document:', error);
      });
      //preturn await admin.firestore().collection('profiles').doc(newProfile.userId).create(newProfile);
    })();
  }
}

RegisterRepository.ɵfac = function RegisterRepository_Factory(t) {
  return new (t || RegisterRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore));
};
RegisterRepository.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RegisterRepository,
  factory: RegisterRepository.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 14057:
/*!**********************************************************!*\
  !*** ./src/app/repository/workoutSchedule.repository.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutscheduleRepository": () => (/* binding */ WorkoutscheduleRepository)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);




class WorkoutscheduleRepository {
  constructor(firestore) {
    this.firestore = firestore;
  }
  //How user schedules are store....
  /**
    * collection//workout schedule {
    *  document//user id {
    *      subcollection//schedule {
    *          document//schedule is<IWorkoutSchedule> {
    *
    *          }
    *      }
    *  }
    * }
    */
  getScheduleById(userId, scheduleId) {
    const scheduleDoc = this.firestore.collection('WorkoutSchedule').doc(userId).collection('userSchedules').doc(scheduleId);
    return scheduleDoc.snapshotChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(doc => {
      if (doc.payload.exists) {
        const schedule = {
          ...doc.payload.data(),
          id: doc.payload.id
        };
        return schedule;
      } else {
        return null;
      }
    }));
  }
  addSchedule(request) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const docRef = yield _this.firestore.collection("WorkoutSchedule").doc(request.userId).collection("userSchedules").add(request.schedule);
        const schedule = {
          id: docRef.id,
          ...request.schedule
        };
        const response = {
          userId: request.userId,
          schedule: schedule,
          validate: true
        };
        return response;
      } catch (error) {
        alert('Error adding schedule:' + error);
        const response = {
          userId: request.userId,
          validate: false
        };
        return response;
      }
    })();
  }
  removeSchedule(request) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const docRef = yield _this2.firestore.collection("WorkoutSchedule").doc(request.userId).collection("userSchedules").doc(request.schedule.id).delete();
        // console.log('Schedule deleted successfully');
        // alert('Schedule removed successfully');
        const response = {
          userId: request.userId,
          validate: true
        };
        return response;
      } catch (error) {
        console.log('Error removing schedule:', error);
        alert(error);
        const response = {
          userId: request.userId,
          validate: false
        };
        return response;
      }
    })();
  }
  updateSchedule(request) {
    var _this3 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const docRef = yield _this3.firestore.collection("WorkoutSchedule").doc(request.userId).collection("userSchedules").doc(request.schedule.id);
        yield docRef.update({
          name: request.schedule.name,
          location: request.schedule.location,
          duration: request.schedule.duration,
          time: request.schedule.time,
          date: request.schedule.date
        });
        // console.log('Schedule updated successfully');
        // alert(request.schedule.id);
        const schedule = {
          ...request.schedule
        };
        const response = {
          userId: request.userId,
          schedule: schedule,
          validate: true
        };
        return response;
      } catch (error) {
        console.log('Error updating schedule:', error);
        alert(error);
        const response = {
          userId: request.userId,
          validate: false
        };
        return response;
      }
    })();
  }
  getSchedules(request) {
    // try {
    const friendsCollection = this.firestore.collection(`WorkoutSchedule/${request.userId}/userSchedules`);
    return friendsCollection.snapshotChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(snapshot => {
      const schedules = [];
      snapshot.forEach( /*#__PURE__*/function () {
        var _ref = (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
          const schedule = {
            ...doc.payload.doc.data(),
            id: doc.payload.doc.id
          };
          schedules.push(schedule);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return {
        userId: request.userId,
        schedules: schedules
      };
    }));
    // }catch (error) {
    //   console.log('Error fetching schedules:', error);
    //   alert(error);
    //   const response: IGotWorkoutSchedules = {
    //     userId: request.userId,
    //     schedules: [],
    //   };
    //   // return response;
    // }
  }
}

WorkoutscheduleRepository.ɵfac = function WorkoutscheduleRepository_Factory(t) {
  return new (t || WorkoutscheduleRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore));
};
WorkoutscheduleRepository.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: WorkoutscheduleRepository,
  factory: WorkoutscheduleRepository.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 8568:
/*!*******************************************************!*\
  !*** ./src/app/services/exercise/exercise.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseService": () => (/* binding */ ExerciseService)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/firestore */ 40138);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);





class ExerciseService {
  constructor(firestore) {
    this.firestore = firestore;
  }
  addExercise(exercise) {
    return this.firestore.collection('exercises').add(exercise);
  }
  addExerciseWithUniqueId(exercise) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const uniqueId = _this.firestore.createId();
      exercise.id = uniqueId;
      console.log('Adding exercise:', exercise);
      yield _this.firestore.collection('exercises').doc(uniqueId).set(exercise);
      return exercise;
    })();
  }
  getExerciseByScheduleId(scheduleId) {
    return this.firestore.collection('exercises', ref => ref.where('scheduleId', '==', scheduleId)).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return {
        id,
        ...data
      };
    })));
  }
  updateExercise(exerciseId, exercise) {
    console.log('Updating exercise:', exerciseId, exercise);
    return this.firestore.collection('exercises').doc(exerciseId).update(exercise);
  }
  deleteExerciseFromDatabase(exerciseId) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Deleting exercise:', exerciseId);
      yield _this2.firestore.collection('exercises').doc(exerciseId).delete();
    })();
  }
}
ExerciseService.ɵfac = function ExerciseService_Factory(t) {
  return new (t || ExerciseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore));
};
ExerciseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ExerciseService,
  factory: ExerciseService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 63706:
/*!*****************************************************!*\
  !*** ./src/app/services/friends/friends.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsService": () => (/* binding */ FriendsService)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repository */ 56953);



class FriendsService {
  constructor(repository) {
    this.repository = repository;
  }
  getFriends(request) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.repository.getFriends(request);
    })();
  }
  addFriend(request) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.repository.addFriend(request);
    })();
  }
  removeFriend(request) {
    var _this3 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.repository.removeFriend(request);
    })();
  }
}
FriendsService.ɵfac = function FriendsService_Factory(t) {
  return new (t || FriendsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_repository__WEBPACK_IMPORTED_MODULE_1__.FriendsRepository));
};
FriendsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FriendsService,
  factory: FriendsService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 21866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseService": () => (/* reexport safe */ _exercise_exercise_service__WEBPACK_IMPORTED_MODULE_6__.ExerciseService),
/* harmony export */   "FriendsService": () => (/* reexport safe */ _friends_friends_service__WEBPACK_IMPORTED_MODULE_0__.FriendsService),
/* harmony export */   "NavigationService": () => (/* reexport safe */ _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__.NavigationService),
/* harmony export */   "OtheruserService": () => (/* reexport safe */ _otheruser_otheruser_service__WEBPACK_IMPORTED_MODULE_3__.OtheruserService),
/* harmony export */   "ProfileService": () => (/* reexport safe */ _profile_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService),
/* harmony export */   "RegisterService": () => (/* reexport safe */ _registration_register_service__WEBPACK_IMPORTED_MODULE_5__.RegisterService),
/* harmony export */   "SetProfileService": () => (/* reexport safe */ _setprofile_setprofile_service__WEBPACK_IMPORTED_MODULE_2__.SetProfileService),
/* harmony export */   "WorkoutscheduleService": () => (/* reexport safe */ _workoutschedule_workoutschedule_service__WEBPACK_IMPORTED_MODULE_4__.WorkoutscheduleService)
/* harmony export */ });
/* harmony import */ var _friends_friends_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends/friends.service */ 63706);
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.service */ 89985);
/* harmony import */ var _setprofile_setprofile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setprofile/setprofile.service */ 99864);
/* harmony import */ var _otheruser_otheruser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otheruser/otheruser.service */ 88946);
/* harmony import */ var _workoutschedule_workoutschedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workoutschedule/workoutschedule.service */ 89211);
/* harmony import */ var _registration_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/register.service */ 96443);
/* harmony import */ var _exercise_exercise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercise/exercise.service */ 8568);
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.service */ 58015);










/***/ }),

/***/ 58015:
/*!***********************************************************!*\
  !*** ./src/app/services/navigation/navigation.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);




class NavigationService {
  constructor(router, location) {
    this.router = router;
    this.location = location;
    this.history = [];
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }
  back() {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/home");
    }
  }
}
NavigationService.ɵfac = function NavigationService_Factory(t) {
  return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location));
};
NavigationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NavigationService,
  factory: NavigationService.ɵfac,
  providedIn: "root"
});


/***/ }),

/***/ 88946:
/*!*********************************************************!*\
  !*** ./src/app/services/otheruser/otheruser.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtheruserService": () => (/* binding */ OtheruserService)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_repository_otheruser_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/repository/otheruser.repository */ 54052);



class OtheruserService {
  constructor(repository) {
    this.repository = repository;
  }
  getProfile(request) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.repository.getProfile(request);
    })();
  }
  getProfiles() {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.repository.getProfiles();
    })();
  }
}
OtheruserService.ɵfac = function OtheruserService_Factory(t) {
  return new (t || OtheruserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_repository_otheruser_repository__WEBPACK_IMPORTED_MODULE_1__.OtheruserRepository));
};
OtheruserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: OtheruserService,
  factory: OtheruserService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 89985:
/*!*****************************************************!*\
  !*** ./src/app/services/profile/profile.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/firestore */ 40138);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_repository_profile_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/repository/profile.repository */ 81578);




class ProfileService {
  constructor(repository) {
    this.repository = repository;
  }
  addProfile(profile) {
    return this.repository.addProfile(profile);
  }
  getProfile(prof) {
    return this.repository.getProfile(prof).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(profile => {
      if (profile) {
        const gotProfile = {
          profile: {
            userId: profile.userId,
            displayName: profile.displayName,
            name: profile.name,
            bio: profile.bio,
            email: profile.email,
            phoneNumber: profile.phoneNumber,
            height: profile.height,
            weight: profile.weight,
            profileURL: profile.profileURL
          }
        };
        return gotProfile;
      } else {
        const notFoundProfile = {
          profile: {
            userId: 'undefined',
            displayName: 'undefined',
            name: 'undefined',
            bio: 'undefined',
            email: 'undefined',
            phoneNumber: 'undefined',
            height: '0',
            weight: '0',
            profileURL: 'undefined'
          }
        };
        return notFoundProfile;
      }
    }));
  }
}
ProfileService.ɵfac = function ProfileService_Factory(t) {
  return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_repository_profile_repository__WEBPACK_IMPORTED_MODULE_1__.ProfileRepository));
};
ProfileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ProfileService,
  factory: ProfileService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 96443:
/*!***********************************************************!*\
  !*** ./src/app/services/registration/register.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 26009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_repository_register_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/repository/register.repository */ 19190);
/* harmony import */ var src_app_repository_points_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/repository/points.repository */ 50873);
/* harmony import */ var src_app_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/repository */ 56953);

// import { Timestamp } from 'firebase-admin/firestore';





class RegisterService {
  constructor(repository, pointsRepository, badgesRepository) {
    this.repository = repository;
    this.pointsRepository = pointsRepository;
    this.badgesRepository = badgesRepository;
  }
  register(currUserId, regEmail) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // if (currUserId){
      //   const newUser:IUserModel = {
      //     id:currUserId,
      //     email: regEmail,
      //     //created: Timestamp.now()
      //   }
      // }
      // alert("In register Service");
      const newUser = {
        id: currUserId,
        email: regEmail,
        created: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Timestamp.now()
      };
      console.log(newUser);
      const [dName] = regEmail.split("@"); //this is to get the part until the @
      const newProfile = {
        userId: currUserId,
        name: regEmail,
        displayName: dName,
        email: regEmail,
        bio: "Hi there, I am new to Sweat Session!",
        profileURL: "https://i.pravatar.cc/150?img=20",
        phoneNumber: "0000000000",
        height: '0',
        weight: '0'
      };
      console.log(newProfile);
      //this.repository.createUser(newUser);
      //this.repository.createProfile({});
      // alert("In register Service");
      _this.badgesRepository.createBadgesDocument(currUserId);
      _this.repository.createUser(newUser);
      _this.repository.createProfile(newProfile);
      _this.pointsRepository.createPointsDocument(currUserId);
    })();
  }
}
RegisterService.ɵfac = function RegisterService_Factory(t) {
  return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_repository_register_repository__WEBPACK_IMPORTED_MODULE_1__.RegisterRepository), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_repository_points_repository__WEBPACK_IMPORTED_MODULE_2__.PointsRepository), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_repository__WEBPACK_IMPORTED_MODULE_3__.BadgesRepository));
};
RegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: RegisterService,
  factory: RegisterService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 99864:
/*!***********************************************************!*\
  !*** ./src/app/services/setprofile/setprofile.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetProfileService": () => (/* binding */ SetProfileService)
/* harmony export */ });
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/firestore */ 40138);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_repository_profile_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/repository/profile.repository */ 81578);




class SetProfileService {
  constructor(repository) {
    this.repository = repository;
  }
  getProfile(prof) {
    return this.repository.getProfile(prof).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(profile => {
      if (profile) {
        const gotProfile = {
          profile: {
            userId: profile.userId,
            name: profile.name,
            displayName: profile.displayName,
            email: profile.email,
            bio: profile.bio,
            phoneNumber: profile.phoneNumber,
            profileURL: profile.profileURL,
            height: profile.height,
            weight: profile.weight
          }
        };
        return gotProfile;
      } else {
        const notFoundProfile = {
          profile: {
            userId: 'undefinedID',
            bio: 'undefinedbio',
            email: 'undefinedemail',
            name: 'undefinedname',
            phoneNumber: 'undefinedphone',
            profileURL: 'undefinedURL',
            height: 'undefinedheight',
            weight: 'undefinedweight',
            displayName: 'undefineddisplayName'
          }
        };
        return notFoundProfile;
      }
    }));
  }
  updateProfile(IupdateP) {
    this.repository.updateProfile(IupdateP).then(res => {
      console.log('Update Successful');
    }).catch(error => {
      console.log('Update Failed');
    });
  }
}
SetProfileService.ɵfac = function SetProfileService_Factory(t) {
  return new (t || SetProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_repository_profile_repository__WEBPACK_IMPORTED_MODULE_1__.ProfileRepository));
};
SetProfileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SetProfileService,
  factory: SetProfileService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 89211:
/*!*********************************************************************!*\
  !*** ./src/app/services/workoutschedule/workoutschedule.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutscheduleService": () => (/* binding */ WorkoutscheduleService)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repository */ 56953);



class WorkoutscheduleService {
  constructor(repository) {
    this.repository = repository;
  }
  addSchedule(request) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.repository.addSchedule(request);
    })();
  }
  removeSchedule(request) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.repository.removeSchedule(request);
    })();
  }
  updateSchedule(request) {
    var _this3 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.repository.updateSchedule(request);
    })();
  }
  getSchedules(request) {
    var _this4 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.repository.getSchedules(request);
    })();
  }
}
WorkoutscheduleService.ɵfac = function WorkoutscheduleService_Factory(t) {
  return new (t || WorkoutscheduleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_repository__WEBPACK_IMPORTED_MODULE_1__.WorkoutscheduleRepository));
};
WorkoutscheduleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: WorkoutscheduleService,
  factory: WorkoutscheduleService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 64196:
/*!*****************************************!*\
  !*** ./src/app/states/auth/auth.api.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthApi": () => (/* binding */ AuthApi)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/auth */ 70931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 75992);






// import { AuthState } from 'src/app/states/auth';
//import { RegisterRepository } from 'src/app/repository/register.repository';
//import { getAuth } from 'firebase/auth';
// import { getAuth } from 'firebase/auth';
class AuthApi {
  constructor(authObject, Nav) {
    this.authObject = authObject;
    this.Nav = Nav;
  } //, private repository: RegisterRepository         //, private service: RegisterService
  auth$() {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.authState)(this.authObject);
  }
  getCurrentUserId() {
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
      return auth.currentUser?.uid;
    })();
  }
  login(regEmail, regPassword) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_this.authObject, regEmail, regPassword);
        // AuthState.currUserId=await this.getCurrentUserId();
        //return await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
        _this.Nav.navigateRoot('/home'); // this is so they are only directed to login when they enter a valid email and password combination
      } catch (error) {
        console.error('Firebase error:', error);
        alert("Incorrect email password combination");
      }
    })();
  }
  register(regEmail, regPassword) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_this2.authObject, regEmail, regPassword);
        // AuthState.currUserId=null;
        _this2.Nav.navigateRoot('/home'); // this is so they are only directed to login when they enter a valid email and password combination
        return true;
      } catch (error) {
        // Handle the Firebase error
        console.error('Firebase error:', error);
        alert("Incorrect registration info.");
        return false;
        //return "Incorrect registration info.";
        //return "";
      }
      // alert("in auth api register function");
      // return await createUserWithEmailAndPassword(this.authObject, regEmail, regPassword);
    })();
  }

  logout() {
    var _this3 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const auth = getAuth();
      // console.log(auth.currentUser?.uid);
      // alert("logout");
      sessionStorage.removeItem('currUserId');
      return yield (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_this3.authObject);
    })();
  }
}
AuthApi.ɵfac = function AuthApi_Factory(t) {
  return new (t || AuthApi)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController));
};
AuthApi.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthApi,
  factory: AuthApi.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3377:
/*!********************************************!*\
  !*** ./src/app/states/auth/auth.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.state */ 42992);
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.api */ 64196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);






class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 42992:
/*!*******************************************!*\
  !*** ./src/app/states/auth/auth.state.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthState": () => (/* binding */ AuthState)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/actions/auth */ 22918);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/router-plugin */ 65417);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immer */ 52736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.api */ 64196);

var _class;








let AuthState = (_class = class AuthState {
  constructor(authenticationApi) {
    this.authenticationApi = authenticationApi;
  }
  static user(state) {
    return state.currUser;
  }
  static getCurrUserId(state) {
    return state.currUser?.uid;
  }
  subscribeToAuthState(context) {
    return this.authenticationApi.auth$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(currUser => {
      context.dispatch(new src_app_actions_auth__WEBPACK_IMPORTED_MODULE_1__.SetUser(currUser));
    }));
  }
  setUser(context, {
    user
  }) {
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      context.setState((0,immer__WEBPACK_IMPORTED_MODULE_6__["default"])(repr => {
        repr.currUser = user;
      }));
    })();
  }
  register(context, {
    email,
    password
  }) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        alert(email);
        alert(password);
        yield _this.authenticationApi.register(email, password);
        return context.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__.Navigate(['home']));
      } catch (err) {
        return err.message;
      }
    })();
  }
  login(context, {
    email,
    password
  }) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.authenticationApi.login(email, password);
        return context.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__.Navigate(['home']));
      } catch (err) {
        return context.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__.Navigate(['login']));
      }
    })();
  }
  logout(context) {
    var _this3 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.authenticationApi.logout();
      context.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__.Navigate(['login']));
    })();
  }
}, _class.ɵfac = function AuthState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_api__WEBPACK_IMPORTED_MODULE_4__.AuthApi));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions_auth__WEBPACK_IMPORTED_MODULE_1__.SubscribeToAuthState)], AuthState.prototype, "subscribeToAuthState", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions_auth__WEBPACK_IMPORTED_MODULE_1__.SetUser)], AuthState.prototype, "setUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions_auth__WEBPACK_IMPORTED_MODULE_1__.RegisterAuth)], AuthState.prototype, "register", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions_auth__WEBPACK_IMPORTED_MODULE_1__.LoginAuth)], AuthState.prototype, "login", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions_auth__WEBPACK_IMPORTED_MODULE_1__.Logout)], AuthState.prototype, "logout", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Selector)()], AuthState, "user", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Selector)()], AuthState, "getCurrUserId", null);
AuthState = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.State)({
  name: 'authentication',
  defaults: {
    currUser: null
  }
})], AuthState);


/***/ }),

/***/ 74234:
/*!**************************************!*\
  !*** ./src/app/states/auth/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthApi": () => (/* reexport safe */ _auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi),
/* harmony export */   "AuthModule": () => (/* reexport safe */ _auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule),
/* harmony export */   "AuthState": () => (/* reexport safe */ _auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState)
/* harmony export */ });
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.module */ 3377);
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.state */ 42992);
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.api */ 64196);




/***/ }),

/***/ 36832:
/*!**************************************************!*\
  !*** ./src/app/states/friends/friends.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsStateModule": () => (/* binding */ FriendsStateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _friends_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends.state */ 49552);
/* harmony import */ var _auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.api */ 64196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);






class FriendsStateModule {}
FriendsStateModule.ɵfac = function FriendsStateModule_Factory(t) {
  return new (t || FriendsStateModule)();
};
FriendsStateModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: FriendsStateModule
});
FriendsStateModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_friends_state__WEBPACK_IMPORTED_MODULE_1__.FriendsState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FriendsStateModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 49552:
/*!*************************************************!*\
  !*** ./src/app/states/friends/friends.state.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsState": () => (/* binding */ FriendsState)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/router-plugin */ 65417);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _auth_auth_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.api */ 64196);

var _class;









let FriendsState = (_class = class FriendsState {
  constructor(friendsService, store, authApi) {
    this.friendsService = friendsService;
    this.store = store;
    this.authApi = authApi;
  }
  getFriends(ctx) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentUserId = yield _this.authApi.getCurrentUserId();
      if (currentUserId != null) {
        const request = {
          userId: currentUserId
        };
        return (yield _this.friendsService.getFriends(request)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(response => {
          ctx.setState({
            ...ctx.getState(),
            friends: response.friends,
            length: response.friends.length
          });
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
          alert(error);
          ctx.setState({
            friends: [],
            length: 0
          });
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(error);
        }));
      } else {
        return ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate(['home/dashboard']));
      }
    })();
  }
  removeFriends(ctx, {
    payload
  }) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentUserId = yield _this2.authApi.getCurrentUserId();
      if (currentUserId != null) {
        const request = {
          userId: currentUserId,
          friend: payload
        };
        const response = yield _this2.friendsService.removeFriend(request);
        if (response.validate) {
          const friends = ctx.getState().friends.filter(schedule => {
            if (schedule.userId === request.friend.userId) return false;else return true;
          });
          ctx.patchState({
            friends: friends
          });
        }
      } else {
        ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate(['home/dashboard']));
      }
    })();
  }
  addFriend(ctx, {
    payload
  }) {
    var _this3 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentUserId = yield _this3.authApi.getCurrentUserId();
      if (currentUserId != null) {
        const request = {
          userId: currentUserId,
          friend: payload
        };
        return (yield _this3.friendsService.addFriend(request)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(response => {
          ctx.patchState({
            friends: [response.friend, ...ctx.getState().friends]
          }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(error);
          });
        }));
      } else {
        return ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate(['home/dashboard']));
      }
    })();
  }
  static returnFriends(state) {
    return state.friends;
  }
  static returnFriendsSize(state) {
    return state.length;
  }
}, _class.ɵfac = function FriendsState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__.FriendsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth_auth_api__WEBPACK_IMPORTED_MODULE_5__.AuthApi));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_3__.GetFriendsAction)], FriendsState.prototype, "getFriends", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_3__.RemoveFriendAction)], FriendsState.prototype, "removeFriends", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_3__.AddFriendAction)], FriendsState.prototype, "addFriend", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], FriendsState, "returnFriends", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], FriendsState, "returnFriendsSize", null);
FriendsState = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.State)({
  name: "friends",
  defaults: {
    friends: [],
    length: 0
  }
})], FriendsState);


/***/ }),

/***/ 5869:
/*!*********************************!*\
  !*** ./src/app/states/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthApi": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_8__.AuthApi),
/* harmony export */   "AuthModule": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_8__.AuthModule),
/* harmony export */   "AuthState": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_8__.AuthState),
/* harmony export */   "FriendsState": () => (/* reexport safe */ _friends_friends_state__WEBPACK_IMPORTED_MODULE_0__.FriendsState),
/* harmony export */   "FriendsStateModule": () => (/* reexport safe */ _friends_friends_module__WEBPACK_IMPORTED_MODULE_1__.FriendsStateModule),
/* harmony export */   "OtheruserState": () => (/* reexport safe */ _otheruser_otheruser_state__WEBPACK_IMPORTED_MODULE_4__.OtheruserState),
/* harmony export */   "OtheruserStateModule": () => (/* reexport safe */ _otheruser_otheruser_module__WEBPACK_IMPORTED_MODULE_5__.OtheruserStateModule),
/* harmony export */   "ProfileState": () => (/* reexport safe */ _profile_profile_state__WEBPACK_IMPORTED_MODULE_9__.ProfileState),
/* harmony export */   "ProfileStateModel": () => (/* reexport safe */ _profile_profile_state__WEBPACK_IMPORTED_MODULE_9__.ProfileStateModel),
/* harmony export */   "ProfileStateModule": () => (/* reexport safe */ _profile_profile_module__WEBPACK_IMPORTED_MODULE_10__.ProfileStateModule),
/* harmony export */   "RegisterModule": () => (/* reexport safe */ _register_register_module__WEBPACK_IMPORTED_MODULE_7__.RegisterModule),
/* harmony export */   "RegisterState": () => (/* reexport safe */ _register_register_state__WEBPACK_IMPORTED_MODULE_6__.RegisterState),
/* harmony export */   "WorkoutSchedulingState": () => (/* reexport safe */ _workout_scheduling_workout_scheduling_state__WEBPACK_IMPORTED_MODULE_2__.WorkoutSchedulingState),
/* harmony export */   "WorkoutSchedulingStateModule": () => (/* reexport safe */ _workout_scheduling_workout_scheduling_module__WEBPACK_IMPORTED_MODULE_3__.WorkoutSchedulingStateModule)
/* harmony export */ });
/* harmony import */ var _friends_friends_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends/friends.state */ 49552);
/* harmony import */ var _friends_friends_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends/friends.module */ 36832);
/* harmony import */ var _workout_scheduling_workout_scheduling_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workout-scheduling/workout-scheduling.state */ 5954);
/* harmony import */ var _workout_scheduling_workout_scheduling_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workout-scheduling/workout-scheduling.module */ 11170);
/* harmony import */ var _otheruser_otheruser_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otheruser/otheruser.state */ 73173);
/* harmony import */ var _otheruser_otheruser_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otheruser/otheruser.module */ 20814);
/* harmony import */ var _register_register_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.state */ 46714);
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.module */ 95567);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth */ 74234);
/* harmony import */ var _profile_profile_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.state */ 69623);
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.module */ 31526);












/***/ }),

/***/ 20814:
/*!******************************************************!*\
  !*** ./src/app/states/otheruser/otheruser.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtheruserStateModule": () => (/* binding */ OtheruserStateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _otheruser_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otheruser.state */ 73173);
/* harmony import */ var _auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.api */ 64196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);



// import { OtheruserApi } from './OtheruserApi.api';



class OtheruserStateModule {}
OtheruserStateModule.ɵfac = function OtheruserStateModule_Factory(t) {
  return new (t || OtheruserStateModule)();
};
OtheruserStateModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: OtheruserStateModule
});
OtheruserStateModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_otheruser_state__WEBPACK_IMPORTED_MODULE_1__.OtheruserState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OtheruserStateModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 73173:
/*!*****************************************************!*\
  !*** ./src/app/states/otheruser/otheruser.state.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtheruserState": () => (/* binding */ OtheruserState)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/router-plugin */ 65417);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var src_app_actions_profile_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/actions/profile.action */ 90141);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);

var _class;











let OtheruserState = (_class = class OtheruserState {
  constructor(nav, friendService, workoutScheduleService, otheruserService, authApi, store, navigation) {
    this.nav = nav;
    this.friendService = friendService;
    this.workoutScheduleService = workoutScheduleService;
    this.otheruserService = otheruserService;
    this.authApi = authApi;
    this.store = store;
    this.navigation = navigation;
  }
  stageOtheruserInfo(ctx, {
    payload
  }) {
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ctx.patchState({
        otheruser: payload
      });
      sessionStorage.setItem("otheruser", JSON.stringify(payload));
      return ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate(['otheruser']));
    })();
  }
  loadOtheruserProfile(ctx) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.request = yield JSON.parse(sessionStorage.getItem("otheruser"));
      if (_this.request) {
        return (yield _this.otheruserService.getProfile({
          userId: _this.request.userId
        })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(response => {
          ctx.patchState({
            otheruser: response
          });
          return ctx.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_3__.GetOtheruserFriends());
        }));
      } else {
        return ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate(["home"]));
      }
    })();
  }
  getFriends(ctx) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentUserId = yield _this2.authApi.getCurrentUserId();
      return (yield _this2.friendService.getFriends(_this2.request)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(response => {
        ctx.patchState({
          friends: response.friends,
          friendshipStatus: response.friends.some(({
            userId
          }) => userId == currentUserId)
        });
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
        ctx.patchState({
          friends: []
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(error);
      }));
    })();
  }
  getWorkoutSchedules(ctx) {
    var _this3 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.request = yield JSON.parse(sessionStorage.getItem("otheruser"));
      return (yield _this3.workoutScheduleService.getSchedules(_this3.request)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(response => {
        ctx.patchState({
          workoutSchedules: response.schedules
        });
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
        ctx.patchState({
          workoutSchedules: []
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(error);
      }));
    })();
  }
  removeUser() {
    var _this4 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      sessionStorage.removeItem("otheruser");
      _this4.navigation.back();
    })();
  }
  getProfiles(ctx) {
    var _this5 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (yield _this5.otheruserService.getProfiles()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(response => {
        ctx.setState({
          ...ctx.getState(),
          profiles: response
        });
      }));
    })();
  }
  static returnOtherUserProfile(state) {
    return state.otheruser;
  }
  static returnOtherUserFriends(state) {
    return state.friends;
  }
  static returnOtherUserSchedules(state) {
    return state.workoutSchedules;
  }
  static returnProfiles(state) {
    return state.profiles;
  }
  static returnFriendshipStatus(state) {
    return state.friendshipStatus;
  }
}, _class.ɵfac = function OtheruserState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_5__.FriendsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_5__.WorkoutscheduleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_5__.OtheruserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_6__.AuthApi), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_5__.NavigationService));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_3__.StageOtheruserInfo)], OtheruserState.prototype, "stageOtheruserInfo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_3__.LoadOtherUserProfile)], OtheruserState.prototype, "loadOtheruserProfile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_3__.GetOtheruserFriends)], OtheruserState.prototype, "getFriends", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_3__.GetOtheruserSchedules)], OtheruserState.prototype, "getWorkoutSchedules", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_3__.RemoveUser)], OtheruserState.prototype, "removeUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions_profile_action__WEBPACK_IMPORTED_MODULE_4__.GetUsersAction)], OtheruserState.prototype, "getProfiles", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], OtheruserState, "returnOtherUserProfile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], OtheruserState, "returnOtherUserFriends", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], OtheruserState, "returnOtherUserSchedules", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], OtheruserState, "returnProfiles", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], OtheruserState, "returnFriendshipStatus", null);
OtheruserState = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.State)({
  name: "otheruser",
  defaults: {
    otheruser: null,
    friendshipStatus: false,
    friends: [],
    workoutSchedules: [],
    profiles: []
  }
})], OtheruserState);


/***/ }),

/***/ 31526:
/*!**************************************************!*\
  !*** ./src/app/states/profile/profile.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileStateModule": () => (/* binding */ ProfileStateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _profile_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.state */ 69623);
/* harmony import */ var _auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.api */ 64196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);






class ProfileStateModule {}
ProfileStateModule.ɵfac = function ProfileStateModule_Factory(t) {
  return new (t || ProfileStateModule)();
};
ProfileStateModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ProfileStateModule
});
ProfileStateModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_profile_state__WEBPACK_IMPORTED_MODULE_1__.ProfileState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfileStateModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 69623:
/*!*************************************************!*\
  !*** ./src/app/states/profile/profile.state.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileState": () => (/* binding */ ProfileState),
/* harmony export */   "ProfileStateModel": () => (/* binding */ ProfileStateModel)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_actions_profile_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/actions/profile.action */ 90141);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ 21866);

var _class;







class ProfileStateModel {}
let ProfileState = (_class = class ProfileState {
  constructor(store, profileService) {
    this.store = store;
    this.profileService = profileService;
  }
  GetProfile(ctx, action) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const request = {
        userId: action.payload.userId
      };
      const response = yield _this.profileService.getProfile(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(profile => {
        if (profile) {
          ctx.patchState({
            ...ctx.getState(),
            profile: [profile.profile] // Wrap the profile in an array
          });
        } else {
          ctx.patchState({
            ...ctx.getState(),
            profile: undefined
          });
        }
      })).toPromise();
      if (response) {
        ctx.patchState({
          profile: [response.profile]
        });
      } else {
        ctx.patchState({
          profile: undefined
        });
      }
    })();
  }
  static returnProfile(state) {
    return state.profile;
  }
}, _class.ɵfac = function ProfileState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__.ProfileService));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions_profile_action__WEBPACK_IMPORTED_MODULE_2__.GetProfileAction)], ProfileState.prototype, "GetProfile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], ProfileState, "returnProfile", null);
ProfileState = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.State)({
  name: "profile",
  defaults: {
    profile: undefined
  }
})], ProfileState);


/***/ }),

/***/ 95567:
/*!****************************************************!*\
  !*** ./src/app/states/register/register.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModule": () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _register_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.state */ 46714);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);






class RegisterModule {}
RegisterModule.ɵfac = function RegisterModule_Factory(t) {
  return new (t || RegisterModule)();
};
RegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: RegisterModule
});
RegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_register_state__WEBPACK_IMPORTED_MODULE_1__.RegisterState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegisterModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 46714:
/*!***************************************************!*\
  !*** ./src/app/states/register/register.state.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterState": () => (/* binding */ RegisterState)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_actions_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/actions/register */ 71199);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ 21866);

var _class;

//import { RegisterAuth as AuthActionRegister } from 'src/app/actions/auth';






let RegisterState = (_class = class RegisterState {
  constructor(store, authApi, service) {
    this.store = store;
    this.authApi = authApi;
    this.service = service;
  }
  register(context, action) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // alert("register.state.ts");
        const state = context.getState();
        // const regEmail = state.registerForm.model.email;
        // const regPassword = state.registerForm.model.password;
        // alert(action.email);
        // alert(action.password);
        // alert("register.state.ts");
        const {
          email,
          password
        } = action;
        // alert(email);
        // alert(password);
        // alert(state.registerForm.model.email);
        // alert(state.registerForm.model.password);
        //no need to get cPassword since it should be the same as password
        if (action.email && action.password) {
          //return context.dispatch(new AuthActionRegister(email, password));
          const regSuccessful = yield _this.authApi.register(email, password);
          if (regSuccessful) {
            const currUserId = yield _this.authApi.getCurrentUserId();
            if (currUserId != null) {
              return _this.service.register(currUserId, email);
            }
          }
        }
        return alert("Please set email and/or password");
      } catch (error) {
        return alert(error.message);
      }
    })();
  }
}, _class.ɵfac = function RegisterState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_3__.AuthApi), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__.RegisterService));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions_register__WEBPACK_IMPORTED_MODULE_1__.Register)], RegisterState.prototype, "register", null);
RegisterState = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.State)({
  name: 'register',
  defaults: {
    registerForm: {
      model: {
        email: null,
        password: null,
        cPassword: null
      },
      modified: false,
      status: '',
      errors: {}
    }
  }
})], RegisterState);


/***/ }),

/***/ 11170:
/*!************************************************************************!*\
  !*** ./src/app/states/workout-scheduling/workout-scheduling.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutSchedulingStateModule": () => (/* binding */ WorkoutSchedulingStateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _workout_scheduling_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout-scheduling.state */ 5954);
/* harmony import */ var _auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.api */ 64196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);






// import { AuthApi } from './auth.api';
class WorkoutSchedulingStateModule {}
WorkoutSchedulingStateModule.ɵfac = function WorkoutSchedulingStateModule_Factory(t) {
  return new (t || WorkoutSchedulingStateModule)();
};
WorkoutSchedulingStateModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: WorkoutSchedulingStateModule
});
WorkoutSchedulingStateModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_workout_scheduling_state__WEBPACK_IMPORTED_MODULE_1__.WorkoutSchedulingState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WorkoutSchedulingStateModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 5954:
/*!***********************************************************************!*\
  !*** ./src/app/states/workout-scheduling/workout-scheduling.state.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutSchedulingState": () => (/* binding */ WorkoutSchedulingState)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _actions_workoutSchedule_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../actions/workoutSchedule.action */ 22108);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/router-plugin */ 65417);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _auth_auth_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.api */ 64196);

var _class;










let WorkoutSchedulingState = (_class = class WorkoutSchedulingState {
  constructor(service, store, authApi, navigation) {
    this.service = service;
    this.store = store;
    this.authApi = authApi;
    this.navigation = navigation;
  }
  updateWorkoutAdded(ctx, action) {
    const state = ctx.getState();
    const index = state.findIndex(schedule => schedule.id === action.payload.id);
    if (index !== -1) {
      const updatedSchedule = {
        ...state[index],
        workoutAdded: action.payload.workoutAdded
      };
      ctx.setState([...state.slice(0, index), updatedSchedule, ...state.slice(index + 1)]);
    }
  }
  getWorkoutSchedules(ctx) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentUserId = yield _this.authApi.getCurrentUserId();
      if (currentUserId != null) {
        const request = {
          userId: currentUserId
        };
        return (yield _this.service.getSchedules(request)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(response => {
          ctx.setState({
            ...ctx.getState(),
            schedules: response.schedules
          });
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
          ctx.setState({
            ...ctx.getState(),
            schedules: []
          });
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(error);
        }));
      } else {
        return ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__.Navigate(['home/dashboard']));
      }
    })();
  }
  removeWorkoutSchedule(ctx, {
    payload
  }) {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentUserId = yield _this2.authApi.getCurrentUserId();
      if (currentUserId != null) {
        const request = {
          userId: currentUserId,
          schedule: payload
        };
        const response = yield _this2.service.removeSchedule(request);
        if (response.validate) {
          const schedules = ctx.getState().schedules.filter(schedule => {
            if (schedule.id === request.schedule.id) return false;else return true;
          });
          ctx.patchState({
            schedules: schedules
          });
        } else {
          alert("Sorry, You are no logged in");
          ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__.Navigate(['login']));
        }
      }
    })();
  }
  addWorkoutSchedule(ctx, {
    payload
  }) {
    var _this3 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentUserId = yield _this3.authApi.getCurrentUserId();
      if (currentUserId != null) {
        const request = {
          userId: currentUserId,
          schedule: payload
        };
        const response = yield _this3.service.addSchedule(request);
        ctx.patchState({
          schedules: [response.schedule, ...ctx.getState().schedules]
        });
        _this3.navigation.back();
      } else {
        alert("Sorry, You are no logged in");
        ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__.Navigate(['login']));
      }
    })();
  }
  updateWorkoutSchedule(ctx, {
    payload
  }) {
    var _this4 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentUserId = yield _this4.authApi.getCurrentUserId();
      if (currentUserId != null) {
        const request = {
          userId: currentUserId,
          schedule: payload
        };
        const response = yield _this4.service.updateSchedule(request);
        ctx.patchState({
          schedules: [response.schedule, ...ctx.getState().schedules]
        });
      } else {
        alert("failed to update");
      }
    })();
  }
  loadSchedule(ctx, {
    payload
  }) {
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ctx.setState({
        ...ctx.getState(),
        schedule: payload
      });
    })();
  }
  static returnSchedules(state) {
    return state.schedules;
  }
  static returnSchedule(state) {
    return state.schedule;
  }
}, _class.ɵfac = function WorkoutSchedulingState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_5__.WorkoutscheduleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_auth_auth_api__WEBPACK_IMPORTED_MODULE_6__.AuthApi), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_5__.NavigationService));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_4__.UpdateWorkoutAdded)], WorkoutSchedulingState.prototype, "updateWorkoutAdded", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_4__.GetWorkoutSchedules)], WorkoutSchedulingState.prototype, "getWorkoutSchedules", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_4__.RemoveWorkoutSchedule)], WorkoutSchedulingState.prototype, "removeWorkoutSchedule", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_4__.AddWorkoutSchedule)], WorkoutSchedulingState.prototype, "addWorkoutSchedule", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions__WEBPACK_IMPORTED_MODULE_4__.UpdateWorkoutSchedule)], WorkoutSchedulingState.prototype, "updateWorkoutSchedule", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(_actions_workoutSchedule_action__WEBPACK_IMPORTED_MODULE_1__.LoadSchedule)], WorkoutSchedulingState.prototype, "loadSchedule", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Selector)()], WorkoutSchedulingState, "returnSchedules", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Selector)()], WorkoutSchedulingState, "returnSchedule", null);
WorkoutSchedulingState = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.State)({
  name: "WorkoutSchedule",
  defaults: {
    schedules: [],
    validate: false,
    schedule: null
  }
})], WorkoutSchedulingState);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  firebase: {
    apiKey: "AIzaSyBf88GH4WjxTb4DQz-zeBBUTub0YNVggxA",
    authDomain: "sweatsession.firebaseapp.com",
    databaseURL: "https://sweatsession-default-rtdb.firebaseio.com",
    projectId: "sweatsession",
    storageBucket: "sweatsession.appspot.com",
    messagingSenderId: "1004243117834",
    appId: "1:1004243117834:web:b2cfb934f36e96a76a3cf3",
    measurementId: "G-B4L86PNCV3"
  },
  useEmulators: false,
  production: true
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




// import * as admin from 'firebase-admin';
// admin.initializeApp();
// admin.firestore().settings({ ignoreUndefinedProperties: true });
//export * from '../functions';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  // This line is commented out to allow for debugging in the browser.
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-b8307d99_js-node_modules_ionic_core_dist_esm_th-33339e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-b8307d99_js-node_modules_ionic_core_dist_esm_th-33339e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map