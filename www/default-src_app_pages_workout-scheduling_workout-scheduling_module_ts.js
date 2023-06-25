"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_workout-scheduling_workout-scheduling_module_ts"],{

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

/***/ 91585:
/*!*********************************************************!*\
  !*** ./src/app/pages/search/search/search.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);




function SearchComponent_ion_list_3_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_ion_list_3_ion_item_1_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const suggestion_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.find(suggestion_r3.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestion_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", suggestion_r3.name, " ");
  }
}
function SearchComponent_ion_list_3_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 7)(1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "not results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SearchComponent_ion_list_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_ion_list_3_ion_item_1_Template, 2, 1, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_ion_list_3_ion_item_2_Template, 3, 0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchTerms.filteredSuggestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchTerms.filteredSuggestions.length == 0);
  }
}
class SearchComponent {
  constructor() {
    this.data = [];
  }
  ngOnInit() {
    this.initialiseSearchTerms();
  }
  onSearchInput(event) {
    const searchText = event.target.value;
    if (searchText) {
      this.searchTerms.showSuggestions = true;
      this.searchTerms.filteredSuggestions = this.data.filter(suggestion => suggestion.name.toLowerCase().includes(this.searchTerms.searchQuery.toLowerCase()));
    } else {
      this.searchTerms.showSuggestions = false;
    }
  }
  find(suggestion) {
    this.searchTerms.initial = false;
  }
  initialiseSearchTerms() {
    this.searchTerms = {
      searchQuery: "",
      showSuggestions: false,
      suggestions: [],
      filteredSuggestions: [],
      initial: true
    };
  }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)();
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["search"]],
  inputs: {
    data: "data"
  },
  decls: 4,
  vars: 2,
  consts: [[1, "search"], ["placeholder", "find schedule", "color", "light", "animated", "", 3, "ngModel", "ngModelChange", "ionInput"], ["id", "search-suggestions"], [4, "ngIf"], ["lines", "none", 3, "click", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], ["lines", "none", 3, "click"], ["lines", "none"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ion-searchbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_ion_searchbar_ngModelChange_1_listener($event) {
        return ctx.searchTerms.searchQuery = $event;
      })("ionInput", function SearchComponent_Template_ion_searchbar_ionInput_1_listener($event) {
        return ctx.onSearchInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_ion_list_3_Template, 3, 2, "ion-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerms.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchTerms.showSuggestions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 66878:
/*!******************************************************!*\
  !*** ./src/app/pages/search/search/search.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponentModule": () => (/* binding */ SearchComponentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 91585);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);





class SearchComponentModule {}
SearchComponentModule.ɵfac = function SearchComponentModule_Factory(t) {
  return new (t || SearchComponentModule)();
};
SearchComponentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SearchComponentModule
});
SearchComponentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchComponentModule, {
    declarations: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
    exports: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent]
  });
})();

/***/ }),

/***/ 54852:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/workout-scheduling/edit-schedule/edit-schedule.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditScheduleComponent": () => (/* binding */ EditScheduleComponent)
/* harmony export */ });
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 75992);





