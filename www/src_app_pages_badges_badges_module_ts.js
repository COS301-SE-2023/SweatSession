"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_badges_badges_module_ts"],{

/***/ 51237:
/*!*******************************************!*\
  !*** ./src/app/actions/badges.actions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetBadges": () => (/* binding */ SetBadges),
/* harmony export */   "SubscribeToBadges": () => (/* binding */ SubscribeToBadges)
/* harmony export */ });
class SubscribeToBadges {}
SubscribeToBadges.type = '[Badges] SubscribeToBadges';

class SetBadges {
  constructor(badges) {
    this.badges = badges;
  }
}
SetBadges.type = '[Badges] SetBadges';


/***/ }),

/***/ 3562:
/*!****************************************************!*\
  !*** ./src/app/directives/backbutton.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButtonDirective": () => (/* binding */ BackButtonDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 21866);


class BackButtonDirective {
  constructor(navigation) {
    this.navigation = navigation;
  }
  onClick() {
    this.navigation.back();
  }
}
BackButtonDirective.ɵfac = function BackButtonDirective_Factory(t) {
  return new (t || BackButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.NavigationService));
};
BackButtonDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: BackButtonDirective,
  selectors: [["", "backButton", ""]],
  hostBindings: function BackButtonDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BackButtonDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  }
});


/***/ }),

/***/ 7037:
/*!*************************************************!*\
  !*** ./src/app/directives/backbutton.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButtonDirectiveModule": () => (/* binding */ BackButtonDirectiveModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backbutton/backbutton.component */ 10957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);





class BackButtonDirectiveModule {}
BackButtonDirectiveModule.ɵfac = function BackButtonDirectiveModule_Factory(t) {
  return new (t || BackButtonDirectiveModule)();
};
BackButtonDirectiveModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: BackButtonDirectiveModule
});
BackButtonDirectiveModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BackButtonDirectiveModule, {
    declarations: [_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_0__.BackbuttonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule],
    exports: [_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_0__.BackbuttonComponent]
  });
})();

/***/ }),

/***/ 32897:
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButtonDirective": () => (/* reexport safe */ _backbutton_directive__WEBPACK_IMPORTED_MODULE_0__.BackButtonDirective),
/* harmony export */   "BackButtonDirectiveModule": () => (/* reexport safe */ _backbutton_module__WEBPACK_IMPORTED_MODULE_1__.BackButtonDirectiveModule)
/* harmony export */ });
/* harmony import */ var _backbutton_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backbutton.directive */ 3562);
/* harmony import */ var _backbutton_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backbutton.module */ 7037);



/***/ }),

/***/ 13501:
/*!*******************************************************!*\
  !*** ./src/app/pages/badges/badge/badge.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeComponent": () => (/* binding */ BadgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 75992);



