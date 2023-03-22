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
    forgotPassword(email) {
        return this.http.post(`${this.api}/password/forgot`, email);
    }
    resetPassword(id, password) {
        return this.http.post(`${this.api}/password/reset`, { id, password });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac });


/***/ }),

/***/ 85848:
/*!******************************************************************!*\
  !*** ./src/app/configuration/institution/institution.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstitutionService": function() { return /* binding */ InstitutionService; }
/* harmony export */ });
/* harmony import */ var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);





class InstitutionService extends _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(http) {
        super();
        this.http = http;
        this.api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/place`;
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    setDialogData(institution) {
        this.dialogData = institution;
    }
    getDialogData() {
        return this.dialogData;
    }
    getInstitutions() {
        this.subs.sink = this.http.get(this.api).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + ' ' + error.message);
        });
    }
    getPlaces(criteria) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/place/${criteria}`);
    }
    save(place) {
        return this.http.post(this.api, place);
    }
    getLocations(criteria) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/location/search/${criteria}`);
    }
    deleteInstitution(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/place/${id}`);
    }
    getPerson(key) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/user/person?key=${key}`);
    }
    getPersonByEmail(email) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/user/email?email=${email}`);
    }
}
InstitutionService.ɵfac = function InstitutionService_Factory(t) { return new (t || InstitutionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
InstitutionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InstitutionService, factory: InstitutionService.ɵfac });


/***/ }),

/***/ 42792:
/*!************************************************!*\
  !*** ./src/app/core/models/security/person.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Person": function() { return /* binding */ Person; }
/* harmony export */ });
class Person {
    constructor(person) {
        {
            this.id = person === null || person === void 0 ? void 0 : person.id;
            this.identifier = person === null || person === void 0 ? void 0 : person.identifier;
            this.firstName = person === null || person === void 0 ? void 0 : person.firstName;
            this.lastName = person === null || person === void 0 ? void 0 : person.lastName;
            this.email = person === null || person === void 0 ? void 0 : person.email;
            this.phone = person === null || person === void 0 ? void 0 : person.phone;
            this.gender = person === null || person === void 0 ? void 0 : person.gender;
        }
    }
}


/***/ }),

/***/ 60599:
/*!**************************************************!*\
  !*** ./src/app/core/models/training/training.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Training": function() { return /* binding */ Training; }
/* harmony export */ });
class Training {
    constructor(t) {
        {
            this.id = t.id;
            this.topic = t.topic;
            this.startDate = t.startDate;
            this.endDate = t.endDate;
            this.location = t.location;
            this.capacity = t.capacity;
            this.categories = t.categories || null;
            this.partners = t.partners || null;
            this.participants = t.participants || null;
            this.cyclic = t.cyclic;
            this.mode = t.mode;
            this.testType = t.testType;
            this.requester = t.requester;
            this.requested = t.requested;
            this.sponsor = t.sponsor;
            this.facilitator = t.facilitator;
            this.status = t.status;
            this.statusDate = t.statusDate || null;
        }
    }
}


/***/ }),

/***/ 29744:
/*!**************************************************!*\
  !*** ./src/app/core/service/training.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingService": function() { return /* binding */ TrainingService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);





class TrainingService extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(http) {
        super();
        this.http = http;
        this.api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/training`;
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.inputs = [];
    }
    topics(criteria) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/topic/${criteria}`);
    }
    categories() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/category`);
    }
    get data() {
        return this.dataChange.value;
    }
    getTrainings() {
        this.subs.sink = this.http.get(this.api).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + ' ' + error.message);
        });
    }
    getEvents() {
        return this.http.get(this.api);
    }
    // getEvents(): EventInput[] {
    //     this.http.get<Training[]>(this.api).subscribe(
    //         (res) => {
    //             console.log('----------------', res)
    //             for (let i = 0; i < res.length; i++) {
    //                 this.inputs.push({id: res[i].id.toString(), title: res[i].topic.title, start: new Date(res[i].startDate)});
    //             }
    //         });
    //     return this.inputs;
    // }
    save(training) {
        return this.http.post(`${this.api}/request`, training);
    }
    log(training) {
        console.log(training, '=======================');
        return this.http.get(`${this.api}/log?training=${training}`);
    }
}
TrainingService.ɵfac = function TrainingService_Factory(t) { return new (t || TrainingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
TrainingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TrainingService, factory: TrainingService.ɵfac });


/***/ }),

/***/ 64821:
/*!***********************************************************!*\
  !*** ./src/app/organisation/training/training.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingService": function() { return /* binding */ TrainingService; }
/* harmony export */ });
/* harmony import */ var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);





class TrainingService extends _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(http) {
        super();
        this.http = http;
        this.api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}`;
        this.apiTraining = `${this.api}/training`;
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.dataPartnerChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    get partnerData() {
        return this.dataPartnerChange.value;
    }
    setDialogData(training) {
        this.dialogData = training;
    }
    getDialogData() {
        return this.dialogData;
    }
    getTrainings() {
        this.subs.sink = this.http.get(this.apiTraining).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + ' ' + error.message);
        });
    }
    getTopics(criteria) {
        return this.http.get(`${this.api}/topic/${criteria}`);
    }
    getLocations(criteria) {
        return this.http.get(`${this.api}/place/${criteria}`);
    }
    getCategories(criteria) {
        return this.http.get(`${this.api}/category`);
    }
    broadcast(training) {
        return this.http.post(`${this.api}/training/broadcast`, training);
    }
    updateParticipants(training) {
        return this.http.post(`${this.api}/training/participants`, training);
    }
    status(training) {
        return this.http.post(`${this.api}/training/status`, training);
    }
    getTrainingsForAPartner(partnerId) {
        const url = partnerId ? `${this.apiTraining}/partner/${partnerId}` : `${this.apiTraining}`;
        this.subs.sink = this.http.get(url).subscribe((data) => {
            this.isTblLoading = false;
            this.dataPartnerChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + ' ' + error.message);
        });
    }
    participate(partnerTrainingParticipants) {
        return this.http.post(`${this.api}/participant`, partnerTrainingParticipants);
    }
    getPersonByIdentifier(nif) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/user/nif?nif=${nif}`);
    }
    getPersonByEmail(email) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/user/email?email=${email}`);
    }
}
TrainingService.ɵfac = function TrainingService_Factory(t) { return new (t || TrainingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
TrainingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TrainingService, factory: TrainingService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map