class EditScheduleComponent {
  constructor(store) {
    this.store = store;
    this.isChange = false;
  }
  ngOnInit() {}
  checkChange() {
    this.isChange = true;
  }
  editSchedule() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_0__.UpdateWorkoutSchedule(this.schedule));
  }
}
EditScheduleComponent.ɵfac = function EditScheduleComponent_Factory(t) {
  return new (t || EditScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
EditScheduleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EditScheduleComponent,
  selectors: [["edit-schedule"]],
  inputs: {
    schedule: "schedule"
  },
  decls: 27,
  vars: 11,
  consts: [["position", "floating"], ["name", "barbell-outline"], ["type", "text", 3, "value", "ngModel", "ngModelChange", "ionChange"], ["name", "calendar-outline"], ["type", "date", 3, "value", "ngModel", "ngModelChange", "ionChange"], ["name", "time-outline"], ["type", "time", 3, "value", "ngModel", "ngModelChange", "ionChange"], ["name", "location-outline"], ["name", "timer-outline"], ["type", "number", 3, "value", "ngModel", "ngModelChange", "ionChange"], ["expand", "block", 3, "disabled", "click"]],
  template: function EditScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditScheduleComponent_Template_ion_input_ngModelChange_4_listener($event) {
        return ctx.schedule.name = $event;
      })("ionChange", function EditScheduleComponent_Template_ion_input_ionChange_4_listener() {
        return ctx.checkChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item")(6, "ion-label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditScheduleComponent_Template_ion_input_ngModelChange_9_listener($event) {
        return ctx.schedule.date = $event;
      })("ionChange", function EditScheduleComponent_Template_ion_input_ionChange_9_listener() {
        return ctx.checkChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item")(11, "ion-label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " time ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditScheduleComponent_Template_ion_input_ngModelChange_14_listener($event) {
        return ctx.schedule.time = $event;
      })("ionChange", function EditScheduleComponent_Template_ion_input_ionChange_14_listener() {
        return ctx.checkChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-item")(16, "ion-label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " location ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditScheduleComponent_Template_ion_input_ngModelChange_19_listener($event) {
        return ctx.schedule.location = $event;
      })("ionChange", function EditScheduleComponent_Template_ion_input_ionChange_19_listener() {
        return ctx.checkChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-item")(21, "ion-label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " duration ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditScheduleComponent_Template_ion_input_ngModelChange_24_listener($event) {
        return ctx.schedule.duration = $event;
      })("ionChange", function EditScheduleComponent_Template_ion_input_ionChange_24_listener() {
        return ctx.checkChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditScheduleComponent_Template_ion_button_click_25_listener() {
        return ctx.editSchedule();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.schedule.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.schedule.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.schedule.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.schedule.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.schedule.time);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.schedule.time);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.schedule.location);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.schedule.location);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.schedule.duration);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.schedule.duration);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.isChange);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 74647:
/*!*************************************************************************!*\
  !*** ./src/app/pages/workout-scheduling/schedule/schedule.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleComponent": () => (/* binding */ ScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _search_search_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../search/search/search.component */ 91585);
/* harmony import */ var _schedulecontent_schedule_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schedulecontent/schedule-content.component */ 52109);





function ScheduleComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "schedule-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const schedule_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("schedule", schedule_r1);
  }
}
class ScheduleComponent {
  constructor() {
    this.schedules = [];
  }
  ngOnInit() {}
}
ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) {
  return new (t || ScheduleComponent)();
};
ScheduleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ScheduleComponent,
  selectors: [["workout-schedule"]],
  inputs: {
    schedules: "schedules",
    categoryName: "categoryName"
  },
  decls: 8,
  vars: 4,
  consts: [[3, "data"], ["class", "schedules", 4, "ngFor", "ngForOf"], [3, "hidden"], ["name", "receipt-outline"], [1, "schedules"], [3, "schedule"]],
  template: function ScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "search", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ScheduleComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "ion-card")(4, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.schedules);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.schedules);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.schedules.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" You have 0 ", ctx.categoryName, " schedules ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _search_search_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent, _schedulecontent_schedule_content_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleContentComponent],
  styles: ["ion-text[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --highlight-height: 0;\n  --inner-border-width: 0;\n  --background: #457B9D;\n}\n\nion-card[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd29ya291dC1zY2hlZHVsaW5nL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dCB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG5pb24taXRlbXtcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDU3QjlEO1xufVxuXG5pb24tY2FyZCwgaW9uLWl0ZW0ge1xuICAgIG9wYWNpdHk6IDE7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 52109:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/workout-scheduling/schedulecontent/schedule-content.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleContentComponent": () => (/* binding */ ScheduleContentComponent)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-schedule/edit-schedule.component */ 54852);








