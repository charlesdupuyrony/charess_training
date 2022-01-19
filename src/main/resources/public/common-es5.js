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
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map