const _c0 = function (a0, a1) {
  return {
    "received": a0,
    "not-received": a1
  };
};
class BadgeComponent {
  constructor() {}
  ngOnInit() {}
}
BadgeComponent.ɵfac = function BadgeComponent_Factory(t) {
  return new (t || BadgeComponent)();
};
BadgeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BadgeComponent,
  selectors: [["badge"]],
  inputs: {
    name: "name",
    receivedDescription: "receivedDescription",
    notReceivedDescription: "notReceivedDescription",
    received: "received"
  },
  decls: 11,
  vars: 6,
  consts: [[1, "badge", 3, "ngClass"], ["size", "auto"], ["src", "assets/badge0.png"], [1, "content"], [1, "badgeHeader"], [1, "badgeDescription"]],
  template: function BadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 0)(1, "ion-item")(2, "ion-grid")(3, "ion-row")(4, "ion-col", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 3)(7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.received, !ctx.received));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.received ? ctx.receivedDescription : ctx.notReceivedDescription);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow],
  styles: [".badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 20px;\n  margin-top: 10%;\n}\n\n.badgeHeader[_ngcontent-%COMP%] {\n  font-size: x-large;\n  margin-bottom: 7px;\n}\n\n.badgeDescription[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\nion-img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.received[_ngcontent-%COMP%] {\n  --ion-background-color: #457B9D;\n}\n\n.not-received[_ngcontent-%COMP%] {\n  --ion-background-color: #A8DADC;\n  opacity: 0.8;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n\n.badgeDescription[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYmFkZ2VzL2JhZGdlL2JhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0ksK0JBQUE7QUFGSjs7QUFLQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlIHtcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYmFkZ2VIZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTAwJTtcbn1cblxuLmJhZGdlRGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbmlvbi1pbWcge1xuICAgIHdpZHRoOiA4MHB4O1xufVxuXG5kaXYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlY2VpdmVkIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xufVxuXG4ubm90LXJlY2VpdmVkIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjQThEQURDO1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5iYWRnZURlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 64821:
/*!*******************************************************!*\
  !*** ./src/app/pages/badges/badges-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesPageRoutingModule": () => (/* binding */ BadgesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _badges_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badges.page */ 10392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _badges_page__WEBPACK_IMPORTED_MODULE_0__.BadgesPage
}];
class BadgesPageRoutingModule {}
BadgesPageRoutingModule.ɵfac = function BadgesPageRoutingModule_Factory(t) {
  return new (t || BadgesPageRoutingModule)();
};
BadgesPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: BadgesPageRoutingModule
});
BadgesPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BadgesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 11579:
/*!***********************************************!*\
  !*** ./src/app/pages/badges/badges.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesPageModule": () => (/* binding */ BadgesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _badges_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badges-routing.module */ 64821);
/* harmony import */ var src_app_states_badges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/states/badges */ 5675);
/* harmony import */ var _badges_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badges.page */ 10392);
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge/badge.component */ 13501);
/* harmony import */ var src_app_states_badges_badges_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/states/badges/badges.api */ 77836);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/directives */ 32897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);











class BadgesPageModule {}
BadgesPageModule.ɵfac = function BadgesPageModule_Factory(t) {
  return new (t || BadgesPageModule)();
};
BadgesPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: BadgesPageModule
});
BadgesPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [src_app_states_badges_badges_api__WEBPACK_IMPORTED_MODULE_4__.BadgesApi, src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_5__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _badges_routing_module__WEBPACK_IMPORTED_MODULE_0__.BadgesPageRoutingModule, src_app_states_badges__WEBPACK_IMPORTED_MODULE_1__.BadgesModule, src_app_directives__WEBPACK_IMPORTED_MODULE_6__.BackButtonDirectiveModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](BadgesPageModule, {
    declarations: [_badges_page__WEBPACK_IMPORTED_MODULE_2__.BadgesPage, _badge_badge_component__WEBPACK_IMPORTED_MODULE_3__.BadgeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _badges_routing_module__WEBPACK_IMPORTED_MODULE_0__.BadgesPageRoutingModule, src_app_states_badges__WEBPACK_IMPORTED_MODULE_1__.BadgesModule, src_app_directives__WEBPACK_IMPORTED_MODULE_6__.BackButtonDirectiveModule]
  });
})();

/***/ }),

/***/ 10392:
/*!*********************************************!*\
  !*** ./src/app/pages/badges/badges.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesPage": () => (/* binding */ BadgesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_app_actions_badges_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/actions/badges.actions */ 51237);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_states_badges_badges_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states/badges/badges.state */ 99903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var src_app_services_badges_badges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/badges/badges.service */ 39038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/backbutton/backbutton.component */ 10957);
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge/badge.component */ 13501);













