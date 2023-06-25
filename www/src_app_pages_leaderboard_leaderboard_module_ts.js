"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_leaderboard_leaderboard_module_ts"],{

/***/ 21969:
/*!*****************************************************************!*\
  !*** ./src/app/pages/leaderboard/leaderboard-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardPageRoutingModule": () => (/* binding */ LeaderboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _leaderboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard.page */ 60914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _leaderboard_page__WEBPACK_IMPORTED_MODULE_0__.LeaderboardPage
}];
class LeaderboardPageRoutingModule {}
LeaderboardPageRoutingModule.ɵfac = function LeaderboardPageRoutingModule_Factory(t) {
  return new (t || LeaderboardPageRoutingModule)();
};
LeaderboardPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LeaderboardPageRoutingModule
});
LeaderboardPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LeaderboardPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 88487:
/*!*********************************************************!*\
  !*** ./src/app/pages/leaderboard/leaderboard.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardPageModule": () => (/* binding */ LeaderboardPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _leaderboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard-routing.module */ 21969);
/* harmony import */ var _leaderboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaderboard.page */ 60914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);






class LeaderboardPageModule {}
LeaderboardPageModule.ɵfac = function LeaderboardPageModule_Factory(t) {
  return new (t || LeaderboardPageModule)();
};
LeaderboardPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LeaderboardPageModule
});
LeaderboardPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _leaderboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaderboardPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LeaderboardPageModule, {
    declarations: [_leaderboard_page__WEBPACK_IMPORTED_MODULE_1__.LeaderboardPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _leaderboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaderboardPageRoutingModule]
  });
})();

/***/ }),

/***/ 60914:
/*!*******************************************************!*\
  !*** ./src/app/pages/leaderboard/leaderboard.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardPage": () => (/* binding */ LeaderboardPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 75992);


class LeaderboardPage {
  constructor() {}
  ngOnInit() {}
}
LeaderboardPage.ɵfac = function LeaderboardPage_Factory(t) {
  return new (t || LeaderboardPage)();
};
LeaderboardPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LeaderboardPage,
  selectors: [["app-leaderboard"]],
  decls: 5,
  vars: 0,
  consts: [[1, "outer-container"], [1, "inner-container"], [1, "message"]],
  template: function LeaderboardPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ion-content")(2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Page under construction :) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".outer-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: aqua;\n}\n\n.inner-container[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  height: 100%;\n  background-color: aqua;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.inner-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: max-content;\n  font-size: xx-large;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  color: aqua;\n  text-shadow: 0px 2px 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG5cbi5pbm5lci1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgICAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjphcXVhO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCAxMHB4O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_leaderboard_leaderboard_module_ts.js.map