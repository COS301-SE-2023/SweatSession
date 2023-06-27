"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
class LoginPageRoutingModule {}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) {
  return new (t || LoginPageRoutingModule)();
};
LoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginPageRoutingModule
});
LoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/form-plugin */ 35579);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var src_app_states_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states/login */ 9504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);









class LoginPageModule {}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) {
  return new (t || LoginPageModule)();
};
LoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: LoginPageModule
});
LoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_states_login__WEBPACK_IMPORTED_MODULE_3__.LoginModule, _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__.NgxsFormPluginModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_states_login__WEBPACK_IMPORTED_MODULE_3__.LoginModule, _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__.NgxsFormPluginModule]
  });
})();

/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var src_app_actions_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/actions/login */ 40158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/form-plugin */ 35579);
 //, AbstractControl, ValidatorFn, ValidationErrors 







class LoginPage {
  constructor(Nav, loginFormBuilder, store) {
    this.Nav = Nav;
    this.loginFormBuilder = loginFormBuilder;
    this.store = store;
    this.loginForm = this.loginFormBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(25)]]
    }, {});
  }
  get email() {
    return this.loginForm?.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  userLogin() {
    if (this.loginForm.valid) {
      const loginEmail = this.loginForm?.get('email')?.value;
      const loginPassword = this.loginForm?.get('password')?.value;
      if (loginEmail != null && loginPassword != null) {
        this.store.dispatch(new src_app_actions_login__WEBPACK_IMPORTED_MODULE_0__.Login(loginEmail, loginPassword));
      }
    }
  }
  ngOnInit() {}
}
LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 29,
  vars: 1,
  consts: [[1, "outerContainer"], [1, "background-cover"], ["src", "/assets/Asset 1.png"], [1, "inner-container"], ["src", "/assets/Asset 2.png"], ["ngxsForm", "login.loginForm", 3, "formGroup", "submit"], [1, "input-item"], ["position", "floating"], ["src", "/assets/vector-icon.svg"], ["type", "email", "placeholder", "Enter your email", "formControlName", "email", "required", ""], ["type", "password", "placeholder", "Enter your password", "formControlName", "password", "required", ""], ["id", "loginButton", "expand", "block", "type", "submit"], ["routerLink", "/register"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-card")(4, "div", 3)(5, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Sweat");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Session ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "please sign in to your account");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function LoginPage_Template_form_submit_13_listener() {
        return ctx.userLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-item", 6)(15, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-item", 6)(20, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " \uD83D\uDD11Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Don't have an account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Forgot password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_2__["ɵFormDirective"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".outerContainer[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: rgba(241, 250, 238, 0.8);\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin: 0px;\n  border-radius: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(169, 207, 224, 0.8);\n  height: 100vh;\n  width: 100vw;\n  animation: _ngcontent-%COMP%_fadeIn 5s;\n  overflow: auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 40px;\n  background-color: aqua;\n  border-radius: 50%;\n  border: 1px solid lightcoral;\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-style: italic;\n  color: lightcoral;\n  text-shadow: #a9cfe0 2px 2px;\n  margin-bottom: 40px;\n}\n\nion-card-subtitle[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nion-card-header[_ngcontent-%COMP%] {\n  color: #8490ba;\n  font-family: Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif;\n}\n\n.signIn-buttons[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --background: #A8DADC;\n  --background-hover: #9ce0be;\n  --background-activated: #88f4be;\n  --background-focused: #88f4be;\n  --color: #000;\n  --border-radius: 10px;\n  --border-color: #E63946;\n  --border-style: solid;\n  --border-width: 3px;\n  --ripple-color: deeppink;\n  --margin: 20px;\n}\n\n.input-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  margin-bottom: 5%;\n  border-radius: 10px;\n  color: black;\n  font-weight: bolder;\n}\n\n.inner-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px;\n  padding: 40px;\n  border-radius: 5px;\n  background-color: rgba(5, 14, 18, 0.1);\n}\n\n.background-cover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\nion-img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  overflow: hidden;\n  position: fixed;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFJQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFFQSxhQUFBO0VBRUEscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFHQSx3QkFBQTtFQUVBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQUssWUFBQTtFQUpMO0VBS0E7SUFBTyxVQUFBO0VBRlA7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlckNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjRjFGQUVFLDAuOCk7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjYTljZmUwLCAkYWxwaGE6IDAuOCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNXM7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjoxcHggc29saWQgbGlnaHRjb3JhbDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogbGlnaHRjb3JhbDtcbiAgdGV4dC1zaGFkb3c6ICNhOWNmZTAgMnB4IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiAjODQ5MGJhO1xuICBmb250LWZhbWlseTogSW50ZXIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgJ05vdG8gU2FucycsXG4gICAgJ0xpYmVyYXRpb24gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5zaWduSW4tYnV0dG9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNBOERBREM7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzljZTBiZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzg4ZjRiZTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM4OGY0YmU7XG5cbiAgLS1jb2xvcjogIzAwMDtcblxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjRTYzOTQ2O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAzcHg7XG4gIFxuXG4gIC0tcmlwcGxlLWNvbG9yOiBkZWVwcGluaztcblxuICAtLW1hcmdpbjogMjBweDtcbn1cblxuLmlucHV0LWl0ZW17XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5pbm5lci1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwNTBlMTIsICRhbHBoYTogMC4xKTsgLy8gIzk1YzRkYVxufVxuXG4uYmFja2dyb3VuZC1jb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuaW9uLWltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHsgb3BhY2l0eTogMC4xOyB9XG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9504:
/*!***************************************!*\
  !*** ./src/app/states/login/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* reexport safe */ _login_module__WEBPACK_IMPORTED_MODULE_0__.LoginModule),
/* harmony export */   "LoginState": () => (/* reexport safe */ _login_state__WEBPACK_IMPORTED_MODULE_1__.LoginState)
/* harmony export */ });
/* harmony import */ var _login_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.module */ 84316);
/* harmony import */ var _login_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.state */ 42639);



