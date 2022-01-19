(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["common"],{

/***/ 67142:
/*!**********************************************************!*\
  !*** ./src/app/configuration/account/account.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": function() { return /* binding */ AccountService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);





class AccountService extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(http) {
        super();
        this.http = http;
        this.api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/user`;
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    getInstitutions() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/place`);
    }
    getProfiles() {
        return this.http.get(`${this.api}/profile`);
    }
    get data() {
        return this.dataChange.value;
    }
    setDialogData(usr) {
        this.dialogData = usr;
    }
    getDialogData() {
        return this.dialogData;
    }
    getUsers() {
        this.subs.sink = this.http.get(this.api).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + ' ' + error.message);
        });
    }
    create(usr) {
        return this.http.post(this.api, usr);
    }
    update(users) {
        return this.http.post(`${this.api}/update`, users);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map