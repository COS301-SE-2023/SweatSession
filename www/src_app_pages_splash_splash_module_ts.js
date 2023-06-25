"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_splash_splash_module_ts"],{

/***/ 1148:
/*!*******************************************************!*\
  !*** ./src/app/pages/splash/splash-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": () => (/* binding */ SplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page */ 19137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
}];
class SplashPageRoutingModule {}
SplashPageRoutingModule.ɵfac = function SplashPageRoutingModule_Factory(t) {
  return new (t || SplashPageRoutingModule)();
};
SplashPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SplashPageRoutingModule
});
SplashPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SplashPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 71203:
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": () => (/* binding */ SplashPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-routing.module */ 1148);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page */ 19137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);






class SplashPageModule {}
SplashPageModule.ɵfac = function SplashPageModule_Factory(t) {
  return new (t || SplashPageModule)();
};
SplashPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SplashPageModule
});
SplashPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SplashPageModule, {
    declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgOptimizedImage]
  });
})();

/***/ }),

/***/ 19137:
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": () => (/* binding */ SplashPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);



class SplashPage {
  constructor() {}
  ngOnInit() {}
}
SplashPage.ɵfac = function SplashPage_Factory(t) {
  return new (t || SplashPage)();
};
SplashPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SplashPage,
  selectors: [["app-splash"]],
  decls: 16,
  vars: 1,
  consts: [[3, "fullscreen"], [1, "full-screen-card"], [1, "inner-wrapper"], [1, "logo-container"], ["src", "assets/sweatsessionlogotransparent1.png", "alt", "logo", 1, "logo-img"], ["routerLink", "/login", 1, "learn-more", "getSButton"], ["aria-hidden", "true", 1, "circle"], [1, "icon", "arrow"], [1, "button-text"]],
  template: function SplashPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-card", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-header")(6, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sweat Session is a fitness app that allows users to track their workouts and progress. more random text to describe the app to the user and welcome them to our Cool app. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5)(12, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Get Started");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["ion-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0px;\n  background-color: rgba(169, 207, 224, 0.8);\n  border: 2px solid rgb(9, 50, 66);\n  overflow-y: auto;\n  color: rgba(88, 77, 78, 0.5);\n  font-weight: bold;\n  font-style: initial;\n}\nion-card[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 20px;\n}\nion-card[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\nion-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  --ion-background-color: #F1FAEE;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --background: #A8DADC;\n  --background-hover: #9ce0be;\n  --background-activated: #88f4be;\n  --background-focused: #88f4be;\n  --color: #000;\n  --border-radius: 10px;\n  --border-color: #E63946;\n  --border-style: solid;\n  --border-width: 3px;\n  --ripple-color: deeppink;\n  --margin: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  outline: none;\n  border: 0;\n  vertical-align: middle;\n  text-decoration: none;\n  background: transparent;\n  padding: 0;\n  font-size: inherit;\n  font-family: inherit;\n}\n\nbutton.learn-more[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: auto;\n}\n\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: relative;\n  display: block;\n  margin: 0;\n  width: 3rem;\n  height: 3rem;\n  background: #282936;\n  border-radius: 1.625rem;\n}\n\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background: #fff;\n}\n\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  left: 0.625rem;\n  width: 1.125rem;\n  height: 0.125rem;\n  background: none;\n}\n\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: -0.29rem;\n  right: 0.0625rem;\n  width: 0.625rem;\n  height: 0.625rem;\n  border-top: 0.125rem solid #fff;\n  border-right: 0.125rem solid #fff;\n  transform: rotate(45deg);\n}\n\nbutton.learn-more[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.75rem 0;\n  margin: 0 0 0 1.85rem;\n  color: #282936;\n  font-weight: 700;\n  line-height: 1.6;\n  text-align: center;\n  text-transform: uppercase;\n}\n\nbutton[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%] {\n  background: #fff;\n  transform: translate(1rem, 0);\n}\n\nbutton[_ngcontent-%COMP%]:hover   .button-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3BsYXNoL3NwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFRQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFORjtBQUhFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBS0o7QUFKSTtFQUNFLG1CQUFBO0FBTU47O0FBRUE7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUVBLGFBQUE7RUFFQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUdBLHdCQUFBO0VBRUEsY0FBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFEQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtBQUpGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjowcHg7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNhOWNmZTAsICRhbHBoYTogMC44KTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDksIDUwLCA2Nik7XG4gIG92ZXJmbG93LXk6YXV0bztcbiAgLmlubmVyLXdyYXBwZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgfVxuICB9XG4gIGNvbG9yOiAgcmdiYSgjNTg0ZDRlLDAuNSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOmluaXRpYWw7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0YxRkFFRTsvL3JnYmEoJGNvbG9yOiAjRjFGQUVFLCAgJGFscGhhOiAxKTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI0E4REFEQztcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjOWNlMGJlO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjODhmNGJlO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzg4ZjRiZTtcblxuICAtLWNvbG9yOiAjMDAwO1xuXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNFNjM5NDY7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgXG5cbiAgLS1yaXBwbGUtY29sb3I6IGRlZXBwaW5rO1xuXG4gIC0tbWFyZ2luOiAyMHB4O1xufVxuXG5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbi5sZWFybi1tb3JlIHtcbiAgd2lkdGg6IDEycmVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmJ1dHRvbi5sZWFybi1tb3JlIC5jaXJjbGUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBiYWNrZ3JvdW5kOiAjMjgyOTM2O1xuICBib3JkZXItcmFkaXVzOiAxLjYyNXJlbTtcbn1cblxuYnV0dG9uLmxlYXJuLW1vcmUgLmNpcmNsZSAuaWNvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4wNzYsIDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmJ1dHRvbi5sZWFybi1tb3JlIC5jaXJjbGUgLmljb24uYXJyb3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKTtcbiAgbGVmdDogMC42MjVyZW07XG4gIHdpZHRoOiAxLjEyNXJlbTtcbiAgaGVpZ2h0OiAwLjEyNXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuYnV0dG9uLmxlYXJuLW1vcmUgLmNpcmNsZSAuaWNvbi5hcnJvdzo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IC0wLjI5cmVtO1xuICByaWdodDogMC4wNjI1cmVtO1xuICB3aWR0aDogMC42MjVyZW07XG4gIGhlaWdodDogMC42MjVyZW07XG4gIGJvcmRlci10b3A6IDAuMTI1cmVtIHNvbGlkICNmZmY7XG4gIGJvcmRlci1yaWdodDogMC4xMjVyZW0gc29saWQgI2ZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG5idXR0b24ubGVhcm4tbW9yZSAuYnV0dG9uLXRleHQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcbiAgbWFyZ2luOiAwIDAgMCAxLjg1cmVtO1xuICBjb2xvcjogIzI4MjkzNjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5idXR0b246aG92ZXIgLmNpcmNsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246aG92ZXIgLmNpcmNsZSAuaWNvbi5hcnJvdyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFyZW0sIDApO1xufVxuXG5idXR0b246aG92ZXIgLmJ1dHRvbi10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_splash_splash_module_ts.js.map