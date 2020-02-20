function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/public/login/login.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/public/login/login.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPublicLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Connexion</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Username</ion-label>\n      <ion-input formControlName=\"identifiant\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Password</ion-label>\n      <ion-input formControlName=\"password\" type=\"{{passwordType}}\" required>\n      </ion-input>\n      <ion-button fill=\"clear\" slot=\"end\" (click)=\"onSeePassword()\">\n        <ion-icon slot=\"icon-only\" *ngIf=\"passwordType==='password'\" name=\"eye\"></ion-icon>\n        <ion-icon slot=\"icon-only\"*ngIf=\"passwordType==='text'\" name=\"eye-off\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n    <ion-text class=\"ion-padding-start\" color=\"danger\"\n      *ngIf=\"(identifiant.invalid && (identifiant.dirty || identifiant.touched))\">\n      <small *ngIf=\"identifiant.errors.required\">\n        L' identifiant est requis.\n      </small>\n      <small *ngIf=\"identifiant.errors.minlength\">\n        L' identifiant doit être superieur à 4 characteres.\n      </small>\n      <small *ngIf=\"identifiant.errors.maxlength\">\n        L' identifiant doit être inferieur à 30 characteres.\n      </small>\n    </ion-text>\n    <ion-text class=\"ion-padding-start\" color=\"danger\"\n    *ngIf=\"(password.invalid && (password.dirty || password.touched))\">\n      <small *ngIf=\"password.errors.required\">\n        Le mot de passe est requis.\n      </small>\n      <small *ngIf=\"password.errors.minlength\">\n        Le mot de passe doit être superieur à 8 characteres.\n      </small>\n      <small *ngIf=\"password.errors.maxlength\">\n        Le mot de passe doit être inferieur à 20 characteres.\n      </small>\n    </ion-text>\n  </ion-list>\n\n  <ion-row>\n    <ion-col>\n      <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Login</ion-button>\n    </ion-col>\n  </ion-row>\n</form>";
    /***/
  },

  /***/
  "./src/app/pages/public/login/login.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/public/login/login.module.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesPublicLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/public/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/public/login/login.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/public/login/login.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPublicLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL2xvZ2luL0M6XFxVc2Vyc1xcQXJvYW1cXERlc2t0b3BcXGhvdGVsL3NyY1xcYXBwXFxwYWdlc1xccHVibGljXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wdWJsaWMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/public/login/login.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/public/login/login.page.ts ***!
    \**************************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesPublicLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(authService, router) {
        _classCallCheck(this, LoginPage);

        this.authService = authService;
        this.router = router;
        this.passwordType = 'password';
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            identifiant: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
          });
        }
      }, {
        key: "onSeePassword",
        value: function onSeePassword() {
          if (this.passwordType === 'password') this.passwordType = 'text';else this.passwordType = 'password';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          console.log(this.form.value);
          this.authService.login(this.form.value).then(function (isAuth) {
            if (isAuth) {
              if (_this.form.value.password === 'password') _this.router.navigate(['public/change-password']);else _this.router.navigate(['private']);
            }
          });
        }
      }, {
        key: "identifiant",
        get: function get() {
          return this.form.get('identifiant');
        }
      }, {
        key: "password",
        get: function get() {
          return this.form.get('password');
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/public/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/public/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map