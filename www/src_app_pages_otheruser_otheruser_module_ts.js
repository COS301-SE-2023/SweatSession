"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_otheruser_otheruser_module_ts"],{

/***/ 50931:
/*!*************************************************************!*\
  !*** ./src/app/pages/otheruser/otheruser-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtheruserPageRoutingModule": () => (/* binding */ OtheruserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _otheruser_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otheruser.page */ 7128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _otheruser_page__WEBPACK_IMPORTED_MODULE_0__.OtheruserPage
}];
class OtheruserPageRoutingModule {}
OtheruserPageRoutingModule.ɵfac = function OtheruserPageRoutingModule_Factory(t) {
  return new (t || OtheruserPageRoutingModule)();
};
OtheruserPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: OtheruserPageRoutingModule
});
OtheruserPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OtheruserPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 88744:
/*!*****************************************************!*\
  !*** ./src/app/pages/otheruser/otheruser.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtheruserPageModule": () => (/* binding */ OtheruserPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _otheruser_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otheruser-routing.module */ 50931);
/* harmony import */ var _otheruser_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otheruser.page */ 7128);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./friends/friends.component */ 42905);
/* harmony import */ var _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedules/schedules.component */ 47087);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/directives */ 32897);
/* harmony import */ var _workout_scheduling_workout_scheduling_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workout-scheduling/workout-scheduling.module */ 40325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);








//import { ScheduleContentModule } from "../workout-scheduling/schedulecontent/schedule-content.module";




class OtheruserPageModule {}
OtheruserPageModule.ɵfac = function OtheruserPageModule_Factory(t) {
  return new (t || OtheruserPageModule)();
};
OtheruserPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: OtheruserPageModule
});
OtheruserPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _otheruser_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtheruserPageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_2__.OtheruserStateModule, _workout_scheduling_workout_scheduling_module__WEBPACK_IMPORTED_MODULE_6__.WorkoutSchedulingPageModule, src_app_states__WEBPACK_IMPORTED_MODULE_2__.WorkoutSchedulingStateModule, src_app_directives__WEBPACK_IMPORTED_MODULE_5__.BackButtonDirectiveModule, src_app_states__WEBPACK_IMPORTED_MODULE_2__.AuthModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](OtheruserPageModule, {
    declarations: [_otheruser_page__WEBPACK_IMPORTED_MODULE_1__.OtheruserPage, _friends_friends_component__WEBPACK_IMPORTED_MODULE_3__.FriendsComponent, _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_4__.SchedulesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _otheruser_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtheruserPageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_2__.OtheruserStateModule, _workout_scheduling_workout_scheduling_module__WEBPACK_IMPORTED_MODULE_6__.WorkoutSchedulingPageModule, src_app_states__WEBPACK_IMPORTED_MODULE_2__.WorkoutSchedulingStateModule, src_app_directives__WEBPACK_IMPORTED_MODULE_5__.BackButtonDirectiveModule, src_app_states__WEBPACK_IMPORTED_MODULE_2__.AuthModule]
  });
})();

/***/ }),

/***/ 7128:
/*!***************************************************!*\
  !*** ./src/app/pages/otheruser/otheruser.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtheruserPage": () => (/* binding */ OtheruserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ 16818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_services_notifications_notice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notifications/notice.service */ 86193);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/backbutton/backbutton.component */ 10957);











