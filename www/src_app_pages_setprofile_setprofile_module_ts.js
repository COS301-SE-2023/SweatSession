"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_setprofile_setprofile_module_ts"],{

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

/***/ 42433:
/*!***********************************************************************!*\
  !*** ./src/app/pages/setprofile/setProfileC/setProfileC.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetprofileCComponent": () => (/* binding */ SetprofileCComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);








function SetprofileCComponent_ion_avatar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-avatar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.getDp(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
class SetprofileCComponent {
  constructor(store, modalController, setprofileservices, authApi) {
    this.store = store;
    this.modalController = modalController;
    this.setprofileservices = setprofileservices;
    this.authApi = authApi;
    this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      profileURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      height: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
    });
    // ProfilePicture: string = 'assets/img/ProfileSE.png';
    this.getUser = {
      userId: 'na'
    };
    this.file = null;
    this.isEditMode = false;
  }
  getUserid() {
    return this.authApi.getCurrentUserId();
  }
  saveProfile() {
    this.UpadateP = {
      userId: this.profileForm.value.userId ?? "",
      name: this.profileForm.value.name ?? "",
      displayName: this.profileForm.value.displayName ?? "",
      email: this.profileForm.value.email ?? "",
      bio: this.profileForm.value.bio ?? "",
      phoneNumber: this.profileForm.value.phoneNumber ?? "",
      profileURL: this.profileForm.value.profileURL ?? "",
      height: this.profileForm.value.height ?? "",
      weight: this.profileForm.value.weight ?? ""
    };
    this.setprofileservices.updateProfile(this.UpadateP);
    this.DetailsSaved();
  }
  openPicturePopup() {
    // this.modalController.create({
    //   component: 'editPictureModal',
    //   componentProps: {
    //     selectedPicture: this.profileForm.get('profileURL')?.value as string,
    //   },
    // }).then((modal) => {
    //   modal.present();
    // });
  }
  getDp() {
    return this.profileForm.get('profileURL')?.value;
  }
  toggleEditMode() {
    this.isEditMode = true;
    //refresh page
    this.ngOnInit();
  }
  SaveFile() {
    if (this.file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.profileForm.patchValue({
          profileURL: reader.result
        });
        // this. = reader.result as string;
      };

      reader.readAsDataURL(this.file);
    }
    console.log(this.profileForm.value.profileURL);
  }
  onFileSelected(event) {
    this.file = event.target.files[0];
    this.SaveFile();
  }
  DetailsSaved() {
    this.isEditMode = false;
    this.file = null;
    this.ngOnInit();
  }
  ngOnInit() {
    this.getUserid().then(id => {
      this.getUser.userId = id;
      this.setprofileservices.getProfile(this.getUser).subscribe(profile => {
        // this.user = profile.profile.
        this.profileForm.patchValue({
          userId: profile.profile.userId,
          name: profile.profile.name,
          displayName: profile.profile.displayName,
          email: profile.profile.email,
          bio: profile.profile.bio,
          phoneNumber: profile.profile.phoneNumber,
          profileURL: profile.profile.profileURL,
          height: profile.profile.height?.toString(),
          weight: profile.profile.weight?.toString()
        });
        if (profile.profile.profileURL == "") {
          this.profileForm.patchValue({
            profileURL: 'src/assets/ProfileSE.jpg'
          });
        }
      });
    });
  }
  takePicture() {
    document.getElementById('photoInput')?.click();
  }
  selectFile() {
    document.getElementById('fileInput')?.click();
  }
}
SetprofileCComponent.ɵfac = function SetprofileCComponent_Factory(t) {
  return new (t || SetprofileCComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.SetProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi));
};
SetprofileCComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SetprofileCComponent,
  selectors: [["app-setprofile-c"]],
  decls: 41,
  vars: 13,
  consts: [["trigger", "open-toast", "color", "success", "position", "top", "message", "Profile Picture Saved", "icon", "shield-checkmark-outline", 3, "duration"], ["trigger", "SDP", "color", "success", "position", "top", "message", "Personal Info Saved", "icon", "shield-checkmark-outline", 3, "duration"], ["size", "6", "offset", "3"], [1, "avatar-container"], ["class", "preview-container", 4, "ngIf"], ["type", "file", "id", "fileInput", "accept", "image/*", 2, "display", "none", 3, "change"], ["fill", "outline", "expand", "block", "size", "small", 3, "click"], ["type", "file", "id", "photoInput", "accept", "image/*", "capture", "environment", 2, "display", "none", 3, "change"], [1, "ion-text-center"], ["fill", "outline", "id", "SDP", "expand", "block", "size", "small", 3, "disabled", "click"], ["fill", "clear", 3, "click"], [3, "formGroup"], [3, "disabled"], ["label", "Display Name", "labelPlacement", "stacked", "type", "text", "formControlName", "displayName", "placeholder", "Enter Display Name"], ["label", "Name", "labelPlacement", "stacked", "type", "text", "formControlName", "name", "placeholder", "Enter Name"], ["label", "Bio", "labelPlacement", "stacked", "type", "text", "formControlName", "bio", "placeholder", "Enter Bio"], ["label", "Email", "labelPlacement", "stacked", "type", "email", "formControlName", "email", "placeholder", "Enter Email"], ["label", "Phone Number", "labelPlacement", "stacked", "type", "text", "formControlName", "phoneNumber", "placeholder", "Enter Phone Number"], ["label", "Height (Cm)", "labelPlacement", "stacked", "type", "Number", "formControlName", "height", "placeholder", "Enter Height in Cm"], ["label", "Weight (Kg)", "labelPlacement", "stacked", "type", "Number", "formControlName", "weight", "placeholder", "Enter Weight in Kg"], ["id", "open-toast", "expand", "block", 3, "disabled", "click"], [1, "preview-container"], ["alt", "Profile Picture", 3, "src"]],
  template: function SetprofileCComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-toast", 0)(2, "ion-toast", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 2)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SetprofileCComponent_ion_avatar_6_Template, 2, 1, "ion-avatar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-row")(8, "ion-col")(9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SetprofileCComponent_Template_input_change_9_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetprofileCComponent_Template_ion_button_click_10_listener() {
        return ctx.selectFile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Change Picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-col")(13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SetprofileCComponent_Template_input_change_13_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetprofileCComponent_Template_ion_button_click_14_listener() {
        return ctx.takePicture();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Take Picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-row")(17, "ion-col", 8)(18, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetprofileCComponent_Template_ion_button_click_18_listener() {
        return ctx.saveProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Save Picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-card")(21, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetprofileCComponent_Template_ion_button_click_21_listener() {
        return ctx.toggleEditMode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Edit Profile Info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-list")(24, "form", 11)(25, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "ion-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "ion-input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "ion-input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "ion-input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "ion-input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "ion-input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "ion-input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ion-button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetprofileCComponent_Template_ion_button_click_39_listener() {
        return ctx.saveProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("duration", 3000);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("duration", 3000);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getDp());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.file);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.profileForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isEditMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToast, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: [".preview-container[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.avatar-input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.choose-file-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  cursor: pointer;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.user-thumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background: #e9e9e9;\n  border-radius: 50%;\n  height: 200px;\n  width: 200px;\n}\n\n.user-thumb--edit[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.custom-file[_ngcontent-%COMP%] {\n  margin: 0;\n  height: auto;\n}\n\n.custom-file__input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  width: 1px;\n  height: 1px;\n}\n\n.custom-file__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 0;\n  text-align: center;\n  font-weight: 500;\n  font-size: 1rem;\n  display: block;\n  margin: 0;\n  border-radius: 50%;\n  padding: 0;\n  background: transparent;\n  position: relative;\n  overflow: hidden;\n}\n\n.user-thumb--edit[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  text-align: center;\n  transition: all 0.15s ease-in-out;\n  z-index: 0;\n  background: #000000 url(\"https://image.flaticon.com/icons/svg/61/61456.svg\");\n  background: 1.4rem auto;\n  width: 1px;\n  height: 1px;\n  border-radius: 100%;\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0cHJvZmlsZS9zZXRQcm9maWxlQy9zZXRQcm9maWxlQy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFESjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUZKOztBQVFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUxKOztBQVFFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsNEVBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw0SEFBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctY29udGFpbmVyXG57XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5hdmF0YXItY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuYXZhdGFyLWlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cblxuICAuY2hvb3NlLWZpbGUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5maWxlLWlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuZmlsZS1pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC8vIC5jdXN0b20tYnV0dG9uIHtcbiAgLy8gICAvKiBBZGQgeW91ciBjdXN0b20gYnV0dG9uIHN0eWxlcyBoZXJlICovXG4gIC8vIH1cbiAgLnVzZXItdGh1bWIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgXG4gIC51c2VyLXRodW1iLS1lZGl0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBcbiAgLmN1c3RvbS1maWxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAuY3VzdG9tLWZpbGVfX2lucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgfVxuICBcbiAgLmN1c3RvbS1maWxlX19sYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAudXNlci10aHVtYi0tZWRpdCAuY3VzdG9tLWZpbGU6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMCB1cmwoJ2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy82MS82MTQ1Ni5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kOiAxLjRyZW0gYXV0bztcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDoxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDZweCAtM3B4IHJnYigwIDAgMCAvIDIwJSksIDBweCAxMHB4IDE0cHggMXB4IHJnYigwIDAgMCAvIDE0JSksIDBweCA0cHggMThweCAzcHggcmdiKDAgMCAwIC8gMTIlKTtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 83358:
/*!***************************************************************!*\
  !*** ./src/app/pages/setprofile/setprofile-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetprofilePageRoutingModule": () => (/* binding */ SetprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _setprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setprofile.page */ 47446);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);





