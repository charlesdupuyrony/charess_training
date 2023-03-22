(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["common"], {
    /***/
    67142:
    /*!**********************************************************!*\
      !*** ./src/app/configuration/account/account.service.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountService": function AccountService() {
          return (
            /* binding */
            _AccountService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AccountService = /*#__PURE__*/function (_src_app_shared_Unsub) {
        _inherits(_AccountService, _src_app_shared_Unsub);

        var _super = _createSuper(_AccountService);

        function _AccountService(http) {
          var _this;

          _classCallCheck(this, _AccountService);

          _this = _super.call(this);
          _this.http = http;
          _this.api = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/user");
          _this.isTblLoading = true;
          _this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          return _this;
        }

        _createClass(_AccountService, [{
          key: "getInstitutions",
          value: function getInstitutions() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/place"));
          }
        }, {
          key: "getProfiles",
          value: function getProfiles() {
            return this.http.get("".concat(this.api, "/profile"));
          }
        }, {
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "setDialogData",
          value: function setDialogData(usr) {
            this.dialogData = usr;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this2 = this;

            this.subs.sink = this.http.get(this.api).subscribe(function (data) {
              _this2.isTblLoading = false;

              _this2.dataChange.next(data);
            }, function (error) {
              _this2.isTblLoading = false;
              console.log(error.name + ' ' + error.message);
            });
          }
        }, {
          key: "create",
          value: function create(usr) {
            return this.http.post(this.api, usr);
          }
        }, {
          key: "update",
          value: function update(users) {
            return this.http.post("".concat(this.api, "/update"), users);
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            return this.http.post("".concat(this.api, "/password/forgot"), email);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(id, password) {
            return this.http.post("".concat(this.api, "/password/reset"), {
              id: id,
              password: password
            });
          }
        }]);

        return _AccountService;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _AccountService.ɵfac = function AccountService_Factory(t) {
        return new (t || _AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
      };

      _AccountService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AccountService,
        factory: _AccountService.ɵfac
      });
      /***/
    },

    /***/
    85848:
    /*!******************************************************************!*\
      !*** ./src/app/configuration/institution/institution.service.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstitutionService": function InstitutionService() {
          return (
            /* binding */
            _InstitutionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _InstitutionService = /*#__PURE__*/function (_shared_UnsubscribeOn) {
        _inherits(_InstitutionService, _shared_UnsubscribeOn);

        var _super2 = _createSuper(_InstitutionService);

        function _InstitutionService(http) {
          var _this3;

          _classCallCheck(this, _InstitutionService);

          _this3 = _super2.call(this);
          _this3.http = http;
          _this3.api = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/place");
          _this3.isTblLoading = true;
          _this3.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          return _this3;
        }

        _createClass(_InstitutionService, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "setDialogData",
          value: function setDialogData(institution) {
            this.dialogData = institution;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
        }, {
          key: "getInstitutions",
          value: function getInstitutions() {
            var _this4 = this;

            this.subs.sink = this.http.get(this.api).subscribe(function (data) {
              _this4.isTblLoading = false;

              _this4.dataChange.next(data);
            }, function (error) {
              _this4.isTblLoading = false;
              console.log(error.name + ' ' + error.message);
            });
          }
        }, {
          key: "getPlaces",
          value: function getPlaces(criteria) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/place/").concat(criteria));
          }
        }, {
          key: "save",
          value: function save(place) {
            return this.http.post(this.api, place);
          }
        }, {
          key: "getLocations",
          value: function getLocations(criteria) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/location/search/").concat(criteria));
          }
        }, {
          key: "deleteInstitution",
          value: function deleteInstitution(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/place/").concat(id));
          }
        }, {
          key: "getPerson",
          value: function getPerson(key) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/user/person?key=").concat(key));
          }
        }, {
          key: "getPersonByEmail",
          value: function getPersonByEmail(email) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/user/email?email=").concat(email));
          }
        }]);

        return _InstitutionService;
      }(_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _InstitutionService.ɵfac = function InstitutionService_Factory(t) {
        return new (t || _InstitutionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
      };

      _InstitutionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _InstitutionService,
        factory: _InstitutionService.ɵfac
      });
      /***/
    },

    /***/
    42792:
    /*!************************************************!*\
      !*** ./src/app/core/models/security/person.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Person": function Person() {
          return (
            /* binding */
            _Person
          );
        }
        /* harmony export */

      });

      var _Person = function _Person(person) {
        _classCallCheck(this, _Person);

        {
          this.id = person === null || person === void 0 ? void 0 : person.id;
          this.identifier = person === null || person === void 0 ? void 0 : person.identifier;
          this.firstName = person === null || person === void 0 ? void 0 : person.firstName;
          this.lastName = person === null || person === void 0 ? void 0 : person.lastName;
          this.email = person === null || person === void 0 ? void 0 : person.email;
          this.phone = person === null || person === void 0 ? void 0 : person.phone;
          this.gender = person === null || person === void 0 ? void 0 : person.gender;
        }
      };
      /***/

    },

    /***/
    60599:
    /*!**************************************************!*\
      !*** ./src/app/core/models/training/training.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Training": function Training() {
          return (
            /* binding */
            _Training
          );
        }
        /* harmony export */

      });

      var _Training = function _Training(t) {
        _classCallCheck(this, _Training);

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
      };
      /***/

    },

    /***/
    29744:
    /*!**************************************************!*\
      !*** ./src/app/core/service/training.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrainingService": function TrainingService() {
          return (
            /* binding */
            _TrainingService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _TrainingService = /*#__PURE__*/function (_src_app_shared_Unsub2) {
        _inherits(_TrainingService, _src_app_shared_Unsub2);

        var _super3 = _createSuper(_TrainingService);

        function _TrainingService(http) {
          var _this5;

          _classCallCheck(this, _TrainingService);

          _this5 = _super3.call(this);
          _this5.http = http;
          _this5.api = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/training");
          _this5.isTblLoading = true;
          _this5.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          _this5.inputs = [];
          return _this5;
        }

        _createClass(_TrainingService, [{
          key: "topics",
          value: function topics(criteria) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/topic/").concat(criteria));
          }
        }, {
          key: "categories",
          value: function categories() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/category"));
          }
        }, {
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "getTrainings",
          value: function getTrainings() {
            var _this6 = this;

            this.subs.sink = this.http.get(this.api).subscribe(function (data) {
              _this6.isTblLoading = false;

              _this6.dataChange.next(data);
            }, function (error) {
              _this6.isTblLoading = false;
              console.log(error.name + ' ' + error.message);
            });
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            return this.http.get(this.api);
          } // getEvents(): EventInput[] {
          //     this.http.get<Training[]>(this.api).subscribe(
          //         (res) => {
          //             console.log('----------------', res)
          //             for (let i = 0; i < res.length; i++) {
          //                 this.inputs.push({id: res[i].id.toString(), title: res[i].topic.title, start: new Date(res[i].startDate)});
          //             }
          //         });
          //     return this.inputs;
          // }

        }, {
          key: "save",
          value: function save(training) {
            return this.http.post("".concat(this.api, "/request"), training);
          }
        }, {
          key: "log",
          value: function log(training) {
            console.log(training, '=======================');
            return this.http.get("".concat(this.api, "/log?training=").concat(training));
          }
        }]);

        return _TrainingService;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _TrainingService.ɵfac = function TrainingService_Factory(t) {
        return new (t || _TrainingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
      };

      _TrainingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _TrainingService,
        factory: _TrainingService.ɵfac
      });
      /***/
    },

    /***/
    64821:
    /*!***********************************************************!*\
      !*** ./src/app/organisation/training/training.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrainingService": function TrainingService() {
          return (
            /* binding */
            _TrainingService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _TrainingService2 = /*#__PURE__*/function (_shared_UnsubscribeOn2) {
        _inherits(_TrainingService2, _shared_UnsubscribeOn2);

        var _super4 = _createSuper(_TrainingService2);

        function _TrainingService2(http) {
          var _this7;

          _classCallCheck(this, _TrainingService2);

          _this7 = _super4.call(this);
          _this7.http = http;
          _this7.api = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api);
          _this7.apiTraining = "".concat(_this7.api, "/training");
          _this7.isTblLoading = true;
          _this7.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          _this7.dataPartnerChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          return _this7;
        }

        _createClass(_TrainingService2, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "partnerData",
          get: function get() {
            return this.dataPartnerChange.value;
          }
        }, {
          key: "setDialogData",
          value: function setDialogData(training) {
            this.dialogData = training;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
        }, {
          key: "getTrainings",
          value: function getTrainings() {
            var _this8 = this;

            this.subs.sink = this.http.get(this.apiTraining).subscribe(function (data) {
              _this8.isTblLoading = false;

              _this8.dataChange.next(data);
            }, function (error) {
              _this8.isTblLoading = false;
              console.log(error.name + ' ' + error.message);
            });
          }
        }, {
          key: "getTopics",
          value: function getTopics(criteria) {
            return this.http.get("".concat(this.api, "/topic/").concat(criteria));
          }
        }, {
          key: "getLocations",
          value: function getLocations(criteria) {
            return this.http.get("".concat(this.api, "/place/").concat(criteria));
          }
        }, {
          key: "getCategories",
          value: function getCategories(criteria) {
            return this.http.get("".concat(this.api, "/category"));
          }
        }, {
          key: "broadcast",
          value: function broadcast(training) {
            return this.http.post("".concat(this.api, "/training/broadcast"), training);
          }
        }, {
          key: "updateParticipants",
          value: function updateParticipants(training) {
            return this.http.post("".concat(this.api, "/training/participants"), training);
          }
        }, {
          key: "status",
          value: function status(training) {
            return this.http.post("".concat(this.api, "/training/status"), training);
          }
        }, {
          key: "getTrainingsForAPartner",
          value: function getTrainingsForAPartner(partnerId) {
            var _this9 = this;

            var url = partnerId ? "".concat(this.apiTraining, "/partner/").concat(partnerId) : "".concat(this.apiTraining);
            this.subs.sink = this.http.get(url).subscribe(function (data) {
              _this9.isTblLoading = false;

              _this9.dataPartnerChange.next(data);
            }, function (error) {
              _this9.isTblLoading = false;
              console.log(error.name + ' ' + error.message);
            });
          }
        }, {
          key: "participate",
          value: function participate(partnerTrainingParticipants) {
            return this.http.post("".concat(this.api, "/participant"), partnerTrainingParticipants);
          }
        }, {
          key: "getPersonByIdentifier",
          value: function getPersonByIdentifier(nif) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/user/nif?nif=").concat(nif));
          }
        }, {
          key: "getPersonByEmail",
          value: function getPersonByEmail(email) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/user/email?email=").concat(email));
          }
        }]);

        return _TrainingService2;
      }(_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _TrainingService2.ɵfac = function TrainingService_Factory(t) {
        return new (t || _TrainingService2)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
      };

      _TrainingService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _TrainingService2,
        factory: _TrainingService2.ɵfac
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map