function OtheruserPage_ion_header_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "backbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translucent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.user.name);
  }
}
function OtheruserPage_ion_content_1_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OtheruserPage_ion_content_1_ion_button_7_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.removeFriend());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " remove friend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OtheruserPage_ion_content_1_ion_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OtheruserPage_ion_content_1_ion_button_8_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.addFriend());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " add friend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OtheruserPage_ion_content_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 3)(1, "ion-card", 4)(2, "ion-item")(3, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, OtheruserPage_ion_content_1_ion_button_7_Template, 3, 0, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, OtheruserPage_ion_content_1_ion_button_8_Template, 3, 0, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-card")(12, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OtheruserPage_ion_content_1_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.viewSchedules());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-card")(19, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OtheruserPage_ion_content_1_Template_ion_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.viewFriends());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r1.user.profileURL, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.friendshipStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.friendshipStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.user.bio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.workoutSchedules.length, " WorkoutSchedules");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.friends.length, " Friends");
  }
}
class OtheruserPage {
  constructor(store, noticeService, nav) {
    this.store = store;
    this.noticeService = noticeService;
    this.nav = nav;
    this.friends = [];
    this.workoutSchedules = [];
    this.auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
    this.currUserId = this.auth.currentUser?.uid;
  }
  ngOnInit() {
    this.displayUserInfo();
    this.displayCurrentUser(this.currUserId);
  }
  removeFriend() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.RemoveFriendAction(this.friendModel()));
    this.date = new Date().toTimeString();
    console.log(this.date.split(':', 2));
    this.shortdate = this.date.split(':', 2);
    this.createNotifications(this.currusername, this.shortdate[0] + ':' + this.shortdate[1], "Removed you as a Friend!");
  }
  addFriend() {
    if (this.user != null) {
      this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.AddFriendAction(this.friendModel()));
      console.log(this.user.userId);
    } else console.log("User is null.....");
    this.date = new Date().toTimeString();
    this.shortdate = this.date.split(':', 2);
    this.createNotifications(this.currusername, this.shortdate[0] + ':' + this.shortdate[1], "Requested to friend you!");
  }
  viewSchedules() {
    this.nav.navigateRoot("otheruserSchedules");
  }
  viewFriends() {
    this.nav.navigateRoot("/otheruserFriends");
  }
  displayCurrentUser(id) {
    this.noticeService.getTheNoticeProfile().subscribe(profiles => {
      this.profileList = profiles;
      console.log('Number of PROFILES:', this.profileList.length);
      for (let i = 0; i < this.profileList.length; i++) {
        if (this.profileList[i].id == this.currUserId) {
          this.currusername = this.profileList[i].displayName;
          console.log(this.currusername);
        }
      }
    });
  }
  displayUserInfo() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.LoadOtherUserProfile());
    this.user$.subscribe(response => {
      this.user = response;
    });
    this.friendshipStatus$.subscribe(response => {
      this.friendshipStatus = response;
    });
    this.displayFriends();
    this.displayWorkoutSchedules();
  }
  displayFriends() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.GetOtheruserFriends());
    this.friends$.subscribe(response => {
      this.friends = response;
    });
  }
  displayWorkoutSchedules() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.GetOtheruserSchedules());
    this.schedules$.subscribe(response => {
      this.workoutSchedules = response;
    });
  }
  friendModel() {
    let model = {
      userId: this.user.userId,
      profileURL: this.user.profileURL,
      name: this.user.name
    };
    return model;
  }
  backtoPreviousPage() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.RemoveUser());
  }
  createNotifications(sendername, sentdate, message) {
    this.noticeService.createNotices(sendername, sentdate, message, this.user.userId);
  }
}
OtheruserPage.ɵfac = function OtheruserPage_Factory(t) {
  return new (t || OtheruserPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_notifications_notice_service__WEBPACK_IMPORTED_MODULE_4__.NoticeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController));
};
OtheruserPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: OtheruserPage,
  selectors: [["app-otheruser"]],
  decls: 2,
  vars: 2,
  consts: [[3, "translucent", 4, "ngIf"], [3, "fullscreen", 4, "ngIf"], [3, "translucent"], [3, "fullscreen"], [1, "otheruser-profile"], [3, "src"], ["id", "userName"], ["slot", "end", 3, "click", 4, "ngIf"], ["id", "userBio"], ["name", "barbell-outline"], ["slot", "end", 3, "click"], ["name", "people-outline"], ["name", "person-outline"]],
  template: function OtheruserPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, OtheruserPage_ion_header_0_Template, 6, 2, "ion-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OtheruserPage_ion_content_1_Template, 25, 8, "ion-content", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.user != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.user != null);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_5__.BackbuttonComponent],
  styles: [".otheruser-profile[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n}\n.otheruser-profile[_ngcontent-%COMP%]   #userName[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: lightblue;\n  transition: bottom 2s;\n  overflow-y: auto;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --highlight-height: 0;\n  --inner-border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb3RoZXJ1c2VyL290aGVydXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQURaO0FBS0k7RUFDSSxlQUFBO0FBSFI7O0FBT0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0FBSkoiLCJzb3VyY2VzQ29udGVudCI6WyIub3RoZXJ1c2VyLXByb2ZpbGUge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3VzZXJOYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMnM7XG4gICAgb3ZlcmZsb3cteTphdXRvO1xufVxuXG5pb24taXRlbXtcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.OtheruserState.returnOtherUserProfile)], OtheruserPage.prototype, "user$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.OtheruserState.returnOtherUserProfile)], OtheruserPage.prototype, "curruser$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.OtheruserState.returnOtherUserFriends)], OtheruserPage.prototype, "friends$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.OtheruserState.returnOtherUserSchedules)], OtheruserPage.prototype, "schedules$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.OtheruserState.returnFriendshipStatus)], OtheruserPage.prototype, "friendshipStatus$", void 0);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_otheruser_otheruser_module_ts.js.map