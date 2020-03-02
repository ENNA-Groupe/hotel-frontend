function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chambres-chambres-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/chambres/chambres.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/chambres/chambres.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrivateChambresChambresPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content  mode=\"ios\">\n  <ion-grid fixed>\n    <ion-row *ngFor=\"let type of types|sortBy:'asc':['nom']\" class=\"ion-margin-bottom\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"true\" mode=\"ios\">\n          <ion-button fill=\"clear\"  (click)=\"type.expand=!type.expand\">\n            <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\" *ngIf=\"!type.expand\"></ion-icon>\n            <ion-icon slot=\"icon-only\" name=\"chevron-down-outline\"  *ngIf=\"type.expand\"></ion-icon>\n          </ion-button>\n          <ion-label (click)=\"onShowType(type.id)\">{{type.nom}}  \n            <ion-badge>{{(chambres|filterBy:'typeId':type.id|searchBy:data.searchValue).length}}</ion-badge></ion-label>\n\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"onAddChambre(type.id)\">\n              <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onEditType(type.id)\">\n              <ion-icon color=\"warning\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onDeleteType(type.id)\">\n              <ion-icon color=\"danger\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n         \n        </ion-item>\n        <div *ngIf=\"type.expand\" class=\"container\">\n          <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\" [options]=\"slidesOptions\">\n            <ion-slide *ngFor=\"let chambre of chambres|filterBy:'typeId':type.id|sortBy:'asc':['nom', 'prenom']|searchBy:data.searchValue\">\n             <ion-card mode=\"ios\">\n               <ion-card-header>\n                <ion-card-title color=\"secondary\">CHAMBRE {{chambre.numero}}</ion-card-title>\n                 <ion-card-subtitle color=\"danger\" >{{chambre.prixJournalier}} F CFA</ion-card-subtitle>\n                 \n               </ion-card-header>\n               <ion-card-content >\n                 <ion-row class=\"desc\">\n                   <p>\n                     {{chambre.description}}\n                   </p>\n                 </ion-row>\n                <ion-row>\n                  <ion-col class=\"ion-no-padding\" offset=\"3\" size=\"3\">\n                    <ion-button fill=\"clear\" (click)=\"onShowChambre(chambre.id)\">\n                      <ion-icon slot=\"icon-only\" name=\"eye-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col class=\"ion-no-padding\" size=\"3\">\n                    <ion-button fill=\"clear\" (click)=\"onEditChambre(chambre.id)\">\n                      <ion-icon color=\"warning\" slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col class=\"ion-no-padding\" size=\"3\">\n                   <ion-button fill=\"clear\" (click)=\"onDeleteChambre(chambre.id)\">\n                     <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n                   </ion-button>\n                 </ion-col>\n                </ion-row>\n               </ion-card-content>\n             </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <ion-text color=\"danger\" *ngIf=\"(chambres|filterBy:'typeId':type.id|searchBy:data.searchValue).length===0\" >\n            <p>Aucune chambre trouvée!</p>\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-text color=\"danger\" *ngIf=\"types.length===0\">\n      <p>Aucun type de chambre! Veuillez ajouter un type de chambre!</p>\n    </ion-text>\n  \n  <ion-fab  *ngIf=\"!trash\"  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onAddType()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/private/chambres/chambres.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/private/chambres/chambres.module.ts ***!
    \***********************************************************/

  /*! exports provided: ChambresPageModule */

  /***/
  function srcAppPagesPrivateChambresChambresModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChambresPageModule", function () {
      return ChambresPageModule;
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


    var _chambres_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chambres.page */
    "./src/app/pages/private/chambres/chambres.page.ts");
    /* harmony import */


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _chambres_page__WEBPACK_IMPORTED_MODULE_6__["ChambresPage"]
    }];

    var ChambresPageModule = function ChambresPageModule() {
      _classCallCheck(this, ChambresPageModule);
    };

    ChambresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_chambres_page__WEBPACK_IMPORTED_MODULE_6__["ChambresPage"]]
    })], ChambresPageModule);
    /***/
  },

  /***/
  "./src/app/pages/private/chambres/chambres.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/private/chambres/chambres.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrivateChambresChambresPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  width: 220px;\n  height: 240px;\n  background-color: white;\n}\nion-card .desc {\n  height: 70px;\n  overflow: auto;\n}\n.container {\n  background-color: rgba(0, 100, 255, 0.1);\n  height: 265px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9jaGFtYnJlcy9DOlxcVXNlcnNcXEFyb2FtXFxEZXNrdG9wXFxob3RlbC1mcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXHByaXZhdGVcXGNoYW1icmVzXFxjaGFtYnJlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvY2hhbWJyZXMvY2hhbWJyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0QsY0FBQTtBQ0VQO0FEQ0E7RUFDSSx3Q0FBQTtFQUNBLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvY2hhbWJyZXMvY2hhbWJyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAuZGVzY3tcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDEwMCwyNTUsMC4xKTtcclxuICAgIGhlaWdodDogMjY1cHg7XHJcbn0iLCJpb24tY2FyZCB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pb24tY2FyZCAuZGVzYyB7XG4gIGhlaWdodDogNzBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMjU1LCAwLjEpO1xuICBoZWlnaHQ6IDI2NXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/private/chambres/chambres.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/private/chambres/chambres.page.ts ***!
    \*********************************************************/

  /*! exports provided: ChambresPage */

  /***/
  function srcAppPagesPrivateChambresChambresPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChambresPage", function () {
      return ChambresPage;
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


    var src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/chambre.service */
    "./src/app/services/chambre.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_components_type_form_type_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/type-form/type-form.component */
    "./src/app/components/type-form/type-form.component.ts");
    /* harmony import */


    var src_app_components_type_profil_type_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/type-profil/type-profil.component */
    "./src/app/components/type-profil/type-profil.component.ts");
    /* harmony import */


    var src_app_components_chambre_form_chambre_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/chambre-form/chambre-form.component */
    "./src/app/components/chambre-form/chambre-form.component.ts");
    /* harmony import */


    var src_app_components_chambre_profil_chambre_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/components/chambre-profil/chambre-profil.component */
    "./src/app/components/chambre-profil/chambre-profil.component.ts");

    var ChambresPage =
    /*#__PURE__*/
    function () {
      function ChambresPage(popoverController, modalController, chambreService, data, router) {
        _classCallCheck(this, ChambresPage);

        this.popoverController = popoverController;
        this.modalController = modalController;
        this.chambreService = chambreService;
        this.data = data;
        this.router = router;
        this.slidesOptions = {
          initialSlide: 0,
          spaceBetween: 4,
          slidesPerView: 4,
          breakpoints: {
            // when window width is >= 320px
            385: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1.5,
              spaceBetween: 1
            },
            // when window width is >= 640px
            765: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 3,
              spaceBetween: 10
            } // freeMode: true,

          }
        };
        this.typesTrash = [];
        this.trash = false;
      }

      _createClass(ChambresPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.typeSubscription = this.chambreService.getTypes().subscribe(function (res) {
            _this.types = [];
            res.forEach(function (item) {
              item.expand = false;

              _this.types.push(item);
            });
          });
          this.chambreSubscription = this.chambreService.getChambres().subscribe(function (res) {
            _this.chambres = res;
          });
          this.typeTrashSubscription = this.chambreService.getTypesTrash().subscribe(function (res) {
            _this.typesTrash = res;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.typeSubscription.unsubscribe();
          this.chambreSubscription.unsubscribe();
          this.typeTrashSubscription.unsubscribe();
        }
      }, {
        key: "onAddType",
        value: function onAddType() {
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
                      component: src_app_components_type_form_type_form_component__WEBPACK_IMPORTED_MODULE_6__["TypeFormComponent"],
                      translucent: false
                    });

                  case 2:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (res) {
                      console.log(res.data);
                      if (res.data) _this2.chambreService.addType(res.data);
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
        key: "onEditType",
        value: function onEditType(id) {
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
                      component: src_app_components_type_form_type_form_component__WEBPACK_IMPORTED_MODULE_6__["TypeFormComponent"],
                      translucent: false,
                      componentProps: {
                        id: id
                      }
                    });

                  case 2:
                    popover = _context2.sent;
                    popover.onDidDismiss().then(function (res) {
                      if (res.data) _this3.chambreService.editType(res.data);
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
        key: "onShowType",
        value: function onShowType(id) {
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
                      component: src_app_components_type_profil_type_profil_component__WEBPACK_IMPORTED_MODULE_7__["TypeProfilComponent"],
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
        key: "onDeleteType",
        value: function onDeleteType(id) {
          this.chambreService.deleteType(id);
        }
      }, {
        key: "onRestoreType",
        value: function onRestoreType(id) {
          this.chambreService.restoreType(id);
        }
      }, {
        key: "onAddChambre",
        value: function onAddChambre(id) {
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
                      component: src_app_components_chambre_form_chambre_form_component__WEBPACK_IMPORTED_MODULE_8__["ChambreFormComponent"],
                      translucent: false,
                      componentProps: {
                        tId: id
                      }
                    });

                  case 2:
                    popover = _context4.sent;
                    popover.onDidDismiss().then(function (res) {
                      console.log(res.data);
                      if (res.data) _this4.chambreService.addChambre(res.data);
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
        key: "onEditChambre",
        value: function onEditChambre(id) {
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
                      component: src_app_components_chambre_form_chambre_form_component__WEBPACK_IMPORTED_MODULE_8__["ChambreFormComponent"],
                      translucent: false,
                      componentProps: {
                        id: id
                      }
                    });

                  case 2:
                    popover = _context5.sent;
                    popover.onDidDismiss().then(function (res) {
                      if (res.data) _this5.chambreService.editChambre(res.data);
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
        key: "onShowChambre",
        value: function onShowChambre(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalController.create({
                      component: src_app_components_chambre_profil_chambre_profil_component__WEBPACK_IMPORTED_MODULE_9__["ChambreProfilComponent"],
                      componentProps: {
                        id: id,
                        trash: this.trash
                      }
                    });

                  case 2:
                    modal = _context6.sent;
                    _context6.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "onDeleteChambre",
        value: function onDeleteChambre(id) {
          this.chambreService.deleteChambre(id);
        }
      }, {
        key: "onRestoreChambre",
        value: function onRestoreChambre(id) {
          this.chambreService.restoreChambre(id);
        }
      }]);

      return ChambresPage;
    }();

    ChambresPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_3__["ChambreService"]
      }, {
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ChambresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chambres',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chambres.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/chambres/chambres.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chambres.page.scss */
      "./src/app/pages/private/chambres/chambres.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_3__["ChambreService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ChambresPage);
    /***/
  }
}]);
//# sourceMappingURL=chambres-chambres-module-es5.js.map