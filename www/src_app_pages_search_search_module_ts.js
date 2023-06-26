"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_search_search_module_ts"],{

/***/ 65599:
/*!***************************************************************!*\
  !*** ./src/app/pages/search/gymsearch/gymsearch.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymsearchComponent": () => (/* binding */ GymsearchComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 75992);






function GymsearchComponent_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-header")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.description, " ");
  }
}
class GymsearchComponent {
  ngOnInit() {
    // this.loadData();
    this.triggerfilter();
  }
  loadData() {
    this.onSearchInput('');
  }
  triggerfilter() {
    this.filteredData$ = this.searchTerm$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(searchTerm => this.filterData(searchTerm)));
  }
  constructor() {
    this.filteredData$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    // unfilteredData$: any[] = [];
    this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    //will get this from the service
    this.data = [{
      name: 'Virgin Active',
      description: 'A small Description of the Location',
      image: 'https://loremflickr.com/320/240/gym',
      location: 'Hatfield'
    }, {
      name: 'Gym & Fitness Center',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://loremflickr.com/320/240/pushups',
      location: 'Pretoria'
    }, {
      name: 'Fitness First',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      image: 'https://loremflickr.com/320/240/dumbbell',
      location: 'Johannesburg'
    }, {
      name: 'XYZ Gym',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      image: 'https://loremflickr.com/320/240/benchpress',
      location: 'Cape Town'
    }, {
      name: 'Active Life Fitness',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      image: 'https://loremflickr.com/320/240/running',
      location: 'Durban'
    }];
    this.unfilteredData$ = this.data;
    this.data.filter(item => item.name.includes(''));
  }
  filterData(searchTerm) {
    if (!searchTerm || searchTerm === '' || searchTerm === null) {
      return this.data;
    }
    return this.data.filter(item => item.name.includes(searchTerm));
  }
  onSearchInput(event) {
    const searchTerm = event.target.value;
    // this.searchTerm = searchTerm;
    this.searchTerm$.next(searchTerm);
  }
}
GymsearchComponent.ɵfac = function GymsearchComponent_Factory(t) {
  return new (t || GymsearchComponent)();
};
GymsearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymsearchComponent,
  selectors: [["gymsearch"]],
  decls: 3,
  vars: 4,
  consts: [["placeholder", "Search for gyms", "color", "light", "animated", "", 3, "ngModel", "ngModelChange", "ionInput"], [4, "ngFor", "ngForOf"], ["alt", "Silhouette of mountains", 3, "src"]],
  template: function GymsearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-searchbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GymsearchComponent_Template_ion_searchbar_ngModelChange_0_listener($event) {
        return ctx.searchTerm = $event;
      })("ionInput", function GymsearchComponent_Template_ion_searchbar_ionInput_0_listener($event) {
        return ctx.onSearchInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GymsearchComponent_ion_card_1_Template, 9, 4, "ion-card", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.filteredData$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 76980:
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 9166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
}];
class SearchPageRoutingModule {}
SearchPageRoutingModule.ɵfac = function SearchPageRoutingModule_Factory(t) {
  return new (t || SearchPageRoutingModule)();
};
SearchPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SearchPageRoutingModule
});
SearchPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 20281:
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 76980);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 9166);
/* harmony import */ var _usersearch_usersearch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersearch/usersearch.component */ 46546);
/* harmony import */ var _gymsearch_gymsearch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gymsearch/gymsearch.component */ 65599);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);









class SearchPageModule {}
SearchPageModule.ɵfac = function SearchPageModule_Factory(t) {
  return new (t || SearchPageModule)();
};
SearchPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SearchPageModule
});
SearchPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_4__.OtheruserStateModule, src_app_states__WEBPACK_IMPORTED_MODULE_4__.AuthModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SearchPageModule, {
    declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage, _usersearch_usersearch_component__WEBPACK_IMPORTED_MODULE_2__.UsersearchComponent, _gymsearch_gymsearch_component__WEBPACK_IMPORTED_MODULE_3__.GymsearchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_4__.OtheruserStateModule, src_app_states__WEBPACK_IMPORTED_MODULE_4__.AuthModule]
  });
})();

/***/ }),

/***/ 9166:
/*!*********************************************!*\
  !*** ./src/app/pages/search/search.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _usersearch_usersearch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersearch/usersearch.component */ 46546);
/* harmony import */ var _gymsearch_gymsearch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gymsearch/gymsearch.component */ 65599);





