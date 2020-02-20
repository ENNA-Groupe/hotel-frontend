function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produits-produits-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/produits/produits.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/produits/produits.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrivateProduitsProduitsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content  mode=\"ios\">\n  <ion-grid fixed>\n    <ion-row *ngFor=\"let categorie of categories|sortBy:'asc':['nom']\" class=\"ion-margin-bottom\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"true\" mode=\"ios\">\n          <ion-button fill=\"clear\"  (click)=\"categorie.expand=!categorie.expand\">\n            <ion-icon slot=\"icon-only\" name=\"ios-arrow-forward\" *ngIf=\"!categorie.expand\"></ion-icon>\n            <ion-icon slot=\"icon-only\" name=\"ios-arrow-down\"  *ngIf=\"categorie.expand\"></ion-icon>\n          </ion-button>\n          <ion-label (click)=\"onShowCategorie(categorie.id)\">{{categorie.nom}}  \n            <ion-badge>{{(produits|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length}}</ion-badge></ion-label>\n\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"onAddProduit(categorie.id)\">\n              <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onEditCategorie(categorie.id)\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onDeleteCategorie(categorie.id)\">\n              <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n         \n        </ion-item>\n        <div *ngIf=\"categorie.expand\" class=\"container\">\n          <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n            <ion-slide *ngFor=\"let produit of produits|filterBy:'categorieId':categorie.id|sortBy:'asc':['nom', 'prenom']|searchBy:data.searchValue\">\n             <ion-card mode=\"ios\">\n              <div class=\"img\">\n                <img src=\"{{produit.photo}}\">\n              </div>\n               <ion-card-header>\n                <ion-card-title color=\"secondary\">{{produit.nom}}</ion-card-title>\n                 <ion-card-subtitle color=\"danger\" >{{produit.prixUnitaireVente}} F CFA</ion-card-subtitle>\n                 \n               </ion-card-header>\n               <ion-card-content>\n                 <!-- <ion-row>\n                   <p>\n                     {{produit.description}}\n                   </p>\n                 </ion-row> -->\n                <ion-row>\n                  <ion-col offset=\"6\" size=\"2\">\n                    <ion-button fill=\"clear\" (click)=\"onEditProduit(produit.id)\">\n                      <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                   <ion-button fill=\"clear\" (click)=\"onDeleteProduit(produit.id)\">\n                     <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash\"></ion-icon>\n                   </ion-button>\n                 </ion-col>\n                </ion-row>\n               </ion-card-content>\n             </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <ion-text color=\"danger\" *ngIf=\"(produits|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length===0\" >\n            <p>Aucune produit trouvée!</p>\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-text color=\"danger\" *ngIf=\"categories.length===0\">\n      <p>Aucune categorie de produit! Veuillez ajouter une categorie de produit!</p>\n    </ion-text>\n  \n  <ion-fab  *ngIf=\"!trash\"  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onAddCategorie()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/private/produits/produits.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/private/produits/produits.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProduitsPageModule */

  /***/
  function srcAppPagesPrivateProduitsProduitsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProduitsPageModule", function () {
      return ProduitsPageModule;
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


    var _produits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./produits.page */
    "./src/app/pages/private/produits/produits.page.ts");
    /* harmony import */


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _produits_page__WEBPACK_IMPORTED_MODULE_6__["ProduitsPage"]
    }];

    var ProduitsPageModule = function ProduitsPageModule() {
      _classCallCheck(this, ProduitsPageModule);
    };

    ProduitsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_produits_page__WEBPACK_IMPORTED_MODULE_6__["ProduitsPage"]]
    })], ProduitsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/private/produits/produits.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/private/produits/produits.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrivateProduitsProduitsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  height: 170px;\n  width: 100%;\n}\n.img img {\n  height: 100%;\n  width: 100%;\n}\nion-card {\n  width: 220px;\n  height: 300px;\n  background-color: white;\n}\n.container {\n  background-color: rgba(0, 100, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9wcm9kdWl0cy9DOlxcVXNlcnNcXEFyb2FtXFxEZXNrdG9wXFxob3RlbC9zcmNcXGFwcFxccGFnZXNcXHByaXZhdGVcXHByb2R1aXRzXFxwcm9kdWl0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvcHJvZHVpdHMvcHJvZHVpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNFUjtBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUE7RUFDSSx3Q0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9wcm9kdWl0cy9wcm9kdWl0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMTAwLDI1NSwwLjEpO1xyXG59IiwiLmltZyB7XG4gIGhlaWdodDogMTcwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMjU1LCAwLjEpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/private/produits/produits.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/private/produits/produits.page.ts ***!
    \*********************************************************/

  /*! exports provided: ProduitsPage */

  /***/
  function srcAppPagesPrivateProduitsProduitsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProduitsPage", function () {
      return ProduitsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/categorie-form/categorie-form.component */
    "./src/app/components/categorie-form/categorie-form.component.ts");
    /* harmony import */


    var src_app_components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/categorie-profil/categorie-profil.component */
    "./src/app/components/categorie-profil/categorie-profil.component.ts");
    /* harmony import */


    var src_app_components_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/produit-form/produit-form.component */
    "./src/app/components/produit-form/produit-form.component.ts");
    /* harmony import */


    var src_app_components_produit_profil_produit_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/components/produit-profil/produit-profil.component */
    "./src/app/components/produit-profil/produit-profil.component.ts");

    var ProduitsPage =
    /*#__PURE__*/
    function () {
      function ProduitsPage(popoverController, produitService, data, router) {
        _classCallCheck(this, ProduitsPage);

        this.popoverController = popoverController;
        this.produitService = produitService;
        this.data = data;
        this.router = router;
        this.trash = false;
      }

      _createClass(ProduitsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.categorieSubscription = this.produitService.getCategories().subscribe(function (res) {
            _this.categories = [];
            res.forEach(function (item) {
              if (!item.isIntrant) _this.categories.push(item);
            });
          });
          this.produitSubscription = this.produitService.getProduits().subscribe(function (res) {
            _this.produits = res;
          });
          this.categorieTrashSubscription = this.produitService.getCategoriesTrash().subscribe(function (res) {
            _this.categoriesTrash = res;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.categorieSubscription.unsubscribe();
          this.produitSubscription.unsubscribe();
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
                      component: src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_6__["CategorieFormComponent"],
                      translucent: false,
                      componentProps: {
                        isIntrant: false
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
                      component: src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_6__["CategorieFormComponent"],
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
                      component: src_app_components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_7__["CategorieProfilComponent"],
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
        key: "onAddProduit",
        value: function onAddProduit(id) {
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
                      component: src_app_components_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_8__["ProduitFormComponent"],
                      translucent: false
                    });

                  case 2:
                    popover = _context4.sent;
                    popover.onDidDismiss().then(function (res) {
                      console.log(res.data);
                      if (res.data) _this4.produitService.addProduit(res.data);
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
        key: "onEditProduit",
        value: function onEditProduit(id) {
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
                      component: src_app_components_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_8__["ProduitFormComponent"],
                      translucent: false,
                      componentProps: {
                        id: id
                      }
                    });

                  case 2:
                    popover = _context5.sent;
                    popover.onDidDismiss().then(function (res) {
                      if (res.data) _this5.produitService.editProduit(res.data);
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
        key: "onShowProduit",
        value: function onShowProduit(id) {
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
                      component: src_app_components_produit_profil_produit_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProduitProfilComponent"],
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
        key: "onDeleteProduit",
        value: function onDeleteProduit(id) {
          if (window.confirm('Voulez vous vraiment supprimer ce produit?')) this.produitService.deleteProduit(id);
        }
      }, {
        key: "onRestoreProduit",
        value: function onRestoreProduit(id) {
          this.produitService.restoreProduit(id);
        }
      }]);

      return ProduitsPage;
    }();

    ProduitsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"]
      }, {
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ProduitsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-produits',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./produits.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/produits/produits.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./produits.page.scss */
      "./src/app/pages/private/produits/produits.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ProduitsPage);
    /***/
  }
}]);
//# sourceMappingURL=produits-produits-module-es5.js.map