const routes = [{
  path: '',
  component: _setprofile_page__WEBPACK_IMPORTED_MODULE_0__.SetprofilePage
}];
class SetprofilePageRoutingModule {}
SetprofilePageRoutingModule.ɵfac = function SetprofilePageRoutingModule_Factory(t) {
  return new (t || SetprofilePageRoutingModule)();
};
SetprofilePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SetprofilePageRoutingModule
});
SetprofilePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SetprofilePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1218:
/*!*******************************************************!*\
  !*** ./src/app/pages/setprofile/setprofile.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetprofilePageModule": () => (/* binding */ SetprofilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _setprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setprofile-routing.module */ 83358);
/* harmony import */ var _setprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setprofile.page */ 47446);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var _setProfileC_setProfileC_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setProfileC/setProfileC.component */ 42433);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives */ 32897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);









class SetprofilePageModule {}
SetprofilePageModule.ɵfac = function SetprofilePageModule_Factory(t) {
  return new (t || SetprofilePageModule)();
};
SetprofilePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SetprofilePageModule
});
SetprofilePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_2__.AuthApi],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _setprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetprofilePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_directives__WEBPACK_IMPORTED_MODULE_4__.BackButtonDirectiveModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SetprofilePageModule, {
    declarations: [_setprofile_page__WEBPACK_IMPORTED_MODULE_1__.SetprofilePage, _setProfileC_setProfileC_component__WEBPACK_IMPORTED_MODULE_3__.SetprofileCComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _setprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetprofilePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_directives__WEBPACK_IMPORTED_MODULE_4__.BackButtonDirectiveModule]
  });
})();

