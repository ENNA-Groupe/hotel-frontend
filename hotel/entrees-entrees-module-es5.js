function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrees-entrees-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/entrees/entrees.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/entrees/entrees.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrivateEntreesEntreesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <div *ngIf=\"!trash\">\n        <ion-list>\n            <ion-list-header>\n                <ion-label>Listes des entrees de produits</ion-label>\n            </ion-list-header>\n            <ion-item-sliding *ngFor=\"let item of entrees|searchBy:data.searchValue\">\n                <ion-item (click)=\"onShow(item.id)\">\n                    <ion-label color=\"secondary\">{{getFournisseurNom(item.fournisseurId)}} Facture\n                        {{item.numeroFacture}}</ion-label>\n                    <ion-badge color=\"tertiary\" mode=\"ios\">{{item.montantTotal}}\n                    </ion-badge>\n                    <ion-note slot=\"end\">{{item.createdAt|date:' HH:mm dd-MM-yy'}}</ion-note>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n                        <ion-icon name=\"eye\"></ion-icon>\n                    </ion-item-option>\n                    <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n                        <ion-icon name=\"create\"></ion-icon>\n                    </ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"onDelete(item.id)\">\n                        <ion-icon name=\"trash\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n\n    <div *ngIf=\"trash\">\n        <ion-list>\n            <ion-list-header>\n                <ion-label>Listes des entrees de produits</ion-label>\n            </ion-list-header>\n            <ion-item-sliding *ngFor=\"let item of entreesTrash|sortBy:'asc':'nom'\">\n                <ion-item (click)=\"onShow(item.id)\">\n                    <ion-label color=\"secondary\">{{item.createdAt|date:'dd-MM-yy HH:mm'}} {{item.numeroFacture}}\n                    </ion-label>\n                    <ion-badge slot=\"end\" color=\"tertiary\" mode=\"ios\">{{item.montantTotal}}\n                    </ion-badge>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n                        <ion-icon name=\"eye\"></ion-icon>\n                    </ion-item-option>\n                    <!-- <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n                <ion-icon  name=\"create\"></ion-icon>\n              </ion-item-option> -->\n                    <ion-item-option color=\"success\" (click)=\"onRestore(item.id)\">\n                        <ion-icon name=\"undo\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    \n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button *ngIf=\"!trash\" color=\"danger\" (click)=\"trash=true\">\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button *ngIf=\"trash\" color=\"success\" (click)=\"trash=false\">\n            <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-fab *ngIf=\"!trash\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"onAdd()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/private/entrees/entrees.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/private/entrees/entrees.module.ts ***!
    \*********************************************************/

  /*! exports provided: EntreesPageModule */

  /***/
  function srcAppPagesPrivateEntreesEntreesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntreesPageModule", function () {
      return EntreesPageModule;
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


    var _entrees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entrees.page */
    "./src/app/pages/private/entrees/entrees.page.ts");
    /* harmony import */


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _entrees_page__WEBPACK_IMPORTED_MODULE_6__["EntreesPage"]
    }];

    var EntreesPageModule = function EntreesPageModule() {
      _classCallCheck(this, EntreesPageModule);
    };

    EntreesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_entrees_page__WEBPACK_IMPORTED_MODULE_6__["EntreesPage"]]
    })], EntreesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/private/entrees/entrees.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/private/entrees/entrees.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrivateEntreesEntreesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvZW50cmVlcy9lbnRyZWVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/private/entrees/entrees.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/private/entrees/entrees.page.ts ***!
    \*******************************************************/

  /*! exports provided: EntreesPage */

  /***/
  function srcAppPagesPrivateEntreesEntreesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntreesPage", function () {
      return EntreesPage;
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


    var src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/entree.service */
    "./src/app/services/entree.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_components_entree_form_entree_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/entree-form/entree-form.component */
    "./src/app/components/entree-form/entree-form.component.ts");
    /* harmony import */


    var src_app_components_entree_profil_entree_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/entree-profil/entree-profil.component */
    "./src/app/components/entree-profil/entree-profil.component.ts");

    var EntreesPage =
    /*#__PURE__*/
    function () {
      function EntreesPage(modalController, data, entreeService, router) {
        _classCallCheck(this, EntreesPage);

        this.modalController = modalController;
        this.data = data;
        this.entreeService = entreeService;
        this.router = router;
        this.trash = false;
        this.menu = 'entrees';
      }

      _createClass(EntreesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.entreeSubscription = this.entreeService.getEntrees().subscribe(function (res) {
            _this.entrees = res;
          });
          this.entreeTrashSubscription = this.entreeService.getEntreesTrash().subscribe(function (res) {
            _this.entreesTrash = res;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.entreeSubscription.unsubscribe();
          this.entreeSubscription.unsubscribe();
          this.entreeTrashSubscription.unsubscribe();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: src_app_components_entree_form_entree_form_component__WEBPACK_IMPORTED_MODULE_6__["EntreeFormComponent"]
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (res) {
                      console.log(res.data);
                      if (res.data) _this2.entreeService.addEntree(res.data);
                    });
                    _context.next = 6;
                    return modal.present();

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

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: src_app_components_entree_form_entree_form_component__WEBPACK_IMPORTED_MODULE_6__["EntreeFormComponent"],
                      componentProps: {
                        id: id
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (res) {
                      if (res.data) _this3.entreeService.editEntree(res.data);
                    });
                    _context2.next = 6;
                    return modal.present();

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
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: src_app_components_entree_profil_entree_profil_component__WEBPACK_IMPORTED_MODULE_7__["EntreeProfilComponent"],
                      componentProps: {
                        id: id,
                        trash: this.trash
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

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
          this.entreeService.deleteEntree(id);
        }
      }, {
        key: "onRestore",
        value: function onRestore(id) {
          this.entreeService.restoreEntree(id);
        }
      }, {
        key: "getFournisseurNom",
        value: function getFournisseurNom(id) {
          return this.entreeService.getFournisseur(id).nom;
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          if (!this.trash) this.entreeService.getServerEntrees();else this.entreeService.getSeverEntreesTrash();
        }
      }]);

      return EntreesPage;
    }();

    EntreesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_2__["EntreeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    EntreesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entrees',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entrees.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/entrees/entrees.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entrees.page.scss */
      "./src/app/pages/private/entrees/entrees.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_2__["EntreeService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], EntreesPage);
    /***/
  }
}]);
//# sourceMappingURL=entrees-entrees-module-es5.js.map