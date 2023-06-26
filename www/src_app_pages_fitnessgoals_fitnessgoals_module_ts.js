"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fitnessgoals_fitnessgoals_module_ts"],{

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

/***/ 72408:
/*!*******************************************************************!*\
  !*** ./src/app/pages/fitnessgoals/fitnessgoals-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FitnessgoalsPageRoutingModule": () => (/* binding */ FitnessgoalsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _fitnessgoals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fitnessgoals.page */ 89587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _fitnessgoals_page__WEBPACK_IMPORTED_MODULE_0__.FitnessgoalsPage
}];
class FitnessgoalsPageRoutingModule {}
FitnessgoalsPageRoutingModule.ɵfac = function FitnessgoalsPageRoutingModule_Factory(t) {
  return new (t || FitnessgoalsPageRoutingModule)();
};
FitnessgoalsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FitnessgoalsPageRoutingModule
});
FitnessgoalsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FitnessgoalsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 12860:
/*!***********************************************************!*\
  !*** ./src/app/pages/fitnessgoals/fitnessgoals.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FitnessgoalsPageModule": () => (/* binding */ FitnessgoalsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _fitnessgoals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fitnessgoals-routing.module */ 72408);
/* harmony import */ var _fitnessgoals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fitnessgoals.page */ 89587);
/* harmony import */ var _goalcard_goalcard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goalcard/goalcard.component */ 78654);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives */ 32897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);








class FitnessgoalsPageModule {}
FitnessgoalsPageModule.ɵfac = function FitnessgoalsPageModule_Factory(t) {
  return new (t || FitnessgoalsPageModule)();
};
FitnessgoalsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: FitnessgoalsPageModule
});
FitnessgoalsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _fitnessgoals_routing_module__WEBPACK_IMPORTED_MODULE_0__.FitnessgoalsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_directives__WEBPACK_IMPORTED_MODULE_3__.BackButtonDirectiveModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FitnessgoalsPageModule, {
    declarations: [_fitnessgoals_page__WEBPACK_IMPORTED_MODULE_1__.FitnessgoalsPage, _goalcard_goalcard_component__WEBPACK_IMPORTED_MODULE_2__.GoalcardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _fitnessgoals_routing_module__WEBPACK_IMPORTED_MODULE_0__.FitnessgoalsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_directives__WEBPACK_IMPORTED_MODULE_3__.BackButtonDirectiveModule]
  });
})();

/***/ }),

/***/ 89587:
/*!*********************************************************!*\
  !*** ./src/app/pages/fitnessgoals/fitnessgoals.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FitnessgoalsPage": () => (/* binding */ FitnessgoalsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/backbutton/backbutton.component */ 10957);
/* harmony import */ var _goalcard_goalcard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goalcard/goalcard.component */ 78654);




class FitnessgoalsPage {
  constructor() {}
  ngOnInit() {}
}
FitnessgoalsPage.ɵfac = function FitnessgoalsPage_Factory(t) {
  return new (t || FitnessgoalsPage)();
};
FitnessgoalsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FitnessgoalsPage,
  selectors: [["app-fitnessgoals"]],
  decls: 11,
  vars: 1,
  consts: [[3, "translucent"], ["lines", "none"]],
  template: function FitnessgoalsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Goals");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content")(7, "ion-label")(8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Your Set Goals:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-goalcard");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_0__.BackbuttonComponent, _goalcard_goalcard_component__WEBPACK_IMPORTED_MODULE_1__.GoalcardComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 78654:
/*!*******************************************************************!*\
  !*** ./src/app/pages/fitnessgoals/goalcard/goalcard.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalcardComponent": () => (/* binding */ GoalcardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 75992);





