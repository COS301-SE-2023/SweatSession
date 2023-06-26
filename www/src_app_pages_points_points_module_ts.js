"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_points_points_module_ts"],{

/***/ 28226:
/*!*******************************************!*\
  !*** ./src/app/actions/points.actions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetPoints": () => (/* binding */ SetPoints),
/* harmony export */   "SubscribeToPoints": () => (/* binding */ SubscribeToPoints)
/* harmony export */ });
class SubscribeToPoints {}
SubscribeToPoints.type = '[Points] SubscribeToPoints';

class SetPoints {
  constructor(points) {
    this.points = points;
  }
}
SetPoints.type = '[Points] SetPoints';


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

/***/ 99275:
/*!*******************************************************!*\
  !*** ./src/app/pages/points/points-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsPageRoutingModule": () => (/* binding */ PointsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _points_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points.page */ 88847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _points_page__WEBPACK_IMPORTED_MODULE_0__.PointsPage
}];
class PointsPageRoutingModule {}
PointsPageRoutingModule.ɵfac = function PointsPageRoutingModule_Factory(t) {
  return new (t || PointsPageRoutingModule)();
};
PointsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PointsPageRoutingModule
});
PointsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PointsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 89807:
/*!***********************************************!*\
  !*** ./src/app/pages/points/points.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsPageModule": () => (/* binding */ PointsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _points_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points-routing.module */ 99275);
/* harmony import */ var src_app_states_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/states/points */ 74560);
/* harmony import */ var _points_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./points.page */ 88847);
/* harmony import */ var src_app_states_points_points_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states/points/points.api */ 71731);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/directives */ 32897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);










class PointsPageModule {}
PointsPageModule.ɵfac = function PointsPageModule_Factory(t) {
  return new (t || PointsPageModule)();
};
PointsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: PointsPageModule
});
PointsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [src_app_states_points_points_api__WEBPACK_IMPORTED_MODULE_3__.PointsApi, src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_4__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _points_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointsPageRoutingModule, src_app_states_points__WEBPACK_IMPORTED_MODULE_1__.PointsModule, src_app_directives__WEBPACK_IMPORTED_MODULE_5__.BackButtonDirectiveModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PointsPageModule, {
    declarations: [_points_page__WEBPACK_IMPORTED_MODULE_2__.PointsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _points_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointsPageRoutingModule, src_app_states_points__WEBPACK_IMPORTED_MODULE_1__.PointsModule, src_app_directives__WEBPACK_IMPORTED_MODULE_5__.BackButtonDirectiveModule]
  });
})();

/***/ }),

/***/ 88847:
/*!*********************************************!*\
  !*** ./src/app/pages/points/points.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsPage": () => (/* binding */ PointsPage)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_actions_points_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/actions/points.actions */ 28226);
/* harmony import */ var src_app_states_points_points_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states/points/points.state */ 31703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/backbutton/backbutton.component */ 10957);