function SearchPage_gymsearch_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "gymsearch");
  }
}
function SearchPage_usersearch_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "usersearch");
  }
}
class SearchPage {
  constructor() {
    this.isUserSlide = false;
  }
  userSlide() {
    this.isUserSlide = true;
  }
  gymSlide() {
    this.isUserSlide = false;
  }
}
SearchPage.ɵfac = function SearchPage_Factory(t) {
  return new (t || SearchPage)();
};
SearchPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SearchPage,
  selectors: [["app-search"]],
  decls: 12,
  vars: 2,
  consts: [[1, "outer-container"], [1, "inner-container"], ["value", "gym"], ["value", "gym", 3, "click"], ["value", "user", 3, "click"], [4, "ngIf"]],
  template: function SearchPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ion-content")(2, "div", 1)(3, "ion-segment", 2)(4, "ion-segment-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchPage_Template_ion_segment_button_click_4_listener() {
        return ctx.gymSlide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Gym");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-segment-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchPage_Template_ion_segment_button_click_7_listener() {
        return ctx.userSlide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "user");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SearchPage_gymsearch_10_Template, 1, 0, "gymsearch", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SearchPage_usersearch_11_Template, 1, 0, "usersearch", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isUserSlide);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUserSlide);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.SelectValueAccessor, _usersearch_usersearch_component__WEBPACK_IMPORTED_MODULE_0__.UsersearchComponent, _gymsearch_gymsearch_component__WEBPACK_IMPORTED_MODULE_1__.GymsearchComponent],
  styles: [".outer-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.inner-container[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\nion-segment[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: url(\"/assets/Asset 2.png\") no-repeat center/cover fixed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFFQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlubmVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9Bc3NldCAyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7IC8vICMxRDM1NTc7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 46546:
/*!*****************************************************************!*\
  !*** ./src/app/pages/search/usersearch/usersearch.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersearchComponent": () => (/* binding */ UsersearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);









function UsersearchComponent_div_2_ion_item_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersearchComponent_div_2_ion_item_3_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const suggestion_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.find(suggestion_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestion_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", suggestion_r3.profileURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", suggestion_r3.displayName, " ");
  }
}
function UsersearchComponent_div_2_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 9)(1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "user not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function UsersearchComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "ion-card", 4)(2, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UsersearchComponent_div_2_ion_item_3_Template, 4, 2, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UsersearchComponent_div_2_ion_item_4_Template, 3, 0, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.searchTerms.filteredSuggestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showNoResults && ctx_r0.searchTerms.filteredSuggestions.length == 0);
  }
}
class UsersearchComponent {
  constructor(store) {
    this.store = store;
    this.users = [];
    this.showNoResults = false;
    this.initialiseSearchTerms();
  }
  ngOnInit() {
    this.loadUsers();
  }
  onSearchInput(event) {
    const searchText = event.target.value;
    if (searchText) {
      this.loadUsers();
      this.searchTerms.showSuggestions = true;
      this.searchTerms.filteredSuggestions = this.users.filter(suggestion => suggestion.displayName.toLowerCase().includes(searchText.toLowerCase()) && suggestion.userId !== this.userId);
      if (this.searchTerms.filteredSuggestions.length == 0) {
        this.showNoResults = true;
      }
    } else {
      this.searchTerms.showSuggestions = false;
      this.showNoResults = false;
    }
  }
  search() {}
  initialiseSearchTerms() {
    this.searchTerms = {
      searchQuery: "",
      showSuggestions: false,
      suggestions: [],
      filteredSuggestions: [],
      initial: true
    };
  }
  find(user) {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.StageOtheruserInfo(user));
  }
  loadUsers() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.GetUsersAction());
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_1__.SubscribeToAuthState());
    this.userId$.subscribe(response => {
      this.userId = response;
    });
    this.users$.subscribe(response => {
      this.users = response;
    });
  }
}
UsersearchComponent.ɵfac = function UsersearchComponent_Factory(t) {
  return new (t || UsersearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store));
};
UsersearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: UsersearchComponent,
  selectors: [["usersearch"]],
  decls: 4,
  vars: 2,
  consts: [[1, "content-container"], ["placeholder", "Search for users", "color", "light", "animated", "", 3, "ngModel", "ngModelChange", "ionInput"], ["class", "search-suggestions", 4, "ngIf"], [1, "search-suggestions"], ["id", "search-suggestions"], ["lines", "none", 3, "click", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], ["lines", "none", 3, "click"], [3, "src"], ["lines", "none"]],
  template: function UsersearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "ion-searchbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersearchComponent_Template_ion_searchbar_ngModelChange_1_listener($event) {
        return ctx.searchTerms.searchQuery = $event;
      })("ionInput", function UsersearchComponent_Template_ion_searchbar_ionInput_1_listener($event) {
        return ctx.onSearchInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UsersearchComponent_div_2_Template, 5, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchTerms.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchTerms.showSuggestions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor],
  styles: ["ion-avatar[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  margin: 10px;\n}\n\nion-item[_ngcontent-%COMP%]:hover {\n  background-color: whitesmoke;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin: 2px;\n}\n\nion-card[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  --background: #457B9D;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VhcmNoL3VzZXJzZWFyY2gvdXNlcnNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuaW9uLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbmlvbi1pdGVte1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG5pb24tY2FyZCwgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogIzQ1N0I5RDtcbiAgICBvcGFjaXR5OiAwLjk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.OtheruserState.returnProfiles)], UsersearchComponent.prototype, "users$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_2__.AuthState.getCurrUserId)], UsersearchComponent.prototype, "userId$", void 0);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_search_search_module_ts.js.map