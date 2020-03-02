function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intrants-intrants-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/intrants/intrants.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/intrants/intrants.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrivateIntrantsIntrantsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content  mode=\"ios\">\n  <ion-grid fixed>\n    <ion-row *ngFor=\"let categorie of categories|sortBy:'asc':['nom']\" class=\"ion-margin-bottom\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"true\" mode=\"ios\">\n          <ion-button fill=\"clear\"  (click)=\"categorie.expand=!categorie.expand\">\n            <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\" *ngIf=\"!categorie.expand\"></ion-icon>\n            <ion-icon slot=\"icon-only\" name=\"chevron-down-outline\"  *ngIf=\"categorie.expand\"></ion-icon>\n          </ion-button>\n          <ion-label (click)=\"onShowCategorie(categorie.id)\">{{categorie.nom}}  \n            <ion-badge>{{(intrants|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length}}</ion-badge></ion-label>\n\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"onAddIntrant(categorie.id)\">\n              <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onEditCategorie(categorie.id)\">\n              <ion-icon color=\"warning\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onDeleteCategorie(categorie.id)\">\n              <ion-icon color=\"danger\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n         \n        </ion-item>\n        <div *ngIf=\"categorie.expand\" class=\"container\">\n          <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n            <ion-slide *ngFor=\"let intrant of intrants|filterBy:'categorieId':categorie.id|sortBy:'asc':['nom', 'prenom']|searchBy:data.searchValue\">\n             <ion-card mode=\"ios\">\n               <ion-card-header>\n                <ion-card-title color=\"secondary\">{{intrant.nom}}</ion-card-title>\n                 <ion-card-subtitle color=\"danger\" >{{intrant.quantiteStock}} en stock</ion-card-subtitle>\n                 \n               </ion-card-header>\n               <ion-card-content>\n                 <ion-row>\n                   <p>\n                     {{intrant.description}}\n                   </p>\n                 </ion-row>\n                <ion-row>\n                  <ion-col offset=\"6\" size=\"2\">\n                    <ion-button fill=\"clear\" (click)=\"onEditIntrant(intrant.id)\">\n                      <ion-icon slot=\"icon-only\" color=\"warning\" name=\"create-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                   <ion-button fill=\"clear\" (click)=\"onDeleteIntrant(intrant.id)\">\n                     <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n                   </ion-button>\n                 </ion-col>\n                </ion-row>\n               </ion-card-content>\n             </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <ion-text color=\"danger\" *ngIf=\"(intrants|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length===0\" >\n            <p>Aucune intrant trouvée!</p>\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-text color=\"danger\" *ngIf=\"categories.length===0\">\n      <p>Aucune categorie de intrant! Veuillez ajouter une categorie de intrant!</p>\n    </ion-text>\n  \n  <ion-fab  *ngIf=\"!trash\"  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onAddCategorie()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/private/intrants/intrants.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/private/intrants/intrants.module.ts ***!
    \***********************************************************/

  /*! exports provided: IntrantsPageModule */

  /***/
  function srcAppPagesPrivateIntrantsIntrantsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntrantsPageModule", function () {
      return IntrantsPageModule;
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


    var _intrants_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./intrants.page */
    "./src/app/pages/private/intrants/intrants.page.ts");
    /* harmony import */


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _intrants_page__WEBPACK_IMPORTED_MODULE_6__["IntrantsPage"]
    }];

    var IntrantsPageModule = function IntrantsPageModule() {
      _classCallCheck(this, IntrantsPageModule);
    };

    IntrantsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_intrants_page__WEBPACK_IMPORTED_MODULE_6__["IntrantsPage"]]
    })], IntrantsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/private/intrants/intrants.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/private/intrants/intrants.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrivateIntrantsIntrantsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvaW50cmFudHMvaW50cmFudHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/private/intrants/intrants.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/private/intrants/intrants.page.ts ***!
    \*********************************************************/

  /*! exports provided: IntrantsPage */

  /***/
  function srcAppPagesPrivateIntrantsIntrantsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntrantsPage", function () {
      return IntrantsPage;
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


    var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/produit.service */
    "./src/app/services/produit.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/categorie-form/categorie-form.component */
    "./src/app/components/categorie-form/categorie-form.component.ts");
    /* harmony import */


    var src_app_components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/categorie-profil/categorie-profil.component */
    "./src/app/components/categorie-profil/categorie-profil.component.ts");
    /* harmony import */


    var src_app_components_intrant_form_intrant_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/intrant-form/intrant-form.component */
    "./src/app/components/intrant-form/intrant-form.component.ts");
    /* harmony import */


    var src_app_components_intrant_profil_intrant_profil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/intrant-profil/intrant-profil.component */
    "./src/app/components/intrant-profil/intrant-profil.component.ts");

    var IntrantsPage =
    /*#__PURE__*/
    function () {
      function IntrantsPage(popoverController, produitService, data) {
        _classCallCheck(this, IntrantsPage);

        this.popoverController = popoverController;
        this.produitService = produitService;
        this.data = data;
        this.trash = false;
      }

      _createClass(IntrantsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.categorieSubscription = this.produitService.getCategories().subscribe(function (res) {
            _this.categories = [];
            res.forEach(function (item) {
              if (item.isIntrant) _this.categories.push(item);
            });
          });
          this.intrantSubscription = this.produitService.getIntrants().subscribe(function (res) {
            _this.intrants = res;
          });
          this.categorieTrashSubscription = this.produitService.getCategoriesTrash().subscribe(function (res) {
            _this.categoriesTrash = res;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.categorieSubscription.unsubscribe();
          this.intrantSubscription.unsubscribe();
          this.categorieTrashSubscription.unsubscribe();
        }
      }, {
        key: "onAddCategorie",
        value: function onAddCategorie() {
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
                      component: src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_5__["CategorieFormComponent"],
                      translucent: false,
                      componentProps: {
                        isIntrant: true
                      }
                    });

                  case 2:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (res) {
                      console.log(res.data);
                      if (res.data) _this2.produitService.addCategorie(res.data);
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
        key: "onEditCategorie",
        value: function onEditCategorie(id) {
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
                      component: src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_5__["CategorieFormComponent"],
                      translucent: false,
                      componentProps: {
                        id: id
                      }
                    });

                  case 2:
                    popover = _context2.sent;
                    popover.onDidDismiss().then(function (res) {
                      if (res.data) _this3.produitService.editCategorie(res.data);
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
        key: "onShowCategorie",
        value: function onShowCategorie(id) {
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
                      component: src_app_components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_6__["CategorieProfilComponent"],
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
        key: "onDeleteCategorie",
        value: function onDeleteCategorie(id) {
          this.produitService.deleteCategorie(id);
        }
      }, {
        key: "onRestoreCategorie",
        value: function onRestoreCategorie(id) {
          this.produitService.restoreCategorie(id);
        }
      }, {
        key: "onAddIntrant",
        value: function onAddIntrant(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_intrant_form_intrant_form_component__WEBPACK_IMPORTED_MODULE_7__["IntrantFormComponent"],
                      translucent: false
                    });

                  case 2:
                    popover = _context4.sent;
                    popover.onDidDismiss().then(function (res) {
                      console.log(res.data);
                      if (res.data) _this4.produitService.addIntrant(res.data);
                    });
                    _context4.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onEditIntrant",
        value: function onEditIntrant(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_intrant_form_intrant_form_component__WEBPACK_IMPORTED_MODULE_7__["IntrantFormComponent"],
                      translucent: false,
                      componentProps: {
                        id: id
                      }
                    });

                  case 2:
                    popover = _context5.sent;
                    popover.onDidDismiss().then(function (res) {
                      if (res.data) _this5.produitService.editIntrant(res.data);
                    });
                    _context5.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onShowIntrant",
        value: function onShowIntrant(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var popover;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_intrant_profil_intrant_profil_component__WEBPACK_IMPORTED_MODULE_8__["IntrantProfilComponent"],
                      translucent: false,
                      componentProps: {
                        id: id,
                        trash: this.trash
                      }
                    });

                  case 2:
                    popover = _context6.sent;
                    _context6.next = 5;
                    return popover.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "onDeleteIntrant",
        value: function onDeleteIntrant(id) {
          if (window.confirm('Voulez vous vraiment supprimer ce produit?')) this.produitService.deleteIntrant(id);
        }
      }, {
        key: "onRestoreIntrant",
        value: function onRestoreIntrant(id) {
          this.produitService.restoreIntrant(id);
        }
      }]);

      return IntrantsPage;
    }();

    IntrantsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"]
      }, {
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    IntrantsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intrants',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intrants.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/intrants/intrants.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intrants.page.scss */
      "./src/app/pages/private/intrants/intrants.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])], IntrantsPage);
    /***/
  }
}]);
//# sourceMappingURL=intrants-intrants-module-es5.js.map