function ScheduleContentComponent_ion_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleContentComponent_ion_button_6_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.viewSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ScheduleContentComponent_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleContentComponent_ion_button_7_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.viewSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ScheduleContentComponent_ion_item_option_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleContentComponent_ion_item_option_9_Template_ion_item_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.toggleEditSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ScheduleContentComponent_ion_item_option_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleContentComponent_ion_item_option_10_Template_ion_item_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.toggleEditSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ScheduleContentComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br")(6, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br")(10, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br")(14, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "br")(18, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.schedule.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.schedule.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.schedule.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.schedule.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r4.schedule.duration, " minutes");
  }
}
function ScheduleContentComponent_ion_card_content_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "edit-schedule", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("schedule", ctx_r5.schedule);
  }
}
class ScheduleContentComponent {
  constructor(store, nav, actionSheetCtrl, firestore, navCtrl) {
    this.store = store;
    this.nav = nav;
    this.actionSheetCtrl = actionSheetCtrl;
    this.firestore = firestore;
    this.navCtrl = navCtrl;
    this.isSlideShow = false;
    this.isEditSlide = false;
  }
  ngOnInit() {}
  viewSchedule() {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isSlideShow = !_this.isSlideShow;
    })();
  }
  removeSchedule() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.RemoveWorkoutSchedule(this.schedule));
  }
  viewExercises() {
    this.nav.navigateRoot("/workout-tracking");
  }
  toggleEditSlide() {
    this.isEditSlide = !this.isEditSlide;
  }
  timeLeft() {
    const currentTime = new Date().getTime();
    const targetTime = new Date(`${this.schedule.date}T${this.schedule.time}`).getTime();
    const timeDiff = targetTime - currentTime;
    if (timeDiff > 0) {
      const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
      const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const minutes = Math.floor(timeDiff / (1000 * 60));
      if (daysLeft < 1) {
        if (hoursLeft < 1) return `you have ${minutes} minutes left`;
        return `you have ${hoursLeft} hours left`;
      }
      return `your have ${daysLeft} days lefts`;
    }
    return "schedule overdue";
  }
  presentActionSheet() {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this2.actionSheetCtrl.create({
        header: `Are you sure you want to delete ${_this2.schedule.name}?`,
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          handler: () => _this2.removeSchedule()
        }, {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        }]
      });
      yield actionSheet.present();
    })();
  }
  // fraction(schedule: IWorkoutScheduleModel) {
  //   console.table(schedule);
  //   console.log(schedule.createdAt);
  //   const now = new Date();
  //   console.log(now);
  //   // if (false) {
  //   //   const currentTime = new Date().getTime();
  //   //   const timeDiff = schedule.createdAt.getTime() - currentTime;
  //   //   const targetTime = new Date(`${schedule.date}T${schedule.time}`).getTime();
  //   //   const createdTime = schedule.createdAt!.getTime();
  //   //   const diff = targetTime - createdTime;
  //   //   console.log(timeDiff/diff)
  //   //   return timeDiff/diff;
  //   // }
  //   return 0.5;
  // }
  addWorkout(schedule) {
    this.navCtrl.navigateForward('/workout-tracking', {
      state: {
        schedule
      }
    });
    schedule.workoutAdded = true;
    if (schedule.id) {
      const scheduleId = schedule.id;
      const scheduleRef = this.firestore.collection('schedules').doc(scheduleId);
      scheduleRef.update({
        workoutAdded: true
      }).then(() => {
        this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateWorkoutAdded({
          id: scheduleId,
          workoutAdded: true
        }));
      }).catch(error => {
        console.log('Error updating workoutAdded property:', error);
      });
    } else {
      console.log('Error: schedule.id is undefined');
    }
  }
  viewWorkout(schedule) {
    this.navCtrl.navigateForward('/workout-tracking', {
      state: {
        schedule
      }
    });
  }
}
ScheduleContentComponent.ɵfac = function ScheduleContentComponent_Factory(t) {
  return new (t || ScheduleContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController));
};
ScheduleContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ScheduleContentComponent,
  selectors: [["schedule-content"]],
  inputs: {
    schedule: "schedule"
  },
  decls: 22,
  vars: 9,
  consts: [["name", "receipt-outline"], ["slot", "end", 3, "click", 4, "ngIf"], ["side", "start"], ["color", "success", 3, "click", 4, "ngIf"], ["side", "end"], [3, "click"], ["color", "danger", 3, "click"], ["class", "content", 4, "ngIf"], [4, "ngIf"], [1, "info"], ["value", "0.5"], ["slot", "end", 3, "click"], ["color", "success", 3, "click"], [1, "content"], ["name", "barbell-outline"], [1, "schedule-value"], ["name", "calendar-outline"], ["name", "time-outline"], ["name", "location-outline"], ["name", "timer-outline"], [3, "schedule"]],
  template: function ScheduleContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card")(1, "ion-item-sliding")(2, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ScheduleContentComponent_ion_button_6_Template, 2, 0, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ScheduleContentComponent_ion_button_7_Template, 2, 0, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-item-options", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ScheduleContentComponent_ion_item_option_9_Template, 2, 0, "ion-item-option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ScheduleContentComponent_ion_item_option_10_Template, 2, 0, "ion-item-option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-item-options", 4)(12, "ion-item-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleContentComponent_Template_ion_item_option_click_12_listener() {
        return ctx.schedule.workoutAdded ? ctx.viewWorkout(ctx.schedule) : ctx.addWorkout(ctx.schedule);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-item-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleContentComponent_Template_ion_item_option_click_14_listener() {
        return ctx.presentActionSheet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ScheduleContentComponent_div_16_Template, 22, 5, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ScheduleContentComponent_ion_card_content_17_Template, 2, 1, "ion-card-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9)(19, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "ion-progress-bar", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.schedule.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isSlideShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSlideShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isEditSlide);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEditSlide);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.schedule.workoutAdded ? "View Workout" : "Add Workout", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSlideShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEditSlide);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.timeLeft());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_3__.EditScheduleComponent],
  styles: ["ion-text[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --highlight-height: 0;\n  --inner-border-width: 0;\n  --background: #457B9D;\n}\n\nion-card[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --background: #A8DADC;\n  --background-hover: #9ce0be;\n  --background-activated: #88f4be;\n  --background-focused: #88f4be;\n  --color: #000;\n  --border-color: #E63946;\n  --border-style: solid;\n  --ripple-color: deeppink;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd29ya291dC1zY2hlZHVsaW5nL3NjaGVkdWxlY29udGVudC9zY2hlZHVsZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUVBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsd0JBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0IHtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbmlvbi1pdGVte1xuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLWJhY2tncm91bmQ6ICM0NTdCOUQ7XG59XG5cbmlvbi1jYXJkLCBpb24taXRlbSB7XG4gICAgb3BhY2l0eTogMC45O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNBOERBREM7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjOWNlMGJlO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM4OGY0YmU7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM4OGY0YmU7XG4gIFxuICAgIC0tY29sb3I6ICMwMDA7XG4gIFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRTYzOTQ2O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgXG4gICAgLS1yaXBwbGUtY29sb3I6IGRlZXBwaW5rO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 23885:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/workout-scheduling/workout-scheduling-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutSchedulingPageRoutingModule": () => (/* binding */ WorkoutSchedulingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _workout_scheduling_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-scheduling.page */ 91292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _workout_scheduling_page__WEBPACK_IMPORTED_MODULE_0__.WorkoutSchedulingPage
}];
class WorkoutSchedulingPageRoutingModule {}
WorkoutSchedulingPageRoutingModule.ɵfac = function WorkoutSchedulingPageRoutingModule_Factory(t) {
  return new (t || WorkoutSchedulingPageRoutingModule)();
};
WorkoutSchedulingPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: WorkoutSchedulingPageRoutingModule
});
WorkoutSchedulingPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WorkoutSchedulingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 40325:
/*!***********************************************************************!*\
  !*** ./src/app/pages/workout-scheduling/workout-scheduling.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutSchedulingPageModule": () => (/* binding */ WorkoutSchedulingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _workout_scheduling_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-scheduling.page */ 91292);