/***/ }),

/***/ 47446:
/*!*****************************************************!*\
  !*** ./src/app/pages/setprofile/setprofile.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetprofilePage": () => (/* binding */ SetprofilePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _services_setprofile_setprofile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/setprofile/setprofile.service */ 99864);
/* harmony import */ var src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/states/auth/auth.api */ 64196);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/backbutton/backbutton.component */ 10957);
/* harmony import */ var _setProfileC_setProfileC_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setProfileC/setProfileC.component */ 42433);







class SetprofilePage {
  onPictureChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.ProfilePicture = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  saveProfile() {
    this.editMode = false;
    this.user.profileURL = this.ProfilePicture;
    this.modalController.dismiss('save');
    console.log('Saving profile:', this.user);
  }
  savePicture() {
    // Perform save logic here
    // this.oldProfilePicture = this.selectedPicture;
    // SetProfileService.updateProfile(this.user).subscribe((profile) => {
    //   this.user = profile.profile;
    // });
    this.modalController.dismiss('save');
  }
  openPicturePopup() {
    this.modalController.create({
      component: 'editPictureModal',
      componentProps: {
        selectedPicture: this.ProfilePicture
      }
    }).then(modal => {
      modal.present();
    });
  }
  enableEditMode() {
    console.log('Enabling edit mode');
    this.editMode = true;
  }
  closePicturePopup() {
    this.modalController.dismiss('cancel');
  }
  constructor(modalController, setprofileservices, authApi, store) {
    // this.user = {userId: 'sdHzZS6WSslwe4xo51rK', name: 'no name provided', email: 'no email provided', bio: 'no bio provided', profileURL: 'https://i.pravatar.cc/150?img=68', phoneNumber: '0000000000'};
    // this.user = {userId: 'abc', name: 'Triumph Ndlovu', email: 'no email provided', bio: 'no bio provided', profileURL: 'https://i.pravatar.cc/150?img=68', phoneNumber: '0000000000'};
    this.modalController = modalController;
    this.authApi = authApi;
    this.store = store;
    this.getUser = {
      userId: 'na'
    };
    this.ProfilePicture = 'https://i.pravatar.cc/150?img=68'; // for now
    this.selectedPicture = null;
    this.editMode = false;
    this.isEditMode = false;
    // tempUserID = authApi.getCurrentUserId();
    // this.getUser.userId =  this.tempUserID.toString();
    // t = await this.getUserid();
    // this.getUserid();
    // setprofileservices.getProfile(this.getUser).subscribe((profile) => {
    //   this.user = profile.profile;
    // });
  }
  //  getUserid() {
  //   this.getUser.userId = await this.authApi.getCurrentUserId() ?? 'na';
  //   // alert("We got User ==> " + this.getUser.userId);
  // }
  toggleEditMode() {
    this.isEditMode = true;
    console.log('Toggled Edit');
  }
  isAnyFieldEdited() {
    return this.user.name !== this.user.name || this.user.bio !== this.user.bio || this.user.phoneNumber !== this.user.phoneNumber;
  }
  ngOnInit() {
    // const userId = '123'; // Replace with the actual user ID
    // this.pr
    // (userId).subscribe(userData => {
    //   console.log('User Data:', userData);
    //   this.user = userData;
    // });
  }
}
SetprofilePage.ɵfac = function SetprofilePage_Factory(t) {
  return new (t || SetprofilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_setprofile_setprofile_service__WEBPACK_IMPORTED_MODULE_0__.SetProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_states_auth_auth_api__WEBPACK_IMPORTED_MODULE_1__.AuthApi), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
SetprofilePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SetprofilePage,
  selectors: [["app-setprofile"]],
  decls: 8,
  vars: 2,
  consts: [[3, "translucent"], ["lines", "none"], [3, "fullscreen"]],
  template: function SetprofilePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-setprofile-c");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_3__.BackbuttonComponent, _setProfileC_setProfileC_component__WEBPACK_IMPORTED_MODULE_4__.SetprofileCComponent],
  styles: [".preview-container[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.avatar-input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.choose-file-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 2;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0cHJvZmlsZS9zZXRwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFESjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctY29udGFpbmVyXG57XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5hdmF0YXItY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuYXZhdGFyLWlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cblxuICAuY2hvb3NlLWZpbGUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5maWxlLWlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_setprofile_setprofile_module_ts.js.map