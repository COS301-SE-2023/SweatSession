"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_friends_friends_module_ts"],{

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

/***/ 74299:
/*!**********************************************************!*\
  !*** ./src/app/pages/friends/friend/friend.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendComponent": () => (/* binding */ FriendComponent)
/* harmony export */ });
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);





class FriendComponent {
  constructor(Nav, store) {
    this.Nav = Nav;
    this.store = store;
  }
  ngOnInit() {}
  viewOtherUser() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_0__.StageOtheruserInfo(this.friend));
  }
  removeFriend() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveFriendAction(this.friend));
  }
}
FriendComponent.ɵfac = function FriendComponent_Factory(t) {
  return new (t || FriendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
FriendComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FriendComponent,
  selectors: [["user-friend"]],
  inputs: {
    friend: "friend"
  },
  decls: 11,
  vars: 2,
  consts: [[1, "friend"], [3, "src"], ["name", "chevron-forward-outline", "slot", "end", 3, "click"], ["side", "end"], ["color", "danger", 3, "click"]],
  template: function FriendComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card")(1, "ion-item-sliding")(2, "ion-item", 0)(3, "ion-avatar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FriendComponent_Template_ion_icon_click_7_listener() {
        return ctx.viewOtherUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item-options", 3)(9, "ion-item-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FriendComponent_Template_ion_item_option_click_9_listener() {
        return ctx.removeFriend();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Unfriend");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.friend.profileURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.friend.name, " ");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText],
  styles: [".friend[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  margin: 20px;\n  font-size: 25px;\n}\n\n.friend[_ngcontent-%COMP%]:focus {\n  zoom: 0.8;\n  background-color: aqua;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --highlight-height: 0;\n  --inner-border-width: 0;\n  --background: #457B9D;\n}\n\nion-card[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZnJpZW5kcy9mcmllbmQvZnJpZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFBUjs7QUFHQTtFQUNJLFNBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJpZW5kIHtcbiAgICBpb24tdGV4dCB7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbn1cbi5mcmllbmQ6Zm9jdXMge1xuICAgIHpvb206IDAuODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG5pb24taXRlbXtcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDU3QjlEO1xufVxuXG5pb24tY2FyZCwgaW9uLWl0ZW0ge1xuICAgIG9wYWNpdHk6IDAuOTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 11977:
/*!*********************************************************!*\
  !*** ./src/app/pages/friends/friends-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsPageRoutingModule": () => (/* binding */ FriendsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends.page */ 13282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  component: _friends_page__WEBPACK_IMPORTED_MODULE_0__.FriendsPage
}];
class FriendsPageRoutingModule {}
FriendsPageRoutingModule.ɵfac = function FriendsPageRoutingModule_Factory(t) {
  return new (t || FriendsPageRoutingModule)();
};
FriendsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FriendsPageRoutingModule
});
FriendsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FriendsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 43026:
/*!*************************************************!*\
  !*** ./src/app/pages/friends/friends.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsPageModule": () => (/* binding */ FriendsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _friends_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends-routing.module */ 11977);
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends.page */ 13282);
/* harmony import */ var _friend_friend_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friend/friend.component */ 74299);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives */ 32897);
/* harmony import */ var _search_search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search/search.module */ 66878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);










class FriendsPageModule {}
FriendsPageModule.ɵfac = function FriendsPageModule_Factory(t) {
  return new (t || FriendsPageModule)();
};
FriendsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: FriendsPageModule
});
FriendsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _friends_routing_module__WEBPACK_IMPORTED_MODULE_0__.FriendsPageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_3__.FriendsStateModule, src_app_directives__WEBPACK_IMPORTED_MODULE_4__.BackButtonDirectiveModule, _search_search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchComponentModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FriendsPageModule, {
    declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_1__.FriendsPage, _friend_friend_component__WEBPACK_IMPORTED_MODULE_2__.FriendComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _friends_routing_module__WEBPACK_IMPORTED_MODULE_0__.FriendsPageRoutingModule, src_app_states__WEBPACK_IMPORTED_MODULE_3__.FriendsStateModule, src_app_directives__WEBPACK_IMPORTED_MODULE_4__.BackButtonDirectiveModule, _search_search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchComponentModule]
  });
})();

/***/ }),

/***/ 13282:
/*!***********************************************!*\
  !*** ./src/app/pages/friends/friends.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsPage": () => (/* binding */ FriendsPage)
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 39307);
/* harmony import */ var src_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/actions */ 56276);
/* harmony import */ var src_app_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/states */ 5869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/backbutton/backbutton.component */ 10957);
/* harmony import */ var _search_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search/search.component */ 91585);
/* harmony import */ var _friend_friend_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friend/friend.component */ 74299);












