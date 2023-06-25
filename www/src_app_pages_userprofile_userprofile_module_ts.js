"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_userprofile_userprofile_module_ts"],{

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

/***/ 31567:
/*!*****************************************************************!*\
  !*** ./src/app/pages/userprofile/userprofile-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserprofilePageRoutingModule": () => (/* binding */ UserprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userprofile.page */ 59911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _userprofile_page__WEBPACK_IMPORTED_MODULE_0__.UserprofilePage
}];
class UserprofilePageRoutingModule {}
UserprofilePageRoutingModule.ɵfac = function UserprofilePageRoutingModule_Factory(t) {
  return new (t || UserprofilePageRoutingModule)();
};
UserprofilePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UserprofilePageRoutingModule
});
UserprofilePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserprofilePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 210:
/*!*********************************************************!*\
  !*** ./src/app/pages/userprofile/userprofile.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserprofilePageModule": () => (/* binding */ UserprofilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userprofile-routing.module */ 31567);
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userprofile.page */ 59911);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives */ 32897);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);









class UserprofilePageModule {}
UserprofilePageModule.ɵfac = function UserprofilePageModule_Factory(t) {
  return new (t || UserprofilePageModule)();
};
UserprofilePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: UserprofilePageModule
});
UserprofilePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserprofilePageRoutingModule, src_app_directives__WEBPACK_IMPORTED_MODULE_3__.BackButtonDirectiveModule, src_app_states__WEBPACK_IMPORTED_MODULE_4__.FriendsStateModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserprofilePageModule, {
    declarations: [_userprofile_page__WEBPACK_IMPORTED_MODULE_1__.UserprofilePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserprofilePageRoutingModule, src_app_directives__WEBPACK_IMPORTED_MODULE_3__.BackButtonDirectiveModule, src_app_states__WEBPACK_IMPORTED_MODULE_4__.FriendsStateModule]
  });
})();

/***/ }),

/***/ 59911:
/*!*******************************************************!*\
  !*** ./src/app/pages/userprofile/userprofile.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserprofilePage": () => (/* binding */ UserprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/backbutton/backbutton.component */ 10957);











