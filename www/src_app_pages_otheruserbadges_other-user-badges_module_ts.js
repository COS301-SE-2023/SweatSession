"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_otheruserbadges_other-user-badges_module_ts"],{

/***/ 41928:
/*!****************************************************!*\
  !*** ./src/app/actions/otheruserbadges.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetOtherUserBadges": () => (/* binding */ SetOtherUserBadges),
/* harmony export */   "SubscribeToOtherUserBadges": () => (/* binding */ SubscribeToOtherUserBadges)
/* harmony export */ });
class SubscribeToOtherUserBadges {}
SubscribeToOtherUserBadges.type = '[OtherUserBadges] SubscribeToOtherUserBadges';

class SetOtherUserBadges {
  constructor(otherUserBadges) {
    this.otherUserBadges = otherUserBadges;
  }
}
SetOtherUserBadges.type = '[OtherUserBadges] SetOtherUserBadges';


/***/ }),

/***/ 41:
/*!****************************************************************!*\
  !*** ./src/app/pages/otheruserbadges/badge/badge.component.ts ***!
  \****************************************************************/
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
  styles: [".badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 20px;\n  margin-top: 10%;\n}\n\n.badgeHeader[_ngcontent-%COMP%] {\n  font-size: x-large;\n  margin-bottom: 7px;\n}\n\n.badgeDescription[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\nion-img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.received[_ngcontent-%COMP%] {\n  --ion-background-color: #457B9D;\n}\n\n.not-received[_ngcontent-%COMP%] {\n  --ion-background-color: #A8DADC;\n  opacity: 0.8;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n\n.badgeDescription[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb3RoZXJ1c2VyYmFkZ2VzL2JhZGdlL2JhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0ksK0JBQUE7QUFGSjs7QUFLQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlIHtcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYmFkZ2VIZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTAwJTtcbn1cblxuLmJhZGdlRGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbmlvbi1pbWcge1xuICAgIHdpZHRoOiA4MHB4O1xufVxuXG5kaXYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlY2VpdmVkIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDU3QjlEO1xufVxuXG4ubm90LXJlY2VpdmVkIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjQThEQURDO1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5iYWRnZURlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 75415:
/*!***************************************************************************!*\
  !*** ./src/app/pages/otheruserbadges/other-user-badges-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherUserBadgesPageRoutingModule": () => (/* binding */ OtherUserBadgesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _other_user_badges_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-user-badges.page */ 99843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _other_user_badges_page__WEBPACK_IMPORTED_MODULE_0__.OtherUserBadgesPage
}];
class OtherUserBadgesPageRoutingModule {}
OtherUserBadgesPageRoutingModule.ɵfac = function OtherUserBadgesPageRoutingModule_Factory(t) {
  return new (t || OtherUserBadgesPageRoutingModule)();
};
OtherUserBadgesPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: OtherUserBadgesPageRoutingModule
});
OtherUserBadgesPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OtherUserBadgesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 67038:
/*!*******************************************************************!*\
  !*** ./src/app/pages/otheruserbadges/other-user-badges.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherUserBadgesPageModule": () => (/* binding */ OtherUserBadgesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _other_user_badges_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-user-badges-routing.module */ 75415);
/* harmony import */ var _other_user_badges_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other-user-badges.page */ 99843);
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge/badge.component */ 41);
/* harmony import */ var src_app_states_otheruserbadges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states/otheruserbadges */ 77074);
/* harmony import */ var src_app_states_otheruserbadges_otheruserbadges_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/states/otheruserbadges/otheruserbadges.api */ 3999);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);