function GoalcardComponent_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-card")(2, "ion-item")(3, "ion-grid")(4, "ion-row")(5, "ion-col")(6, "ion-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function GoalcardComponent_ion_item_sliding_1_Template_ion_row_mouseover_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.isHover = true);
    })("mouseout", function GoalcardComponent_ion_item_sliding_1_Template_ion_row_mouseout_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.isHover = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-row")(11, "ion-col")(12, "ion-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "600");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col")(15, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Days Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-row")(18, "ion-col")(19, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ion-progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-row")(23, "ion-col")(24, "ion-card-subtitle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-row")(27, "ion-col", 13)(28, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalcardComponent_ion_item_sliding_1_Template_ion_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.viewGoal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-item-options", 15)(31, "ion-item-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-item-options", 17)(34, "ion-item-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-item-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalcardComponent_ion_item_sliding_1_Template_ion_item_option_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.removeGoal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const goal_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.isHover ? "normal" : "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", goal_r3.coverPicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r3.description);
  }
}
function GoalcardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Set Fitness Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-buttons", 19)(5, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalcardComponent_ng_template_10_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GoalcardComponent_ng_template_10_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item")(9, "ion-col", 21)(10, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-row")(13, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GoalcardComponent_ng_template_10_Template_input_change_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalcardComponent_ng_template_10_Template_ion_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.selectFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Attach Cover Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-item")(17, "ion-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Goal Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-item")(21, "ion-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Goal Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-item")(25, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-item")(29, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ion-input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-row")(33, "ion-col")(34, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalcardComponent_ng_template_10_Template_ion_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-col")(37, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Save Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.goalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getDp(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.goalForm.valid);
  }
}
class GoalcardComponent {
  constructor() {
    this.isHover = false;
    this.presentingElement = null;
    this.selectedEndDate = "";
    this.selectedStartDate = "";
    this.file = null;
    this.goalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      coverPicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('https://loremflickr.com/320/240'),
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      progress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      days_left: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
    });
    this.Goals = [{
      id: 1,
      name: "Lose Weight",
      description: "Lose 10 pounds in 2 months",
      coverPicture: "https://loremflickr.com/320/240",
      start: "2020-01-01",
      end: "2020-03-01",
      progress: 0.5,
      days_left: 60
    }, {
      id: 2,
      name: "Gain Weight",
      description: "Gain 10 pounds in 2 months",
      coverPicture: "https://loremflickr.com/320/240/gym",
      start: "2020-01-01",
      end: "2020-03-01",
      progress: 0.5,
      days_left: 60
    }];
    this.AudioBuffer = AudioBuffer;
  }
  ngOnInit() {}
  viewSchedule() {}
  viewGoal() {}
  removeGoal() {}
  addGoal() {
    console.log("Add Goal");
  }
  selectFile() {
    document.getElementById('fileInput')?.click();
  }
  getDp() {
    return this.goalForm.value.coverPicture;
  }
  onFileSelected(event) {
    this.file = event.target.files[0];
    this.SaveFile();
  }
  SaveFile() {
    if (this.file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.goalForm.patchValue({
          coverPicture: reader.result
        });
        // this. = reader.result as string;
      };

      reader.readAsDataURL(this.file);
    }
    console.log(this.goalForm.value.coverPicture);
  }
  onSubmit() {
    console.log(this.goalForm.value);
  }
}
GoalcardComponent.ɵfac = function GoalcardComponent_Factory(t) {
  return new (t || GoalcardComponent)();
};
GoalcardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GoalcardComponent,
  selectors: [["app-goalcard"]],
  decls: 11,
  vars: 2,
  consts: [[4, "ngFor", "ngForOf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["name", "add"], ["side", "top"], ["id", "open-modal", "name", "add-circle-outline", 3, "click"], ["trigger", "open-modal", 3, "presentingElement"], ["modal", ""], [1, "ion-text-wrap", "ion-text-uppercase", "ion-text-sm"], [1, "CoverPhoto", 3, "mouseover", "mouseout"], [3, "src"], ["color", "primary"], ["value", "0.5"], [1, "ion-text-wrap", "ion-text-sm"], [1, "ion-text-end"], [3, "click"], ["side", "start"], ["color", "success"], ["side", "end"], ["color", "danger", 3, "click"], ["slot", "end"], [1, "ion-padding", 3, "formGroup", "ngSubmit"], ["size", "12", "size-sm", ""], ["alt", "Profile Picture", 3, "src"], ["type", "file", "id", "fileInput", "accept", "image/*", 2, "display", "none", 3, "change"], ["fill", "outline", "expand", "block", "size", "small", 3, "click"], ["position", "floating"], ["type", "text", "formControlName", "name"], ["type", "text", "formControlName", "description"], ["position", "stacked"], ["type", "date", "formControlName", "startDate"], ["type", "date", "formControlName", "endDate"], ["fill", "outline", "expand", "block", "size", "small", "type", "submit", 3, "disabled"]],
  template: function GoalcardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GoalcardComponent_ion_item_sliding_1_Template, 38, 5, "ion-item-sliding", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-fab", 1)(3, "ion-fab-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-fab-list", 3)(6, "ion-fab-button")(7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalcardComponent_Template_ion_icon_click_7_listener() {
        return ctx.addGoal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-modal", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GoalcardComponent_ng_template_10_Template, 39, 3, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Goals);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("presentingElement", ctx.presentingElement);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: ["ion-badge[_ngcontent-%COMP%] {\n  --background: Blue;\n  --color: white;\n}\n\nion-fab-button[_ngcontent-%COMP%] {\n  --background: #155ff8;\n  --background-activated: #0c3e93;\n  --background-hover: #0248bb;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n  position: fixed;\n}\n\nion-fab[_ngcontent-%COMP%] {\n  top: 92%;\n  right: 20%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZml0bmVzc2dvYWxzL2dvYWxjYXJkL2dvYWxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLHFGQUFBO0VBQ0EsY0FBQTtFQUNFLGVBQUE7QUFDSjs7QUFDQTtFQUVFLFFBQUE7RUFDQSxVQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xuICAtLWJhY2tncm91bmQ6IEJsdWU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzE1NWZmODtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzBjM2U5MztcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDI0OGJiO1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIC0tYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMHB4IDFweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cbmlvbi1mYWJcbntcbiAgdG9wOiA5MiU7XG4gIHJpZ2h0OiAyMCU7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_fitnessgoals_fitnessgoals_module_ts.js.map