function BadgesPage_badge_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "badge", 6);
  }
  if (rf & 2) {
    const badge_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", badge_r1.header)("receivedDescription", badge_r1.receivedDescription)("notReceivedDescription", badge_r1.notReceivedDescription)("received", badge_r1.received);
  }
}
class BadgesPage {
  constructor(
  // private badgesApi: BadgesApi,
  authApi, badgesService, store) {
    this.authApi = authApi;
    this.badgesService = badgesService;
    this.store = store;
    this.badges = [{
      header: "Starter's Success",
      receivedDescription: "Congratulations! You have completed your first workout plan",
      notReceivedDescription: "Complete a workout plan to earn this badge",
      received: false
    }, {
      header: "Socialite",
      receivedDescription: "Congratulations! You have made 5 workout partners",
      notReceivedDescription: "Make 5 friends to earn this badge",
      received: false
    }, {
      header: "Stretching Star",
      receivedDescription: "Congratulations! You have incorporated stretching exercises into your workout plan",
      notReceivedDescription: "Incorporate stretching exercises into your workout plan",
      received: false
    }, {
      header: "Record Breaker",
      receivedDescription: "Congratulations! You have reached a new personal best for bench presses",
      notReceivedDescription: "Reach a new personal best for bench presses to earn this badge",
      received: false
    }, {
      header: "Workout Warrior",
      receivedDescription: "Congratulations! You have attended 20 workout sessions",
      notReceivedDescription: "Attend 20 workout sessions to earn this badge",
      received: false
    }, {
      header: "Dynamic Duo",
      receivedDescription: "Congratulations! You have completed 50 workout sessions with a friend",
      notReceivedDescription: "Complete 50 workout sessions with a friend to earn this badge",
      received: false
    }, {
      header: "Push-Up Pro",
      receivedDescription: "Congratulations! You did 100 push-ups in a day",
      notReceivedDescription: "Do 100 push-ups in a day to earn this badge",
      received: false
    }, {
      header: "Active Adventurer",
      receivedDescription: "Congratulations! You did a workout session at 5 gyms",
      notReceivedDescription: "Do a workout session at 5 gyms to earn this badge",
      received: false
    }];
  }
  ngOnInit() {
    this.store.dispatch(new src_app_actions_badges_actions__WEBPACK_IMPORTED_MODULE_0__.SubscribeToBadges());
    this.receivedBadges$.pipe(
    // Use the map operator to transform the observable value
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(badges => {
      if (badges) {
        return badges.receivedBadges;
      } else {
        return []; // Return an empty array if badges is null
      }
    })).subscribe(receivedBadges => {
      // Iterate through the receivedBadges array
      receivedBadges.forEach(badgeNumber => {
        this.badges[badgeNumber.valueOf()].received = true;
        console.log(badgeNumber);
        // Perform any other operations with each badge number
      });
    });
  }
}

BadgesPage.ɵfac = function BadgesPage_Factory(t) {
  return new (t || BadgesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_3__.AuthApi), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_badges_badges_service__WEBPACK_IMPORTED_MODULE_4__.BadgesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
BadgesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: BadgesPage,
  selectors: [["app-badges"]],
  decls: 8,
  vars: 2,
  consts: [[3, "translucent"], [2, "display", "flex", "align-items", "center"], [2, "margin-left", "1rem"], [1, "badgesContainer"], [1, "loginGrid"], [3, "name", "receivedDescription", "notReceivedDescription", "received", 4, "ngFor", "ngForOf"], [3, "name", "receivedDescription", "notReceivedDescription", "received"]],
  template: function BadgesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Badges");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-content", 3)(6, "ion-grid", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, BadgesPage_badge_7_Template, 1, 4, "badge", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.badges);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_5__.BackbuttonComponent, _badge_badge_component__WEBPACK_IMPORTED_MODULE_6__.BadgeComponent],
  styles: [".badgesContainer[_ngcontent-%COMP%] {\n  --ion-background-color: #F1FAEE;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --highlight-height: 0;\n  --inner-border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYmFkZ2VzL2JhZGdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKOztBQU1BO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlc0NvbnRhaW5lcntcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRjFGQUVFO1xufVxuXG5pb24taWNvbntcbiAgICAvLyAtLWlvbi13aWR0aDogMzBweDtcbn1cblxuaW9uLWl0ZW17XG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(src_app_states_badges_badges_state__WEBPACK_IMPORTED_MODULE_2__.BadgesState.currBadges)], BadgesPage.prototype, "receivedBadges$", void 0);


/***/ }),