function FriendsPage_user_friend_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "user-friend", 7);
  }
  if (rf & 2) {
    const friend_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("friend", friend_r1);
  }
}
class FriendsPage {
  constructor(store, loadingCtrl, nav) {
    this.store = store;
    this.loadingCtrl = loadingCtrl;
    this.nav = nav;
    this.friends = [];
  }
  ngOnInit() {
    this.initialiseSearchTerms();
    this.displayFriends();
  }
  addFriend() {
    this.nav.navigateRoot("home/search");
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
  displayFriends() {
    this.store.dispatch(new src_app_actions__WEBPACK_IMPORTED_MODULE_2__.GetFriendsAction());
    this.friends$.subscribe(response => {
      this.friends = response;
    });
  }
  searchSchedule() {
    this.searchTerms.showSuggestions = false;
    this.friends = this.searchTerms.filteredSuggestions;
  }
  showLoader() {
    var _this = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loader = yield _this.loadingCtrl.create({
        message: 'Loading...',
        translucent: true,
        duration: 3000
      });
      loader.present();
    })();
  }
  dismissLoader() {
    var _this2 = this;
    return (0,_mnt_c_Users_27782_OneDrive_Desktop_Uni_2023_COS301_CAPSTONE_SweatCopy_SweatSession_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.loadingCtrl.dismiss();
    })();
  }
  onSearchInput(event) {
    const searchText = event.target.value;
    if (searchText) {
      this.searchTerms.showSuggestions = true;
      this.searchTerms.filteredSuggestions = this.friends.filter(suggestion => suggestion.name.toLowerCase().includes(this.searchTerms.searchQuery.toLowerCase()));
    } else {
      this.searchTerms.showSuggestions = false;
    }
  }
  find(suggestion) {
    this.searchTerms.searchQuery = suggestion;
    this.searchTerms.initial = false;
    this.searchSchedule();
  }
}
FriendsPage.ɵfac = function FriendsPage_Factory(t) {
  return new (t || FriendsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController));
};
FriendsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: FriendsPage,
  selectors: [["app-friends"]],
  decls: 12,
  vars: 4,
  consts: [[3, "translucent"], ["slot", "end", 1, "addFriend-button", 3, "click"], ["name", "add-outline"], ["name", "people-outline"], [3, "fullscreen"], [3, "data"], [3, "friend", 4, "ngFor", "ngForOf"], [3, "friend"]],
  template: function FriendsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "backbutton");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Friends");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FriendsPage_Template_ion_item_click_6_listener() {
        return ctx.addFriend();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ion-icon", 2)(8, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "search", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, FriendsPage_user_friend_11_Template, 1, 1, "user-friend", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.friends);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.friends);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _directives_backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_4__.BackbuttonComponent, _search_search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent, _friend_friend_component__WEBPACK_IMPORTED_MODULE_6__.FriendComponent],
  styles: [".addFriend-button[_ngcontent-%COMP%]:hover {\n  zoom: 1.2;\n}\n.addFriend-button[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  color: aqua;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --highlight-height: 0;\n  --inner-border-width: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: url(\"/assets/Asset 2.png\") no-repeat center/cover fixed;\n}\n\nion-item[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%] {\n  --background: rgba($color: white, $alpha: 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZnJpZW5kcy9mcmllbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUFDSjtBQUFHO0VBQ0MsV0FBQTtBQUVKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kscUVBQUE7QUFDSjs7QUFFQTtFQUNBLDhDQUFBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkRnJpZW5kLWJ1dHRvbjpob3ZlciB7XG4gICAgem9vbTogMS4yO1xuICAgaW9uLWljb24ge1xuICAgIGNvbG9yOiBhcXVhO1xuICAgfVxufVxuXG5pb24taXRlbXtcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9Bc3NldCAyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7IC8vICMxRDM1NTc7XG59XG5cbmlvbi1pdGVtLCBpb24tdG9vbGJhciB7XG4tLWJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiB3aGl0ZSwgJGFscGhhOiAwLjEpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(src_app_states__WEBPACK_IMPORTED_MODULE_3__.FriendsState.returnFriends)], FriendsPage.prototype, "friends$", void 0);


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

/***/ })

}]);
//# sourceMappingURL=src_app_pages_friends_friends_module_ts.js.map