class OtherUserBadgesPageModule {}
OtherUserBadgesPageModule.ɵfac = function OtherUserBadgesPageModule_Factory(t) {
  return new (t || OtherUserBadgesPageModule)();
};
OtherUserBadgesPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: OtherUserBadgesPageModule
});
OtherUserBadgesPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [src_app_states_otheruserbadges_otheruserbadges_api__WEBPACK_IMPORTED_MODULE_4__.OtherUserBadgesApi, src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_5__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _other_user_badges_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherUserBadgesPageRoutingModule, src_app_states_otheruserbadges__WEBPACK_IMPORTED_MODULE_3__.OtherUserBadgesModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](OtherUserBadgesPageModule, {
    declarations: [_other_user_badges_page__WEBPACK_IMPORTED_MODULE_1__.OtherUserBadgesPage, _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__.BadgeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _other_user_badges_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherUserBadgesPageRoutingModule, src_app_states_otheruserbadges__WEBPACK_IMPORTED_MODULE_3__.OtherUserBadgesModule]
  });
})();

/***/ }),

/***/ 99843:
/*!*****************************************************************!*\
  !*** ./src/app/pages/otheruserbadges/other-user-badges.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherUserBadgesPage": () => (/* binding */ OtherUserBadgesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_app_actions_otheruserbadges_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/actions/otheruserbadges.actions */ 41928);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_states_otheruserbadges_otheruserbadges_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states/otheruserbadges/otheruserbadges.state */ 68491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var src_app_services_badges_badges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/badges/badges.service */ 39038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge/badge.component */ 41);













function OtherUserBadgesPage_badge_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "badge", 7);
  }
  if (rf & 2) {
    const badge_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", badge_r1.header)("receivedDescription", badge_r1.receivedDescription)("notReceivedDescription", badge_r1.notReceivedDescription)("received", badge_r1.received);
  }
}
class OtherUserBadgesPage {
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
    this.store.dispatch(new src_app_actions_otheruserbadges_actions__WEBPACK_IMPORTED_MODULE_0__.SubscribeToOtherUserBadges());
    this.receivedBadges$.pipe(
    // Use the map operator to transform the observable value
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(badges => {
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

OtherUserBadgesPage.ɵfac = function OtherUserBadgesPage_Factory(t) {
  return new (t || OtherUserBadgesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_3__.AuthApi), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_badges_badges_service__WEBPACK_IMPORTED_MODULE_4__.BadgesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
OtherUserBadgesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: OtherUserBadgesPage,
  selectors: [["app-otherbadges"]],
  decls: 8,
  vars: 2,
  consts: [[3, "translucent"], [2, "display", "flex", "align-items", "center"], ["name", "arrow-back-outline", "routerLink", "/userprofile", 2, "font-size", "2rem"], [2, "margin", "0 auto"], [1, "badgesContainer"], [1, "loginGrid"], [3, "name", "receivedDescription", "notReceivedDescription", "received", 4, "ngFor", "ngForOf"], [3, "name", "receivedDescription", "notReceivedDescription", "received"]],
  template: function OtherUserBadgesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "J Badges");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-content", 4)(6, "ion-grid", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, OtherUserBadgesPage_badge_7_Template, 1, 4, "badge", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.badges);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__.BadgeComponent],
  styles: [".badgesContainer[_ngcontent-%COMP%] {\n  --ion-background-color: #F1FAEE;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb3RoZXJ1c2VyYmFkZ2VzL290aGVyLXVzZXItYmFkZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2VzQ29udGFpbmVye1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGMUZBRUU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(src_app_states_otheruserbadges_otheruserbadges_state__WEBPACK_IMPORTED_MODULE_2__.OtherUserBadgesState.currBadges)], OtherUserBadgesPage.prototype, "receivedBadges$", void 0);


/***/ }),

/***/ 77074:
/*!*************************************************!*\
  !*** ./src/app/states/otheruserbadges/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherUserBadgesModule": () => (/* reexport safe */ _otheruserbadges_module__WEBPACK_IMPORTED_MODULE_0__.OtherUserBadgesModule)
/* harmony export */ });
/* harmony import */ var _otheruserbadges_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otheruserbadges.module */ 26158);


/***/ }),

/***/ 3999:
/*!***************************************************************!*\
  !*** ./src/app/states/otheruserbadges/otheruserbadges.api.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherUserBadgesApi": () => (/* binding */ OtherUserBadgesApi)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 75992);