/***/ }),

/***/ 84316:
/*!**********************************************!*\
  !*** ./src/app/states/login/login.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _login_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.state */ 42639);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);






class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_login_state__WEBPACK_IMPORTED_MODULE_1__.LoginState])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 42639:
/*!*********************************************!*\
  !*** ./src/app/states/login/login.state.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginState": () => (/* binding */ LoginState)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_actions_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/actions/login */ 40158);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);

var _class;






let LoginState = (_class = class LoginState {
  constructor(store, authApi) {
    this.store = store;
    this.authApi = authApi;
  }
  login(context, action) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const state = context.getState();
        // const regEmail = state.registerForm.model.email;
        // const regPassword = state.registerForm.model.password;
        // alert(action.email);
        // alert(action.password);
        // alert("login.state.ts");
        const {
          email,
          password
        } = action;
        // alert(email);
        // alert(password);
        // alert(state.loginForm.model.email);
        // alert(state.loginForm.model.password);
        //no need to get cPassword since it should be the same as password
        if (action.email && action.password) {
          //return context.dispatch(new AuthActionLogin(email, password));
          return _this.authApi.login(email, password);
        }
        //return alert("Please enter email and/or password");
      } catch (error) {
        return error.message; //alert((error as Error).message);
      }
    })();
  }
}, _class.ɵfac = function LoginState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_3__.AuthApi));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Action)(src_app_actions_login__WEBPACK_IMPORTED_MODULE_1__.Login)], LoginState.prototype, "login", null);
LoginState = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.State)({
  name: 'loginState',
  defaults: {
    loginForm: {
      model: {
        email: null,
        password: null
      },
      modified: false,
      status: '',
      errors: {}
    }
  }
})], LoginState);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map