function PointsPage_ion_content_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 4)(1, "ion-grid", 5)(2, "ion-item", 6)(3, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 8)(6, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-item", 11)(10, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Complete Your Workout Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 13)(13, "ion-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "0/1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ion-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-item", 17)(19, "ion-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 19)(22, "ion-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "ion-img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "View Workout Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ion-item", 23)(28, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Attend 3 Workout Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 13)(31, "ion-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "1/3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "ion-progress-bar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-item", 17)(37, "ion-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "span", 19)(40, "ion-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "75");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "ion-img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "View Gym Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ion-item", 23)(46, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Complete a fitness goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 13)(49, "ion-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "0/1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "ion-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ion-item", 17)(55, "ion-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "span", 19)(58, "ion-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "100");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "ion-img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "View Fitness Goals");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const points_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](points_r1.userPoints);
  }
}
class PointsPage {
  constructor(alertController, store) {
    this.alertController = alertController;
    this.store = store;
  }
  ngOnInit() {
    this.store.dispatch(new src_app_actions_points_actions__WEBPACK_IMPORTED_MODULE_2__.SubscribeToPoints());
  }
  showWorkoutPlanPopup() {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Congratulations!',
        message: 'You earned 50 points for completing your workout plan.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  showGymSchedulePopup() {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: 'Congratulations!',
        message: 'You earned 75 points for attending 3 workout sessions.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  showFitnessGoalPopup() {
    var _this3 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Congratulations!',
        message: 'You earned 100 points for completing your fitness goal.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
}
PointsPage.ɵfac = function PointsPage_Factory(t) {
  return new (t || PointsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
PointsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PointsPage,
  selectors: [["app-points"]],
  decls: 8,
  vars: 4,
  consts: [[3, "translucent"], ["lines", "none"], [2, "margin-left", "0rem"], ["class", "pointsContainer", 4, "ngIf"], [1, "pointsContainer"], [1, "pointsGrid"], [1, "userPointsSection"], [1, "userPointsNumber"], [1, "userPointsContent"], [1, "userPointsNumberValue"], ["src", "assets/sweatSessionPoint.png", 1, "userPointsImg"], [1, "workoutPlanPointsSection"], [1, "pointsHeader", 2, "margin", "None"], [1, "progressContainer"], [1, "progressHeader"], [1, "progressText"], ["value", "0.0", 1, "custom-progress-bar", 2, "--ion-color-primary", "var(--custom-red)"], [1, "wpPointsSection"], [1, "workoutPlanPoints"], [1, "workoutPlanPointsContent"], [1, "wpNumberValue"], ["src", "assets/sweatSessionPoint.png", 1, "wpPointsImg"], ["routerLink", "/plans"], [1, "workoutSessionPointsSection"], ["value", "0.3333", 1, "custom-progress-bar", 2, "--ion-color-primary", "var(--custom-red)"], ["routerLink", "/sessions"], ["routerLink", "/goals"]],
  template: function PointsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Points");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PointsPage_ion_content_6_Template, 63, 1, "ion-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 2, ctx.points$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_4__.BackbuttonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["[_ngcontent-%COMP%]:root {\n  --custom-red: #FF0000; \n}\n\n.pointsContainer[_ngcontent-%COMP%] {\n  --ion-background-color: #F1FAEE;\n}\n\nion-item.userPointsSection[_ngcontent-%COMP%]::part(native) {\n  --background: #1D3557;\n  --border-radius: 15px;\n  color: white;\n  margin: 0 auto;\n  width: calc(100% - 30px);\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.userPointsContent[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  border-radius: 15px;\n}\n\n.userPointsNumber[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.userPointsNumberValue[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.userPointsImg[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\nion-item.workoutPlanPointsSection[_ngcontent-%COMP%]::part(native) {\n  --background: #1D3557;\n  --border-radius: 15px;\n  color: white;\n  margin: 0 auto;\n  width: calc(100% - 30px);\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.pointsHeader[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.progressText[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-bottom: 0;\n}\n\n.progressHeader[_ngcontent-%COMP%], .pointsLabelHeader[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-right: auto;\n}\n\n.progressHeader[_ngcontent-%COMP%] {\n  margin-right: 30%;\n  margin-left: 10%;\n}\n\nion-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  --background: #457B9D;\n  --background-hover: #457B9D;\n  --color: white;\n  font-size: 25px;\n  height: 40px;\n  --border-radius: 15px;\n}\n\n.progressContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: auto;\n}\n\n.custom-progress-bar[_ngcontent-%COMP%] {\n  --background: #E63946;\n  --progress-background: #A8DADC;\n  width: 100%;\n  height: 20px;\n  border-radius: 10px;\n}\n\n.workoutPlanPoints[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.workoutPlanPointsContent[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  justify-content: space-between;\n}\n\n.wpPointsSection[_ngcontent-%COMP%] {\n  width: 100%;\n  --background: #1D3557;\n  --border-color: #1D3557;\n  color: white;\n}\n\n.wpNumberValue[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.userPointsNumberValue[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.wpPointsImg[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\nion-item.workoutSessionPointsSection[_ngcontent-%COMP%]::part(native) {\n  --background: #1D3557;\n  --border-radius: 15px;\n  color: white;\n  margin: 0 auto;\n  width: calc(100% - 30px);\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --highlight-height: 0;\n  --inner-border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcG9pbnRzL3BvaW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQSxFQUFBLDJDQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBOztFQUVJLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7RUFDRiwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0YsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0ksZUFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7QUFISiIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLWN1c3RvbS1yZWQ6ICNGRjAwMDA7IC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgc2hhZGUgb2YgcmVkICovXG4gIH1cblxuLnBvaW50c0NvbnRhaW5lciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0YxRkFFRTtcbn1cblxuaW9uLWl0ZW0udXNlclBvaW50c1NlY3Rpb246OnBhcnQobmF0aXZlKSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMUQzNTU3O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnVzZXJQb2ludHNDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnVzZXJQb2ludHNOdW1iZXIge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnVzZXJQb2ludHNOdW1iZXJWYWx1ZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4udXNlclBvaW50c0ltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbmlvbi1pdGVtLndvcmtvdXRQbGFuUG9pbnRzU2VjdGlvbjo6cGFydChuYXRpdmUpIHtcbiAgICAtLWJhY2tncm91bmQ6ICMxRDM1NTc7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9pbnRzSGVhZGVyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4vLyAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucHJvZ3Jlc3NUZXh0IHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG5cbi5wcm9ncmVzc0hlYWRlcixcbi5wb2ludHNMYWJlbEhlYWRlciB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnByb2dyZXNzSGVhZGVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDU3QjlEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM0NTdCOUQ7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ucHJvZ3Jlc3NDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY3VzdG9tLXByb2dyZXNzLWJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRTYzOTQ2O1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogI0E4REFEQztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLndvcmtvdXRQbGFuUG9pbnRze1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLndvcmtvdXRQbGFuUG9pbnRzQ29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLndwUG9pbnRzU2VjdGlvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJhY2tncm91bmQ6ICMxRDM1NTc7XG4gICAgLS1ib3JkZXItY29sb3I6ICMxRDM1NTc7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ud3BOdW1iZXJWYWx1ZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4udXNlclBvaW50c051bWJlclZhbHVlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbi53cFBvaW50c0ltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbmlvbi1pdGVtLndvcmtvdXRTZXNzaW9uUG9pbnRzU2VjdGlvbjo6cGFydChuYXRpdmUpIHtcbiAgICAtLWJhY2tncm91bmQ6ICMxRDM1NTc7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbXtcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(src_app_states_points_points_state__WEBPACK_IMPORTED_MODULE_3__.PointsState.points)], PointsPage.prototype, "points$", void 0);


/***/ }),

/***/ 74560:
/*!****************************************!*\
  !*** ./src/app/states/points/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsModule": () => (/* reexport safe */ _points_module__WEBPACK_IMPORTED_MODULE_0__.PointsModule)
/* harmony export */ });
/* harmony import */ var _points_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points.module */ 54381);


