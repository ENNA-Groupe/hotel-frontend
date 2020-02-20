function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controls-controls-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/params/controls/controls.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/params/controls/controls.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrivateParamsControlsControlsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div *ngIf=\"!trash\">\n      <ion-list>\n          <ion-list-header>\n              <ion-label>Listes des controls</ion-label>\n          </ion-list-header>\n          <ion-item-sliding *ngFor=\"let item of controls|searchBy:data.searchValue\">\n              <ion-item (click)=\"onShow(item.id)\">\n                  <ion-label color=\"secondary\">{{item.nom}} :{{item.operation}}</ion-label>\n              </ion-item>\n              <ion-item-options side=\"end\">\n                  <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n                      <ion-icon name=\"eye\"></ion-icon>\n                  </ion-item-option>\n                  <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n                      <ion-icon name=\"create\"></ion-icon>\n                  </ion-item-option>\n                  <ion-item-option color=\"danger\" (click)=\"onDelete(item.id)\">\n                      <ion-icon name=\"trash\"></ion-icon>\n                  </ion-item-option>\n              </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n  </div>\n\n  <div *ngIf=\"trash\">\n      <ion-list>\n          <ion-list-header>\n              <ion-label>Listes des controls</ion-label>\n          </ion-list-header>\n          <ion-item-sliding *ngFor=\"let item of controlsTrash|sortBy:'asc':'nom'\">\n            <ion-item (click)=\"onShow(item.id)\">\n                <ion-label color=\"secondary\">{{item.nom}}</ion-label>\n                <ion-badge slot=\"end\" color=\"tertiary\" mode=\"ios\">:{{item.operation}}\n                </ion-badge>\n            </ion-item>\n              <ion-item-options side=\"end\">\n                  <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n                      <ion-icon name=\"eye\"></ion-icon>\n                  </ion-item-option>\n                  <!-- <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n              <ion-icon  name=\"create\"></ion-icon>\n            </ion-item-option> -->\n                  <ion-item-option color=\"success\" (click)=\"onRestore(item.id)\">\n                      <ion-icon name=\"undo\"></ion-icon>\n                  </ion-item-option>\n              </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button *ngIf=\"!trash\" color=\"danger\" (click)=\"trash=true\">\n          <ion-icon name=\"trash\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button *ngIf=\"trash\" color=\"success\" (click)=\"trash=false\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n  <ion-fab *ngIf=\"!trash\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"onAdd()\">\n          <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/private/params/controls/controls.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/private/params/controls/controls.module.ts ***!
    \******************************************************************/

  /*! exports provided: ControlsPageModule */

  /***/
  function srcAppPagesPrivateParamsControlsControlsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlsPageModule", function () {
      return ControlsPageModule;
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


    var _controls_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./controls.page */
    "./src/app/pages/private/params/controls/controls.page.ts");
    /* harmony import */


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _controls_page__WEBPACK_IMPORTED_MODULE_6__["ControlsPage"]
    }];

    var ControlsPageModule = function ControlsPageModule() {
      _classCallCheck(this, ControlsPageModule);
    };

    ControlsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_controls_page__WEBPACK_IMPORTED_MODULE_6__["ControlsPage"]]
    })], ControlsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/private/params/controls/controls.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/private/params/controls/controls.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrivateParamsControlsControlsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvcGFyYW1zL2NvbnRyb2xzL2NvbnRyb2xzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/private/params/controls/controls.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/private/params/controls/controls.page.ts ***!
    \****************************************************************/

  /*! exports provided: ControlsPage */

  /***/
  function srcAppPagesPrivateParamsControlsControlsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlsPage", function () {
      return ControlsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_params_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/params.service */
    "./src/app/services/params.service.ts");
    /* harmony import */


    var src_app_components_control_form_control_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/control-form/control-form.component */
    "./src/app/components/control-form/control-form.component.ts");
    /* harmony import */


    var src_app_components_control_profil_control_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/control-profil/control-profil.component */
    "./src/app/components/control-profil/control-profil.component.ts");

    var ControlsPage =
    /*#__PURE__*/
    function () {
      function ControlsPage(popoverController, data, paramsService, router) {
        _classCallCheck(this, ControlsPage);

        this.popoverController = popoverController;
        this.data = data;
        this.paramsService = paramsService;
        this.router = router;
        this.trash = false;
      }

      _createClass(ControlsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.controlSubscription = this.paramsService.getControls().subscribe(function (res) {
            _this.controls = res;
          });
          this.controlTrashSubscription = this.paramsService.getControlsTrash().subscribe(function (res) {
            _this.controlsTrash = res;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.controlSubscription.unsubscribe();
          this.controlSubscription.unsubscribe();
          this.controlTrashSubscription.unsubscribe();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_control_form_control_form_component__WEBPACK_IMPORTED_MODULE_6__["ControlFormComponent"],
                      translucent: false
                    });

                  case 2:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (res) {
                      console.log(res.data);
                      if (res.data) _this2.paramsService.addControl(res.data);
                    });
                    _context.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_control_form_control_form_component__WEBPACK_IMPORTED_MODULE_6__["ControlFormComponent"],
                      translucent: false,
                      componentProps: {
                        id: id
                      }
                    });

                  case 2:
                    popover = _context2.sent;
                    popover.onDidDismiss().then(function (res) {
                      if (res.data) _this3.paramsService.editControl(res.data);
                    });
                    _context2.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onShow",
        value: function onShow(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_control_profil_control_profil_component__WEBPACK_IMPORTED_MODULE_7__["ControlProfilComponent"],
                      translucent: false,
                      componentProps: {
                        id: id,
                        trash: this.trash
                      }
                    });

                  case 2:
                    popover = _context3.sent;
                    _context3.next = 5;
                    return popover.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          this.paramsService.deleteControl(id);
        }
      }, {
        key: "onRestore",
        value: function onRestore(id) {
          this.paramsService.restoreControl(id);
        }
      }]);

      return ControlsPage;
    }();

    ControlsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: src_app_services_params_service__WEBPACK_IMPORTED_MODULE_5__["ParamsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ControlsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-controls',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./controls.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/params/controls/controls.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./controls.page.scss */
      "./src/app/pages/private/params/controls/controls.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], src_app_services_params_service__WEBPACK_IMPORTED_MODULE_5__["ParamsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ControlsPage);
    /***/
  }
}]);
//# sourceMappingURL=controls-controls-module-es5.js.map