class OtherUserBadgesApi {
  constructor(Nav, firestore) {
    this.Nav = Nav;
    this.firestore = firestore;
  } //, private readonly authObject: Auth, 
  otheruserbadges$(id) {
    const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, `badges/${id}`).withConverter({
      fromFirestore: snapshot => {
        return snapshot.data();
      },
      toFirestore: it => it
    });
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.docData)(docRef, {
      idField: 'id'
    });
  }
}
OtherUserBadgesApi.ɵfac = function OtherUserBadgesApi_Factory(t) {
  return new (t || OtherUserBadgesApi)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore));
};
OtherUserBadgesApi.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OtherUserBadgesApi,
  factory: OtherUserBadgesApi.ɵfac
});


/***/ }),

/***/ 26158:
/*!******************************************************************!*\
  !*** ./src/app/states/otheruserbadges/otheruserbadges.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherUserBadgesModule": () => (/* binding */ OtherUserBadgesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _otheruserbadges_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otheruserbadges.api */ 3999);
/* harmony import */ var _otheruserbadges_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otheruserbadges.state */ 68491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);


// import { AuthState } from './auth.state';




//import { BadgesService } from 'src/app/services/badges/badges.service';
// import { AuthApi } from '../auth/auth.api';
class OtherUserBadgesModule {}
OtherUserBadgesModule.ɵfac = function OtherUserBadgesModule_Factory(t) {
  return new (t || OtherUserBadgesModule)();
};
OtherUserBadgesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: OtherUserBadgesModule
});
OtherUserBadgesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_otheruserbadges_api__WEBPACK_IMPORTED_MODULE_1__.OtherUserBadgesApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_otheruserbadges_state__WEBPACK_IMPORTED_MODULE_2__.OtherUserBadgesState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OtherUserBadgesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 68491:
/*!*****************************************************************!*\
  !*** ./src/app/states/otheruserbadges/otheruserbadges.state.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherUserBadgesState": () => (/* binding */ OtherUserBadgesState)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ 52736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var src_app_actions_otheruserbadges_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/actions/otheruserbadges.actions */ 41928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _otheruserbadges_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otheruserbadges.api */ 3999);

var _class;








let OtherUserBadgesState = (_class = class OtherUserBadgesState {
  constructor(otherUserBadgesApi, store) {
    this.otherUserBadgesApi = otherUserBadgesApi;
    this.store = store;
  }
  static receivedBadges(state) {
    return state.currBadges?.receivedBadges;
  }
  static currBadges(state) {
    return state.currBadges;
  }
  subscribeToOtherUserBadgesState(context) {
    return this.otherUserBadgesApi.otheruserbadges$("FAsfcbCr1PZxDrvFrg2LSFFYu942").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(currBadges => {
      console.log("IN SubscribeToOtherUserBadges");
      console.log(currBadges);
      context.dispatch(new src_app_actions_otheruserbadges_actions__WEBPACK_IMPORTED_MODULE_2__.SetOtherUserBadges(currBadges));
    }));
  }
  setSubscribeToOtherUserBadges(context, {
    otherUserBadges
  }) {
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return context.setState((0,immer__WEBPACK_IMPORTED_MODULE_5__["default"])(repr => {
        repr.currBadges = otherUserBadges;
      }));
    })();
  }
}, _class.ɵfac = function OtherUserBadgesState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_otheruserbadges_api__WEBPACK_IMPORTED_MODULE_3__.OtherUserBadgesApi), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions_otheruserbadges_actions__WEBPACK_IMPORTED_MODULE_2__.SubscribeToOtherUserBadges)], OtherUserBadgesState.prototype, "subscribeToOtherUserBadgesState", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions_otheruserbadges_actions__WEBPACK_IMPORTED_MODULE_2__.SetOtherUserBadges)], OtherUserBadgesState.prototype, "setSubscribeToOtherUserBadges", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], OtherUserBadgesState, "receivedBadges", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], OtherUserBadgesState, "currBadges", null);
OtherUserBadgesState = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.State)({
  name: 'otheruserbadges',
  defaults: {
    currBadges: null
  }
})], OtherUserBadgesState);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_otheruserbadges_other-user-badges_module_ts.js.map