/***/ }),

/***/ 71731:
/*!*********************************************!*\
  !*** ./src/app/states/points/points.api.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsApi": () => (/* binding */ PointsApi)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _auth_auth_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.api */ 64196);






class PointsApi {
  constructor(Nav, firestore, authApi) {
    this.Nav = Nav;
    this.firestore = firestore;
    this.authApi = authApi;
  }
  points$() {
    const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    // alert("IN points.api.ts");
    // alert(currUserId);
    const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, `points/${this.currUserId}`).withConverter({
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
PointsApi.ɵfac = function PointsApi_Factory(t) {
  return new (t || PointsApi)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_auth_api__WEBPACK_IMPORTED_MODULE_0__.AuthApi));
};
PointsApi.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PointsApi,
  factory: PointsApi.ɵfac
});


/***/ }),

/***/ 54381:
/*!************************************************!*\
  !*** ./src/app/states/points/points.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsModule": () => (/* binding */ PointsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _points_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points.api */ 71731);
/* harmony import */ var _points_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./points.state */ 31703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);






class PointsModule {}
PointsModule.ɵfac = function PointsModule_Factory(t) {
  return new (t || PointsModule)();
};
PointsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: PointsModule
});
PointsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_points_api__WEBPACK_IMPORTED_MODULE_1__.PointsApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_points_state__WEBPACK_IMPORTED_MODULE_2__.PointsState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PointsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 31703:
/*!***********************************************!*\
  !*** ./src/app/states/points/points.state.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsState": () => (/* binding */ PointsState)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ 52736);
/* harmony import */ var src_app_actions_points_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/actions/points.actions */ 28226);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _points_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./points.api */ 71731);

var _class;








let PointsState = (_class = class PointsState {
  constructor(pointsApi, store) {
    this.pointsApi = pointsApi;
    this.store = store;
  }
  static userPoints(state) {
    return state.points?.userPoints;
  }
  static points(state) {
    return state.points;
  }
  subscribeToPointsState(context) {
    return this.pointsApi.points$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(points => {
      console.log("IN subscribeToPoints");
      console.log(points);
      context.dispatch(new src_app_actions_points_actions__WEBPACK_IMPORTED_MODULE_2__.SetPoints(points));
    }));
  }
  setPoints(context, {
    points
  }) {
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return context.setState((0,immer__WEBPACK_IMPORTED_MODULE_5__["default"])(repr => {
        repr.points = points;
      }));
    })();
  }
}, _class.ɵfac = function PointsState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_points_api__WEBPACK_IMPORTED_MODULE_3__.PointsApi), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions_points_actions__WEBPACK_IMPORTED_MODULE_2__.SubscribeToPoints)], PointsState.prototype, "subscribeToPointsState", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(src_app_actions_points_actions__WEBPACK_IMPORTED_MODULE_2__.SetPoints)], PointsState.prototype, "setPoints", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], PointsState, "userPoints", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)()], PointsState, "points", null);
PointsState = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.State)({
  name: 'points',
  defaults: {
    points: null
  }
})], PointsState);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_points_points_module_ts.js.map