/* harmony import */ var _workout_scheduling_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout-scheduling-routing.module */ 23885);
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule/schedule.component */ 74647);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives */ 32897);
/* harmony import */ var _search_search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search/search.module */ 66878);
/* harmony import */ var _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-schedule/add-schedule.component */ 25818);
/* harmony import */ var _schedulecontent_schedule_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedulecontent/schedule-content.component */ 52109);
/* harmony import */ var _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-schedule/edit-schedule.component */ 54852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);













class WorkoutSchedulingPageModule {}
WorkoutSchedulingPageModule.ɵfac = function WorkoutSchedulingPageModule_Factory(t) {
  return new (t || WorkoutSchedulingPageModule)();
};
WorkoutSchedulingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: WorkoutSchedulingPageModule
});
WorkoutSchedulingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _workout_scheduling_routing_module__WEBPACK_IMPORTED_MODULE_1__.WorkoutSchedulingPageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_3__.WorkoutSchedulingStateModule, src_app_directives__WEBPACK_IMPORTED_MODULE_4__.BackButtonDirectiveModule, _search_search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchComponentModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](WorkoutSchedulingPageModule, {
    declarations: [_workout_scheduling_page__WEBPACK_IMPORTED_MODULE_0__.WorkoutSchedulingPage, _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleComponent, _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_6__.AddScheduleComponent, _schedulecontent_schedule_content_component__WEBPACK_IMPORTED_MODULE_7__.ScheduleContentComponent, _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_8__.EditScheduleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _workout_scheduling_routing_module__WEBPACK_IMPORTED_MODULE_1__.WorkoutSchedulingPageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_3__.WorkoutSchedulingStateModule, src_app_directives__WEBPACK_IMPORTED_MODULE_4__.BackButtonDirectiveModule, _search_search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchComponentModule],
    exports: [_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleComponent, _add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_6__.AddScheduleComponent, _schedulecontent_schedule_content_component__WEBPACK_IMPORTED_MODULE_7__.ScheduleContentComponent, _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_8__.EditScheduleComponent]
  });
})();

