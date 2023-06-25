"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_workout-tracking_workout-tracking_module_ts"],{

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

/***/ 8847:
/*!***************************************************************************!*\
  !*** ./src/app/pages/workout-tracking/workout-tracking-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutTrackingPageRoutingModule": () => (/* binding */ WorkoutTrackingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _workout_tracking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-tracking.page */ 40912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _workout_tracking_page__WEBPACK_IMPORTED_MODULE_0__.WorkoutTrackingPage
}];
class WorkoutTrackingPageRoutingModule {}
WorkoutTrackingPageRoutingModule.ɵfac = function WorkoutTrackingPageRoutingModule_Factory(t) {
  return new (t || WorkoutTrackingPageRoutingModule)();
};
WorkoutTrackingPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: WorkoutTrackingPageRoutingModule
});
WorkoutTrackingPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WorkoutTrackingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 38032:
/*!*******************************************************************!*\
  !*** ./src/app/pages/workout-tracking/workout-tracking.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutTrackingPageModule": () => (/* binding */ WorkoutTrackingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _workout_tracking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-tracking-routing.module */ 8847);
/* harmony import */ var _workout_tracking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout-tracking.page */ 40912);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives */ 32897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);







class WorkoutTrackingPageModule {}
WorkoutTrackingPageModule.ɵfac = function WorkoutTrackingPageModule_Factory(t) {
  return new (t || WorkoutTrackingPageModule)();
};
WorkoutTrackingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: WorkoutTrackingPageModule
});
WorkoutTrackingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _workout_tracking_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkoutTrackingPageRoutingModule, src_app_directives__WEBPACK_IMPORTED_MODULE_2__.BackButtonDirectiveModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WorkoutTrackingPageModule, {
    declarations: [_workout_tracking_page__WEBPACK_IMPORTED_MODULE_1__.WorkoutTrackingPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _workout_tracking_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkoutTrackingPageRoutingModule, src_app_directives__WEBPACK_IMPORTED_MODULE_2__.BackButtonDirectiveModule]
  });
})();

/***/ }),

/***/ 40912:
/*!*****************************************************************!*\
  !*** ./src/app/pages/workout-tracking/workout-tracking.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutTrackingPage": () => (/* binding */ WorkoutTrackingPage)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _services_exercise_exercise_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/exercise/exercise.service */ 8568);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/backbutton/backbutton.component */ 10957);









function WorkoutTrackingPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 13)(5, "input", 14)(6, "input", 15)(7, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WorkoutTrackingPage_div_15_Template_ion_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.deleteExercise(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Exercise ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r2);
  }
}
class WorkoutTrackingPage {
  constructor(formBuilder, exerciseService, navCtrl, router) {
    this.formBuilder = formBuilder;
    this.exerciseService = exerciseService;
    this.navCtrl = navCtrl;
    this.router = router;
    this.exercisesArray = [];
    this.deletedExercises = [];
    this.workoutForm = this.formBuilder.group({
      exercises: this.formBuilder.array([])
    });
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    if (state?.['schedule']) {
      this.scheduleId = state['schedule'].id;
    } else {
      console.error('No schedule passed to workout-tracking page');
    }
  }
  ngOnInit() {
    this.exerciseService.getExerciseByScheduleId(this.scheduleId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(exercises => {
      this.exercisesArray = exercises.map(exercise => ({
        ...exercise,
        id: exercise.id
      }));
      console.log('Fetched exercises:', this.exercisesArray);
      this.populateFormWithExercises();
    });
  }
  populateFormWithExercises() {
    const exercisesFormArray = this.workoutForm.get('exercises');
    this.exercisesArray.forEach(exercise => {
      const exerciseControl = this.formBuilder.group({
        name: [exercise.name],
        sets: [exercise.sets],
        reps: [exercise.reps],
        weight: [exercise.weight]
      });
      exercisesFormArray.push(exerciseControl);
    });
  }
  get exercises() {
    return this.workoutForm.get('exercises');
  }
  addExercise() {
    const exerciseControl = this.formBuilder.group({
      name: [''],
      sets: [0],
      reps: [0],
      weight: [0]
    });
    this.workoutForm.get('exercises').push(exerciseControl);
  }
  deleteExercise(index) {
    const exercise = this.exercisesArray[index];
    if (exercise.id) {
      this.deletedExercises.push(exercise.id);
    }
    this.exercises.removeAt(index);
  }
  saveExercise(exerciseData, index) {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let exercise = _this.exercisesArray[index];
      if (exercise) {
        Object.assign(exercise, exerciseData);
        if (exercise.id) {
          yield _this.exerciseService.updateExercise(exercise.id, exercise);
          console.log(`Exercise ${index + 1} updated successfully.`);
        }
      } else {
        const newExercise = yield _this.exerciseService.addExerciseWithUniqueId(exerciseData);
        console.log(`Exercise ${index + 1} added successfully.`);
        _this.exercisesArray.push(newExercise);
      }
    })();
  }
  saveExercises() {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Initial exercisesArray:', _this2.exercisesArray);
      console.log('Form exercises:', _this2.exercises.controls);
      console.log('Deleted exercises:', _this2.deletedExercises);
      const promises = _this2.exercises.controls.map((exerciseControl, index) => {
        const exerciseData = {
          scheduleId: _this2.scheduleId,
          name: exerciseControl.get('name')?.value ?? "",
          sets: exerciseControl.get('sets')?.value ?? 0,
          reps: exerciseControl.get('reps')?.value ?? 0,
          weight: exerciseControl.get('weight')?.value ?? 0
        };
        return _this2.saveExercise(exerciseData, index);
      });
      yield Promise.all(promises);
      const deletePromises = _this2.deletedExercises.map( /*#__PURE__*/function () {
        var _ref = (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (exerciseId) {
          yield _this2.exerciseService.deleteExerciseFromDatabase(exerciseId);
          console.log(`Exercise with ID ${exerciseId} deleted successfully.`);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      yield Promise.all(deletePromises);
      _this2.deletedExercises = [];
      console.log('All exercises saved.');
    })();
  }
}
WorkoutTrackingPage.ɵfac = function WorkoutTrackingPage_Factory(t) {
  return new (t || WorkoutTrackingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_exercise_exercise_service__WEBPACK_IMPORTED_MODULE_1__.ExerciseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
WorkoutTrackingPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: WorkoutTrackingPage,
  selectors: [["app-workout-tracking"]],
  decls: 20,
  vars: 4,
  consts: [[3, "fullscreen"], ["lines", "none"], [1, "heading-container"], [1, "grid-container"], [1, "form-container"], [3, "formGroup"], ["formArrayName", "exercises", 4, "ngFor", "ngForOf"], ["color", "success", "type", "button", 3, "disabled", "click"], ["name", "add"], ["color", "primary", "type", "button", 3, "click"], ["formArrayName", "exercises"], [1, "exercise-number"], [3, "formGroupName"], ["formControlName", "name", "placeholder", "Name"], ["formControlName", "sets", "placeholder", "Sets"], ["formControlName", "reps", "placeholder", "Repetitions"], ["formControlName", "weight", "placeholder", "Weight (kg)"], ["color", "danger", "type", "button", 3, "click"], ["name", "trash"]],
  template: function WorkoutTrackingPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-header")(2, "ion-toolbar")(3, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "workout_tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Workout Tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Customize your workout plan here");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3)(13, "div", 4)(14, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WorkoutTrackingPage_div_15_Template, 10, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WorkoutTrackingPage_Template_ion_button_click_16_listener() {
        return ctx.addExercise();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WorkoutTrackingPage_Template_ion_button_click_18_listener() {
        return ctx.saveExercises();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Save Exercises ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.workoutForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.exercises.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.exercises.length >= 10);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_2__.BackbuttonComponent],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n\n.center-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  background-color: #A8DADC;\n  border-radius: 25px;\n  padding: 20px;\n  width: 80%;\n  text-align: center;\n  margin: auto;\n}\n\ninput[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.exercise-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.heading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 100px;\n  margin-bottom: 20px;\n}\n\n.heading-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .heading-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0;\n}\n\n.heading-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.heading-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: normal;\n  color: grey;\n}\n\n.exercise-number[_ngcontent-%COMP%], input[formControlName=name][_ngcontent-%COMP%], input[formControlName=sets][_ngcontent-%COMP%], input[formControlName=reps][_ngcontent-%COMP%], input[formControlName=weight][_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n\ninput[formControlName=name][_ngcontent-%COMP%], input[formControlName=sets][_ngcontent-%COMP%], input[formControlName=reps][_ngcontent-%COMP%], input[formControlName=weight][_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd29ya291dC10cmFja2luZy93b3Jrb3V0LXRyYWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxxQ0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBSUE7Ozs7O0VBS0UscUNBQUE7QUFERjs7QUFJQTs7OztFQUlFLG1CQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyBBZGQgcG9zaXRpb246IHJlbGF0aXZlIHRvIGlvbi1jb250ZW50XG59XG5cbi5jZW50ZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7IFxufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQThEQURDO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bzsgLy8gQWRkIG1hcmdpbjogMCBhdXRvIHRvIGNlbnRlciB0aGUgZm9ybS1jb250YWluZXIgaG9yaXpvbnRhbGx5XG59XG5cbmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZXhlcmNpc2UtbnVtYmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5oZWFkaW5nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5oZWFkaW5nLWNvbnRhaW5lciBoMSxcbi5oZWFkaW5nLWNvbnRhaW5lciBoMiB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRpbmctY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmhlYWRpbmctY29udGFpbmVyIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogZ3JleTtcbn1cblxuXG5cbi5leGVyY2lzZS1udW1iZXIsXG5pbnB1dFtmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCJdLFxuaW5wdXRbZm9ybUNvbnRyb2xOYW1lPVwic2V0c1wiXSxcbmlucHV0W2Zvcm1Db250cm9sTmFtZT1cInJlcHNcIl0sXG5pbnB1dFtmb3JtQ29udHJvbE5hbWU9XCJ3ZWlnaHRcIl0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dFtmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCJdLFxuaW5wdXRbZm9ybUNvbnRyb2xOYW1lPVwic2V0c1wiXSxcbmlucHV0W2Zvcm1Db250cm9sTmFtZT1cInJlcHNcIl0sXG5pbnB1dFtmb3JtQ29udHJvbE5hbWU9XCJ3ZWlnaHRcIl0ge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_workout-tracking_workout-tracking_module_ts.js.map