/***/ 77836:
/*!*********************************************!*\
  !*** ./src/app/states/badges/badges.api.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesApi": () => (/* binding */ BadgesApi)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _auth_auth_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.api */ 64196);






// import { AuthState } from 'src/app/states/auth';
class BadgesApi {
  constructor(Nav, firestore, authApi) {
    this.Nav = Nav;
    this.firestore = firestore;
    this.authApi = authApi;
  } //, private readonly authObject: Auth, 
  badges$() {
    // const id = this.authApi.getCurrentUserId();
    const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    // alert(AuthState.currUserId);
    // alert("IN badges.api.ts");
    // alert(currUserId);
    const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, `badges/${this.currUserId}`).withConverter({
      fromFirestore: snapshot => {
        return snapshot.data();
      },
      toFirestore: it => it
    });
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.docData)(docRef, {
      idField: 'id'
    });
  }
}
BadgesApi.ɵfac = function BadgesApi_Factory(t) {
  return new (t || BadgesApi)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_auth_api__WEBPACK_IMPORTED_MODULE_0__.AuthApi));
};
BadgesApi.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BadgesApi,
  factory: BadgesApi.ɵfac
});


/***/ }),

/***/ 79101:
/*!************************************************!*\
  !*** ./src/app/states/badges/badges.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesModule": () => (/* binding */ BadgesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _badges_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badges.api */ 77836);
/* harmony import */ var _badges_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badges.state */ 99903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);


// import { AuthState } from './auth.state';




//import { BadgesService } from 'src/app/services/badges/badges.service';
// import { AuthApi } from '../auth/auth.api';
class BadgesModule {}
BadgesModule.ɵfac = function BadgesModule_Factory(t) {
  return new (t || BadgesModule)();
};
BadgesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: BadgesModule
});
BadgesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_badges_api__WEBPACK_IMPORTED_MODULE_1__.BadgesApi] //BadgesService
  ,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_badges_state__WEBPACK_IMPORTED_MODULE_2__.BadgesState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BadgesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 99903:
/*!***********************************************!*\
  !*** ./src/app/states/badges/badges.state.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesState": () => (/* binding */ BadgesState)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ 52736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var src_app_actions_badges_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/actions/badges.actions */ 51237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _badges_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badges.api */ 77836);

var _class;








let BadgesState = (_class = class BadgesState {
  constructor(badgesApi, store) {
    this.badgesApi = badgesApi;
    this.store = store;
  }
  static receivedBadges(state) {
    return state.currBadges?.receivedBadges;
  }
  static currBadges(state) {
    return state.currBadges;
  }
  subscribeToBadgesState(context) {
    return this.badgesApi.badges$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(currBadges => {
      console.log("IN subscribeToBadges");
      console.log(currBadges);
      context.dispatch(new src_app_actions_badges_actions__WEBPACK_IMPORTED_MODULE_2__.SetBadges(currBadges));
    }));
  }
  setBadges(context, {
    badges
  }) {
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return context.setState((0,immer__WEBPACK_IMPORTED_MODULE_5__["default"])(repr => {
        repr.currBadges = badges;
      }));
    })();
  }
}, _class.ɵfac = function BadgesState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_badges_api__WEBPACK_IMPORTED_MODULE_3__.BadgesApi), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions_badges_actions__WEBPACK_IMPORTED_MODULE_2__.SubscribeToBadges)], BadgesState.prototype, "subscribeToBadgesState", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions_badges_actions__WEBPACK_IMPORTED_MODULE_2__.SetBadges)], BadgesState.prototype, "setBadges", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], BadgesState, "receivedBadges", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], BadgesState, "currBadges", null);
BadgesState = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.State)({
  name: 'badges',
  defaults: {
    currBadges: null
  }
})], BadgesState);


/***/ }),

/***/ 5675:
/*!****************************************!*\
  !*** ./src/app/states/badges/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesModule": () => (/* reexport safe */ _badges_module__WEBPACK_IMPORTED_MODULE_0__.BadgesModule)
/* harmony export */ });
/* harmony import */ var _badges_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badges.module */ 79101);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_badges_badges_module_ts.js.map