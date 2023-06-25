"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 81557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 66690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
}];
class RegisterPageRoutingModule {}
RegisterPageRoutingModule.ɵfac = function RegisterPageRoutingModule_Factory(t) {
  return new (t || RegisterPageRoutingModule)();
};
RegisterPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RegisterPageRoutingModule
});
RegisterPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 60207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 81557);
/* harmony import */ var _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/form-plugin */ 35579);
/* harmony import */ var src_app_states_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states/register */ 63251);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ 66690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);









class RegisterPageModule {}
RegisterPageModule.ɵfac = function RegisterPageModule_Factory(t) {
  return new (t || RegisterPageModule)();
};
RegisterPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: RegisterPageModule
});
RegisterPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_states_register__WEBPACK_IMPORTED_MODULE_2__.RegisterModule, _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__.NgxsFormPluginModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RegisterPageModule, {
    declarations: [_register_page__WEBPACK_IMPORTED_MODULE_3__.RegisterPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_states_register__WEBPACK_IMPORTED_MODULE_2__.RegisterModule, _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__.NgxsFormPluginModule]
  });
})();

/***/ }),

/***/ 66690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var src_app_actions_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/actions/register */ 71199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/form-plugin */ 35579);
 //, AbstractControl, ValidatorFn, ValidationErrors 
//import { ReactiveFormsModule } from '@angular/forms';







//import {RegisterPageModule} from './register.module'
class RegisterPage {
  constructor(Nav, regFormBuilder, store) {
    this.Nav = Nav;
    this.regFormBuilder = regFormBuilder;
    this.store = store;
    this.registrationForm = this.regFormBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(25)]],
      cPassword: ['', []]
    }, {});
  }
  get email() {
    return this.registrationForm?.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get cPassword() {
    return this.registrationForm.get('cPassword');
  }
  ngOnInit() {}
  register() {
    if (this.registrationForm.valid) {
      const regEmail = this.registrationForm?.get('email')?.value;
      const regPassword = this.registrationForm?.get('password')?.value;
      if (regEmail != null && regPassword != null) {
        // alert("Registering with email: " + regEmail + " and password: " + regPassword);
        this.store.dispatch(new src_app_actions_register__WEBPACK_IMPORTED_MODULE_0__.Register(regEmail, regPassword));
      }
    } else {
      alert("Invalid Registration Information. Make sure that the password is at least 6 characters long and you have entered a valid email address");
    }
    //this.Nav.navigateRoot('/home');     //moved this to auth api
  }
}

RegisterPage.ɵfac = function RegisterPage_Factory(t) {
  return new (t || RegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
RegisterPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RegisterPage,
  selectors: [["app-register"]],
  decls: 38,
  vars: 1,
  consts: [[1, "outerContainer"], [1, "background-cover"], ["src", "/assets/Asset 1.png"], [1, "inner-container"], ["src", "/assets/Asset 2.png"], ["ngxsForm", "register.registrationForm", 3, "formGroup", "submit"], [1, "input-item"], ["position", "floating"], ["src", "/assets/vector-icon.svg"], ["type", "email", "name", "email", "formControlName", "email", "required", ""], ["type", "password", "name", "password", "minlength", "6", "maxlength", "25", "formControlName", "password", "required", ""], ["type", "password", "name", "cPassword", "minlength", "6", "maxlength", "25", "formControlName", "cPassword", "required", ""], ["expand", "block", "type", "submit", 1, "registerButton"], ["expand", "block", 1, "signIn-buttons"], ["name", "logo-google"], ["expand", "block", "routerLink", "/login", 1, "signIn-buttons"]],
  template: function RegisterPage_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Please register an account");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function RegisterPage_Template_form_submit_13_listener() {
        return ctx.register();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-item", 6)(15, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-item", 6)(20, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " \uD83D\uDD11 Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-item", 6)(24, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " \uD83D\uDD11 Confirm Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "ion-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Already have an account? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "continue with google");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.registrationForm);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_2__["ɵFormDirective"]],
  styles: [".outerContainer[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: rgba(241, 250, 238, 0.8);\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin: 0px;\n  border-radius: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(169, 207, 224, 0.8);\n  height: 100vh;\n  width: 100vw;\n  animation: _ngcontent-%COMP%_fadeIn 5s;\n  overflow: auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 40px;\n  background-color: aqua;\n  border-radius: 50%;\n  border: 1px solid lightcoral;\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-style: italic;\n  color: lightcoral;\n  text-shadow: #a9cfe0 2px 2px;\n  margin-bottom: 40px;\n}\n\nion-card-subtitle[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nion-card-header[_ngcontent-%COMP%] {\n  color: #8490ba;\n  font-family: Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif;\n}\n\n.signIn-buttons[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --background: #A8DADC;\n  --background-hover: #9ce0be;\n  --background-activated: #88f4be;\n  --background-focused: #88f4be;\n  --color: #000;\n  --border-radius: 10px;\n  --border-color: #E63946;\n  --border-style: solid;\n  --border-width: 3px;\n  --ripple-color: deeppink;\n  --margin: 20px;\n}\n\n.input-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  margin-bottom: 5%;\n  border-radius: 10px;\n  color: black;\n  font-weight: bolder;\n}\n\n.inner-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px;\n  padding: 40px;\n  border-radius: 5px;\n  background-color: rgba(5, 14, 18, 0.1);\n}\n\n.background-cover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\nion-img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  overflow: hidden;\n  position: fixed;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFJQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFFQSxhQUFBO0VBRUEscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFHQSx3QkFBQTtFQUVBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQUssWUFBQTtFQUpMO0VBS0E7SUFBTyxVQUFBO0VBRlA7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlckNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjRjFGQUVFLDAuOCk7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjYTljZmUwLCAkYWxwaGE6IDAuOCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNXM7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjoxcHggc29saWQgbGlnaHRjb3JhbDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogbGlnaHRjb3JhbDtcbiAgdGV4dC1zaGFkb3c6ICNhOWNmZTAgMnB4IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiAjODQ5MGJhO1xuICBmb250LWZhbWlseTogSW50ZXIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgJ05vdG8gU2FucycsXG4gICAgJ0xpYmVyYXRpb24gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5zaWduSW4tYnV0dG9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNBOERBREM7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzljZTBiZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzg4ZjRiZTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM4OGY0YmU7XG5cbiAgLS1jb2xvcjogIzAwMDtcblxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjRTYzOTQ2O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAzcHg7XG4gIFxuXG4gIC0tcmlwcGxlLWNvbG9yOiBkZWVwcGluaztcblxuICAtLW1hcmdpbjogMjBweDtcbn1cblxuLmlucHV0LWl0ZW17XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5pbm5lci1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwNTBlMTIsICRhbHBoYTogMC4xKTsgLy8gIzk1YzRkYVxufVxuXG4uYmFja2dyb3VuZC1jb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuaW9uLWltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHsgb3BhY2l0eTogMC4xOyB9XG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 63251:
/*!******************************************!*\
  !*** ./src/app/states/register/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModule": () => (/* reexport safe */ _register_module__WEBPACK_IMPORTED_MODULE_0__.RegisterModule),
/* harmony export */   "RegisterState": () => (/* reexport safe */ _register_state__WEBPACK_IMPORTED_MODULE_1__.RegisterState)
/* harmony export */ });
/* harmony import */ var _register_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.module */ 95567);
/* harmony import */ var _register_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.state */ 46714);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map