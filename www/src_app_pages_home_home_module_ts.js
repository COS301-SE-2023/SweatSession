"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 96610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 10678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/dashboard'
  }, {
    path: 'messages',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../messages/messages.module */ 25183)).then(m => m.MessagesPageModule)
  }, {
    path: 'dashboard',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_workout-scheduling_workout-scheduling_module_ts"), __webpack_require__.e("src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 71659)).then(m => m.DashboardPageModule)
  }, {
    path: 'search',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../search/search.module */ 20281)).then(m => m.SearchPageModule)
  }, {
    path: 'profile',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_leaderboard_leaderboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../leaderboard/leaderboard.module */ 88487)).then(m => m.LeaderboardPageModule)
  }, {
    path: 'leaderboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_leaderboard_leaderboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../leaderboard/leaderboard.module */ 88487)).then(m => m.LeaderboardPageModule)
  }, {
    path: 'locations',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_locations_locations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../locations/locations.module */ 4452)).then(m => m.LocationsPageModule)
  }, {
    path: 'chatbot',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_chatbot_chatbot_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../chatbot/chatbot.module */ 70896)).then(m => m.ChatbotPageModule)
  }]
}];
class HomePageRoutingModule {}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) {
  return new (t || HomePageRoutingModule)();
};
HomePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HomePageRoutingModule
});
HomePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 96610);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 10678);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);








class HomePageModule {}
HomePageModule.ɵfac = function HomePageModule_Factory(t) {
  return new (t || HomePageModule)();
};
HomePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HomePageModule
});
HomePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_1__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_3__.AuthModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_3__.AuthModule]
  });
})();

/***/ }),

/***/ 10678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services_notifications_noticehome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notifications/noticehome.service */ 24568);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);








class HomePage {
  constructor(nav, noticehomeService, authAPI, setpr, store) {
    this.nav = nav;
    this.noticehomeService = noticehomeService;
    this.authAPI = authAPI;
    this.setpr = setpr;
    this.store = store;
    this.DisplayName$ = "na";
    this.ProfilePicture$ = "na";
    this.getU = {
      userId: 'na'
    };
  }
  ngOnInit() {
    this.authAPI.getCurrentUserId().then(id => {
      this.getU.userId = id;
      this.setpr.getProfile(this.getU).subscribe(profile => {
        this.DisplayName$ = profile.profile.displayName;
        this.ProfilePicture$ = profile.profile.profileURL;
      });
    });
    this.nav.navigateRoot("/home/dashboard");
  }
  userLogout() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_0__.Logout());
  }
  ngAfterContentInit() {
    this.sub = this.noticehomeService.send_data.subscribe(data => {
      console.log(data);
      this.noticeamount = data;
    });
  }
  goToSettings() {
    this.nav.navigateRoot("/settings");
  }
}
HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notifications_noticehome_service__WEBPACK_IMPORTED_MODULE_1__.NoticehomeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__.SetProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HomePage,
  selectors: [["app-home"]],
  decls: 48,
  vars: 3,
  consts: [["contentId", "main-content"], [1, "toolbar"], ["lines", "none", 1, "clickable", 3, "click"], ["name", "settings-outline"], [1, "menu-label"], ["name", "chevron-forward-outline", "slot", "end"], ["name", "log-out-outline"], ["slot", "start"], ["routerLink", "/userprofile", 1, "clickable"], [3, "src"], ["name", "receipt-outline", "routerLink", "/workout-scheduling", "slot", "end", 1, "clickable"], ["color", "success", "slot", "end"], ["name", "notifications-outline", "routerLink", "/notifications", "slot", "end", 1, "clickable"], ["id", "main-content"], ["slot", "bottom"], ["tab", "dashboard"], ["name", "home-outline"], ["tab", "messages"], ["name", "chatbubble-ellipses-outline"], ["tab", "search"], ["name", "search"], ["tab", "leaderboard"], ["name", "bar-chart-outline"], ["tab", "chatbot"], ["name", "logo-ionitron"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-menu", 0)(1, "ion-header")(2, "ion-toolbar", 1)(3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-content")(6, "ion-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePage_Template_ion_item_click_6_listener() {
        return ctx.goToSettings();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Settings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePage_Template_ion_item_click_11_listener() {
        return ctx.userLogout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Logout ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-header")(17, "ion-toolbar", 1)(18, "ion-buttons", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-title")(21, "ion-chip", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-avatar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-badge", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-content", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "ion-router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ion-tabs")(32, "ion-tab-bar", 14)(33, "ion-tab-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-tab-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Messages ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ion-tab-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "ion-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-tab-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "ion-icon", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Boards ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ion-tab-button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "ion-icon", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " chat bot ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.DisplayName$, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.ProfilePicture$, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.noticeamount);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTabs, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.clickable[_ngcontent-%COMP%]:hover {\n  zoom: 1.05;\n  color: aqua;\n}\n\n.clickable[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: transparent;\n  position: relative;\n}\n\nion-avatar[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n}\n\n.menu-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\nion-title[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSw2QkFBQTtBQUNSIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1pY29uIHtcbiAgICB3aWR0aDoyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgem9vbToxLjA1O1xuICAgIGNvbG9yOmFxdWE7XG59XG5cbi5jbGlja2FibGUge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnRvb2xiYXIge1xuICAgIGhlaWdodDo1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgd2lkdGg6MzVweDtcbn1cblxuLm1lbnUtbGFiZWx7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24tY2hpcCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map