/***/ }),

/***/ 91292:
/*!*********************************************************************!*\
  !*** ./src/app/pages/workout-scheduling/workout-scheduling.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutSchedulingPage": () => (/* binding */ WorkoutSchedulingPage)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/backbutton/backbutton.component */ 10957);
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule/schedule.component */ 74647);


// import { PopoutAddScheduleComponent } from './popout-add-schedule/popout-add-schedule.component';









class WorkoutSchedulingPage {
  constructor(popoverController, store, nav, route, router) {
    this.popoverController = popoverController;
    this.store = store;
    this.nav = nav;
    this.route = route;
    this.router = router;
    //data containers
    this.schedules = [];
    this.completedSchedules = [];
    this.uncompletedSchedules = [];
    this.inSessionSchedules = [];
    this.selectedSegment = '0';
    this.isAddSlide = false;
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.schedules$ = this.router.getCurrentNavigation()?.extras.state?.['schedules'];
      }
    });
  }
  ngOnInit() {
    this.displayWorkoutSchedule();
  }
  addSchedule() {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.nav.navigateRoot("/addSchedule");
    })();
  }
  displayWorkoutSchedule() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_3__.GetWorkoutSchedules());
    this.schedules$.subscribe(response => {
      this.schedules = response;
      this.filterSchedules();
    });
  }
  filterSchedules() {
    this.completedSchedules = this.schedules.filter(schedule => schedule.status === "completed");
    this.uncompletedSchedules = this.schedules.filter(schedule => schedule.status.match('uncompleted'));
    this.inSessionSchedules = this.schedules.filter(schedule => schedule.status.match("inSession"));
  }
  onSegmentChange(event) {
    this.selectedSegment = event.detail.value;
  }
}
WorkoutSchedulingPage.ɵfac = function WorkoutSchedulingPage_Factory(t) {
  return new (t || WorkoutSchedulingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};
WorkoutSchedulingPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: WorkoutSchedulingPage,
  selectors: [["app-workout-scheduling"]],
  decls: 23,
  vars: 15,
  consts: [[3, "translucent"], ["lines", "none"], [3, "fullscreen"], ["value", "0", 3, "scrollable", "ionChange"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["id", "0", 3, "hidden", "categoryName", "schedules"], ["id", "1", 3, "hidden", "categoryName", "schedules"], ["id", "2", 3, "hidden", "categoryName", "schedules"], ["id", "3", 3, "hidden", "categoryName", "schedules"], ["slot", "fixed", "vertical", "bottom", "horizontal", "center"], [3, "click"], ["name", "add"]],
  template: function WorkoutSchedulingPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Schedules");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-content", 2)(7, "ion-segment", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function WorkoutSchedulingPage_Template_ion_segment_ionChange_7_listener($event) {
        return ctx.onSegmentChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-segment-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-segment-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "In Session");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-segment-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-segment-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Uncompleted");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "workout-schedule", 8)(17, "workout-schedule", 9)(18, "workout-schedule", 10)(19, "workout-schedule", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-fab", 12)(21, "ion-fab-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkoutSchedulingPage_Template_ion_fab_button_click_21_listener() {
        return ctx.addSchedule();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("scrollable", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.selectedSegment !== "0")("categoryName", "")("schedules", ctx.schedules);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.selectedSegment !== "1")("categoryName", "in session")("schedules", ctx.inSessionSchedules);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.selectedSegment !== "2")("categoryName", "completed")("schedules", ctx.completedSchedules);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.selectedSegment !== "3")("categoryName", "uncompleted")("schedules", ctx.uncompletedSchedules);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_4__.BackbuttonComponent, _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleComponent],
  styles: [".add-schedule-button[_ngcontent-%COMP%]:hover {\n  zoom: 1.2;\n}\n.add-schedule-button[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  color: aqua;\n}\n\n#search-suggestions[_ngcontent-%COMP%] {\n  margin: 5px;\n  max-height: 200px;\n  overflow-y: scroll;\n}\n\nion-segment[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: url(\"/assets/Asset 2.png\") no-repeat center/cover fixed;\n}\n\nion-item[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%] {\n  --background: rgba($color: white, $alpha: 0.1);\n}\n\nion-fab-button[_ngcontent-%COMP%] {\n  --background: #457B9D;\n  --background-hover: #9ce0be;\n  --background-activated: #88f4be;\n  --background-focused: #88f4be;\n  --color: white;\n  --ripple-color: deeppink;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd29ya291dC1zY2hlZHVsaW5nL3dvcmtvdXQtc2NoZWR1bGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7QUFBRTtFQUNBLFdBQUE7QUFFRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUVBQUE7QUFDRjs7QUFFQTtFQUNFLDhDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtc2NoZWR1bGUtYnV0dG9uOmhvdmVyIHtcclxuICB6b29tOiAxLjI7XHJcbiAgaW9uLWljb24ge1xyXG4gIGNvbG9yOiBhcXVhO1xyXG4gIH1cclxufVxyXG5cclxuI3NlYXJjaC1zdWdnZXN0aW9ucyB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvQXNzZXQgMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkOyAvLyAjMUQzNTU3O1xyXG59XHJcblxyXG5pb24taXRlbSwgaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgkY29sb3I6IHdoaXRlLCAkYWxwaGE6IDAuMSk7XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uICB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNDU3QjlEO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzljZTBiZTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjODhmNGJlO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjODhmNGJlO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIC0tcmlwcGxlLWNvbG9yOiBkZWVwcGluaztcclxuICBvcGFjaXR5OiAwLjk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.WorkoutSchedulingState.returnSchedules)], WorkoutSchedulingPage.prototype, "schedules$", void 0);


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_workout-scheduling_workout-scheduling_module_ts.js.map