class UserprofilePage {
  constructor(Nav, store, modalController, setprofileservices, authApi) {
    this.Nav = Nav;
    this.store = store;
    this.modalController = modalController;
    this.setprofileservices = setprofileservices;
    this.authApi = authApi;
    this.ProfilePicture$ = './assets/img/ProfileSE.png';
    this.displayName$ = 'na';
    this.myBio$ = 'na';
    this.friendsSize = 0;
    this.groups$ = 0;
    this.getUser = {
      userId: 'na'
    };
  }
  getUserid() {
    return this.authApi.getCurrentUserId();
  }
  ngOnInit() {
    this.displayFriendsSize();
    this.getUserid().then(id => {
      this.getUser.userId = id;
      this.setprofileservices.getProfile(this.getUser).subscribe(profile => {
        this.ProfilePicture$ = profile.profile.profileURL;
        this.displayName$ = profile.profile.displayName;
        this.myBio$ = profile.profile.bio;
        // this.friends$ = profile.profile.friends.length;
        // this.groups$ = profile.profile.groups.length;
        if (profile.profile.profileURL == "") {
          this.ProfilePicture$ = 'src/assets/img/ProfileSE.png';
        }
      });
    });
  }
  Leaderboard() {
    this.Nav.navigateRoot('/home/leaderboard');
  }
  Friends() {
    this.Nav.navigateRoot('/friends');
  }
  Groups() {
    this.Nav.navigateRoot('/groups');
  }
  Schedule() {
    this.Nav.navigateRoot('/workout-scheduling');
  }
  displayFriendsSize() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.GetFriendsAction());
    this.friendsSize$.subscribe(response => {
      this.friendsSize = response;
      console.log("number of friends: " + response);
    });
  }
}
UserprofilePage.ɵfac = function UserprofilePage_Factory(t) {
  return new (t || UserprofilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__.SetProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_4__.AuthApi));
};
UserprofilePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: UserprofilePage,
  selectors: [["app-userprofile"]],
  decls: 53,
  vars: 5,
  consts: [["lines", "none"], ["name", "create-outline", "routerLink", "/setprofile", "slot", "end"], [1, "flex-center", "image-container"], ["alt", "logo-image", 1, "image", "rounded-circle", 3, "src"], [1, "flex-center"], [1, "label"], [1, "ion-text-center"], ["size", "6", "routerLink", "/friends"], [1, "title", 2, "margin-left", "40px"], ["size", "6", 3, "click"], [1, "title"], [1, "card"], ["expand", "block", "routerLink", "/fitnessgoals", 1, "button"], ["name", "american-football-outline", "slot", "start"], ["name", "chevron-forward-outline", "slot", "end"], ["expand", "block", "routerLink", "/badges", 1, "button"], ["name", "medal", "slot", "start"], ["expand", "block", "routerLink", "/points", 1, "button"], ["name", "star-outline", "slot", "start"]],
  template: function UserprofilePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-icon", 1)(7, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-content")(10, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ion-img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 4)(13, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p", 4)(16, "ion-card", 6)(17, "ion-card-header")(18, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Bio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-row")(23, "ion-col", 7)(24, "ion-title", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Friends");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserprofilePage_Template_ion_col_click_28_listener() {
        return ctx.Groups();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "ion-title", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Groups");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "br")(34, "br")(35, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 4)(37, "ion-card", 11)(38, "ion-card-content")(39, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Goals");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "ion-card-content")(44, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "\u00A0Badges\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "ion-card-content")(49, "ion-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\u00A0Points\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx.ProfilePicture$);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.displayName$);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.myBio$, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.friendsSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.groups$);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_5__.BackbuttonComponent],
  styles: [".flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: radius 50px;\n}\n\n.flex-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  height: 100%;\n}\n\n.logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 12vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.side-by-side[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.side-by-side[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  text-align: center;\n}\n\n.flex-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: cornflowerblue;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  border-top: 90px;\n}\n\n.rounded-circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 200px;\n  width: 200px;\n}\n\n.button[_ngcontent-%COMP%] {\n  --background: lightgrey;\n  --color:black ;\n}\n\n.card[_ngcontent-%COMP%] {\n  --background:#90CAF3;\n  --color:black;\n  box-shadow: none !important;\n  border: none !important;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 5vh;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background:#90CAF3;\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-top: 10px;\n  width: 80%;\n  margin-left: 0;\n  margin-right: 0;\n  background-color: #90CAF3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBSUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRFI7O0FBUUU7RUFDRSxhQUFBO0FBTEo7O0FBUUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFTQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBTko7O0FBVUE7RUFFSSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBUko7O0FBV0E7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFVQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUFQSjs7QUFXQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFVQTtFQUNJLG9CQUFBO0FBUEo7O0FBa0JBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBZkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jZW50ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogcmFkaXVzIDUwcHg7XG4gICAgXG59XG4uZmxleC1yaWdodHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIFxufVxuXG4ubG9nby1pbWcge1xuICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAxMnZoO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgXG5cbiAgICB9XG4gICAgXG4gIH1cblxuICAuc2lkZS1ieS1zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuc2lkZS1ieS1zaWRlIGlvbi10aXRsZSB7XG4gICAgZmxleC1iYXNpczogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcblxuLmZsZXgtdGV4dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuXG59XG5cbi5pbWFnZS1jb250YWluZXJcbntcbiAgICBib3JkZXItdG9wOiA5MHB4O1xufVxuXG4ucm91bmRlZC1jaXJjbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cbi5idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgLS1jb2xvcjpibGFjayA7XG59XG4uY2FyZHtcbiAgICAtLWJhY2tncm91bmQ6IzkwQ0FGMztcbiAgICAtLWNvbG9yOmJsYWNrO1xuICAgIGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIFxuXG59XG4udGl0bGV7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNXZoO1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiM5MENBRjM7XG59XG4vLyAuaGVhZGVye1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAtLWJhY2tncm91bmQ6bGlnaHRncmV5O1xuLy8gfVxuLy8gaW9uLXRvb2xiYXJ7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOmxpZ2h0Z3JleTtcbi8vIH1cblxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MENBRjM7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.FriendsState.returnFriendsSize)], UserprofilePage.prototype, "friendsSize$", void 0);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_userprofile_userprofile_module_ts.js.map