function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./chambres/chambres.module": ["./src/app/pages/private/chambres/chambres.module.ts", "chambres-chambres-module"],
      "./change-password/change-password.module": ["./src/app/pages/public/change-password/change-password.module.ts", "common", "change-password-change-password-module"],
      "./clients/clients.module": ["./src/app/pages/private/clients/clients.module.ts", "clients-clients-module"],
      "./consommations/consommations.module": ["./src/app/pages/private/consommations/consommations.module.ts", "consommations-consommations-module"],
      "./controls/controls.module": ["./src/app/pages/private/params/controls/controls.module.ts", "controls-controls-module"],
      "./dashboard/dashboard.module": ["./src/app/pages/private/dashboard/dashboard.module.ts", "dashboard-dashboard-module"],
      "./entrees/entrees.module": ["./src/app/pages/private/entrees/entrees.module.ts", "entrees-entrees-module"],
      "./fournisseurs/fournisseurs.module": ["./src/app/pages/private/fournisseurs/fournisseurs.module.ts", "fournisseurs-fournisseurs-module"],
      "./intrants/intrants.module": ["./src/app/pages/private/intrants/intrants.module.ts", "intrants-intrants-module"],
      "./location/location.module": ["./src/app/pages/private/location/location.module.ts", "location-location-module"],
      "./login/login.module": ["./src/app/pages/public/login/login.module.ts", "common", "login-login-module"],
      "./pages/private/private.module": ["./src/app/pages/private/private.module.ts", "common", "pages-private-private-module"],
      "./pages/public/public.module": ["./src/app/pages/public/public.module.ts", "pages-public-public-module"],
      "./params/params.module": ["./src/app/pages/private/params/params.module.ts", "params-params-module"],
      "./produits/produits.module": ["./src/app/pages/private/produits/produits.module.ts", "produits-produits-module"],
      "./profil/profil.module": ["./src/app/pages/private/params/profil/profil.module.ts", "profil-profil-module"],
      "./propriete/propriete.module": ["./src/app/pages/private/params/propriete/propriete.module.ts", "propriete-propriete-module"],
      "./sorties/sorties.module": ["./src/app/pages/private/sorties/sorties.module.ts", "sorties-sorties-module"],
      "./stats/stats.module": ["./src/app/pages/private/stats/stats.module.ts", "stats-stats-module"],
      "./users/users.module": ["./src/app/pages/private/users/users.module.ts", "users-users-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorie-form/categorie-form.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorie-form/categorie-form.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCategorieFormCategorieFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n        <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Description</ion-label>\n        <ion-textarea formControlName=\"description\"></ion-textarea>\n      </ion-item>\n\n      <ion-text color=\"danger\" *ngIf=\"nom.invalid && (nom.dirty || nom.touched)\">\n        <small  *ngIf=\"nom.errors.required\" class=\"ion-padding-start\">\n          le nom est requis.\n        </small>\n      </ion-text>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorie-profil/categorie-profil.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorie-profil/categorie-profil.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCategorieProfilCategorieProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  categorie-profil works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chambre-form/chambre-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chambre-form/chambre-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChambreFormChambreFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <ion-slides [options]=\"slideOpts\" #slides>\n      <ion-slide>\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Type de chambre</ion-label>\n            <ion-select formControlName=\"typeId\">\n              <ion-select-option *ngFor=\"let item of types\" [value]=\"item.id\">{{item.nom}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Numero</ion-label>\n            <ion-input formControlName=\"numero\" type=\"text\" spellcheck=\"false\" autocapitalize=\"on\" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Prix journalier</ion-label>\n            <ion-input formControlName=\"prixJournalier\" type=\"number\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Description</ion-label>\n            <ion-textarea formControlName=\"description\"></ion-textarea>\n          </ion-item>\n\n          <ion-text class=\"ion-padding-start\" color=\"danger\"\n            *ngIf=\"(typeId.invalid && (typeId.dirty || typeId.touched))\">\n            <small *ngIf=\"typeId.errors.required\">\n              La type est requise.\n            </small>\n          </ion-text>\n          <ion-text class=\"ion-padding-start\" color=\"danger\"\n            *ngIf=\"(numero.invalid && (numero.dirty || numero.touched))\">\n            <small *ngIf=\"numero.errors.required\">\n              Le numero est requis.\n            </small>\n          </ion-text>\n          <ion-text class=\"ion-padding-start\" color=\"danger\"\n            *ngIf=\"(prixJournalier.invalid && (prixJournalier.dirty || prixJournalier.touched))\">\n            <small *ngIf=\"prixJournalier.errors.required\">\n              Le contact est requis.\n            </small>\n          </ion-text>\n        </ion-list>\n      </ion-slide>\n      <ion-slide>\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-img [src]=\"photo\" width='100%'></ion-img>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <input type=\"file\" (change)=\"onUploadChange($event)\" accept=\".png, .jpg, .jpeg, .pdf\" />\n              <!-- <ion-button (click)=\"onChoose()\">Choisir</ion-button> -->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-slide>\n    </ion-slides>\n\n    <ion-row>\n      <ion-col>\n        <ion-button  color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n        <!-- <ion-button *ngIf=\"slideIndex\" color=\"light\" (click)=\"onPrevious()\" expand=\"block\">Retour</ion-button> -->\n      </ion-col>\n      <ion-col>\n        <!-- <ion-button *ngIf=\"!slideIndex\" [disabled]=\"!form.valid\" (click)=\"onNext()\" expand=\"block\">Suivant</ion-button> -->\n        <ion-button  [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chambre-profil/chambre-profil.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chambre-profil/chambre-profil.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChambreProfilChambreProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <!-- <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>{{ item.nom }} {{ item.prenom }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n  <ion-toolbar  mode=\"ios\" color=\"primary\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"infos\">\n      <ion-segment-button value=\"infos\">\n        <ion-icon slot=\"start\" name=\"information-cirlcle-outline\"></ion-icon>\n        <span>Infos</span> \n      </ion-segment-button>\n      <ion-segment-button value=\"activites\">\n        <ion-icon slot=\"start\" name=\"bookmark\"></ion-icon>\n        <span> activities</span>\n      </ion-segment-button>\n      <ion-segment-button value=\"parametres\">\n        <ion-icon slot=\"start\" name=\"settings\"></ion-icon>\n        <span> parametres</span>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" (click)=\"onClose()\">\n    <ion-icon name='close'></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<!-- informations -->\n<ion-content  *ngIf=\"menu==='infos'\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\">\n          <ion-row>\n            <ion-col size-sm=\"6\" size=\"12\">\n              <ion-card-content>\n                <ion-list mode=\"ios\">\n                  <ion-list-header mode=\"ios\">\n                    <ion-label>Informations</ion-label>\n                  </ion-list-header>\n                  <ion-item mode=\"ios\">\n                    <ion-col size=\"4\">Numero</ion-col>\n                    <ion-col size=\"8\">:<ion-text color=\"secondary\">{{item.numero}}</ion-text>\n                    </ion-col>\n                  </ion-item>\n                  <ion-item mode=\"ios\">\n                    <ion-col size=\"4\">Prix journalier</ion-col>\n                    <ion-col size=\"8\">:<ion-text color=\"secondary\">{{item.prixJournalier}}</ion-text>\n                    </ion-col>\n                  </ion-item>\n                  \n                  <ion-item mode=\"ios\">\n                    <ion-col size=\"4\">Ajouté le</ion-col>\n                    <ion-col size=\"8\">:<ion-text color=\"secondary\">{{item.createdAt|date:'dd-MM-yyyy HH:mm'}}</ion-text>\n                    </ion-col>\n                  </ion-item>\n                  \n                  <ion-item mode=\"ios\">\n                    <ion-col size=\"4\">Modifié le</ion-col>\n                    <ion-col size=\"8\">:<ion-text color=\"secondary\">{{item.updatedAt|date:'dd-MM-yyyy HH:mm'}}</ion-text>\n                    </ion-col>\n                  </ion-item>\n                </ion-list>\n              </ion-card-content>\n            </ion-col>\n          </ion-row>          \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- activites -->\n<ion-content *ngIf=\"menu==='activites'\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-list>\n          <ion-list-header mode=\"ios\">\n            <ion-label>Activités</ion-label>\n          </ion-list-header>\n          <ion-card mode=\"ios\" *ngFor=\"let activite of activities\">\n            <!-- <ion-label> {{activite.model}}:{{activite.operation}}</ion-label> -->\n            <p>\n              <ion-note color=\"primary\" *ngIf=\"activite.typeOperation==='add'\" mode=\"ios\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"success\" mode=\"ios\" *ngIf=\"activite.typeOperation==='login'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"danger\" mode=\"ios\" *ngIf=\"activite.typeOperation==='delete'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"warning\" mode=\"ios\" *ngIf=\"activite.typeOperation==='edit'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"secondary\" mode=\"ios\" *ngIf=\"activite.typeOperation==='logout'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"danger\" mode=\"ios\" *ngIf=\"activite.typeOperation==='restore'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              {{ activite.description }}</p>\n          </ion-card>\n        </ion-list>\n        <ion-infinite-scroll  threshold=\"20%\" (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n           \n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<!-- parametres -->\n<ion-content *ngIf=\"menu==='parametres'\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\">\n          <ion-list mode=\"ios\">\n            <ion-item mode=\"ios\" *ngFor=\"let propriete of chambreProprietes\">\n              <ion-label>{{propriete.description}}</ion-label>\n              <ion-checkbox mode=\"ios\" [(ngModel)]=\"propriete.isChecked\" slot=\"start\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"warning\" (click)=\"onReset()\">\n      <ion-icon name='refresh'></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" (click)=\"onSave()\">\n      <ion-icon name='checkmark'></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client-form/client-form.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/client-form/client-form.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClientFormClientFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n      <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"on\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Prenom</ion-label>\n      <ion-input formControlName=\"prenom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Contact 1</ion-label>\n      <ion-input formControlName=\"contact1\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n      </ion-input>\n    </ion-item>\n\n    \n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Contact 2</ion-label>\n      <ion-input formControlName=\"contact2\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Adresse</ion-label>\n      <ion-input formControlName=\"adresse\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n      </ion-input>\n    </ion-item>\n   \n    <ion-text class=\"ion-padding-start\" color=\"danger\"\n    *ngIf=\"(nom.invalid && (nom.dirty || nom.touched))\">\n      <p  *ngIf=\"nom.errors.required\" >\n        Le nom est requis.\n      </p>\n    </ion-text>\n    <ion-text class=\"ion-padding-start\" color=\"danger\"\n    *ngIf=\"(contact1.invalid && (contact1.dirty || contact1.touched))\">\n      <p  *ngIf=\"contact1.errors.required\" >\n        Le contact1 est requis.\n      </p>\n      <p  *ngIf=\"contact1.errors.minlength\" >\n        Le contact 1 doit être superieur à 8 charactères.\n      </p>\n    </ion-text>\n    <ion-text class=\"ion-padding-start\" color=\"danger\"\n    *ngIf=\"(adresse.invalid && (adresse.dirty || adresse.touched))\">\n      <p  *ngIf=\"adresse.errors.minlength\" >\n        L' adresse doit être superieur à 2 charactères.\n      </p>\n      <p  *ngIf=\"adresse.errors.required\" >\n        L' adresse est requis.\n      </p>\n    </ion-text>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client-profil/client-profil.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/client-profil/client-profil.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClientProfilClientProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  client-profil works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/consommation-form/consommation-form.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/consommation-form/consommation-form.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsConsommationFormConsommationFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      Table {{numeroTable}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  mode=\"ios\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Type</ion-label>\n          <ion-select [(ngModel)]=\"typeClient\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option value=\"anonyme\">Anonyme</ion-select-option>\n            <ion-select-option value=\"client\">Client</ion-select-option>\n            <ion-select-option value=\"chambre\">Chambre</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item *ngIf=\"typeClient==='client'\">\n          <ion-label>Nom</ion-label>\n          <ion-select [(ngModel)]=\"clientId\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option *ngFor=\"let client of clients\" value=\"client.id\">{{client.nom}} {{client.prenom}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf=\"typeClient==='chambre'\">\n          <ion-label>Numero</ion-label>\n          <ion-select [(ngModel)]=\"chambreId\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option *ngFor=\"let chambre of chambres\" value=\"chambre.id\">{{chambre.numero}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let categorie of categories|sortBy:'asc':['nom']\" class=\"ion-margin-bottom\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"true\" mode=\"ios\">\n          <ion-button fill=\"clear\"  (click)=\"categorie.expand=!categorie.expand\">\n            <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\" *ngIf=\"!categorie.expand\"></ion-icon>\n            <ion-icon slot=\"icon-only\" name=\"chevron-down-outline\"  *ngIf=\"categorie.expand\"></ion-icon>\n          </ion-button>\n          <ion-label>{{categorie.nom}}  \n            <ion-badge>{{(produits|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length}}</ion-badge>\n          </ion-label>\n      \n        </ion-item>\n        <div *ngIf=\"categorie.expand\" class=\"container\">\n          <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n            <ion-slide *ngFor=\"let produit of produits|filterBy:'categorieId':categorie.id|sortBy:'asc':['nom', 'prenom']|searchBy:data.searchValue\">\n             <ion-card mode=\"ios\">\n              <div class=\"img\">\n                <img src=\"{{produit.photo}}\">\n              </div>\n               <ion-card-header>\n                <ion-card-title color=\"secondary\">{{produit.nom}}</ion-card-title>\n                 <ion-card-subtitle color=\"danger\" >{{produit.quantite}} X {{produit.prixUnitaireVente}} F CFA</ion-card-subtitle>\n               </ion-card-header>\n               <ion-card-content>\n                <ion-item>\n                  <ion-input type=\"number\" [(ngModel)]=\"produit.quantite\" ></ion-input>\n                  <ion-button (click)=\"onAdd(produit.id, produit.prixUnitaireVente,produit.quantite)\" expand=\"block\"  shape=\"round\">\n                    <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n               </ion-card-content>\n             </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <ion-text color=\"danger\" *ngIf=\"(produits|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length===0\" >\n            <p>Aucune produit trouvée!</p>\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-text color=\"danger\" *ngIf=\"categories.length===0\">\n      <p>Aucune categorie de produit! Veuillez ajouter une categorie de produit!</p>\n    </ion-text>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/consommation-profil/consommation-profil.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/consommation-profil/consommation-profil.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsConsommationProfilConsommationProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  consommation-profil works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-form/control-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-form/control-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlFormControlFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n        <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Operation</ion-label>\n        <ion-input formControlName=\"operation\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Description</ion-label>\n        <ion-textarea formControlName=\"description\"></ion-textarea>\n      </ion-item>\n\n      <ion-text color=\"danger\" *ngIf=\"nom.invalid && (nom.dirty || nom.touched)\">\n        <small  *ngIf=\"nom.errors.required\" class=\"ion-padding-start\">\n          le nom est requis.\n        </small>\n      </ion-text>\n\n      <ion-text color=\"danger\" *ngIf=\"operation.invalid && (operation.dirty || operation.touched)\">\n        <small  *ngIf=\"operation.errors.required\" class=\"ion-padding-start\">\n          l' operation est requise.\n        </small>\n      </ion-text>\n  \n    <ion-row>\n      <ion-col>\n        <ion-button color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-profil/control-profil.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-profil/control-profil.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlProfilControlProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  control-profil works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entree-form/entree-form.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/entree-form/entree-form.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEntreeFormEntreeFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Fournisseur</ion-label>\n          <ion-select [(ngModel)]=\"operation.fournisseurId\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option *ngFor=\"let fournisseur of fournisseurs\" [value]=\"fournisseur.id\">{{fournisseur.nom}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Numero</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"operation.numeroFacture\" [ngModelOptions]=\"{standalone: true}\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" offset=\"2\">Produit</ion-col>\n      <ion-col size=\"2\">quantite</ion-col>\n      <ion-col size=\"2\">PU</ion-col>\n      <ion-col size=\"2\">PT</ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngFor=\"let prod of produitsArray; let i = index\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label slot=\"start\" class=\"\">{{i+1}}</ion-label>\n          <ion-col size=\"4\" class=\"\" class=\"\">\n            <ion-input class=\"bg-blue \" [(ngModel)]=\"prod.nom\" [ngModelOptions]=\"{standalone: true}\"\n              (click)=\"prod.searching=!prod.searching\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"2\" class=\" \">\n            <ion-input class=\"bg-blue \" type=\"number\" [(ngModel)]=\"produitsArray[i].quantite\"\n              [ngModelOptions]=\"{standalone: true}\" (click)=\"setQuantiteTotal()\" (keyup)=\"setQuantiteTotal()\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"3\" class=\" \">\n            <ion-input class=\"bg-blue \" type=\"number\" [(ngModel)]=\"produitsArray[i].prixUnitaire\"\n              [ngModelOptions]=\"{standalone: true}\" (click)=\"setQuantiteTotal()\" (keyup)=\"setQuantiteTotal()\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"3\" class=\" \">\n            <ion-input class=\"bg-blue \" type=\"number\"\n              [ngModel]=\"produitsArray[i].quantite*produitsArray[i].prixUnitaire\" disabled=\"true\"\n              [ngModelOptions]=\"{standalone: true}\"></ion-input>\n          </ion-col>\n          <ion-button (click)=\"onDelete(i)\" color=\"danger\" class=\"ion-no-margin\" slot=\"end\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-card class=\"search-box\" *ngIf=\"prod.searching\">\n          <ion-row (click)=\"onSelectProduct(i, elem.id, elem.categorie, elem.nom)\"\n            *ngFor=\"let elem of produits|searchBy:prod.nom:'categorie'\">\n            <ion-col size=\"12\" *ngIf=\"(produits|searchBy:prod.nom:'categorie').length>0\">\n              {{elem.categorie}} {{elem.nom}}\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"( produits|searchBy:prod.nom:'categorie').length===0\">\n            <ion-col size=\"12\">Aucun produit trouvé!</ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <div class=\"text-center\">\n      <ion-button (click)=\"onAddData()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Autres frais</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"operation.autresFrais\" [ngModelOptions]=\"{standalone: true}\"\n            (click)=\"setQuantiteTotal()\" (keyup)=\"setQuantiteTotal()\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Reductions</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"operation.reductions\" [ngModelOptions]=\"{standalone: true}\"\n            (click)=\"setQuantiteTotal()\" (keyup)=\"setQuantiteTotal()\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Montant Total</ion-label>\n          <ion-input type=\"number\" disabled=\"true\" [(ngModel)]=\"operation.montantTotal\"\n            [ngModelOptions]=\"{standalone: true}\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Montant versé </ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"operation.montantPaye\" [ngModelOptions]=\"{standalone: true}\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" (click)=\"onSubmit()\">\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entree-profil/entree-profil.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/entree-profil/entree-profil.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEntreeProfilEntreeProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Fournisseur</ion-label>\n          <ion-select disabled [(ngModel)]=\"operation.fournisseurId\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option *ngFor=\"let fournisseur of fournisseurs\" [value]=\"fournisseur.id\">{{fournisseur.nom}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Numero</ion-label>\n          <ion-input readonly type=\"text\" [(ngModel)]=\"operation.numeroFacture\" [ngModelOptions]=\"{standalone: true}\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\" offset=\"2\">Produit</ion-col>\n      <ion-col size=\"2\">quantite</ion-col>\n      <ion-col size=\"2\">PU</ion-col>\n      <ion-col size=\"2\">PT</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngFor=\"let prod of produitsArray; let i = index\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label slot=\"start\">{{i+1}}</ion-label>\n          <ion-col size=\"4\">\n            <ion-input readonly class=\"bg-blue \" [(ngModel)]=\"prod.nom\" [ngModelOptions]=\"{standalone: true}\"\n              (click)=\"prod.searching=!prod.searching\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-input readonly class=\"bg-blue \" type=\"number\" [(ngModel)]=\"produitsArray[i].quantite\"\n              [ngModelOptions]=\"{standalone: true}\" >\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-input readonly class=\"bg-blue \" type=\"number\" [(ngModel)]=\"produitsArray[i].prixUnitaire\"\n              [ngModelOptions]=\"{standalone: true}\" >\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-input readonly class=\"bg-blue \" type=\"number\"\n              [ngModel]=\"produitsArray[i].quantite*produitsArray[i].prixUnitaire\" disabled=\"true\"\n              [ngModelOptions]=\"{standalone: true}\"></ion-input>\n          </ion-col>\n        </ion-item>\n        <ion-card class=\"search-box\" *ngIf=\"prod.searching\">\n          <ion-row (click)=\"onSelectProduct(i, elem.id, elem.categorie, elem.nom)\"\n            *ngFor=\"let elem of produits|searchBy:prod.nom:'categorie'\">\n            <ion-col size=\"12\" *ngIf=\"(produits|searchBy:prod.nom:'categorie').length>0\">\n              {{elem.categorie}} {{elem.nom}}\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"( produits|searchBy:prod.nom:'categorie').length===0\">\n            <ion-col size=\"12\">Aucun produit trouvé!</ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Autres frais</ion-label>\n          <ion-input readonly type=\"number\" [(ngModel)]=\"operation.autresFrais\" [ngModelOptions]=\"{standalone: true}\"\n            ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Reductions</ion-label>\n          <ion-input readonly type=\"number\" [(ngModel)]=\"operation.reductions\" [ngModelOptions]=\"{standalone: true}\"\n            ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Montant Total</ion-label>\n          <ion-input readonly type=\"number\" disabled=\"true\" [(ngModel)]=\"operation.montantTotal\"\n            [ngModelOptions]=\"{standalone: true}\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Montant versé </ion-label>\n          <ion-input readonly type=\"number\" [(ngModel)]=\"operation.montantPaye\" [ngModelOptions]=\"{standalone: true}\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fonction-form/fonction-form.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fonction-form/fonction-form.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFonctionFormFonctionFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n        <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Description</ion-label>\n        <ion-textarea formControlName=\"description\"></ion-textarea>\n      </ion-item>\n\n      <ion-text color=\"danger\" *ngIf=\"nom.invalid && (nom.dirty || nom.touched)\">\n        <small  *ngIf=\"nom.errors.required\" class=\"ion-padding-start\">\n          le nom est requis.\n        </small>\n      </ion-text>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fonction-profil/fonction-profil.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fonction-profil/fonction-profil.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFonctionProfilFonctionProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-list-header>\n      <ion-label color=\"warning\">{{title| uppercase}}</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label color=\"secondary\">Nom: </ion-label>\n      <ion-label>{{item.nom|uppercase}}</ion-label>\n    </ion-item>\n\n    <ion-row>\n      <ion-label color=\"secondary\">Description:</ion-label>\n      <ion-col size=\"12\">\n        <ion-text>{{item.description}}</ion-text>\n      </ion-col>\n\n    </ion-row>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fournisseur-form/fournisseur-form.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fournisseur-form/fournisseur-form.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFournisseurFormFournisseurFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n        <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Contact</ion-label>\n        <ion-input formControlName=\"contact\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n\n      <ion-text color=\"danger\" *ngIf=\"nom.invalid && (nom.dirty || nom.touched)\">\n        <small  *ngIf=\"nom.errors.required\" class=\"ion-padding-start\">\n          le nom est requis.\n        </small>\n      </ion-text>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fournisseur-profil/fournisseur-profil.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fournisseur-profil/fournisseur-profil.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFournisseurProfilFournisseurProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  fournisseur-profil works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intrant-form/intrant-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intrant-form/intrant-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIntrantFormIntrantFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Categorie</ion-label>\n      <ion-select formControlName=\"categorieId\">\n        <ion-select-option *ngFor=\"let item of categories\" [value]=\"item.id\">{{item.nom}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n      <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Unité de mesure</ion-label>\n      <ion-input formControlName=\"uniteMesure\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Quantité d'alerte</ion-label>\n      <ion-input formControlName=\"quantiteAlerte\" type=\"number\" spellcheck=\"false\" autocapitalize=\"off\" required>\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Description</ion-label>\n      <ion-textarea formControlName=\"description\"></ion-textarea>\n    </ion-item>\n\n    \n    <ion-text class=\"ion-padding-start\" color=\"danger\" \n    *ngIf=\"(categorieId.invalid && (categorieId.dirty || categorieId.touched))\">\n      <small  *ngIf=\"categorieId.errors.required\" >\n        La categorie est requise.\n      </small>\n    </ion-text>\n\n    <ion-text color=\"danger\" *ngIf=\"nom.invalid && (nom.dirty || nom.touched)\">\n      <small *ngIf=\"nom.errors.required\" class=\"ion-padding-start\">\n        le nom est requis.\n      </small>\n    </ion-text>\n\n\n    <ion-text color=\"danger\" *ngIf=\"uniteMesure.invalid && (uniteMesure.dirty || uniteMesure.touched)\">\n      <small *ngIf=\"uniteMesure.errors.required\" class=\"ion-padding-start\">\n        l'unité de mesure est requise.\n      </small>\n    </ion-text>\n\n\n    <ion-text color=\"danger\" *ngIf=\"quantiteAlerte.invalid && (quantiteAlerte.dirty || quantiteAlerte.touched)\">\n      <small *ngIf=\"quantiteAlerte.errors.required\" class=\"ion-padding-start\">\n        la quantité d'alerte est requise.\n      </small>\n    </ion-text>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intrant-profil/intrant-profil.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intrant-profil/intrant-profil.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIntrantProfilIntrantProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  intrant-profil works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produit-form/produit-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/produit-form/produit-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProduitFormProduitFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <ion-slides [options]=\"slideOpts\" #slides>\n      <ion-slide class=\"ion-no-padding\">\n        <ion-list class=\"ion-no-margin\">\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Categorie</ion-label>\n            <ion-select formControlName=\"categorieId\">\n              <ion-select-option *ngFor=\"let item of categories\" [value]=\"item.id\">{{item.nom}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n            <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"on\" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Unité de mesure</ion-label>\n            <ion-input formControlName=\"uniteMesure\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Prix unitaire de vente</ion-label>\n            <ion-input formControlName=\"prixUnitaireVente\" type=\"nom  \" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Description</ion-label>\n            <ion-textarea formControlName=\"description\"></ion-textarea>\n          </ion-item>\n\n          <ion-text class=\"ion-padding-start\" color=\"danger\" \n          *ngIf=\"(categorieId.invalid && (categorieId.dirty || categorieId.touched))\">\n            <small  *ngIf=\"categorieId.errors.required\" >\n              La categorie est requise.\n            </small>\n          </ion-text>\n          <ion-text class=\"ion-padding-start\" color=\"danger\" \n          *ngIf=\"(nom.invalid && (nom.dirty || nom.touched))\">\n            <small  *ngIf=\"nom.errors.required\" >\n              Le nom est requis.\n            </small>\n          </ion-text>\n          <ion-text color=\"danger\" *ngIf=\"uniteMesure.invalid && (uniteMesure.dirty || uniteMesure.touched)\">\n            <small *ngIf=\"uniteMesure.errors.required\" class=\"ion-padding-start\">\n              l'unité de mesure est requise.\n            </small>\n          </ion-text>\n          <ion-text class=\"ion-padding-start\" color=\"danger\" \n          *ngIf=\"(prixUnitaireVente.invalid && (prixUnitaireVente.dirty || prixUnitaireVente.touched))\">\n            <small *ngIf=\"prixUnitaireVente.errors.required\" >\n              Le prix unitaire est requis.\n            </small>\n          </ion-text>\n        </ion-list>\n\n      </ion-slide>\n      <ion-slide>\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-img [src]=\"photo\" width='100%'></ion-img>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <input type=\"file\" (change)=\"onUploadChange($event)\" accept=\".png, .jpg, .jpeg, .pdf\" />\n              <!-- <ion-button (click)=\"onChoose()\">Choisir</ion-button> -->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n       \n      </ion-slide>\n    </ion-slides>\n\n    <ion-row>\n      <ion-col>\n        <ion-button *ngIf=\"!slideIndex\" color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n        <ion-button *ngIf=\"slideIndex\" color=\"light\" (click)=\"onPrevious()\" expand=\"block\">Retour</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button *ngIf=\"!slideIndex\" [disabled]=\"!form.valid\" (click)=\"onNext()\" expand=\"block\">Suivant</ion-button>\n        <ion-button *ngIf=\"slideIndex\" [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produit-profil/produit-profil.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/produit-profil/produit-profil.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProduitProfilProduitProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  produit-profil works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/propriete-form/propriete-form.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/propriete-form/propriete-form.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProprieteFormProprieteFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n        <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Model</ion-label>\n        <ion-input formControlName=\"model\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Cout additionnel</ion-label>\n        <ion-input formControlName=\"coutAdditionnel\" type=\"number\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Description</ion-label>\n        <ion-textarea formControlName=\"description\"></ion-textarea>\n      </ion-item>\n\n      <ion-text color=\"danger\" *ngIf=\"nom.invalid && (nom.dirty || nom.touched)\">\n        <small  *ngIf=\"nom.errors.required\" class=\"ion-padding-start\">\n          le nom est requis.\n        </small>\n      </ion-text>\n\n      <ion-text color=\"danger\" *ngIf=\"model.invalid && (model.dirty || model.touched)\">\n        <small  *ngIf=\"model.errors.required\" class=\"ion-padding-start\">\n          le model est requis.\n        </small>\n      </ion-text>\n      \n      <ion-text color=\"danger\" *ngIf=\"coutAdditionnel.invalid && (coutAdditionnel.dirty || coutAdditionnel.touched)\">\n        <small  *ngIf=\"coutAdditionnel.errors.required\" class=\"ion-padding-start\">\n          le cout additionnel est requis.\n        </small>\n      </ion-text>\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sortie-form/sortie-form.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sortie-form/sortie-form.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSortieFormSortieFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Fonction</ion-label>\n          <ion-select [(ngModel)]=\"fonctionId\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option *ngFor=\"let fonction of fonctions\" [value]=\"fonction.id\">{{fonction.nom}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Utilisateur</ion-label>\n          <ion-select [(ngModel)]=\"operation.userId\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option *ngFor=\"let user of users|filterBy:'fonctionId':fonctionId\" [value]=\"user.id\">{{user.nom}} {{user.prenom}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\" offset=\"2\">Produit</ion-col>\n      <ion-col size=\"4\">quantite</ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngFor=\"let prod of produitsArray; let i = index\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label slot=\"start\" class=\"\">{{i+1}}</ion-label>\n          <ion-col size=\"7\" class=\"\" class=\"\">\n            <ion-input class=\"bg-blue \" [(ngModel)]=\"prod.nom\" [ngModelOptions]=\"{standalone: true}\"\n              (click)=\"prod.searching=!prod.searching\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"4\" class=\" \">\n            <ion-input class=\"bg-blue \" type=\"number\" [(ngModel)]=\"produitsArray[i].quantite\"\n              [ngModelOptions]=\"{standalone: true}\" >\n            </ion-input>\n          </ion-col>\n          <ion-button (click)=\"onDelete(i)\" color=\"danger\" class=\"ion-no-margin\" slot=\"end\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-card class=\"search-box\" *ngIf=\"prod.searching\">\n          <ion-row (click)=\"onSelectProduct(i, elem.id, elem.categorie, elem.nom)\"\n            *ngFor=\"let elem of produits|searchBy:prod.nom:'categorie'\">\n            <ion-col size=\"12\" *ngIf=\"(produits|searchBy:prod.nom:'categorie').length>0\">\n              {{elem.categorie}} {{elem.nom}}\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"( produits|searchBy:prod.nom:'categorie').length===0\">\n            <ion-col size=\"12\">Aucun produit trouvé!</ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <div class=\"text-center\">\n      <ion-button (click)=\"onAddData()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" (click)=\"onSubmit()\">\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sortie-profil/sortie-profil.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sortie-profil/sortie-profil.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSortieProfilSortieProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Fonction</ion-label>\n          <ion-select disabled [(ngModel)]=\"fonctionId\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option *ngFor=\"let fonction of fonctions\" [value]=\"fonction.id\">{{fonction.nom}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Utilisateur</ion-label>\n          <ion-select disabled [(ngModel)]=\"operation.userId\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option *ngFor=\"let user of users|filterBy:'fonctionId':fonctionId\" [value]=\"user.id\">{{user.nom}} {{user.prenom}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\" offset=\"2\">Produit</ion-col>\n      <ion-col size=\"4\">quantite</ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngFor=\"let prod of produitsArray; let i = index\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label slot=\"start\" class=\"\">{{i+1}}</ion-label>\n          <ion-col size=\"7\" class=\"\" class=\"\">\n            <ion-input readonly class=\"bg-blue \" [(ngModel)]=\"prod.nom\" [ngModelOptions]=\"{standalone: true}\"\n              (click)=\"prod.searching=!prod.searching\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"4\" class=\" \">\n            <ion-input readonly class=\"bg-blue \" type=\"number\" [(ngModel)]=\"produitsArray[i].quantite\"\n              [ngModelOptions]=\"{standalone: true}\" >\n            </ion-input>\n          </ion-col>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-form/table-form.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-form/table-form.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTableFormTableFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Numero</ion-label>\n        <ion-input formControlName=\"numero\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Description</ion-label>\n        <ion-textarea formControlName=\"description\"></ion-textarea>\n      </ion-item>\n\n      <ion-text color=\"danger\" *ngIf=\"numero.invalid && (numero.dirty || numero.touched)\">\n        <small  *ngIf=\"numero.errors.required\" class=\"ion-padding-start\">\n          le numero est requis.\n        </small>\n      </ion-text>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-profil/table-profil.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-profil/table-profil.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTableProfilTableProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  table-profil works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/type-form/type-form.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/type-form/type-form.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTypeFormTypeFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n        <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Nombre d'étoile</ion-label>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"onSetNote(1)\">\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"dark\" *ngIf=\"note===0\"></ion-icon>\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"primary\" *ngIf=\"note>=1\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"onSetNote(2)\">\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"dark\" *ngIf=\"note<2\"></ion-icon>\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"primary\" *ngIf=\"note>=2\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"onSetNote(3)\">\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"dark\" *ngIf=\"note<3\"></ion-icon>\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"primary\" *ngIf=\"note>=3\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"onSetNote(4)\">\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"dark\" *ngIf=\"note<4\"></ion-icon>\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"primary\" *ngIf=\"note>=4\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"onSetNote(5)\">\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"dark\" *ngIf=\"note<5\"></ion-icon>\n              <ion-icon slot=\"icon-only\" name=\"star\" color=\"primary\" *ngIf=\"note===5\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Description</ion-label>\n        <ion-textarea formControlName=\"description\"></ion-textarea>\n      </ion-item>\n\n      <ion-text color=\"danger\" *ngIf=\"nom.invalid && (nom.dirty || nom.touched)\">\n        <p *ngIf=\"nom.errors.required\" class=\"ion-padding-start\">\n          le nom est requis.\n        </p>\n      </ion-text>\n\n    </ion-list>\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/type-profil/type-profil.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/type-profil/type-profil.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTypeProfilTypeProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  type-profil works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-form/user-form.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-form/user-form.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserFormUserFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <ion-slides [options]=\"slideOpts\" #slides>\n      <ion-slide>\n        <ion-list  class=\"ion-padding-bottom\">\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Fonction</ion-label>\n            <ion-select formControlName=\"fonctionId\">\n              <ion-select-option *ngFor=\"let item of fonctions\" [value]=\"item.id\">{{item.nom}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Nom</ion-label>\n            <ion-input formControlName=\"nom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"on\" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Prenom</ion-label>\n            <ion-input formControlName=\"prenom\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Contact</ion-label>\n            <ion-input formControlName=\"contact\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\" color=\"primary\">Identifiant</ion-label>\n            <ion-input formControlName=\"identifiant\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"ion-padding-start\" color=\"danger\"\n           *ngIf=\"(fonctionId.invalid && (fonctionId.dirty || fonctionId.touched))\">\n            <p  *ngIf=\"fonctionId.errors.required\" >\n              La fonction est requise.\n            </p>\n          </ion-text>\n          <ion-text class=\"ion-padding-start\" color=\"danger\"\n          *ngIf=\"(nom.invalid && (nom.dirty || nom.touched))\">\n            <p  *ngIf=\"nom.errors.required\" >\n              Le nom est requis.\n            </p>\n          </ion-text>\n          <ion-text class=\"ion-padding-start\" color=\"danger\"\n          *ngIf=\"(contact.invalid && (contact.dirty || contact.touched))\">\n            <p  *ngIf=\"contact.errors.required\" >\n              Le contact est requis.\n            </p>\n            <p  *ngIf=\"contact.errors.minlength\" >\n              Le contact doit être superieur à 8 charactères.\n            </p>\n          </ion-text>\n          <ion-text class=\"ion-padding-start\" color=\"danger\"\n          *ngIf=\"(identifiant.invalid && (identifiant.dirty || identifiant.touched))\">\n            <p  *ngIf=\"identifiant.errors.minlength\" >\n              L' identifiant doit être superieur à 2 charactères.\n            </p>\n            <p  *ngIf=\"identifiant.errors.required\" >\n              L' identifiant est requis.\n            </p>\n          </ion-text>\n        </ion-list >\n\n      </ion-slide>\n      <ion-slide>\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-img [src]=\"photo\" width='100%'></ion-img>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <input type=\"file\" (change)=\"onUploadChange($event)\" accept=\".png, .jpg, .jpeg, .pdf\" />\n              <!-- <ion-button (click)=\"onChoose()\">Choisir</ion-button> -->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n       \n      </ion-slide>\n    </ion-slides>\n\n    <ion-row>\n      <ion-col>\n        <ion-button *ngIf=\"!slideIndex\" color=\"light\" type=\"reset\" expand=\"block\">Effacer</ion-button>\n        <ion-button *ngIf=\"slideIndex\" color=\"light\" (click)=\"onPrevious()\" expand=\"block\">Retour</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button *ngIf=\"!slideIndex\" [disabled]=\"!form.valid\" (click)=\"onNext()\" expand=\"block\">Suivant</ion-button>\n        <ion-button *ngIf=\"slideIndex\" [disabled]=\"!form.valid\" type=\"submit\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profil/user-profil.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profil/user-profil.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserProfilUserProfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <!-- <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>{{ item.nom }} {{ item.prenom }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n  <ion-toolbar  mode=\"ios\" color=\"primary\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"infos\">\n      <ion-segment-button value=\"infos\">\n        <ion-icon slot=\"start\" name=\"information-cirlcle-outline\"></ion-icon>\n        <span>Infos</span> \n      </ion-segment-button>\n      <ion-segment-button value=\"activites\">\n        <ion-icon slot=\"start\" name=\"bookmark\"></ion-icon>\n        <span> activities</span>\n      </ion-segment-button>\n      <ion-segment-button value=\"parametres\">\n        <ion-icon slot=\"start\" name=\"settings\"></ion-icon>\n        <span> parametres</span>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" (click)=\"onClose()\">\n    <ion-icon name='close'></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<!-- informations -->\n<ion-content  *ngIf=\"menu==='infos'\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\">\n          <ion-row>\n            <ion-col size-sm=\"6\" size=\"12\"> <img src=\"{{item.photo}}\" alt=\"\"></ion-col>\n            <ion-col size-sm=\"6\" size=\"12\">\n              <ion-card-content>\n                <ion-list mode=\"ios\">\n                  <ion-list-header mode=\"ios\">\n                    <ion-label>Informations</ion-label>\n                  </ion-list-header>\n                  <ion-item mode=\"ios\">\n                    <ion-col size=\"4\">Nom</ion-col>\n                    <ion-col size=\"8\">:<ion-text color=\"secondary\">{{item.nom}}</ion-text>\n                    </ion-col>\n                  </ion-item>\n                  <ion-item mode=\"ios\">\n                    <ion-col size=\"4\">Prenom</ion-col>\n                    <ion-col size=\"8\">:<ion-text color=\"secondary\">{{item.prenom}}</ion-text>\n                    </ion-col>\n                  </ion-item>\n                  <ion-item mode=\"ios\">\n                    <ion-col size=\"4\">Contact</ion-col>\n                    <ion-col size=\"8\">:<ion-text color=\"secondary\">{{item.contact}}</ion-text>\n                    </ion-col>\n                  </ion-item>\n                  <ion-item mode=\"ios\">\n                    <ion-col size=\"4\">Ajouté le</ion-col>\n                    <ion-col size=\"8\">:<ion-text color=\"secondary\">{{item.createdAt|date:'dd-MM-yyyy HH:mm'}}</ion-text>\n                    </ion-col>\n                  </ion-item>\n                  <ion-item mode=\"ios\">\n                    <ion-col size=\"4\">Modifié le</ion-col>\n                    <ion-col size=\"8\">:<ion-text color=\"secondary\">{{item.updatedAt|date:'dd-MM-yyyy HH:mm'}}</ion-text>\n                    </ion-col>\n                  </ion-item>\n                </ion-list>\n              </ion-card-content>\n            </ion-col>\n          </ion-row>          \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- activites -->\n<ion-content *ngIf=\"menu==='activites'\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-list>\n          <ion-list-header mode=\"ios\">\n            <ion-label>Activités</ion-label>\n          </ion-list-header>\n          <ion-card mode=\"ios\" *ngFor=\"let activite of activities\">\n            <!-- <ion-label> {{activite.model}}:{{activite.operation}}</ion-label> -->\n            <p>\n              <ion-note color=\"primary\" *ngIf=\"activite.typeOperation==='add'\" mode=\"ios\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"success\" mode=\"ios\" *ngIf=\"activite.typeOperation==='login'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"danger\" mode=\"ios\" *ngIf=\"activite.typeOperation==='delete'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"warning\" mode=\"ios\" *ngIf=\"activite.typeOperation==='edit'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"secondary\" mode=\"ios\" *ngIf=\"activite.typeOperation==='logout'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              <ion-note color=\"danger\" mode=\"ios\" *ngIf=\"activite.typeOperation==='restore'\">{{activite.createdAt| date: 'dd-MM-yy HH:mm' }} : </ion-note>\n              {{ activite.description }}</p>\n          </ion-card>\n        </ion-list>\n        <ion-infinite-scroll  threshold=\"20%\" (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n           \n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<!-- parametres -->\n<ion-content *ngIf=\"menu==='parametres'\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\">\n          <ion-list mode=\"ios\">\n            <ion-item mode=\"ios\" *ngFor=\"let control of userControls\">\n              <ion-label>{{control.description}}</ion-label>\n              <ion-checkbox mode=\"ios\" [(ngModel)]=\"control.isChecked\" slot=\"start\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"warning\" (click)=\"onReset()\">\n      <ion-icon name='refresh'></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" (click)=\"onSave()\">\n      <ion-icon name='checkmark'></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'public',
      pathMatch: 'full'
    }, {
      path: 'private',
      loadChildren: './pages/private/private.module#PrivatePageModule'
    }, {
      path: 'public',
      loadChildren: './pages/public/public.module#PublicPageModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, api) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.api = api;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.api.post('hello', 'hello from client!');
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_fonction_form_fonction_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/fonction-form/fonction-form.component */
    "./src/app/components/fonction-form/fonction-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_fonction_profil_fonction_profil_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/fonction-profil/fonction-profil.component */
    "./src/app/components/fonction-profil/fonction-profil.component.ts");
    /* harmony import */


    var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/user-form/user-form.component */
    "./src/app/components/user-form/user-form.component.ts");
    /* harmony import */


    var _components_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/user-profil/user-profil.component */
    "./src/app/components/user-profil/user-profil.component.ts");
    /* harmony import */


    var _components_type_profil_type_profil_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/type-profil/type-profil.component */
    "./src/app/components/type-profil/type-profil.component.ts");
    /* harmony import */


    var _components_type_form_type_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/type-form/type-form.component */
    "./src/app/components/type-form/type-form.component.ts");
    /* harmony import */


    var _components_chambre_form_chambre_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/chambre-form/chambre-form.component */
    "./src/app/components/chambre-form/chambre-form.component.ts");
    /* harmony import */


    var _components_chambre_profil_chambre_profil_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/chambre-profil/chambre-profil.component */
    "./src/app/components/chambre-profil/chambre-profil.component.ts");
    /* harmony import */


    var _components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/categorie-form/categorie-form.component */
    "./src/app/components/categorie-form/categorie-form.component.ts");
    /* harmony import */


    var _components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/categorie-profil/categorie-profil.component */
    "./src/app/components/categorie-profil/categorie-profil.component.ts");
    /* harmony import */


    var _components_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/produit-form/produit-form.component */
    "./src/app/components/produit-form/produit-form.component.ts");
    /* harmony import */


    var _components_produit_profil_produit_profil_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/produit-profil/produit-profil.component */
    "./src/app/components/produit-profil/produit-profil.component.ts");
    /* harmony import */


    var _components_intrant_profil_intrant_profil_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/intrant-profil/intrant-profil.component */
    "./src/app/components/intrant-profil/intrant-profil.component.ts");
    /* harmony import */


    var _components_intrant_form_intrant_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/intrant-form/intrant-form.component */
    "./src/app/components/intrant-form/intrant-form.component.ts");
    /* harmony import */


    var _components_propriete_form_propriete_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/propriete-form/propriete-form.component */
    "./src/app/components/propriete-form/propriete-form.component.ts");
    /* harmony import */


    var _components_entree_form_entree_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/entree-form/entree-form.component */
    "./src/app/components/entree-form/entree-form.component.ts");
    /* harmony import */


    var _components_entree_profil_entree_profil_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/entree-profil/entree-profil.component */
    "./src/app/components/entree-profil/entree-profil.component.ts");
    /* harmony import */


    var _components_sortie_form_sortie_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/sortie-form/sortie-form.component */
    "./src/app/components/sortie-form/sortie-form.component.ts");
    /* harmony import */


    var _components_control_form_control_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/control-form/control-form.component */
    "./src/app/components/control-form/control-form.component.ts");
    /* harmony import */


    var _components_control_profil_control_profil_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/control-profil/control-profil.component */
    "./src/app/components/control-profil/control-profil.component.ts");
    /* harmony import */


    var _components_fournisseur_profil_fournisseur_profil_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/fournisseur-profil/fournisseur-profil.component */
    "./src/app/components/fournisseur-profil/fournisseur-profil.component.ts");
    /* harmony import */


    var _components_fournisseur_form_fournisseur_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/fournisseur-form/fournisseur-form.component */
    "./src/app/components/fournisseur-form/fournisseur-form.component.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _components_sortie_profil_sortie_profil_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/sortie-profil/sortie-profil.component */
    "./src/app/components/sortie-profil/sortie-profil.component.ts");
    /* harmony import */


    var _components_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/table-form/table-form.component */
    "./src/app/components/table-form/table-form.component.ts");
    /* harmony import */


    var _components_table_profil_table_profil_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/table-profil/table-profil.component */
    "./src/app/components/table-profil/table-profil.component.ts");
    /* harmony import */


    var _components_consommation_form_consommation_form_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/consommation-form/consommation-form.component */
    "./src/app/components/consommation-form/consommation-form.component.ts");
    /* harmony import */


    var _components_consommation_profil_consommation_profil_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/consommation-profil/consommation-profil.component */
    "./src/app/components/consommation-profil/consommation-profil.component.ts");
    /* harmony import */


    var _components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/client-form/client-form.component */
    "./src/app/components/client-form/client-form.component.ts");
    /* harmony import */


    var _components_client_profil_client_profil_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/client-profil/client-profil.component */
    "./src/app/components/client-profil/client-profil.component.ts"); // const url = "http://ennahotel.eu-4.evennode.com/";
    // const url = 'http://192.168.1.70:3000/';


    var url = 'http://localhost:3000/';
    var config = {
      url: url,
      options: {}
    };
    var components = [_components_fonction_form_fonction_form_component__WEBPACK_IMPORTED_MODULE_10__["FonctionFormComponent"], _components_fonction_profil_fonction_profil_component__WEBPACK_IMPORTED_MODULE_12__["FonctionProfilComponent"], _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__["UserFormComponent"], _components_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_14__["UserProfilComponent"], _components_type_form_type_form_component__WEBPACK_IMPORTED_MODULE_16__["TypeFormComponent"], _components_type_profil_type_profil_component__WEBPACK_IMPORTED_MODULE_15__["TypeProfilComponent"], _components_chambre_form_chambre_form_component__WEBPACK_IMPORTED_MODULE_17__["ChambreFormComponent"], _components_chambre_profil_chambre_profil_component__WEBPACK_IMPORTED_MODULE_18__["ChambreProfilComponent"], _components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_19__["CategorieFormComponent"], _components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_20__["CategorieProfilComponent"], _components_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_21__["ProduitFormComponent"], _components_produit_profil_produit_profil_component__WEBPACK_IMPORTED_MODULE_22__["ProduitProfilComponent"], _components_intrant_form_intrant_form_component__WEBPACK_IMPORTED_MODULE_24__["IntrantFormComponent"], _components_intrant_profil_intrant_profil_component__WEBPACK_IMPORTED_MODULE_23__["IntrantProfilComponent"], _components_propriete_form_propriete_form_component__WEBPACK_IMPORTED_MODULE_25__["ProprieteFormComponent"], _components_entree_form_entree_form_component__WEBPACK_IMPORTED_MODULE_26__["EntreeFormComponent"], _components_entree_profil_entree_profil_component__WEBPACK_IMPORTED_MODULE_27__["EntreeProfilComponent"], _components_sortie_form_sortie_form_component__WEBPACK_IMPORTED_MODULE_28__["SortieFormComponent"], _components_sortie_profil_sortie_profil_component__WEBPACK_IMPORTED_MODULE_34__["SortieProfilComponent"], _components_control_form_control_form_component__WEBPACK_IMPORTED_MODULE_29__["ControlFormComponent"], _components_control_profil_control_profil_component__WEBPACK_IMPORTED_MODULE_30__["ControlProfilComponent"], _components_fournisseur_form_fournisseur_form_component__WEBPACK_IMPORTED_MODULE_32__["FournisseurFormComponent"], _components_fournisseur_profil_fournisseur_profil_component__WEBPACK_IMPORTED_MODULE_31__["FournisseurProfilComponent"], _components_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_35__["TableFormComponent"], _components_table_profil_table_profil_component__WEBPACK_IMPORTED_MODULE_36__["TableProfilComponent"], _components_consommation_form_consommation_form_component__WEBPACK_IMPORTED_MODULE_37__["ConsommationFormComponent"], _components_consommation_profil_consommation_profil_component__WEBPACK_IMPORTED_MODULE_38__["ConsommationProfilComponent"], _components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_39__["ClientFormComponent"], _components_client_profil_client_profil_component__WEBPACK_IMPORTED_MODULE_40__["ClientProfilComponent"]];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]].concat(components),
      entryComponents: [].concat(components),
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_33__["PipesModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["SocketIoModule"].forRoot(config), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/categorie-form/categorie-form.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/categorie-form/categorie-form.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCategorieFormCategorieFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllLWZvcm0vY2F0ZWdvcmllLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/categorie-form/categorie-form.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/categorie-form/categorie-form.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CategorieFormComponent */

  /***/
  function srcAppComponentsCategorieFormCategorieFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieFormComponent", function () {
      return CategorieFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/produit.service */
    "./src/app/services/produit.service.ts");

    var CategorieFormComponent =
    /*#__PURE__*/
    function () {
      function CategorieFormComponent(popoverController, navParams, produitService) {
        _classCallCheck(this, CategorieFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.produitService = produitService;
        this.title = "Ajout de categorie";
      }

      _createClass(CategorieFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.navParams.get('id');
          var isIntrant = this.navParams.get('isIntrant');

          if (id) {
            var item = this.produitService.getCategorie(id);
            this.title = item.nom;
            this.initForm(item);
          } else this.initForm({
            id: null,
            nom: '',
            isIntrant: isIntrant,
            description: ''
          });
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            isIntrant: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.isIntrant),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.description)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toUpperCase();
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }]);

      return CategorieFormComponent;
    }();

    CategorieFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_4__["ProduitService"]
      }];
    };

    CategorieFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categorie-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categorie-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorie-form/categorie-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categorie-form.component.scss */
      "./src/app/components/categorie-form/categorie-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_4__["ProduitService"]])], CategorieFormComponent);
    /***/
  },

  /***/
  "./src/app/components/categorie-profil/categorie-profil.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/categorie-profil/categorie-profil.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCategorieProfilCategorieProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllLXByb2ZpbC9jYXRlZ29yaWUtcHJvZmlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/categorie-profil/categorie-profil.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/categorie-profil/categorie-profil.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CategorieProfilComponent */

  /***/
  function srcAppComponentsCategorieProfilCategorieProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieProfilComponent", function () {
      return CategorieProfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategorieProfilComponent =
    /*#__PURE__*/
    function () {
      function CategorieProfilComponent() {
        _classCallCheck(this, CategorieProfilComponent);
      }

      _createClass(CategorieProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategorieProfilComponent;
    }();

    CategorieProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categorie-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categorie-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorie-profil/categorie-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categorie-profil.component.scss */
      "./src/app/components/categorie-profil/categorie-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategorieProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/chambre-form/chambre-form.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/chambre-form/chambre-form.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChambreFormChambreFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFtYnJlLWZvcm0vQzpcXFVzZXJzXFxBcm9hbVxcRGVza3RvcFxcaG90ZWwtZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoYW1icmUtZm9ybVxcY2hhbWJyZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYW1icmUtZm9ybS9jaGFtYnJlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFtYnJlLWZvcm0vY2hhbWJyZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3R7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi1saXN0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/chambre-form/chambre-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/chambre-form/chambre-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ChambreFormComponent */

  /***/
  function srcAppComponentsChambreFormChambreFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChambreFormComponent", function () {
      return ChambreFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/chambre.service */
    "./src/app/services/chambre.service.ts");

    var ChambreFormComponent =
    /*#__PURE__*/
    function () {
      // slidesOptions = {
      //   initialSlide: 0,
      //   direction: 'horizontal',
      //   speed: 300,
      //   effect: slide,
      //   spaceBetween: 8,
      //   slidesPerView: 1.5,
      //   freeMode: true,
      //   loop: true
      // };
      function ChambreFormComponent(popoverController, navParams, chambreService) {
        _classCallCheck(this, ChambreFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.chambreService = chambreService;
        this.title = "Ajout d'utilisateur";
        this.types = [];
        this.slideIndex = 0;
        this.slideOpts = {
          initialSlide: 0,
          speed: 400
        };
      }

      _createClass(ChambreFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.slides.lockSwipeToNext(true);
          this.foncSub = this.chambreService.getTypes().subscribe(function (foncs) {
            return _this2.types = foncs;
          });
          var id = this.navParams.get('id');
          var typeId = this.navParams.get('tId');

          if (id) {
            var item = this.chambreService.getChambre(id);
            this.title = item.numero;
            this.photo = item.photo;
            this.initForm(item);
          } else {
            this.initForm({
              id: null,
              typeId: typeId,
              numero: '',
              description: '',
              prixJournalier: null
            });
            this.photo = './assets/img/chambre.png';
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.foncSub.unsubscribe();
        }
      }, {
        key: "onUploadChange",
        value: function onUploadChange(evt) {
          var file = evt.target.files[0];

          if (file) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
          }
        }
      }, {
        key: "handleReaderLoaded",
        value: function handleReaderLoaded(e) {
          this.photo = 'data:image/png;base64,' + btoa(e.target.result);
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            typeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.typeId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.description),
            prixJournalier: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.prixJournalier, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "onSubmit",
        // onNext() {
        //   this.slides.lockSwipeToNext(false).then(
        //     () => {
        //       this.slides.slideNext().then(
        //         () => {
        //           this.slides.lockSwipeToNext(true);
        //           this.slides.getActiveIndex().then(
        //             i=>this.slideIndex = i
        //           );
        //         }
        //       );
        //     }
        //   );
        // }
        // onPrevious() {
        //   this.slides.lockSwipeToNext(false).then(
        //     () => {
        //       this.slides.slidePrev().then(
        //         () => {
        //           this.slides.getActiveIndex().then(
        //             i=>this.slideIndex = i
        //           );
        //         }
        //       );
        //     }
        //   );
        // }
        value: function onSubmit() {
          this.form.value.numero = this.form.value.numero.toUpperCase(); // this.form.value.photo = this.photo;

          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "typeId",
        get: function get() {
          return this.form.get('typeId');
        }
      }, {
        key: "numero",
        get: function get() {
          return this.form.get('numero');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }, {
        key: "prixJournalier",
        get: function get() {
          return this.form.get('prixJournalier');
        }
      }]);

      return ChambreFormComponent;
    }();

    ChambreFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_4__["ChambreService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], ChambreFormComponent.prototype, "slides", void 0);
    ChambreFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chambre-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chambre-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chambre-form/chambre-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chambre-form.component.scss */
      "./src/app/components/chambre-form/chambre-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_4__["ChambreService"]])], ChambreFormComponent);
    /***/
  },

  /***/
  "./src/app/components/chambre-profil/chambre-profil.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/chambre-profil/chambre-profil.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChambreProfilChambreProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbWJyZS1wcm9maWwvY2hhbWJyZS1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/chambre-profil/chambre-profil.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/chambre-profil/chambre-profil.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ChambreProfilComponent */

  /***/
  function srcAppComponentsChambreProfilChambreProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChambreProfilComponent", function () {
      return ChambreProfilComponent;
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


    var src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/params.service */
    "./src/app/services/params.service.ts");

    var ChambreProfilComponent =
    /*#__PURE__*/
    function () {
      function ChambreProfilComponent(modalController, navParams, chambreService, paramsService) {
        _classCallCheck(this, ChambreProfilComponent);

        this.modalController = modalController;
        this.navParams = navParams;
        this.chambreService = chambreService;
        this.paramsService = paramsService;
        this.proprietes = [];
        this.chambreProprietes = [];
        this.activities = [];
        this.lastActiviteId = 0;
        this.menu = "infos";
      }

      _createClass(ChambreProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.id = this.navParams.get('id');
          var trash = this.navParams.get('trash');
          this.sub = this.paramsService.getProprietes().subscribe(function (res) {
            _this3.proprietes = [];
            _this3.proprietes = res;

            _this3.onReset();
          });

          if (this.id) {
            if (!trash) this.item = this.chambreService.getChambre(this.id);else this.item = this.chambreService.getChambreTrash(this.id);
            this.title = this.item.numero;
          } // this.toggleInfiniteScroll(true);


          this.getActivities();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          this.menu = event.target.value;
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.modalController.dismiss();
        }
      }, {
        key: "onReset",
        value: function onReset() {
          var _this4 = this;

          this.paramsService.getChambreProprietes(this.id).then(function (res) {
            _this4.chambreProprietes = [];

            if (res.length === 0) {
              _this4.proprietes.forEach(function (item) {
                return _this4.chambreProprietes.push({
                  chambreId: _this4.id,
                  proprieteId: item.id,
                  description: item.description,
                  isChecked: false
                });
              });
            } else {
              _this4.proprietes.forEach(function (item) {
                var i = res.findIndex(function (elem) {
                  return elem.proprieteId === item.id;
                });

                if (i === -1) {
                  _this4.chambreProprietes.push({
                    chambreId: _this4.id,
                    proprieteId: item.id,
                    description: item.description,
                    isChecked: false
                  });
                } else {
                  res[i].description = item.description;

                  _this4.chambreProprietes.push(res[i]);
                }
              });
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          this.paramsService.saveChambreProprietes(this.chambreProprietes);
        }
      }, {
        key: "getActivities",
        value: function getActivities() {
          var _this5 = this;

          return this.chambreService.getChambreActivites(this.id, this.lastActiviteId).then(function (res) {
            res.forEach(function (item) {
              return _this5.activities.push(item);
            });
            _this5.lastActiviteId += res.length;
            return true;
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          this.getActivities().then(function () {
            return event.target.complete();
          });
        }
      }, {
        key: "toggleInfiniteScroll",
        value: function toggleInfiniteScroll(bool) {
          this.infiniteScroll.disabled = bool;
        }
      }]);

      return ChambreProfilComponent;
    }();

    ChambreProfilComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_3__["ChambreService"]
      }, {
        type: src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__["ParamsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], ChambreProfilComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], ChambreProfilComponent.prototype, "infiniteScroll", void 0);
    ChambreProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chambre-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chambre-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chambre-profil/chambre-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chambre-profil.component.scss */
      "./src/app/components/chambre-profil/chambre-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_3__["ChambreService"], src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__["ParamsService"]])], ChambreProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/client-form/client-form.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/client-form/client-form.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClientFormClientFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50LWZvcm0vY2xpZW50LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/client-form/client-form.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/client-form/client-form.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ClientFormComponent */

  /***/
  function srcAppComponentsClientFormClientFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientFormComponent", function () {
      return ClientFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/location.service */
    "./src/app/services/location.service.ts");

    var ClientFormComponent =
    /*#__PURE__*/
    function () {
      function ClientFormComponent(popoverController, navParams, locationService) {
        _classCallCheck(this, ClientFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.locationService = locationService;
        this.title = "Ajout de client";
      }

      _createClass(ClientFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.navParams.get('id');
          var isIntrant = this.navParams.get('isIntrant');

          if (id) {
            var item = this.locationService.getClient(id);
            this.title = item.nom;
            this.initForm(item);
          } else this.initForm({
            id: null,
            nom: '',
            penom: '',
            contact1: '',
            contact2: '',
            adresse: ''
          });
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            prenom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.prenom),
            contact1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.contact1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            contact2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.contact2),
            adresse: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.adresse, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toUpperCase();
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }, {
        key: "prenom",
        get: function get() {
          return this.form.get('prenom');
        }
      }, {
        key: "contact1",
        get: function get() {
          return this.form.get('contact1');
        }
      }, {
        key: "adresse",
        get: function get() {
          return this.form.get('adresse');
        }
      }]);

      return ClientFormComponent;
    }();

    ClientFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]
      }];
    };

    ClientFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-client-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./client-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client-form/client-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./client-form.component.scss */
      "./src/app/components/client-form/client-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]])], ClientFormComponent);
    /***/
  },

  /***/
  "./src/app/components/client-profil/client-profil.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/client-profil/client-profil.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClientProfilClientProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50LXByb2ZpbC9jbGllbnQtcHJvZmlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/client-profil/client-profil.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/client-profil/client-profil.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ClientProfilComponent */

  /***/
  function srcAppComponentsClientProfilClientProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientProfilComponent", function () {
      return ClientProfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClientProfilComponent =
    /*#__PURE__*/
    function () {
      function ClientProfilComponent() {
        _classCallCheck(this, ClientProfilComponent);
      }

      _createClass(ClientProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientProfilComponent;
    }();

    ClientProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-client-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./client-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client-profil/client-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./client-profil.component.scss */
      "./src/app/components/client-profil/client-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ClientProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/consommation-form/consommation-form.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/consommation-form/consommation-form.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsConsommationFormConsommationFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  height: 170px;\n  width: 100%;\n}\n.img img {\n  height: 100%;\n  width: 100%;\n}\nion-card {\n  width: 220px;\n  height: 300px;\n  background-color: white;\n}\n.container {\n  background-color: rgba(0, 100, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25zb21tYXRpb24tZm9ybS9DOlxcVXNlcnNcXEFyb2FtXFxEZXNrdG9wXFxob3RlbC1mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29uc29tbWF0aW9uLWZvcm1cXGNvbnNvbW1hdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnNvbW1hdGlvbi1mb3JtL2NvbnNvbW1hdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNFUjtBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUE7RUFDSSx3Q0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25zb21tYXRpb24tZm9ybS9jb25zb21tYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwxMDAsMjU1LDAuMSk7XHJcbn0iLCIuaW1nIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW1nIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyNTUsIDAuMSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/consommation-form/consommation-form.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/consommation-form/consommation-form.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConsommationFormComponent */

  /***/
  function srcAppComponentsConsommationFormConsommationFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsommationFormComponent", function () {
      return ConsommationFormComponent;
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


    var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/produit.service */
    "./src/app/services/produit.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_consommation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/consommation.service */
    "./src/app/services/consommation.service.ts");
    /* harmony import */


    var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/location.service */
    "./src/app/services/location.service.ts");
    /* harmony import */


    var src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/chambre.service */
    "./src/app/services/chambre.service.ts");

    var ConsommationFormComponent =
    /*#__PURE__*/
    function () {
      function ConsommationFormComponent(modalController, produitService, navParams, consommationService, locationService, chambreService, data) {
        _classCallCheck(this, ConsommationFormComponent);

        this.modalController = modalController;
        this.produitService = produitService;
        this.navParams = navParams;
        this.consommationService = consommationService;
        this.locationService = locationService;
        this.chambreService = chambreService;
        this.data = data;
        this.produitsArray = [];
        this.typeClient = 'anonyme';
      }

      _createClass(ConsommationFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.categorieSubscription = this.produitService.getCategories().subscribe(function (res) {
            _this6.categories = [];
            res.forEach(function (item) {
              if (!item.isIntrant) _this6.categories.push(item);
            });
          });
          this.produitSubscription = this.produitService.getProduits().subscribe(function (res) {
            _this6.produits = res.map(function (item) {
              item.quantite = 0;
              return item;
            });
          });
          this.clientSubscription = this.locationService.getClients().subscribe(function (res) {
            _this6.clients = res;
          });
          this.chambreSubscription = this.chambreService.getChambres().subscribe(function (res) {
            _this6.chambres = res;
          });
          this.numeroTable = this.navParams.get('numeroTable');
          this.consommationId = this.navParams.get('consommationId');

          if (this.consommationId) {
            this.consommation = this.consommationService.getConsommation(this.consommationId);
            this.consommationService.getConsommationProduits(this.consommationId).then(function (res) {
              _this6.produitsArray = res;
            });
          } else {
            this.produitsArray = [];
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.categorieSubscription.unsubscribe();
          this.produitSubscription.unsubscribe();
        }
      }, {
        key: "onAdd",
        value: function onAdd(produitId, prixUnitaire, quantite) {
          if (quantite > 0) {
            var i = this.produitsArray.findIndex(function (item) {
              return item.produitId === produitId;
            });

            if (i != -1) {
              this.produitsArray[i].quantite = quantite;
            } else {
              this.produitsArray.push({
                produitId: produitId,
                consommationId: this.consommationId,
                prixUnitaire: prixUnitaire,
                quantite: quantite
              });
            }
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          var _this7 = this;

          this.consommationService.getConsommationProduits(this.consommation.id).then(function (res) {
            _this7.produitsArray = res;
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          if (this.typeClient === "client") this.chambreId = null;else if (this.typeClient === "anonyme") {
            this.chambreId = null;
            this.clientId = null;
          } else if (this.typeClient === "chambre") this.clientId = null;
          this.modalController.dismiss({
            consommation: {
              clientId: this.clientId,
              chambreId: this.chambreId
            },
            produits: this.produitsArray
          });
        }
      }]);

      return ConsommationFormComponent;
    }();

    ConsommationFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: src_app_services_consommation_service__WEBPACK_IMPORTED_MODULE_5__["ConsommationService"]
      }, {
        type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]
      }, {
        type: src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_7__["ChambreService"]
      }, {
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    ConsommationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consommation-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consommation-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/consommation-form/consommation-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consommation-form.component.scss */
      "./src/app/components/consommation-form/consommation-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], src_app_services_consommation_service__WEBPACK_IMPORTED_MODULE_5__["ConsommationService"], src_app_services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"], src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_7__["ChambreService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], ConsommationFormComponent);
    /***/
  },

  /***/
  "./src/app/components/consommation-profil/consommation-profil.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/consommation-profil/consommation-profil.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsConsommationProfilConsommationProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uc29tbWF0aW9uLXByb2ZpbC9jb25zb21tYXRpb24tcHJvZmlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/consommation-profil/consommation-profil.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/consommation-profil/consommation-profil.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ConsommationProfilComponent */

  /***/
  function srcAppComponentsConsommationProfilConsommationProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsommationProfilComponent", function () {
      return ConsommationProfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConsommationProfilComponent =
    /*#__PURE__*/
    function () {
      function ConsommationProfilComponent() {
        _classCallCheck(this, ConsommationProfilComponent);
      }

      _createClass(ConsommationProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConsommationProfilComponent;
    }();

    ConsommationProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consommation-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consommation-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/consommation-profil/consommation-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consommation-profil.component.scss */
      "./src/app/components/consommation-profil/consommation-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ConsommationProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/control-form/control-form.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/control-form/control-form.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlFormControlFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1mb3JtL2NvbnRyb2wtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/control-form/control-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/control-form/control-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ControlFormComponent */

  /***/
  function srcAppComponentsControlFormControlFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlFormComponent", function () {
      return ControlFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/params.service */
    "./src/app/services/params.service.ts");

    var ControlFormComponent =
    /*#__PURE__*/
    function () {
      function ControlFormComponent(popoverController, navParams, paramsService) {
        _classCallCheck(this, ControlFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.paramsService = paramsService;
        this.title = "Ajout de propriete";
      }

      _createClass(ControlFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.navParams.get('id');

          if (id) {
            var item = this.paramsService.getControl(id);
            this.title = 'Control ' + item.nom;
            this.initForm(item);
          } else this.initForm({
            id: null,
            nom: '',
            operation: '',
            description: ''
          });
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            operation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.operation, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.description)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toLowerCase();
          this.form.value.operation = this.form.value.operation.toLowerCase();
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }, {
        key: "operation",
        get: function get() {
          return this.form.get('operation');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }]);

      return ControlFormComponent;
    }();

    ControlFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__["ParamsService"]
      }];
    };

    ControlFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-control-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./control-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-form/control-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./control-form.component.scss */
      "./src/app/components/control-form/control-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__["ParamsService"]])], ControlFormComponent);
    /***/
  },

  /***/
  "./src/app/components/control-profil/control-profil.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/control-profil/control-profil.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlProfilControlProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1wcm9maWwvY29udHJvbC1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/control-profil/control-profil.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/control-profil/control-profil.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ControlProfilComponent */

  /***/
  function srcAppComponentsControlProfilControlProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlProfilComponent", function () {
      return ControlProfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ControlProfilComponent =
    /*#__PURE__*/
    function () {
      function ControlProfilComponent() {
        _classCallCheck(this, ControlProfilComponent);
      }

      _createClass(ControlProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ControlProfilComponent;
    }();

    ControlProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-control-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./control-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-profil/control-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./control-profil.component.scss */
      "./src/app/components/control-profil/control-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ControlProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/entree-form/entree-form.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/entree-form/entree-form.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEntreeFormEntreeFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-blue {\n  background-color: #b5b6ec;\n}\n\n.search-box {\n  margin-top: 3px;\n  background: #e4e1e1;\n  position: absolute;\n  left: 4%;\n  width: 27%;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 2000;\n}\n\n.search-box ion-row {\n  cursor: -webkit-grab;\n  cursor: grab;\n  border-bottom: 1px white;\n}\n\n.search-box ion-row:hover {\n  background-color: white;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbnRyZWUtZm9ybS9DOlxcVXNlcnNcXEFyb2FtXFxEZXNrdG9wXFxob3RlbC1mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZW50cmVlLWZvcm1cXGVudHJlZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2VudHJlZS1mb3JtL2VudHJlZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0ksb0JBQUE7RUFBQSxZQUFBO0VBQ0Esd0JBQUE7QUNFUjs7QURBSTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbnRyZWUtZm9ybS9lbnRyZWUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1ibHVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjZlYztcclxufVxyXG5cclxuLnNlYXJjaC1ib3h7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMjUsIDIyNSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0JTtcclxuICAgIHdpZHRoOiAyNyU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLXJvdzpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgIH1cclxufSIsIi5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjZlYztcbn1cblxuLnNlYXJjaC1ib3gge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNlNGUxZTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNCU7XG4gIHdpZHRoOiAyNyU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiAyMDAwO1xufVxuLnNlYXJjaC1ib3ggaW9uLXJvdyB7XG4gIGN1cnNvcjogZ3JhYjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHdoaXRlO1xufVxuLnNlYXJjaC1ib3ggaW9uLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogZ3JleTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/entree-form/entree-form.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/entree-form/entree-form.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EntreeFormComponent */

  /***/
  function srcAppComponentsEntreeFormEntreeFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntreeFormComponent", function () {
      return EntreeFormComponent;
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


    var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/produit.service */
    "./src/app/services/produit.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/entree.service */
    "./src/app/services/entree.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var EntreeFormComponent =
    /*#__PURE__*/
    function () {
      function EntreeFormComponent(produitService, entreeService, alert, modalController, navParams) {
        _classCallCheck(this, EntreeFormComponent);

        this.produitService = produitService;
        this.entreeService = entreeService;
        this.alert = alert;
        this.modalController = modalController;
        this.navParams = navParams;
        this.title = "Ajout d'une entree";
        this.produitsArray = [];
      }

      _createClass(EntreeFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          var id = this.navParams.get('id');
          this.sub1 = this.produitService.getCategories().subscribe(function (cats) {
            _this8.categories = cats;
          });
          this.produitService.getIntrants().subscribe(function (prods) {
            _this8.produits = [];
            prods.forEach(function (item) {
              console.log(item);
              item.categorie = _this8.categories.find(function (cat) {
                return cat.id === item.categorieId;
              }).nom;

              _this8.produits.push(item);
            });
          });
          this.sub2 = this.entreeService.getFournisseurs().subscribe(function (res) {
            _this8.fournisseurs = res;
          });

          if (id) {
            this.item = this.entreeService.getEntree(id);
            this.title = "Modification de l' entree numero " + this.item.numeroFacture;
            this.operation = {
              id: this.item.id,
              numeroFacture: this.item.numeroFacture,
              fournisseurId: this.item.fournisseurId,
              montantTotal: this.item.montantTotal,
              montantPaye: this.item.montantPaye,
              reductions: this.item.reductions,
              autresFrais: this.item.autresFrais,
              createdAt: this.item.createdAt,
              deletedAt: this.item.deletedAt,
              updatedAt: this.item.updatedAt
            };
            this.entreeService.getEntreeProduits(this.item.id).then(function (prod) {
              console.log(prod);
              _this8.produitsArray = [];
              prod.map(function (item) {
                var entity = _this8.produits.find(function (elem) {
                  return elem.id === item.produitId;
                });

                item.nom = entity.categorie + ' ' + entity.nom;

                _this8.produitsArray.push(item);
              });
            });
          } else {
            this.title = "Ajout d'une entree";
            this.operation = {
              numeroFacture: '',
              fournisseurId: null,
              montantTotal: null,
              montantPaye: null,
              autresFrais: null,
              reductions: null
            };
            this.onAddData();
          }
        }
      }, {
        key: "onAddData",
        value: function onAddData() {
          this.produitsArray.push({
            produitId: null,
            prixUnitaire: null,
            quantite: null
          });
        }
      }, {
        key: "setQuantiteTotal",
        value: function setQuantiteTotal() {
          this.operation.montantTotal = this.produitsArray.map(function (item) {
            return item.prixUnitaire * item.quantite;
          }).reduce(function (b, c) {
            return b + c;
          }, 0) + this.operation.autresFrais - this.operation.reductions;
        }
      }, {
        key: "onDelete",
        value: function onDelete(i) {
          this.produitsArray.splice(i, 1);
          this.setQuantiteTotal();
        }
      }, {
        key: "produitController",
        value: function produitController(i) {
          var _this9 = this;

          var long = this.produitsArray.filter(function (item) {
            return +item.produitId === +_this9.produitsArray[i].produitId;
          }).length;

          if (long > 1) {
            this.alert.toast({
              type: 'danger',
              message: 'Vous avez dejà ajouter ce produit'
            });
            this.onDelete(i);
          }

          this.setQuantiteTotal();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (!this.operation.fournisseurId) {
            this.alert.toast({
              type: 'danger',
              message: 'Veuillez choisir fournisseur!'
            });
          } else if (this.produitsArray.filter(function (item) {
            return item.produitId === null || item.quantite === null || item.quantite <= 0 || item.prixUnitaire === null;
          }).length > 0) {
            this.alert.toast({
              type: 'danger',
              message: 'Veuillez remplir correctement toutes les cases!'
            });
          } else if (this.operation.id) {
            this.entreeService.editEntree({
              entree: this.operation,
              produits: this.produitsArray
            });
            this.onClose();
          } else {
            console.log({
              entree: this.operation,
              produits: this.produitsArray
            });
            this.entreeService.addEntree({
              entree: this.operation,
              produits: this.produitsArray
            });
            this.onClose();
          }
        }
      }, {
        key: "onSelectProduct",
        value: function onSelectProduct(i, id, categorie, nom) {
          console.log('id: ' + id);
          this.produitsArray[i].produitId = id;
          this.produitsArray[i].searching = false;
          this.produitsArray[i].nom = categorie + ' ' + nom;
          this.produitController(i);
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.modalController.dismiss();
        }
      }]);

      return EntreeFormComponent;
    }();

    EntreeFormComponent.ctorParameters = function () {
      return [{
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"]
      }, {
        type: src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_4__["EntreeService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    EntreeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entree-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entree-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entree-form/entree-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entree-form.component.scss */
      "./src/app/components/entree-form/entree-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"], src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_4__["EntreeService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])], EntreeFormComponent);
    /***/
  },

  /***/
  "./src/app/components/entree-profil/entree-profil.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/entree-profil/entree-profil.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEntreeProfilEntreeProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50cmVlLXByb2ZpbC9lbnRyZWUtcHJvZmlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/entree-profil/entree-profil.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/entree-profil/entree-profil.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EntreeProfilComponent */

  /***/
  function srcAppComponentsEntreeProfilEntreeProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntreeProfilComponent", function () {
      return EntreeProfilComponent;
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


    var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/produit.service */
    "./src/app/services/produit.service.ts");
    /* harmony import */


    var src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/entree.service */
    "./src/app/services/entree.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EntreeProfilComponent =
    /*#__PURE__*/
    function () {
      function EntreeProfilComponent(produitService, entreeService, alert, modalController, navParams) {
        _classCallCheck(this, EntreeProfilComponent);

        this.produitService = produitService;
        this.entreeService = entreeService;
        this.alert = alert;
        this.modalController = modalController;
        this.navParams = navParams;
        this.produitsArray = [];
      }

      _createClass(EntreeProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          var id = this.navParams.get('id');
          this.sub1 = this.produitService.getCategories().subscribe(function (cats) {
            _this10.categories = cats;
          });
          this.sub2 = this.produitService.getIntrants().subscribe(function (prods) {
            _this10.produits = [];
            prods.forEach(function (item) {
              console.log(item);
              item.categorie = _this10.categories.find(function (cat) {
                return cat.id === item.categorieId;
              }).nom;

              _this10.produits.push(item);
            });
          });
          this.sub3 = this.entreeService.getFournisseurs().subscribe(function (res) {
            _this10.fournisseurs = res;
          });

          if (id) {
            this.item = this.entreeService.getEntree(id);
            this.title = "Modification de l' entree numero " + this.item.numeroFacture;
            this.operation = {
              id: this.item.id,
              numeroFacture: this.item.numeroFacture,
              fournisseurId: this.item.fournisseurId,
              montantTotal: this.item.montantTotal,
              montantPaye: this.item.montantPaye,
              reductions: this.item.reductions,
              autresFrais: this.item.autresFrais,
              createdAt: this.item.createdAt,
              deletedAt: this.item.deletedAt,
              updatedAt: this.item.updatedAt
            };
            this.entreeService.getEntreeProduits(this.item.id).then(function (prod) {
              console.log(prod);
              _this10.produitsArray = [];
              prod.map(function (item) {
                var entity = _this10.produits.find(function (elem) {
                  return elem.id === item.produitId;
                });

                item.nom = entity.categorie + ' ' + entity.nom;

                _this10.produitsArray.push(item);
              });
            });
          }
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.modalController.dismiss();
        }
      }]);

      return EntreeProfilComponent;
    }();

    EntreeProfilComponent.ctorParameters = function () {
      return [{
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"]
      }, {
        type: src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_3__["EntreeService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
      }];
    };

    EntreeProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entree-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entree-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entree-profil/entree-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entree-profil.component.scss */
      "./src/app/components/entree-profil/entree-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"], src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_3__["EntreeService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]])], EntreeProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/fonction-form/fonction-form.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/fonction-form/fonction-form.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFonctionFormFonctionFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9uY3Rpb24tZm9ybS9mb25jdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/fonction-form/fonction-form.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/fonction-form/fonction-form.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FonctionFormComponent */

  /***/
  function srcAppComponentsFonctionFormFonctionFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FonctionFormComponent", function () {
      return FonctionFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var FonctionFormComponent =
    /*#__PURE__*/
    function () {
      function FonctionFormComponent(popoverController, navParams, userService) {
        _classCallCheck(this, FonctionFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.userService = userService;
        this.title = "Ajout de fonction";
      }

      _createClass(FonctionFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.navParams.get('id');

          if (id) {
            var item = this.userService.getFonction(id);
            this.title = item.nom;
            this.initForm(item);
          } else this.initForm({
            id: null,
            nom: '',
            description: ''
          });
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.description)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toUpperCase();
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }]);

      return FonctionFormComponent;
    }();

    FonctionFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    FonctionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fonction-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fonction-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fonction-form/fonction-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fonction-form.component.scss */
      "./src/app/components/fonction-form/fonction-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], FonctionFormComponent);
    /***/
  },

  /***/
  "./src/app/components/fonction-profil/fonction-profil.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/fonction-profil/fonction-profil.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFonctionProfilFonctionProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9uY3Rpb24tcHJvZmlsL2ZvbmN0aW9uLXByb2ZpbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/fonction-profil/fonction-profil.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/fonction-profil/fonction-profil.component.ts ***!
    \*************************************************************************/

  /*! exports provided: FonctionProfilComponent */

  /***/
  function srcAppComponentsFonctionProfilFonctionProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FonctionProfilComponent", function () {
      return FonctionProfilComponent;
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


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var FonctionProfilComponent =
    /*#__PURE__*/
    function () {
      function FonctionProfilComponent(popoverController, navParams, userService) {
        _classCallCheck(this, FonctionProfilComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.userService = userService;
      }

      _createClass(FonctionProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.navParams.get('id');
          var trash = this.navParams.get('trash');

          if (id) {
            if (!trash) this.item = this.userService.getFonction(id);else this.item = this.userService.getFonctionTrash(id);
            this.title = 'fonction ' + this.item.nom;
          }
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.popoverController.dismiss();
        }
      }]);

      return FonctionProfilComponent;
    }();

    FonctionProfilComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    FonctionProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fonction-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fonction-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fonction-profil/fonction-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fonction-profil.component.scss */
      "./src/app/components/fonction-profil/fonction-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], FonctionProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/fournisseur-form/fournisseur-form.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/fournisseur-form/fournisseur-form.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFournisseurFormFournisseurFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm91cm5pc3NldXItZm9ybS9mb3Vybmlzc2V1ci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/fournisseur-form/fournisseur-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/fournisseur-form/fournisseur-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FournisseurFormComponent */

  /***/
  function srcAppComponentsFournisseurFormFournisseurFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FournisseurFormComponent", function () {
      return FournisseurFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/entree.service */
    "./src/app/services/entree.service.ts");

    var FournisseurFormComponent =
    /*#__PURE__*/
    function () {
      function FournisseurFormComponent(popoverController, navParams, entreeService) {
        _classCallCheck(this, FournisseurFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.entreeService = entreeService;
        this.title = "Ajout de fournisseur";
      }

      _createClass(FournisseurFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.navParams.get('id');
          var isIntrant = this.navParams.get('isIntrant');

          if (id) {
            var item = this.entreeService.getFournisseur(id);
            this.title = item.nom;
            this.initForm(item);
          } else this.initForm({
            id: null,
            nom: '',
            contact: ''
          });
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.contact)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toUpperCase();
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }]);

      return FournisseurFormComponent;
    }();

    FournisseurFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_4__["EntreeService"]
      }];
    };

    FournisseurFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fournisseur-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fournisseur-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fournisseur-form/fournisseur-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fournisseur-form.component.scss */
      "./src/app/components/fournisseur-form/fournisseur-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_4__["EntreeService"]])], FournisseurFormComponent);
    /***/
  },

  /***/
  "./src/app/components/fournisseur-profil/fournisseur-profil.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/fournisseur-profil/fournisseur-profil.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFournisseurProfilFournisseurProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm91cm5pc3NldXItcHJvZmlsL2ZvdXJuaXNzZXVyLXByb2ZpbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/fournisseur-profil/fournisseur-profil.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/fournisseur-profil/fournisseur-profil.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: FournisseurProfilComponent */

  /***/
  function srcAppComponentsFournisseurProfilFournisseurProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FournisseurProfilComponent", function () {
      return FournisseurProfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FournisseurProfilComponent =
    /*#__PURE__*/
    function () {
      function FournisseurProfilComponent() {
        _classCallCheck(this, FournisseurProfilComponent);
      }

      _createClass(FournisseurProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FournisseurProfilComponent;
    }();

    FournisseurProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fournisseur-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fournisseur-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fournisseur-profil/fournisseur-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fournisseur-profil.component.scss */
      "./src/app/components/fournisseur-profil/fournisseur-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FournisseurProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/intrant-form/intrant-form.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/intrant-form/intrant-form.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIntrantFormIntrantFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cmFudC1mb3JtL2ludHJhbnQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/intrant-form/intrant-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/intrant-form/intrant-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: IntrantFormComponent */

  /***/
  function srcAppComponentsIntrantFormIntrantFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntrantFormComponent", function () {
      return IntrantFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/produit.service */
    "./src/app/services/produit.service.ts");

    var IntrantFormComponent =
    /*#__PURE__*/
    function () {
      function IntrantFormComponent(popoverController, navParams, produitService) {
        _classCallCheck(this, IntrantFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.produitService = produitService;
        this.title = "Ajout de produit";
        this.categories = [];
      }

      _createClass(IntrantFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.foncSub = this.produitService.getCategories().subscribe(function (foncs) {
            return _this11.categories = foncs;
          });
          var id = this.navParams.get('id');

          if (id) {
            var item = this.produitService.getIntrant(id);
            this.title = item.nom;
            this.initForm(item);
          } else {
            this.initForm({
              id: null,
              categorieId: null,
              nom: '',
              description: '',
              quantiteAlerte: '',
              uniteMesure: ''
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.foncSub.unsubscribe();
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            categorieId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.categorieId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            uniteMesure: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.uniteMesure, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.description),
            quantiteAlerte: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.quantiteAlerte, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toUpperCase();
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "categorieId",
        get: function get() {
          return this.form.get('categorieId');
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }, {
        key: "quantiteAlerte",
        get: function get() {
          return this.form.get('quantiteAlerte');
        }
      }, {
        key: "uniteMesure",
        get: function get() {
          return this.form.get('uniteMesure');
        }
      }]);

      return IntrantFormComponent;
    }();

    IntrantFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_4__["ProduitService"]
      }];
    };

    IntrantFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intrant-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intrant-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intrant-form/intrant-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intrant-form.component.scss */
      "./src/app/components/intrant-form/intrant-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_4__["ProduitService"]])], IntrantFormComponent);
    /***/
  },

  /***/
  "./src/app/components/intrant-profil/intrant-profil.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/intrant-profil/intrant-profil.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIntrantProfilIntrantProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cmFudC1wcm9maWwvaW50cmFudC1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/intrant-profil/intrant-profil.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/intrant-profil/intrant-profil.component.ts ***!
    \***********************************************************************/

  /*! exports provided: IntrantProfilComponent */

  /***/
  function srcAppComponentsIntrantProfilIntrantProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntrantProfilComponent", function () {
      return IntrantProfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IntrantProfilComponent =
    /*#__PURE__*/
    function () {
      function IntrantProfilComponent() {
        _classCallCheck(this, IntrantProfilComponent);
      }

      _createClass(IntrantProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntrantProfilComponent;
    }();

    IntrantProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intrant-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intrant-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intrant-profil/intrant-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intrant-profil.component.scss */
      "./src/app/components/intrant-profil/intrant-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IntrantProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/produit-form/produit-form.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/produit-form/produit-form.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProduitFormProduitFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWl0LWZvcm0vQzpcXFVzZXJzXFxBcm9hbVxcRGVza3RvcFxcaG90ZWwtZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1aXQtZm9ybVxccHJvZHVpdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1aXQtZm9ybS9wcm9kdWl0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWl0LWZvcm0vcHJvZHVpdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3R7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi1saXN0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/produit-form/produit-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/produit-form/produit-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProduitFormComponent */

  /***/
  function srcAppComponentsProduitFormProduitFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProduitFormComponent", function () {
      return ProduitFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/produit.service */
    "./src/app/services/produit.service.ts");

    var ProduitFormComponent =
    /*#__PURE__*/
    function () {
      // slidesOptions = {
      //   initialSlide: 0,
      //   direction: 'horizontal',
      //   speed: 300,
      //   effect: slide,
      //   spaceBetween: 8,
      //   slidesPerView: 1.5,
      //   freeMode: true,
      //   loop: true
      // };
      function ProduitFormComponent(popoverController, navParams, produitService) {
        _classCallCheck(this, ProduitFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.produitService = produitService;
        this.title = "Ajout de produit";
        this.categories = [];
        this.slideIndex = 0;
        this.slideOpts = {
          initialSlide: 0,
          speed: 400
        };
      }

      _createClass(ProduitFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.slides.lockSwipeToNext(true);
          this.foncSub = this.produitService.getCategories().subscribe(function (foncs) {
            return _this12.categories = foncs;
          });
          var id = this.navParams.get('id');

          if (id) {
            var item = this.produitService.getProduit(id);
            this.title = item.nom;
            this.photo = item.photo;
            this.initForm(item);
          } else {
            this.initForm({
              id: null,
              categorieId: null,
              nom: '',
              description: '',
              uniteMesure: '',
              prixUnitairVente: 0
            });
            this.photo = './assets/img/produit.png';
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.foncSub.unsubscribe();
        }
      }, {
        key: "onUploadChange",
        value: function onUploadChange(evt) {
          var file = evt.target.files[0];

          if (file) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
          }
        }
      }, {
        key: "handleReaderLoaded",
        value: function handleReaderLoaded(e) {
          this.photo = 'data:image/png;base64,' + btoa(e.target.result);
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            categorieId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.categorieId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.description),
            uniteMesure: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.uniteMesure, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            prixUnitaireVente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.prixUnitaireVente, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "onNext",
        value: function onNext() {
          var _this13 = this;

          this.slides.lockSwipeToNext(false).then(function () {
            _this13.slides.slideNext().then(function () {
              _this13.slides.lockSwipeToNext(true);

              _this13.slides.getActiveIndex().then(function (i) {
                return _this13.slideIndex = i;
              });
            });
          });
        }
      }, {
        key: "onPrevious",
        value: function onPrevious() {
          var _this14 = this;

          this.slides.lockSwipeToNext(false).then(function () {
            _this14.slides.slidePrev().then(function () {
              _this14.slides.getActiveIndex().then(function (i) {
                return _this14.slideIndex = i;
              });
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toUpperCase();
          this.form.value.photo = this.photo;
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "categorieId",
        get: function get() {
          return this.form.get('categorieId');
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }, {
        key: "uniteMesure",
        get: function get() {
          return this.form.get('uniteMesure');
        }
      }, {
        key: "prixUnitaireVente",
        get: function get() {
          return this.form.get('prixUnitaireVente');
        }
      }]);

      return ProduitFormComponent;
    }();

    ProduitFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_4__["ProduitService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], ProduitFormComponent.prototype, "slides", void 0);
    ProduitFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-produit-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./produit-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produit-form/produit-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./produit-form.component.scss */
      "./src/app/components/produit-form/produit-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_4__["ProduitService"]])], ProduitFormComponent);
    /***/
  },

  /***/
  "./src/app/components/produit-profil/produit-profil.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/produit-profil/produit-profil.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProduitProfilProduitProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVpdC1wcm9maWwvcHJvZHVpdC1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/produit-profil/produit-profil.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/produit-profil/produit-profil.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProduitProfilComponent */

  /***/
  function srcAppComponentsProduitProfilProduitProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProduitProfilComponent", function () {
      return ProduitProfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProduitProfilComponent =
    /*#__PURE__*/
    function () {
      function ProduitProfilComponent() {
        _classCallCheck(this, ProduitProfilComponent);
      }

      _createClass(ProduitProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProduitProfilComponent;
    }();

    ProduitProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-produit-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./produit-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produit-profil/produit-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./produit-profil.component.scss */
      "./src/app/components/produit-profil/produit-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProduitProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/propriete-form/propriete-form.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/propriete-form/propriete-form.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProprieteFormProprieteFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvcHJpZXRlLWZvcm0vcHJvcHJpZXRlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/propriete-form/propriete-form.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/propriete-form/propriete-form.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProprieteFormComponent */

  /***/
  function srcAppComponentsProprieteFormProprieteFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProprieteFormComponent", function () {
      return ProprieteFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/params.service */
    "./src/app/services/params.service.ts");

    var ProprieteFormComponent =
    /*#__PURE__*/
    function () {
      function ProprieteFormComponent(popoverController, navParams, paramsService) {
        _classCallCheck(this, ProprieteFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.paramsService = paramsService;
        this.title = "Ajout de propriete";
      }

      _createClass(ProprieteFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.navParams.get('id');

          if (id) {
            var item = this.paramsService.getPropriete(id);
            this.title = 'Propriete ' + item.nom;
            this.initForm(item);
          } else this.initForm({
            id: null,
            nom: '',
            model: '',
            coutAdditionnel: 0,
            description: ''
          });
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            model: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.model, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            coutAdditionnel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.coutAdditionnel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.description)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toUpperCase();
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }, {
        key: "model",
        get: function get() {
          return this.form.get('model');
        }
      }, {
        key: "coutAdditionnel",
        get: function get() {
          return this.form.get('coutAdditionnel');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }]);

      return ProprieteFormComponent;
    }();

    ProprieteFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__["ParamsService"]
      }];
    };

    ProprieteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-propriete-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./propriete-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/propriete-form/propriete-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./propriete-form.component.scss */
      "./src/app/components/propriete-form/propriete-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__["ParamsService"]])], ProprieteFormComponent);
    /***/
  },

  /***/
  "./src/app/components/sortie-form/sortie-form.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/sortie-form/sortie-form.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSortieFormSortieFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-blue {\n  background-color: #b5b6ec;\n}\n\n.search-box {\n  margin-top: 3px;\n  background: #e4e1e1;\n  position: absolute;\n  left: 4%;\n  width: 47%;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 2000;\n}\n\n.search-box ion-row {\n  cursor: -webkit-grab;\n  cursor: grab;\n  border-bottom: 1px white;\n}\n\n.search-box ion-row:hover {\n  background-color: white;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3J0aWUtZm9ybS9DOlxcVXNlcnNcXEFyb2FtXFxEZXNrdG9wXFxob3RlbC1mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc29ydGllLWZvcm1cXHNvcnRpZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvcnRpZS1mb3JtL3NvcnRpZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0ksb0JBQUE7RUFBQSxZQUFBO0VBQ0Esd0JBQUE7QUNFUjs7QURBSTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb3J0aWUtZm9ybS9zb3J0aWUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1ibHVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjZlYztcclxufVxyXG5cclxuLnNlYXJjaC1ib3h7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMjUsIDIyNSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0JTtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLXJvdzpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgIH1cclxufSIsIi5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjZlYztcbn1cblxuLnNlYXJjaC1ib3gge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNlNGUxZTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNCU7XG4gIHdpZHRoOiA0NyU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiAyMDAwO1xufVxuLnNlYXJjaC1ib3ggaW9uLXJvdyB7XG4gIGN1cnNvcjogZ3JhYjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHdoaXRlO1xufVxuLnNlYXJjaC1ib3ggaW9uLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogZ3JleTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/sortie-form/sortie-form.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/sortie-form/sortie-form.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SortieFormComponent */

  /***/
  function srcAppComponentsSortieFormSortieFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortieFormComponent", function () {
      return SortieFormComponent;
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


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/produit.service */
    "./src/app/services/produit.service.ts");
    /* harmony import */


    var src_app_services_sortie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/sortie.service */
    "./src/app/services/sortie.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SortieFormComponent =
    /*#__PURE__*/
    function () {
      function SortieFormComponent(produitService, sortieService, userService, alert, modalController, navParams) {
        _classCallCheck(this, SortieFormComponent);

        this.produitService = produitService;
        this.sortieService = sortieService;
        this.userService = userService;
        this.alert = alert;
        this.modalController = modalController;
        this.navParams = navParams;
        this.title = "Ajout d'une sortie";
        this.produitsArray = [];
      }

      _createClass(SortieFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          var id = this.navParams.get('id');
          this.sub1 = this.produitService.getCategories().subscribe(function (cats) {
            _this15.categories = cats;
          });
          this.sub2 = this.produitService.getIntrants().subscribe(function (prods) {
            _this15.produits = [];
            prods.forEach(function (item) {
              console.log(item);
              item.categorie = _this15.categories.find(function (cat) {
                return cat.id === item.categorieId;
              }).nom;

              _this15.produits.push(item);
            });
          });
          this.sub3 = this.userService.getFonctions().subscribe(function (res) {
            _this15.fonctions = res;
          });
          this.sub4 = this.userService.getUsers().subscribe(function (res) {
            _this15.users = res;
          });

          if (id) {
            this.item = this.sortieService.getSortie(id);
            this.title = "Modification de la sortie";
            this.operation = {
              id: this.item.id,
              userId: this.item.userId
            };
            this.sortieService.getSortieProduits(this.item.id).then(function (prod) {
              console.log(prod);
              _this15.produitsArray = [];
              prod.map(function (item) {
                var entity = _this15.produits.find(function (elem) {
                  return elem.id === item.produitId;
                });

                item.nom = entity.categorie + ' ' + entity.nom;

                _this15.produitsArray.push(item);
              });
            });
          } else {
            this.title = "Ajout d'une sortie";
            this.operation = {
              numeroFacture: '',
              userId: null
            };
            this.onAddData();
          }
        }
      }, {
        key: "onAddData",
        value: function onAddData() {
          this.produitsArray.push({
            produitId: null,
            quantite: null
          });
        } // setQuantiteTotal() {
        //   this.operation.montantTotal = this.produitsArray.map(item=>item.prixUnitaire*item.quantite).reduce((b,c)=>b+c,0) + this.operation.autresFrais - this.operation.reductions;
        // }

      }, {
        key: "onDelete",
        value: function onDelete(i) {
          this.produitsArray.splice(i, 1); //  this.setQuantiteTotal();
        }
      }, {
        key: "produitController",
        value: function produitController(i) {
          var _this16 = this;

          var long = this.produitsArray.filter(function (item) {
            return +item.produitId === +_this16.produitsArray[i].produitId;
          }).length;

          if (long > 1) {
            this.alert.toast({
              type: 'danger',
              message: 'Vous avez dejà ajouter ce produit'
            });
            this.onDelete(i);
          } // this.setQuantiteTotal();

        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (!this.operation.userId) {
            this.alert.toast({
              type: 'danger',
              message: 'Veuillez choisir un utilisateur!'
            });
          } else if (this.produitsArray.filter(function (item) {
            return item.produitId === null || item.quantite === null || item.quantite <= 0;
          }).length > 0) {
            this.alert.toast({
              type: 'danger',
              message: 'Veuillez remplir correctement toutes les cases!'
            });
          } else if (this.operation.id) {
            this.sortieService.editSortie({
              sortie: this.operation,
              produits: this.produitsArray
            });
            this.onClose();
          } else {
            console.log({
              sortie: this.operation,
              produits: this.produitsArray
            });
            this.sortieService.addSortie({
              sortie: this.operation,
              produits: this.produitsArray
            });
            this.onClose();
          }
        }
      }, {
        key: "onSelectProduct",
        value: function onSelectProduct(i, id, categorie, nom) {
          console.log('id: ' + id);
          this.produitsArray[i].produitId = id;
          this.produitsArray[i].searching = false;
          this.produitsArray[i].nom = categorie + ' ' + nom;
          this.produitController(i);
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.modalController.dismiss();
        }
      }]);

      return SortieFormComponent;
    }();

    SortieFormComponent.ctorParameters = function () {
      return [{
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"]
      }, {
        type: src_app_services_sortie_service__WEBPACK_IMPORTED_MODULE_4__["SortieService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
      }];
    };

    SortieFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sortie-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sortie-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sortie-form/sortie-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sortie-form.component.scss */
      "./src/app/components/sortie-form/sortie-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"], src_app_services_sortie_service__WEBPACK_IMPORTED_MODULE_4__["SortieService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]])], SortieFormComponent);
    /***/
  },

  /***/
  "./src/app/components/sortie-profil/sortie-profil.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/sortie-profil/sortie-profil.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSortieProfilSortieProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29ydGllLXByb2ZpbC9zb3J0aWUtcHJvZmlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/sortie-profil/sortie-profil.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/sortie-profil/sortie-profil.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SortieProfilComponent */

  /***/
  function srcAppComponentsSortieProfilSortieProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortieProfilComponent", function () {
      return SortieProfilComponent;
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


    var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/produit.service */
    "./src/app/services/produit.service.ts");
    /* harmony import */


    var src_app_services_sortie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/sortie.service */
    "./src/app/services/sortie.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SortieProfilComponent =
    /*#__PURE__*/
    function () {
      function SortieProfilComponent(produitService, sortieService, userService, alert, modalController, navParams) {
        _classCallCheck(this, SortieProfilComponent);

        this.produitService = produitService;
        this.sortieService = sortieService;
        this.userService = userService;
        this.alert = alert;
        this.modalController = modalController;
        this.navParams = navParams;
        this.title = "Ajout d'une sortie";
        this.produitsArray = [];
      }

      _createClass(SortieProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          var id = this.navParams.get('id');
          this.sub1 = this.produitService.getCategories().subscribe(function (cats) {
            _this17.categories = cats;
          });
          this.sub2 = this.produitService.getIntrants().subscribe(function (prods) {
            _this17.produits = [];
            prods.forEach(function (item) {
              console.log(item);
              item.categorie = _this17.categories.find(function (cat) {
                return cat.id === item.categorieId;
              }).nom;

              _this17.produits.push(item);
            });
          });
          this.sub3 = this.userService.getFonctions().subscribe(function (res) {
            _this17.fonctions = res;
          });
          this.sub4 = this.userService.getUsers().subscribe(function (res) {
            _this17.users = res;
          });

          if (id) {
            this.item = this.sortieService.getSortie(id);
            this.title = "Sortie";
            this.operation = {
              id: this.item.id,
              userId: this.item.userId
            };
            this.sortieService.getSortieProduits(this.item.id).then(function (prod) {
              console.log(prod);
              _this17.produitsArray = [];
              prod.map(function (item) {
                var entity = _this17.produits.find(function (elem) {
                  return elem.id === item.produitId;
                });

                item.nom = entity.categorie + ' ' + entity.nom;

                _this17.produitsArray.push(item);
              });
            });
          }
        } // onAddData() {
        //  this.produitsArray.push({ produitId: null, quantite: null});
        // }
        // setQuantiteTotal() {
        //   this.operation.montantTotal = this.produitsArray.map(item=>item.prixUnitaire*item.quantite).reduce((b,c)=>b+c,0) + this.operation.autresFrais - this.operation.reductions;
        // }
        // onDelete(i: number) {
        //  this.produitsArray.splice(i,1);
        // //  this.setQuantiteTotal();
        // }
        // produitController(i:number){
        //   let long = this.produitsArray.filter(item=> +item.produitId===+this.produitsArray[i].produitId).length;
        //   if(long>1){
        //     this.alert.toast({ type: 'danger', message: 'Vous avez dejà ajouter ce produit'});
        //     this.onDelete(i);
        //   } 
        //   // this.setQuantiteTotal();
        // }
        // onSubmit() {
        //   if (!this.operation.userId) {
        //     this.alert.toast({ type: 'danger', message: 'Veuillez choisir un utilisateur!'});
        //   } else if (this.produitsArray.filter(item=>item.produitId===null||item.quantite===null||item.quantite<=0).length>0) {
        //     this.alert.toast({ type: 'danger', message: 'Veuillez remplir correctement toutes les cases!'});
        //   } else if(this.operation.id) {
        //     this.sortieService.editSortie({sortie: this.operation, produits: this.produitsArray});  
        //     this.onClose();
        //   } else{
        //     console.log({sortie: this.operation, produits: this.produitsArray});
        //     this.sortieService.addSortie({sortie: this.operation, produits: this.produitsArray});  
        //     this.onClose();
        //   } 
        // }
        // onSelectProduct(i, id, categorie, nom){
        //   console.log('id: '+ id)
        //   this.produitsArray[i].produitId = id;
        //   this.produitsArray[i].searching = false;
        //   this.produitsArray[i].nom = categorie+ ' ' + nom;
        //   this.produitController(i);
        // }

      }, {
        key: "onClose",
        value: function onClose() {
          this.modalController.dismiss();
        }
      }]);

      return SortieProfilComponent;
    }();

    SortieProfilComponent.ctorParameters = function () {
      return [{
        type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"]
      }, {
        type: src_app_services_sortie_service__WEBPACK_IMPORTED_MODULE_3__["SortieService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
      }];
    };

    SortieProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sortie-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sortie-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sortie-profil/sortie-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sortie-profil.component.scss */
      "./src/app/components/sortie-profil/sortie-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"], src_app_services_sortie_service__WEBPACK_IMPORTED_MODULE_3__["SortieService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]])], SortieProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/table-form/table-form.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/table-form/table-form.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTableFormTableFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUtZm9ybS90YWJsZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/table-form/table-form.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/table-form/table-form.component.ts ***!
    \***************************************************************/

  /*! exports provided: TableFormComponent */

  /***/
  function srcAppComponentsTableFormTableFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableFormComponent", function () {
      return TableFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_consommation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/consommation.service */
    "./src/app/services/consommation.service.ts");

    var TableFormComponent =
    /*#__PURE__*/
    function () {
      function TableFormComponent(popoverController, navParams, consommationService) {
        _classCallCheck(this, TableFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.consommationService = consommationService;
        this.title = "Ajout de table";
      }

      _createClass(TableFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.navParams.get('id');

          if (id) {
            var item = this.consommationService.getTable(id);
            this.title = 'Table ' + item.numero;
            this.initForm(item);
          } else this.initForm({
            id: null,
            numero: '',
            description: ''
          });
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.description)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.numero = this.form.value.numero.toUpperCase();
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "numero",
        get: function get() {
          return this.form.get('numero');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }]);

      return TableFormComponent;
    }();

    TableFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_consommation_service__WEBPACK_IMPORTED_MODULE_4__["ConsommationService"]
      }];
    };

    TableFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./table-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-form/table-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./table-form.component.scss */
      "./src/app/components/table-form/table-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_consommation_service__WEBPACK_IMPORTED_MODULE_4__["ConsommationService"]])], TableFormComponent);
    /***/
  },

  /***/
  "./src/app/components/table-profil/table-profil.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/table-profil/table-profil.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTableProfilTableProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUtcHJvZmlsL3RhYmxlLXByb2ZpbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/table-profil/table-profil.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/table-profil/table-profil.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TableProfilComponent */

  /***/
  function srcAppComponentsTableProfilTableProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableProfilComponent", function () {
      return TableProfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TableProfilComponent =
    /*#__PURE__*/
    function () {
      function TableProfilComponent() {
        _classCallCheck(this, TableProfilComponent);
      }

      _createClass(TableProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TableProfilComponent;
    }();

    TableProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./table-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-profil/table-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./table-profil.component.scss */
      "./src/app/components/table-profil/table-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TableProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/type-form/type-form.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/type-form/type-form.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTypeFormTypeFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwZS1mb3JtL3R5cGUtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/type-form/type-form.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/type-form/type-form.component.ts ***!
    \*************************************************************/

  /*! exports provided: TypeFormComponent */

  /***/
  function srcAppComponentsTypeFormTypeFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeFormComponent", function () {
      return TypeFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/chambre.service */
    "./src/app/services/chambre.service.ts");

    var TypeFormComponent =
    /*#__PURE__*/
    function () {
      function TypeFormComponent(popoverController, navParams, chambreService) {
        _classCallCheck(this, TypeFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.chambreService = chambreService;
        this.title = "Ajout de type";
      }

      _createClass(TypeFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.navParams.get('id');

          if (id) {
            var item = this.chambreService.getType(id);
            this.title = item.nom;
            this.note = item.note;
            this.initForm(item);
          } else {
            this.note = 0;
            this.initForm({
              id: null,
              nom: '',
              description: ''
            });
          }
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.description)
          });
        }
      }, {
        key: "onSetNote",
        value: function onSetNote(i) {
          if (this.note === i) this.note = 0;else this.note = i;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toUpperCase();
          this.form.value.note = this.note;
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }]);

      return TypeFormComponent;
    }();

    TypeFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_4__["ChambreService"]
      }];
    };

    TypeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-type-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./type-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/type-form/type-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./type-form.component.scss */
      "./src/app/components/type-form/type-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_chambre_service__WEBPACK_IMPORTED_MODULE_4__["ChambreService"]])], TypeFormComponent);
    /***/
  },

  /***/
  "./src/app/components/type-profil/type-profil.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/type-profil/type-profil.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTypeProfilTypeProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwZS1wcm9maWwvdHlwZS1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/type-profil/type-profil.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/type-profil/type-profil.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TypeProfilComponent */

  /***/
  function srcAppComponentsTypeProfilTypeProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeProfilComponent", function () {
      return TypeProfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TypeProfilComponent =
    /*#__PURE__*/
    function () {
      function TypeProfilComponent() {
        _classCallCheck(this, TypeProfilComponent);
      }

      _createClass(TypeProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TypeProfilComponent;
    }();

    TypeProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-type-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./type-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/type-profil/type-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./type-profil.component.scss */
      "./src/app/components/type-profil/type-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TypeProfilComponent);
    /***/
  },

  /***/
  "./src/app/components/user-form/user-form.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/user-form/user-form.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserFormUserFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWZvcm0vQzpcXFVzZXJzXFxBcm9hbVxcRGVza3RvcFxcaG90ZWwtZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVzZXItZm9ybVxcdXNlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3R7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi1saXN0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/user-form/user-form.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-form/user-form.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserFormComponent */

  /***/
  function srcAppComponentsUserFormUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
      return UserFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var UserFormComponent =
    /*#__PURE__*/
    function () {
      // slidesOptions = {
      //   initialSlide: 0,
      //   direction: 'horizontal',
      //   speed: 300,
      //   effect: slide,
      //   spaceBetween: 8,
      //   slidesPerView: 1.5,
      //   freeMode: true,
      //   loop: true
      // };
      function UserFormComponent(popoverController, navParams, userService) {
        _classCallCheck(this, UserFormComponent);

        this.popoverController = popoverController;
        this.navParams = navParams;
        this.userService = userService;
        this.title = "Ajout d'utilisateur";
        this.fonctions = [];
        this.slideIndex = 0;
        this.slideOpts = {
          initialSlide: 0,
          speed: 400
        };
      }

      _createClass(UserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          var fonctionId = this.navParams.get('foncId');
          var id = this.navParams.get('id');
          this.slides.lockSwipeToNext(true);
          this.foncSub = this.userService.getFonctions().subscribe(function (foncs) {
            return _this18.fonctions = foncs;
          });

          if (id) {
            var item = this.userService.getUser(id);
            this.title = item.nom;
            this.photo = item.photo;
            this.initForm(item);
          } else {
            this.initForm({
              id: null,
              fonctionId: fonctionId,
              nom: '',
              penom: '',
              contact: '',
              identifiant: ''
            });
            this.photo = './assets/img/user.png';
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.foncSub.unsubscribe();
        }
      }, {
        key: "onUploadChange",
        value: function onUploadChange(evt) {
          var file = evt.target.files[0];

          if (file) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
          }
        }
      }, {
        key: "handleReaderLoaded",
        value: function handleReaderLoaded(e) {
          this.photo = 'data:image/png;base64,' + btoa(e.target.result);
        }
      }, {
        key: "initForm",
        value: function initForm(item) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
            fonctionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.fonctionId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            prenom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.prenom),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.contact, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            identifiant: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.identifiant, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])
          });
        }
      }, {
        key: "onNext",
        value: function onNext() {
          var _this19 = this;

          this.slides.lockSwipeToNext(false).then(function () {
            _this19.slides.slideNext().then(function () {
              _this19.slides.lockSwipeToNext(true);

              _this19.slides.getActiveIndex().then(function (i) {
                return _this19.slideIndex = i;
              });
            });
          });
        }
      }, {
        key: "onPrevious",
        value: function onPrevious() {
          var _this20 = this;

          this.slides.lockSwipeToNext(false).then(function () {
            _this20.slides.slidePrev().then(function () {
              _this20.slides.getActiveIndex().then(function (i) {
                return _this20.slideIndex = i;
              });
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.value.nom = this.form.value.nom.toUpperCase();
          this.form.value.photo = this.photo;
          this.onClose(this.form.value);
        }
      }, {
        key: "onClose",
        value: function onClose(data) {
          this.popoverController.dismiss(data);
        }
      }, {
        key: "fonctionId",
        get: function get() {
          return this.form.get('fonctionId');
        }
      }, {
        key: "nom",
        get: function get() {
          return this.form.get('nom');
        }
      }, {
        key: "prenom",
        get: function get() {
          return this.form.get('prenom');
        }
      }, {
        key: "contact",
        get: function get() {
          return this.form.get('contact');
        }
      }, {
        key: "identifiant",
        get: function get() {
          return this.form.get('identifiant');
        }
      }]);

      return UserFormComponent;
    }();

    UserFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], UserFormComponent.prototype, "slides", void 0);
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-form/user-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-form.component.scss */
      "./src/app/components/user-form/user-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], UserFormComponent);
    /***/
  },

  /***/
  "./src/app/components/user-profil/user-profil.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/user-profil/user-profil.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserProfilUserProfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWwvdXNlci1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/user-profil/user-profil.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/user-profil/user-profil.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserProfilComponent */

  /***/
  function srcAppComponentsUserProfilUserProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilComponent", function () {
      return UserProfilComponent;
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


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/params.service */
    "./src/app/services/params.service.ts");

    var UserProfilComponent =
    /*#__PURE__*/
    function () {
      function UserProfilComponent(modalController, navParams, userService, paramsService) {
        _classCallCheck(this, UserProfilComponent);

        this.modalController = modalController;
        this.navParams = navParams;
        this.userService = userService;
        this.paramsService = paramsService;
        this.controls = [];
        this.userControls = [];
        this.activities = [];
        this.lastActiviteId = 0;
        this.menu = "infos";
      }

      _createClass(UserProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.id = this.navParams.get('id');
          var trash = this.navParams.get('trash');
          this.sub = this.paramsService.getControls().subscribe(function (res) {
            _this21.controls = [];
            _this21.controls = res;

            _this21.onReset();
          });

          if (this.id) {
            if (!trash) this.item = this.userService.getUser(this.id);else this.item = this.userService.getUserTrash(this.id);
            this.title = this.item.nom + ' ' + this.item.prenom;
          } // this.toggleInfiniteScroll(true);


          this.getActivities();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          this.menu = event.target.value;
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.modalController.dismiss();
        }
      }, {
        key: "onReset",
        value: function onReset() {
          var _this22 = this;

          this.paramsService.getUserControls(this.id).then(function (res) {
            _this22.userControls = [];

            if (res.length === 0) {
              _this22.controls.forEach(function (item) {
                return _this22.userControls.push({
                  userId: _this22.id,
                  controlId: item.id,
                  description: item.description,
                  isChecked: false
                });
              });
            } else {
              _this22.controls.forEach(function (item) {
                var i = res.findIndex(function (elem) {
                  return elem.controlId === item.id;
                });

                if (i === -1) {
                  _this22.userControls.push({
                    userId: _this22.id,
                    controlId: item.id,
                    description: item.description,
                    isChecked: false
                  });
                } else {
                  res[i].description = item.description;

                  _this22.userControls.push(res[i]);
                }
              });
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          this.paramsService.saveUserControls(this.userControls);
        }
      }, {
        key: "getActivities",
        value: function getActivities() {
          var _this23 = this;

          return this.userService.getUserActivities(this.id, this.lastActiviteId).then(function (res) {
            res.forEach(function (item) {
              return _this23.activities.push(item);
            });
            _this23.lastActiviteId += res.length;
            return true;
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          this.getActivities().then(function () {
            return event.target.complete();
          });
        }
      }, {
        key: "toggleInfiniteScroll",
        value: function toggleInfiniteScroll(bool) {
          this.infiniteScroll.disabled = bool;
        }
      }]);

      return UserProfilComponent;
    }();

    UserProfilComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__["ParamsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], UserProfilComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], UserProfilComponent.prototype, "infiniteScroll", void 0);
    UserProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profil/user-profil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profil.component.scss */
      "./src/app/components/user-profil/user-profil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_params_service__WEBPACK_IMPORTED_MODULE_4__["ParamsService"]])], UserProfilComponent);
    /***/
  },

  /***/
  "./src/app/pipes/filter-by.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/filter-by.pipe.ts ***!
    \*****************************************/

  /*! exports provided: FilterByPipe */

  /***/
  function srcAppPipesFilterByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterByPipe", function () {
      return FilterByPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FilterByPipe =
    /*#__PURE__*/
    function () {
      function FilterByPipe() {
        _classCallCheck(this, FilterByPipe);
      }

      _createClass(FilterByPipe, [{
        key: "transform",
        value: function transform(value, column, arg) {
          if (!value) return [];
          if (!arg) return value;
          if (!column) return value;
          return value.filter(function (item) {
            return item[column] === arg;
          });
        }
      }]);

      return FilterByPipe;
    }();

    FilterByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filterBy'
    })], FilterByPipe);
    /***/
  },

  /***/
  "./src/app/pipes/find-group.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/pipes/find-group.pipe.ts ***!
    \******************************************/

  /*! exports provided: FindGroupPipe */

  /***/
  function srcAppPipesFindGroupPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindGroupPipe", function () {
      return FindGroupPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FindGroupPipe =
    /*#__PURE__*/
    function () {
      function FindGroupPipe() {
        _classCallCheck(this, FindGroupPipe);
      }

      _createClass(FindGroupPipe, [{
        key: "transform",
        value: function transform(value) {
          return null;
        }
      }]);

      return FindGroupPipe;
    }();

    FindGroupPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'findGroup'
    })], FindGroupPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var _search_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-by.pipe */
    "./src/app/pipes/search-by.pipe.ts");
    /* harmony import */


    var _sort_by_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sort-by.pipe */
    "./src/app/pipes/sort-by.pipe.ts");
    /* harmony import */


    var _filter_by_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./filter-by.pipe */
    "./src/app/pipes/filter-by.pipe.ts");
    /* harmony import */


    var _find_group_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./find-group.pipe */
    "./src/app/pipes/find-group.pipe.ts"); //our pipe which we generate


    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_search_by_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchByPipe"], _sort_by_pipe__WEBPACK_IMPORTED_MODULE_4__["SortByPipe"], _filter_by_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterByPipe"], _find_group_pipe__WEBPACK_IMPORTED_MODULE_6__["FindGroupPipe"]],
      exports: [_search_by_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchByPipe"], _sort_by_pipe__WEBPACK_IMPORTED_MODULE_4__["SortByPipe"], _filter_by_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterByPipe"], _find_group_pipe__WEBPACK_IMPORTED_MODULE_6__["FindGroupPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/pipes/search-by.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/search-by.pipe.ts ***!
    \*****************************************/

  /*! exports provided: SearchByPipe */

  /***/
  function srcAppPipesSearchByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchByPipe", function () {
      return SearchByPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchByPipe =
    /*#__PURE__*/
    function () {
      function SearchByPipe() {
        _classCallCheck(this, SearchByPipe);
      }

      _createClass(SearchByPipe, [{
        key: "transform",
        value: function transform(value, arg, column) {
          if (!value) return [];
          if (!arg) return value;
          return value.filter(function (item) {
            if (!column) return item.nom.toLowerCase().includes(arg.toLowerCase());else {
              var strg1 = item[column] + ' ' + item.nom,
                  strg2 = item.nom + ' ' + item[column];
              return strg1.toLowerCase().includes(arg.toLowerCase()) || strg2.toLowerCase().includes(arg.toLowerCase());
            }
          });
        }
      }]);

      return SearchByPipe;
    }();

    SearchByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'searchBy'
    })], SearchByPipe);
    /***/
  },

  /***/
  "./src/app/pipes/sort-by.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/sort-by.pipe.ts ***!
    \***************************************/

  /*! exports provided: SortByPipe */

  /***/
  function srcAppPipesSortByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortByPipe", function () {
      return SortByPipe;
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


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

    var SortByPipe =
    /*#__PURE__*/
    function () {
      function SortByPipe() {
        _classCallCheck(this, SortByPipe);
      }

      _createClass(SortByPipe, [{
        key: "transform",
        value: function transform(value, order, columns) {
          if (!value || order === '' || !order) {
            return value;
          } // no array


          if (value.length <= 1) {
            return value;
          } // array with only one item


          return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"])(value, columns, [order]);
        }
      }]);

      return SortByPipe;
    }();

    SortByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'sortBy',
      pure: false
    })], SortByPipe);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService(toastController) {
        _classCallCheck(this, AlertService);

        this.toastController = toastController;
      }

      _createClass(AlertService, [{
        key: "toast",
        value: function toast(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(data);
                    _context.next = 3;
                    return this.toastController.create({
                      message: data.message,
                      position: 'top',
                      color: data.type,
                      duration: 2000
                    });

                  case 3:
                    toast = _context.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], AlertService);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(socket, alert) {
        var _this24 = this;

        _classCallCheck(this, ApiService);

        this.socket = socket;
        this.alert = alert;
        this.cloudSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.get('newData').subscribe(function () {
          console.log('new Data!');
          socket.emit('cloud');
          socket.on('cloud', function (res) {
            console.log(res);
            res.forEach(function (item) {
              _this24.cloudSubject.next(item);
            });
          });
        });
      }

      _createClass(ApiService, [{
        key: "post",
        value: function post(event, data) {
          var _this25 = this;

          return new Promise(function (resolve, reject) {
            _this25.socket.emit(event, data);

            _this25.socket.on(event, function (res) {
              resolve(res.data);
              if (res.infos) _this25.alert.toast(res.infos);
            });
          });
        }
      }, {
        key: "getStreamData",
        value: function getStreamData() {
          return this.cloudSubject.asObservable();
        }
      }, {
        key: "get",
        value: function get(event) {
          return this.socket.fromEvent(event);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]
      }, {
        type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"], _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/chambre.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/chambre.service.ts ***!
    \*********************************************/

  /*! exports provided: ChambreService */

  /***/
  function srcAppServicesChambreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChambreService", function () {
      return ChambreService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var ChambreService =
    /*#__PURE__*/
    function () {
      function ChambreService(api) {
        var _this26 = this;

        _classCallCheck(this, ChambreService);

        this.api = api;
        this.typeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.typeTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.chambreSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.chambreTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.api.post('type:all', null).then(function (res) {
          _this26.types = res;

          _this26.typeSubject.next(_this26.types);
        });
        this.api.post('type:trash', null).then(function (res) {
          _this26.typesTrash = res;

          _this26.typeTrashSubject.next(_this26.typesTrash);
        });
        this.api.post('chambre:all', null).then(function (res) {
          _this26.chambres = res;

          _this26.chambreSubject.next(_this26.chambres);
        });
        this.api.post('chambre:trash', null).then(function (res) {
          _this26.chambresTrash = res;

          _this26.chambreTrashSubject.next(_this26.chambresTrash);
        });
        this.api.getStreamData().subscribe(function (res) {
          if (res.operation.model === "Type") {
            if (res.operation.typeOperation === 'add') {
              _this26.types.push(res.data);

              _this26.typeSubject.next(_this26.types);
            } else if (res.operation.typeOperation === 'edit') {
              var i = _this26.types.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this26.types[i] = res.data;

              _this26.typeSubject.next(_this26.types);
            } else if (res.operation.typeOperation === 'delete') {
              var _i = _this26.types.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this26.types.splice(_i, 1);

              _this26.typeSubject.next(_this26.types);

              _this26.typesTrash.push(res.data);

              _this26.typeTrashSubject.next(_this26.typesTrash);

              _this26.typeSubject.next(_this26.types);
            } else if (res.operation.typeOperation === 'restore') {
              var _i2 = _this26.typesTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this26.typesTrash.splice(_i2, 1);

              _this26.typeTrashSubject.next(_this26.typesTrash);

              _this26.types.push(res.data);

              _this26.typeSubject.next(_this26.types);
            }
          } else if (res.operation.model === "Chambre") {
            if (res.operation.typeOperation === 'add') {
              _this26.chambres.push(res.data);

              _this26.chambreSubject.next(_this26.chambres);
            } else if (res.operation.typeOperation === 'edit') {
              var _i3 = _this26.chambres.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this26.chambres[_i3] = res.data;

              _this26.chambreSubject.next(_this26.chambres);
            } else if (res.operation.typeOperation === 'delete') {
              var _i4 = _this26.chambres.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this26.chambres.splice(_i4, 1);

              _this26.chambreSubject.next(_this26.chambres);

              _this26.chambresTrash.push(res.data);

              _this26.chambreTrashSubject.next(_this26.chambresTrash);

              _this26.chambreSubject.next(_this26.chambres);
            } else if (res.operation.typeOperation === 'restore') {
              var _i5 = _this26.chambresTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this26.chambresTrash.splice(_i5, 1);

              _this26.chambreTrashSubject.next(_this26.chambresTrash);

              _this26.chambres.push(res.data);

              _this26.chambreSubject.next(_this26.chambres);
            }
          }
        });
      }
      /**
       * type
       */


      _createClass(ChambreService, [{
        key: "getTypes",
        value: function getTypes() {
          return this.typeSubject.asObservable();
        }
      }, {
        key: "getTypesTrash",
        value: function getTypesTrash() {
          return this.typeTrashSubject.asObservable();
        }
      }, {
        key: "getTypeTrash",
        value: function getTypeTrash(id) {
          return this.typesTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getType",
        value: function getType(id) {
          return this.types.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addType",
        value: function addType(data) {
          var _this27 = this;

          return this.api.post('type:add', data).then(function (res) {
            _this27.types.push(res);

            _this27.typeSubject.next(_this27.types);
          });
        }
      }, {
        key: "editType",
        value: function editType(data) {
          var _this28 = this;

          return this.api.post('type:edit', data).then(function (res) {
            var i = _this28.types.findIndex(function (item) {
              return item.id === res.id;
            });

            _this28.types[i] = res;

            _this28.typeSubject.next(_this28.types);
          });
        }
      }, {
        key: "deleteType",
        value: function deleteType(id) {
          var _this29 = this;

          return this.api.post('type:delete', id).then(function (res) {
            var i = _this29.types.findIndex(function (item) {
              return item.id === res.id;
            });

            _this29.types.splice(i, 1);

            _this29.typeSubject.next(_this29.types);

            _this29.typesTrash.push(res);

            _this29.typeTrashSubject.next(_this29.typesTrash);
          });
        }
      }, {
        key: "restoreType",
        value: function restoreType(id) {
          var _this30 = this;

          return this.api.post('type:restore', id).then(function (res) {
            var i = _this30.typesTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this30.typesTrash.splice(i, 1);

            _this30.typeTrashSubject.next(_this30.typesTrash);

            _this30.types.push(res);

            _this30.typeSubject.next(_this30.types);
          });
        }
        /**
        * Chambre
        */

      }, {
        key: "getChambres",
        value: function getChambres() {
          return this.chambreSubject.asObservable();
        }
      }, {
        key: "getChambresTrash",
        value: function getChambresTrash() {
          return this.chambreTrashSubject.asObservable();
        }
      }, {
        key: "getChambreTrash",
        value: function getChambreTrash(id) {
          return this.chambresTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getChambre",
        value: function getChambre(id) {
          return this.chambres.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addChambre",
        value: function addChambre(data) {
          var _this31 = this;

          return this.api.post('chambre:add', data).then(function (res) {
            _this31.chambres.push(res);

            _this31.chambreSubject.next(_this31.chambres);
          });
        }
      }, {
        key: "editChambre",
        value: function editChambre(data) {
          var _this32 = this;

          return this.api.post('chambre:edit', data).then(function (res) {
            var i = _this32.chambres.findIndex(function (item) {
              return item.id === res.id;
            });

            _this32.chambres[i] = res;

            _this32.chambreSubject.next(_this32.chambres);
          });
        }
      }, {
        key: "deleteChambre",
        value: function deleteChambre(id) {
          var _this33 = this;

          return this.api.post('chambre:delete', id).then(function (res) {
            var i = _this33.chambres.findIndex(function (item) {
              return item.id === res.id;
            });

            _this33.chambres.splice(i, 1);

            _this33.chambreSubject.next(_this33.chambres);

            _this33.chambresTrash.push(res);

            _this33.chambreTrashSubject.next(_this33.chambresTrash);
          });
        }
      }, {
        key: "restoreChambre",
        value: function restoreChambre(id) {
          var _this34 = this;

          return this.api.post('chambre:restore', id).then(function (res) {
            var i = _this34.chambresTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this34.chambresTrash.splice(i, 1);

            _this34.chambreTrashSubject.next(_this34.chambresTrash);

            _this34.chambres.push(res);

            _this34.chambreSubject.next(_this34.chambres);
          });
        }
      }, {
        key: "getChambreActivites",
        value: function getChambreActivites(chambreId, lastId) {
          return this.api.post('chambre:activites', {
            chambreId: chambreId,
            lastId: lastId
          }).then(function (res) {
            return res;
          });
        }
      }]);

      return ChambreService;
    }();

    ChambreService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    ChambreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ChambreService);
    /***/
  },

  /***/
  "./src/app/services/consommation.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/consommation.service.ts ***!
    \**************************************************/

  /*! exports provided: ConsommationService */

  /***/
  function srcAppServicesConsommationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsommationService", function () {
      return ConsommationService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var ConsommationService =
    /*#__PURE__*/
    function () {
      function ConsommationService(api) {
        var _this35 = this;

        _classCallCheck(this, ConsommationService);

        this.api = api;
        this.tableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.tableTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.consommationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.consommationTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.api.post('table:all', null).then(function (res) {
          _this35.tables = res;

          _this35.tableSubject.next(_this35.tables);
        });
        this.api.post('table:trash', null).then(function (res) {
          _this35.tablesTrash = res;

          _this35.tableTrashSubject.next(_this35.tablesTrash);
        });
        this.api.post('consommation:all', null).then(function (res) {
          _this35.consommations = res;

          _this35.consommationSubject.next(_this35.consommations);
        });
        this.api.post('consommation:trash', null).then(function (res) {
          _this35.consommationsTrash = res;

          _this35.consommationTrashSubject.next(_this35.consommationsTrash);
        });
        this.api.getStreamData().subscribe(function (res) {
          if (res.operation.model === "Table") {
            if (res.operation.tableOperation === 'add') {
              _this35.tables.push(res.data);

              _this35.tableSubject.next(_this35.tables);
            } else if (res.operation.tableOperation === 'edit') {
              var i = _this35.tables.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this35.tables[i] = res.data;

              _this35.tableSubject.next(_this35.tables);
            } else if (res.operation.tableOperation === 'delete') {
              var _i6 = _this35.tables.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this35.tables.splice(_i6, 1);

              _this35.tableSubject.next(_this35.tables);

              _this35.tablesTrash.push(res.data);

              _this35.tableTrashSubject.next(_this35.tablesTrash);

              _this35.tableSubject.next(_this35.tables);
            } else if (res.operation.tableOperation === 'restore') {
              var _i7 = _this35.tablesTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this35.tablesTrash.splice(_i7, 1);

              _this35.tableTrashSubject.next(_this35.tablesTrash);

              _this35.tables.push(res.data);

              _this35.tableSubject.next(_this35.tables);
            }
          } else if (res.operation.model === "Consommation") {
            if (res.operation.tableOperation === 'add') {
              _this35.consommations.push(res.data);

              _this35.consommationSubject.next(_this35.consommations);
            } else if (res.operation.tableOperation === 'edit') {
              var _i8 = _this35.consommations.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this35.consommations[_i8] = res.data;

              _this35.consommationSubject.next(_this35.consommations);
            } else if (res.operation.tableOperation === 'delete') {
              var _i9 = _this35.consommations.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this35.consommations.splice(_i9, 1);

              _this35.consommationSubject.next(_this35.consommations);

              _this35.consommationsTrash.push(res.data);

              _this35.consommationTrashSubject.next(_this35.consommationsTrash);

              _this35.consommationSubject.next(_this35.consommations);
            } else if (res.operation.tableOperation === 'restore') {
              var _i10 = _this35.consommationsTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this35.consommationsTrash.splice(_i10, 1);

              _this35.consommationTrashSubject.next(_this35.consommationsTrash);

              _this35.consommations.push(res.data);

              _this35.consommationSubject.next(_this35.consommations);
            }
          }
        });
      }
      /**
       * table
       */


      _createClass(ConsommationService, [{
        key: "getTables",
        value: function getTables() {
          return this.tableSubject.asObservable();
        }
      }, {
        key: "getTablesTrash",
        value: function getTablesTrash() {
          return this.tableTrashSubject.asObservable();
        }
      }, {
        key: "getTableTrash",
        value: function getTableTrash(id) {
          return this.tablesTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getTable",
        value: function getTable(id) {
          return this.tables.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addTable",
        value: function addTable(data) {
          var _this36 = this;

          return this.api.post('table:add', data).then(function (res) {
            _this36.tables.push(res);

            _this36.tableSubject.next(_this36.tables);
          });
        }
      }, {
        key: "editTable",
        value: function editTable(data) {
          var _this37 = this;

          return this.api.post('table:edit', data).then(function (res) {
            var i = _this37.tables.findIndex(function (item) {
              return item.id === res.id;
            });

            _this37.tables[i] = res;

            _this37.tableSubject.next(_this37.tables);
          });
        }
      }, {
        key: "deleteTable",
        value: function deleteTable(id) {
          var _this38 = this;

          return this.api.post('table:delete', id).then(function (res) {
            var i = _this38.tables.findIndex(function (item) {
              return item.id === res.id;
            });

            _this38.tables.splice(i, 1);

            _this38.tableSubject.next(_this38.tables);

            _this38.tablesTrash.push(res);

            _this38.tableTrashSubject.next(_this38.tablesTrash);
          });
        }
      }, {
        key: "restoreTable",
        value: function restoreTable(id) {
          var _this39 = this;

          return this.api.post('table:restore', id).then(function (res) {
            var i = _this39.tablesTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this39.tablesTrash.splice(i, 1);

            _this39.tableTrashSubject.next(_this39.tablesTrash);

            _this39.tables.push(res);

            _this39.tableSubject.next(_this39.tables);
          });
        }
        /**
        * Consommation
        */

      }, {
        key: "getConsommations",
        value: function getConsommations() {
          return this.consommationSubject.asObservable();
        }
      }, {
        key: "getConsommationsTrash",
        value: function getConsommationsTrash() {
          return this.consommationTrashSubject.asObservable();
        }
      }, {
        key: "getConsommationTrash",
        value: function getConsommationTrash(id) {
          return this.consommationsTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getConsommation",
        value: function getConsommation(id) {
          return this.consommations.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getConsommationProduits",
        value: function getConsommationProduits(id) {
          return this.api.post('consommation:produits', id).then(function (res) {
            return res;
          });
        }
      }, {
        key: "addConsommation",
        value: function addConsommation(data) {
          var _this40 = this;

          return this.api.post('consommation:add', data).then(function (res) {
            _this40.consommations.push(res);

            _this40.consommationSubject.next(_this40.consommations);
          });
        }
      }, {
        key: "editConsommation",
        value: function editConsommation(data) {
          var _this41 = this;

          return this.api.post('consommation:edit', data).then(function (res) {
            var i = _this41.consommations.findIndex(function (item) {
              return item.id === res.id;
            });

            _this41.consommations[i] = res;

            _this41.consommationSubject.next(_this41.consommations);
          });
        }
      }, {
        key: "deleteConsommation",
        value: function deleteConsommation(id) {
          var _this42 = this;

          return this.api.post('consommation:delete', id).then(function (res) {
            var i = _this42.consommations.findIndex(function (item) {
              return item.id === res.id;
            });

            _this42.consommations.splice(i, 1);

            _this42.consommationSubject.next(_this42.consommations);

            _this42.consommationsTrash.push(res);

            _this42.consommationTrashSubject.next(_this42.consommationsTrash);
          });
        }
      }, {
        key: "restoreConsommation",
        value: function restoreConsommation(id) {
          var _this43 = this;

          return this.api.post('consommation:restore', id).then(function (res) {
            var i = _this43.consommationsTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this43.consommationsTrash.splice(i, 1);

            _this43.consommationTrashSubject.next(_this43.consommationsTrash);

            _this43.consommations.push(res);

            _this43.consommationSubject.next(_this43.consommations);
          });
        }
      }]);

      return ConsommationService;
    }();

    ConsommationService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    ConsommationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ConsommationService);
    /***/
  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.searchValue = '';
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(DataService, [{
        key: "setUser",
        value: function setUser(user) {
          this.userSubject.next(user);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.userSubject.asObservable();
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DataService);
    /***/
  },

  /***/
  "./src/app/services/entree.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/entree.service.ts ***!
    \********************************************/

  /*! exports provided: EntreeService */

  /***/
  function srcAppServicesEntreeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntreeService", function () {
      return EntreeService;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EntreeService =
    /*#__PURE__*/
    function () {
      function EntreeService(api) {
        var _this44 = this;

        _classCallCheck(this, EntreeService);

        this.api = api;
        this.entrees = [];
        this.entreesTrash = [];
        this.lastId = 0;
        this.lastTrashId = 0;
        this.fournisseurSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.fournisseurTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.entreeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.entreeTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.api.post('fournisseur:all', null).then(function (res) {
          _this44.fournisseurs = res;

          _this44.fournisseurSubject.next(_this44.fournisseurs);
        });
        this.api.post('fournisseur:trash', null).then(function (res) {
          _this44.fournisseursTrash = res;

          _this44.fournisseurTrashSubject.next(_this44.fournisseursTrash);
        });
        this.getServerEntrees();
        this.getSeverEntreesTrash();
        this.api.getStreamData().subscribe(function (res) {
          if (res.operation.model === "Fournisseur") {
            if (res.operation.typeOperation === 'add') {
              _this44.fournisseurs.push(res.data);

              _this44.fournisseurSubject.next(_this44.fournisseurs);
            } else if (res.operation.typeOperation === 'edit') {
              var i = _this44.fournisseurs.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this44.fournisseurs[i] = res.data;

              _this44.fournisseurSubject.next(_this44.fournisseurs);
            } else if (res.operation.typeOperation === 'delete') {
              var _i11 = _this44.fournisseurs.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this44.fournisseurs.splice(_i11, 1);

              _this44.fournisseurSubject.next(_this44.fournisseurs);

              _this44.fournisseursTrash.push(res.data);

              _this44.fournisseurTrashSubject.next(_this44.fournisseursTrash);

              _this44.fournisseurSubject.next(_this44.fournisseurs);
            } else if (res.operation.typeOperation === 'restore') {
              var _i12 = _this44.fournisseursTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this44.fournisseursTrash.splice(_i12, 1);

              _this44.fournisseurTrashSubject.next(_this44.fournisseursTrash);

              _this44.fournisseurs.push(res.data);

              _this44.fournisseurSubject.next(_this44.fournisseurs);
            }
          } else if (res.operation.model === "Entree") {
            if (res.operation.typeOperation === 'add') {
              _this44.entrees.push(res.data);

              _this44.entreeSubject.next(_this44.entrees);
            } else if (res.operation.typeOperation === 'edit') {
              var _i13 = _this44.entrees.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this44.entrees[_i13] = res.data;

              _this44.entreeSubject.next(_this44.entrees);
            } else if (res.operation.typeOperation === 'delete') {
              var _i14 = _this44.entrees.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this44.entrees.splice(_i14, 1);

              _this44.entreeSubject.next(_this44.entrees);

              _this44.entreesTrash.push(res.data);

              _this44.entreeTrashSubject.next(_this44.entreesTrash);

              _this44.entreeSubject.next(_this44.entrees);
            } else if (res.operation.typeOperation === 'restore') {
              var _i15 = _this44.entreesTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this44.entreesTrash.splice(_i15, 1);

              _this44.entreeTrashSubject.next(_this44.entreesTrash);

              _this44.entrees.push(res.data);

              _this44.entreeSubject.next(_this44.entrees);
            }
          }
        });
      }
      /**
       * type
       */


      _createClass(EntreeService, [{
        key: "getFournisseurs",
        value: function getFournisseurs() {
          return this.fournisseurSubject.asObservable();
        }
      }, {
        key: "getFournisseursTrash",
        value: function getFournisseursTrash() {
          return this.fournisseurTrashSubject.asObservable();
        }
      }, {
        key: "getFournisseurTrash",
        value: function getFournisseurTrash(id) {
          return this.fournisseursTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getFournisseur",
        value: function getFournisseur(id) {
          return this.fournisseurs.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addFournisseur",
        value: function addFournisseur(data) {
          var _this45 = this;

          return this.api.post('fournisseur:add', data).then(function (res) {
            _this45.fournisseurs.push(res);

            _this45.fournisseurSubject.next(_this45.fournisseurs);
          });
        }
      }, {
        key: "editFournisseur",
        value: function editFournisseur(data) {
          var _this46 = this;

          return this.api.post('fournisseur:edit', data).then(function (res) {
            var i = _this46.fournisseurs.findIndex(function (item) {
              return item.id === res.id;
            });

            _this46.fournisseurs[i] = res;

            _this46.fournisseurSubject.next(_this46.fournisseurs);
          });
        }
      }, {
        key: "deleteFournisseur",
        value: function deleteFournisseur(id) {
          var _this47 = this;

          return this.api.post('fournisseur:delete', id).then(function (res) {
            var i = _this47.fournisseurs.findIndex(function (item) {
              return item.id === res.id;
            });

            _this47.fournisseurs.splice(i, 1);

            _this47.fournisseurSubject.next(_this47.fournisseurs);

            _this47.fournisseursTrash.push(res);

            _this47.fournisseurTrashSubject.next(_this47.fournisseursTrash);
          });
        }
      }, {
        key: "restoreFournisseur",
        value: function restoreFournisseur(id) {
          var _this48 = this;

          return this.api.post('fournisseur:restore', id).then(function (res) {
            var i = _this48.fournisseursTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this48.fournisseursTrash.splice(i, 1);

            _this48.fournisseurTrashSubject.next(_this48.fournisseursTrash);

            _this48.fournisseurs.push(res);

            _this48.fournisseurSubject.next(_this48.fournisseurs);
          });
        }
        /**
        * Chambre
        */

      }, {
        key: "getServerEntrees",
        value: function getServerEntrees() {
          var _this49 = this;

          this.api.post('entree:all', this.lastId).then(function (res) {
            res.forEach(function (item) {
              return _this49.entrees.push(item);
            });
            _this49.lastId += res.length;

            _this49.entreeSubject.next(_this49.entrees);
          });
        }
      }, {
        key: "getSeverEntreesTrash",
        value: function getSeverEntreesTrash() {
          var _this50 = this;

          this.api.post('entree:trash', this.lastTrashId).then(function (res) {
            res.forEach(function (item) {
              return _this50.entrees.push(item);
            });
            _this50.lastTrashId += res.length;

            _this50.entreeTrashSubject.next(_this50.entreesTrash);
          });
        }
      }, {
        key: "getEntrees",
        value: function getEntrees() {
          return this.entreeSubject.asObservable();
        }
      }, {
        key: "getEntreeProduits",
        value: function getEntreeProduits(id) {
          return this.api.post('entree:produits', id).then(function (res) {
            return res;
          });
        }
      }, {
        key: "getEntreesTrash",
        value: function getEntreesTrash() {
          return this.entreeTrashSubject.asObservable();
        }
      }, {
        key: "getEntreeTrash",
        value: function getEntreeTrash(id) {
          return this.entreesTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getEntree",
        value: function getEntree(id) {
          return this.entrees.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addEntree",
        value: function addEntree(data) {
          var _this51 = this;

          return this.api.post('entree:add', data).then(function (res) {
            _this51.entrees.unshift(res);

            _this51.entreeSubject.next(_this51.entrees);
          });
        }
      }, {
        key: "editEntree",
        value: function editEntree(data) {
          var _this52 = this;

          return this.api.post('entree:edit', data).then(function (res) {
            var i = _this52.entrees.findIndex(function (item) {
              return item.id === res.id;
            });

            _this52.entrees[i] = res;

            _this52.entreeSubject.next(_this52.entrees);
          });
        }
      }, {
        key: "deleteEntree",
        value: function deleteEntree(id) {
          var _this53 = this;

          return this.api.post('entree:delete', id).then(function (res) {
            var i = _this53.entrees.findIndex(function (item) {
              return item.id === res.id;
            });

            _this53.entrees.splice(i, 1);

            _this53.entreeSubject.next(_this53.entrees);

            _this53.entreesTrash.push(res);

            _this53.entreeTrashSubject.next(_this53.entreesTrash);
          });
        }
      }, {
        key: "restoreEntree",
        value: function restoreEntree(id) {
          var _this54 = this;

          return this.api.post('entree:restore', id).then(function (res) {
            var i = _this54.entreesTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this54.entreesTrash.splice(i, 1);

            _this54.entreeTrashSubject.next(_this54.entreesTrash);

            _this54.entrees.push(res);

            _this54.entreeSubject.next(_this54.entrees);
          });
        }
      }]);

      return EntreeService;
    }();

    EntreeService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    EntreeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], EntreeService);
    /***/
  },

  /***/
  "./src/app/services/location.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/location.service.ts ***!
    \**********************************************/

  /*! exports provided: LocationService */

  /***/
  function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var LocationService =
    /*#__PURE__*/
    function () {
      function LocationService(api) {
        var _this55 = this;

        _classCallCheck(this, LocationService);

        this.api = api;
        this.clientSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.clientTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.locationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.locationTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.api.post('client:all', null).then(function (res) {
          _this55.clients = res;

          _this55.clientSubject.next(_this55.clients);
        });
        this.api.post('client:trash', null).then(function (res) {
          _this55.clientsTrash = res;

          _this55.clientTrashSubject.next(_this55.clientsTrash);
        });
        this.api.post('location:all', null).then(function (res) {
          _this55.locations = res;

          _this55.locationSubject.next(_this55.locations);
        });
        this.api.post('location:trash', null).then(function (res) {
          _this55.locationsTrash = res;

          _this55.locationTrashSubject.next(_this55.locationsTrash);
        });
        this.api.getStreamData().subscribe(function (res) {
          if (res.operation.model === "Client") {
            if (res.operation.tableOperation === 'add') {
              _this55.clients.push(res.data);

              _this55.clientSubject.next(_this55.clients);
            } else if (res.operation.tableOperation === 'edit') {
              var i = _this55.clients.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this55.clients[i] = res.data;

              _this55.clientSubject.next(_this55.clients);
            } else if (res.operation.tableOperation === 'delete') {
              var _i16 = _this55.clients.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this55.clients.splice(_i16, 1);

              _this55.clientSubject.next(_this55.clients);

              _this55.clientsTrash.push(res.data);

              _this55.clientTrashSubject.next(_this55.clientsTrash);

              _this55.clientSubject.next(_this55.clients);
            } else if (res.operation.tableOperation === 'restore') {
              var _i17 = _this55.clientsTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this55.clientsTrash.splice(_i17, 1);

              _this55.clientTrashSubject.next(_this55.clientsTrash);

              _this55.clients.push(res.data);

              _this55.clientSubject.next(_this55.clients);
            }
          } else if (res.operation.model === "Location") {
            if (res.operation.tableOperation === 'add') {
              _this55.locations.push(res.data);

              _this55.locationSubject.next(_this55.locations);
            } else if (res.operation.tableOperation === 'edit') {
              var _i18 = _this55.locations.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this55.locations[_i18] = res.data;

              _this55.locationSubject.next(_this55.locations);
            } else if (res.operation.tableOperation === 'delete') {
              var _i19 = _this55.locations.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this55.locations.splice(_i19, 1);

              _this55.locationSubject.next(_this55.locations);

              _this55.locationsTrash.push(res.data);

              _this55.locationTrashSubject.next(_this55.locationsTrash);

              _this55.locationSubject.next(_this55.locations);
            } else if (res.operation.tableOperation === 'restore') {
              var _i20 = _this55.locationsTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this55.locationsTrash.splice(_i20, 1);

              _this55.locationTrashSubject.next(_this55.locationsTrash);

              _this55.locations.push(res.data);

              _this55.locationSubject.next(_this55.locations);
            }
          }
        });
      }
      /**
       * client
       */


      _createClass(LocationService, [{
        key: "getClients",
        value: function getClients() {
          return this.clientSubject.asObservable();
        }
      }, {
        key: "getClientsTrash",
        value: function getClientsTrash() {
          return this.clientTrashSubject.asObservable();
        }
      }, {
        key: "getClientTrash",
        value: function getClientTrash(id) {
          return this.clientsTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getClient",
        value: function getClient(id) {
          return this.clients.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addClient",
        value: function addClient(data) {
          var _this56 = this;

          return this.api.post('client:add', data).then(function (res) {
            _this56.clients.push(res);

            _this56.clientSubject.next(_this56.clients);
          });
        }
      }, {
        key: "editClient",
        value: function editClient(data) {
          var _this57 = this;

          return this.api.post('client:edit', data).then(function (res) {
            var i = _this57.clients.findIndex(function (item) {
              return item.id === res.id;
            });

            _this57.clients[i] = res;

            _this57.clientSubject.next(_this57.clients);
          });
        }
      }, {
        key: "deleteClient",
        value: function deleteClient(id) {
          var _this58 = this;

          return this.api.post('client:delete', id).then(function (res) {
            var i = _this58.clients.findIndex(function (item) {
              return item.id === res.id;
            });

            _this58.clients.splice(i, 1);

            _this58.clientSubject.next(_this58.clients);

            _this58.clientsTrash.push(res);

            _this58.clientTrashSubject.next(_this58.clientsTrash);
          });
        }
      }, {
        key: "restoreClient",
        value: function restoreClient(id) {
          var _this59 = this;

          return this.api.post('client:restore', id).then(function (res) {
            var i = _this59.clientsTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this59.clientsTrash.splice(i, 1);

            _this59.clientTrashSubject.next(_this59.clientsTrash);

            _this59.clients.push(res);

            _this59.clientSubject.next(_this59.clients);
          });
        }
        /**
        * location
        */

      }, {
        key: "getLocations",
        value: function getLocations() {
          return this.locationSubject.asObservable();
        }
      }, {
        key: "getLocationsTrash",
        value: function getLocationsTrash() {
          return this.locationTrashSubject.asObservable();
        }
      }, {
        key: "getLocationTrash",
        value: function getLocationTrash(id) {
          return this.locationsTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getLocation",
        value: function getLocation(id) {
          return this.locations.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getLocationProduits",
        value: function getLocationProduits(id) {
          return this.api.post('location:produits', id).then(function (res) {
            return res;
          });
        }
      }, {
        key: "addLocation",
        value: function addLocation(data) {
          var _this60 = this;

          return this.api.post('location:add', data).then(function (res) {
            _this60.locations.push(res);

            _this60.locationSubject.next(_this60.locations);
          });
        }
      }, {
        key: "editLocation",
        value: function editLocation(data) {
          var _this61 = this;

          return this.api.post('location:edit', data).then(function (res) {
            var i = _this61.locations.findIndex(function (item) {
              return item.id === res.id;
            });

            _this61.locations[i] = res;

            _this61.locationSubject.next(_this61.locations);
          });
        }
      }, {
        key: "deleteLocation",
        value: function deleteLocation(id) {
          var _this62 = this;

          return this.api.post('location:delete', id).then(function (res) {
            var i = _this62.locations.findIndex(function (item) {
              return item.id === res.id;
            });

            _this62.locations.splice(i, 1);

            _this62.locationSubject.next(_this62.locations);

            _this62.locationsTrash.push(res);

            _this62.locationTrashSubject.next(_this62.locationsTrash);
          });
        }
      }, {
        key: "restoreLocation",
        value: function restoreLocation(id) {
          var _this63 = this;

          return this.api.post('location:restore', id).then(function (res) {
            var i = _this63.locationsTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this63.locationsTrash.splice(i, 1);

            _this63.locationTrashSubject.next(_this63.locationsTrash);

            _this63.locations.push(res);

            _this63.locationSubject.next(_this63.locations);
          });
        }
      }]);

      return LocationService;
    }();

    LocationService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], LocationService);
    /***/
  },

  /***/
  "./src/app/services/params.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/params.service.ts ***!
    \********************************************/

  /*! exports provided: ParamsService */

  /***/
  function srcAppServicesParamsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParamsService", function () {
      return ParamsService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var ParamsService =
    /*#__PURE__*/
    function () {
      function ParamsService(api) {
        var _this64 = this;

        _classCallCheck(this, ParamsService);

        this.api = api;
        this.controlSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.controlTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.proprieteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.proprieteTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.api.post('control:all', null).then(function (res) {
          _this64.controls = res;

          _this64.controlSubject.next(_this64.controls);
        });
        this.api.post('control:trash', null).then(function (res) {
          _this64.controlsTrash = res;

          _this64.controlTrashSubject.next(_this64.controlsTrash);
        });
        this.api.post('propriete:all', null).then(function (res) {
          _this64.proprietes = res;

          _this64.proprieteSubject.next(_this64.proprietes);
        });
        this.api.post('propriete:trash', null).then(function (res) {
          _this64.proprietesTrash = res;

          _this64.proprieteTrashSubject.next(_this64.proprietesTrash);
        });
        this.api.getStreamData().subscribe(function (res) {
          if (res.operation.model === "control") {
            if (res.operation.typeOperation === 'add') {
              _this64.controls.push(res.data);

              _this64.controlSubject.next(_this64.controls);
            } else if (res.operation.typeOperation === 'edit') {
              var i = _this64.controls.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this64.controls[i] = res.data;

              _this64.controlSubject.next(_this64.controls);
            } else if (res.operation.typeOperation === 'delete') {
              var _i21 = _this64.controls.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this64.controls.splice(_i21, 1);

              _this64.controlSubject.next(_this64.controls);

              _this64.controlsTrash.push(res.data);

              _this64.controlTrashSubject.next(_this64.controlsTrash);

              _this64.controlSubject.next(_this64.controls);
            } else if (res.operation.typeOperation === 'restore') {
              var _i22 = _this64.controlsTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this64.controlsTrash.splice(_i22, 1);

              _this64.controlTrashSubject.next(_this64.controlsTrash);

              _this64.controls.push(res.data);

              _this64.controlSubject.next(_this64.controls);
            }
          } else if (res.operation.model === "propriete") {
            if (res.operation.typeOperation === 'add') {
              _this64.proprietes.push(res.data);

              _this64.proprieteSubject.next(_this64.proprietes);
            } else if (res.operation.typeOperation === 'edit') {
              var _i23 = _this64.proprietes.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this64.proprietes[_i23] = res.data;

              _this64.proprieteSubject.next(_this64.proprietes);
            } else if (res.operation.typeOperation === 'delete') {
              var _i24 = _this64.proprietes.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this64.proprietes.splice(_i24, 1);

              _this64.proprieteSubject.next(_this64.proprietes);

              _this64.proprietesTrash.push(res.data);

              _this64.proprieteTrashSubject.next(_this64.proprietesTrash);

              _this64.proprieteSubject.next(_this64.proprietes);
            } else if (res.operation.typeOperation === 'restore') {
              var _i25 = _this64.proprietesTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this64.proprietesTrash.splice(_i25, 1);

              _this64.proprieteTrashSubject.next(_this64.proprietesTrash);

              _this64.proprietes.push(res.data);

              _this64.proprieteSubject.next(_this64.proprietes);
            }
          }
        });
      }
      /**
       * Control
       */


      _createClass(ParamsService, [{
        key: "getUserControls",
        value: function getUserControls(id) {
          return this.api.post('control:user', id).then(function (res) {
            console.log(res);
            return res;
          });
        }
      }, {
        key: "saveUserControls",
        value: function saveUserControls(data) {
          return this.api.post('control:save', data).then(function (res) {
            return res;
          });
        }
      }, {
        key: "getControls",
        value: function getControls() {
          return this.controlSubject.asObservable();
        }
      }, {
        key: "getControlsTrash",
        value: function getControlsTrash() {
          return this.controlTrashSubject.asObservable();
        }
      }, {
        key: "getControlTrash",
        value: function getControlTrash(id) {
          return this.controlsTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getControl",
        value: function getControl(id) {
          return this.controls.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addControl",
        value: function addControl(data) {
          var _this65 = this;

          return this.api.post('control:add', data).then(function (res) {
            _this65.controls.push(res);

            _this65.controlSubject.next(_this65.controls);
          });
        }
      }, {
        key: "editControl",
        value: function editControl(data) {
          var _this66 = this;

          return this.api.post('control:edit', data).then(function (res) {
            var i = _this66.controls.findIndex(function (item) {
              return item.id === res.id;
            });

            _this66.controls[i] = res;

            _this66.controlSubject.next(_this66.controls);
          });
        }
      }, {
        key: "deleteControl",
        value: function deleteControl(id) {
          var _this67 = this;

          return this.api.post('control:delete', id).then(function (res) {
            var i = _this67.controls.findIndex(function (item) {
              return item.id === res.id;
            });

            _this67.controls.splice(i, 1);

            _this67.controlSubject.next(_this67.controls);

            _this67.controlsTrash.push(res);

            _this67.controlTrashSubject.next(_this67.controlsTrash);
          });
        }
      }, {
        key: "restoreControl",
        value: function restoreControl(id) {
          var _this68 = this;

          return this.api.post('control:restore', id).then(function (res) {
            var i = _this68.controlsTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this68.controlsTrash.splice(i, 1);

            _this68.controlTrashSubject.next(_this68.controlsTrash);

            _this68.controls.push(res);

            _this68.controlSubject.next(_this68.controls);
          });
        }
        /**
        * Propriete
        */

      }, {
        key: "getChambreProprietes",
        value: function getChambreProprietes(id) {
          return this.api.post('propriete:chambre', id).then(function (res) {
            console.log(res);
            return res;
          });
        }
      }, {
        key: "saveChambreProprietes",
        value: function saveChambreProprietes(data) {
          return this.api.post('propriete:save', data).then(function (res) {
            return res;
          });
        }
      }, {
        key: "getProprietes",
        value: function getProprietes() {
          return this.proprieteSubject.asObservable();
        }
      }, {
        key: "getProprietesTrash",
        value: function getProprietesTrash() {
          return this.proprieteTrashSubject.asObservable();
        }
      }, {
        key: "getProprieteTrash",
        value: function getProprieteTrash(id) {
          return this.proprietesTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getPropriete",
        value: function getPropriete(id) {
          return this.proprietes.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addPropriete",
        value: function addPropriete(data) {
          var _this69 = this;

          return this.api.post('propriete:add', data).then(function (res) {
            _this69.proprietes.push(res);

            _this69.proprieteSubject.next(_this69.proprietes);
          });
        }
      }, {
        key: "editPropriete",
        value: function editPropriete(data) {
          var _this70 = this;

          return this.api.post('propriete:edit', data).then(function (res) {
            var i = _this70.proprietes.findIndex(function (item) {
              return item.id === res.id;
            });

            _this70.proprietes[i] = res;

            _this70.proprieteSubject.next(_this70.proprietes);
          });
        }
      }, {
        key: "deletePropriete",
        value: function deletePropriete(id) {
          var _this71 = this;

          return this.api.post('propriete:delete', id).then(function (res) {
            var i = _this71.proprietes.findIndex(function (item) {
              return item.id === res.id;
            });

            _this71.proprietes.splice(i, 1);

            _this71.proprieteSubject.next(_this71.proprietes);

            _this71.proprietesTrash.push(res);

            _this71.proprieteTrashSubject.next(_this71.proprietesTrash);
          });
        }
      }, {
        key: "restorePropriete",
        value: function restorePropriete(id) {
          var _this72 = this;

          return this.api.post('propriete:restore', id).then(function (res) {
            var i = _this72.proprietesTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this72.proprietesTrash.splice(i, 1);

            _this72.proprieteTrashSubject.next(_this72.proprietesTrash);

            _this72.proprietes.push(res);

            _this72.proprieteSubject.next(_this72.proprietes);
          });
        }
      }]);

      return ParamsService;
    }();

    ParamsService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    ParamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ParamsService);
    /***/
  },

  /***/
  "./src/app/services/produit.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/produit.service.ts ***!
    \*********************************************/

  /*! exports provided: ProduitService */

  /***/
  function srcAppServicesProduitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProduitService", function () {
      return ProduitService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var ProduitService =
    /*#__PURE__*/
    function () {
      function ProduitService(api) {
        var _this73 = this;

        _classCallCheck(this, ProduitService);

        this.api = api;
        this.categorieSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.categorieTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.produitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.produitTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.intrantSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.intrantTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.api.post('categorie:all', null).then(function (res) {
          _this73.categories = res;

          _this73.categorieSubject.next(_this73.categories);
        });
        this.api.post('categorie:trash', null).then(function (res) {
          _this73.categoriesTrash = res;

          _this73.categorieTrashSubject.next(_this73.categoriesTrash);
        });
        this.api.post('produit:all', null).then(function (res) {
          _this73.produits = res;

          _this73.produitSubject.next(_this73.produits);
        });
        this.api.post('produit:trash', null).then(function (res) {
          _this73.produitsTrash = res;

          _this73.produitTrashSubject.next(_this73.produitsTrash);
        });
        this.api.post('intrant:all', null).then(function (res) {
          _this73.intrants = res;

          _this73.intrantSubject.next(_this73.intrants);
        });
        this.api.post('intrant:trash', null).then(function (res) {
          _this73.intrantsTrash = res;

          _this73.intrantTrashSubject.next(_this73.intrantsTrash);
        });
        this.api.getStreamData().subscribe(function (res) {
          if (res.operation.model === "Categorie") {
            if (res.operation.typeOperation === 'add') {
              _this73.categories.push(res.data);

              _this73.categorieSubject.next(_this73.categories);
            } else if (res.operation.typeOperation === 'edit') {
              var i = _this73.categories.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this73.categories[i] = res.data;

              _this73.categorieSubject.next(_this73.categories);
            } else if (res.operation.typeOperation === 'delete') {
              var _i26 = _this73.categories.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this73.categories.splice(_i26, 1);

              _this73.categorieSubject.next(_this73.categories);

              _this73.categoriesTrash.push(res.data);

              _this73.categorieTrashSubject.next(_this73.categoriesTrash);

              _this73.categorieSubject.next(_this73.categories);
            } else if (res.operation.typeOperation === 'restore') {
              var _i27 = _this73.categoriesTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this73.categoriesTrash.splice(_i27, 1);

              _this73.categorieTrashSubject.next(_this73.categoriesTrash);

              _this73.categories.push(res.data);

              _this73.categorieSubject.next(_this73.categories);
            }
          } else if (res.operation.model === "Produit") {
            if (res.operation.typeOperation === 'add') {
              _this73.produits.push(res.data);

              _this73.produitSubject.next(_this73.produits);
            } else if (res.operation.typeOperation === 'edit') {
              var _i28 = _this73.produits.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this73.produits[_i28] = res.data;

              _this73.produitSubject.next(_this73.produits);
            } else if (res.operation.typeOperation === 'delete') {
              var _i29 = _this73.produits.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this73.produits.splice(_i29, 1);

              _this73.produitSubject.next(_this73.produits);

              _this73.produitsTrash.push(res.data);

              _this73.produitTrashSubject.next(_this73.produitsTrash);

              _this73.produitSubject.next(_this73.produits);
            } else if (res.operation.typeOperation === 'restore') {
              var _i30 = _this73.produitsTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this73.produitsTrash.splice(_i30, 1);

              _this73.produitTrashSubject.next(_this73.produitsTrash);

              _this73.produits.push(res.data);

              _this73.produitSubject.next(_this73.produits);
            }
          } else if (res.operation.model === "Intrant") {
            if (res.operation.typeOperation === 'add') {
              _this73.intrants.push(res.data);

              _this73.intrantSubject.next(_this73.intrants);
            } else if (res.operation.typeOperation === 'edit') {
              var _i31 = _this73.intrants.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this73.intrants[_i31] = res.data;

              _this73.intrantSubject.next(_this73.intrants);
            } else if (res.operation.typeOperation === 'delete') {
              var _i32 = _this73.intrants.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this73.intrants.splice(_i32, 1);

              _this73.intrantSubject.next(_this73.intrants);

              _this73.intrantsTrash.push(res.data);

              _this73.intrantTrashSubject.next(_this73.intrantsTrash);

              _this73.intrantSubject.next(_this73.intrants);
            } else if (res.operation.typeOperation === 'restore') {
              var _i33 = _this73.intrantsTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this73.intrantsTrash.splice(_i33, 1);

              _this73.intrantTrashSubject.next(_this73.intrantsTrash);

              _this73.intrants.push(res.data);

              _this73.intrantSubject.next(_this73.intrants);
            }
          }
        });
      }
      /**
       * categorie
       */


      _createClass(ProduitService, [{
        key: "getCategories",
        value: function getCategories() {
          return this.categorieSubject.asObservable();
        }
      }, {
        key: "getCategoriesTrash",
        value: function getCategoriesTrash() {
          return this.categorieTrashSubject.asObservable();
        }
      }, {
        key: "getCategorieTrash",
        value: function getCategorieTrash(id) {
          return this.categoriesTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getCategorie",
        value: function getCategorie(id) {
          return this.categories.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addCategorie",
        value: function addCategorie(data) {
          var _this74 = this;

          return this.api.post('categorie:add', data).then(function (res) {
            _this74.categories.push(res);

            _this74.categorieSubject.next(_this74.categories);
          });
        }
      }, {
        key: "editCategorie",
        value: function editCategorie(data) {
          var _this75 = this;

          return this.api.post('categorie:edit', data).then(function (res) {
            var i = _this75.categories.findIndex(function (item) {
              return item.id === res.id;
            });

            _this75.categories[i] = res;

            _this75.categorieSubject.next(_this75.categories);
          });
        }
      }, {
        key: "deleteCategorie",
        value: function deleteCategorie(id) {
          var _this76 = this;

          return this.api.post('categorie:delete', id).then(function (res) {
            var i = _this76.categories.findIndex(function (item) {
              return item.id === res.id;
            });

            _this76.categories.splice(i, 1);

            _this76.categorieSubject.next(_this76.categories);

            _this76.categoriesTrash.push(res);

            _this76.categorieTrashSubject.next(_this76.categoriesTrash);
          });
        }
      }, {
        key: "restoreCategorie",
        value: function restoreCategorie(id) {
          var _this77 = this;

          return this.api.post('categorie:restore', id).then(function (res) {
            var i = _this77.categoriesTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this77.categoriesTrash.splice(i, 1);

            _this77.categorieTrashSubject.next(_this77.categoriesTrash);

            _this77.categories.push(res);

            _this77.categorieSubject.next(_this77.categories);
          });
        }
        /**
        * produit
        */

      }, {
        key: "getProduits",
        value: function getProduits() {
          return this.produitSubject.asObservable();
        }
      }, {
        key: "getProduitsTrash",
        value: function getProduitsTrash() {
          return this.produitTrashSubject.asObservable();
        }
      }, {
        key: "getProduitTrash",
        value: function getProduitTrash(id) {
          return this.produitsTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getProduit",
        value: function getProduit(id) {
          return this.produits.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addProduit",
        value: function addProduit(data) {
          var _this78 = this;

          return this.api.post('produit:add', data).then(function (res) {
            _this78.produits.push(res);

            _this78.produitSubject.next(_this78.produits);
          });
        }
      }, {
        key: "editProduit",
        value: function editProduit(data) {
          var _this79 = this;

          return this.api.post('produit:edit', data).then(function (res) {
            var i = _this79.produits.findIndex(function (item) {
              return item.id === res.id;
            });

            _this79.produits[i] = res;

            _this79.produitSubject.next(_this79.produits);
          });
        }
      }, {
        key: "deleteProduit",
        value: function deleteProduit(id) {
          var _this80 = this;

          return this.api.post('produit:delete', id).then(function (res) {
            var i = _this80.produits.findIndex(function (item) {
              return item.id === res.id;
            });

            _this80.produits.splice(i, 1);

            _this80.produitSubject.next(_this80.produits);

            _this80.produitsTrash.push(res);

            _this80.produitTrashSubject.next(_this80.produitsTrash);
          });
        }
      }, {
        key: "restoreProduit",
        value: function restoreProduit(id) {
          var _this81 = this;

          return this.api.post('produit:restore', id).then(function (res) {
            var i = _this81.produitsTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this81.produitsTrash.splice(i, 1);

            _this81.produitTrashSubject.next(_this81.produitsTrash);

            _this81.produits.push(res);

            _this81.produitSubject.next(_this81.produits);
          });
        }
        /**
        * intrant
        */

      }, {
        key: "getIntrants",
        value: function getIntrants() {
          return this.intrantSubject.asObservable();
        }
      }, {
        key: "getIntrantsTrash",
        value: function getIntrantsTrash() {
          return this.intrantTrashSubject.asObservable();
        }
      }, {
        key: "getIntrantTrash",
        value: function getIntrantTrash(id) {
          return this.intrantsTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getIntrant",
        value: function getIntrant(id) {
          return this.intrants.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addIntrant",
        value: function addIntrant(data) {
          var _this82 = this;

          return this.api.post('intrant:add', data).then(function (res) {
            _this82.intrants.push(res);

            _this82.intrantSubject.next(_this82.intrants);
          });
        }
      }, {
        key: "editIntrant",
        value: function editIntrant(data) {
          var _this83 = this;

          return this.api.post('intrant:edit', data).then(function (res) {
            var i = _this83.intrants.findIndex(function (item) {
              return item.id === res.id;
            });

            _this83.intrants[i] = res;

            _this83.intrantSubject.next(_this83.intrants);
          });
        }
      }, {
        key: "deleteIntrant",
        value: function deleteIntrant(id) {
          var _this84 = this;

          return this.api.post('intrant:delete', id).then(function (res) {
            var i = _this84.intrants.findIndex(function (item) {
              return item.id === res.id;
            });

            _this84.intrants.splice(i, 1);

            _this84.intrantSubject.next(_this84.intrants);

            _this84.intrantsTrash.push(res);

            _this84.intrantTrashSubject.next(_this84.intrantsTrash);
          });
        }
      }, {
        key: "restoreIntrant",
        value: function restoreIntrant(id) {
          var _this85 = this;

          return this.api.post('intrant:restore', id).then(function (res) {
            var i = _this85.intrantsTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this85.intrantsTrash.splice(i, 1);

            _this85.intrantTrashSubject.next(_this85.intrantsTrash);

            _this85.intrants.push(res);

            _this85.intrantSubject.next(_this85.intrants);
          });
        }
      }]);

      return ProduitService;
    }();

    ProduitService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    ProduitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ProduitService);
    /***/
  },

  /***/
  "./src/app/services/sortie.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/sortie.service.ts ***!
    \********************************************/

  /*! exports provided: SortieService */

  /***/
  function srcAppServicesSortieServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortieService", function () {
      return SortieService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var SortieService =
    /*#__PURE__*/
    function () {
      function SortieService(api) {
        var _this86 = this;

        _classCallCheck(this, SortieService);

        this.api = api;
        this.sorties = [];
        this.sortiesTrash = [];
        this.sortieSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.sortieTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.lastId = 0;
        this.lastTrashId = 0;
        this.getServerSorties();
        this.getSeverSortiesTrash();
        this.api.getStreamData().subscribe(function (res) {
          if (res.operation.model === "Sortie") {
            if (res.operation.typeOperation === 'add') {
              _this86.sorties.push(res.data);

              _this86.sortieSubject.next(_this86.sorties);
            } else if (res.operation.typeOperation === 'edit') {
              var i = _this86.sorties.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this86.sorties[i] = res.data;

              _this86.sortieSubject.next(_this86.sorties);
            } else if (res.operation.typeOperation === 'delete') {
              var _i34 = _this86.sorties.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this86.sorties.splice(_i34, 1);

              _this86.sortieSubject.next(_this86.sorties);

              _this86.sortiesTrash.push(res.data);

              _this86.sortieTrashSubject.next(_this86.sortiesTrash);

              _this86.sortieSubject.next(_this86.sorties);
            } else if (res.operation.typeOperation === 'restore') {
              var _i35 = _this86.sortiesTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this86.sortiesTrash.splice(_i35, 1);

              _this86.sortieTrashSubject.next(_this86.sortiesTrash);

              _this86.sorties.push(res.data);

              _this86.sortieSubject.next(_this86.sorties);
            }
          }
        });
      }

      _createClass(SortieService, [{
        key: "getSorties",
        value: function getSorties() {
          return this.sortieSubject.asObservable();
        }
      }, {
        key: "getSortie",
        value: function getSortie(id) {
          return this.sorties.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getSortieProduits",
        value: function getSortieProduits(id) {
          return this.api.post('sortie:produits', id).then(function (res) {
            return res;
          });
        }
      }, {
        key: "getSortiesTrash",
        value: function getSortiesTrash() {
          return this.sortieTrashSubject.asObservable();
        }
      }, {
        key: "addSortie",
        value: function addSortie(data) {
          var _this87 = this;

          return this.api.post('sortie:add', data).then(function (res) {
            _this87.sorties.unshift(res);

            _this87.sortieSubject.next(_this87.sorties);
          });
        }
      }, {
        key: "editSortie",
        value: function editSortie(data) {
          var _this88 = this;

          return this.api.post('sortie:edit', data).then(function (res) {
            var i = _this88.sorties.findIndex(function (item) {
              return item.id === res.id;
            });

            _this88.sorties[i] = res;

            _this88.sortieSubject.next(_this88.sorties);
          });
        }
      }, {
        key: "deleteSortie",
        value: function deleteSortie(id) {
          var _this89 = this;

          return this.api.post('sortie:delete', id).then(function (res) {
            var i = _this89.sorties.findIndex(function (item) {
              return item.id === res.id;
            });

            _this89.sorties.splice(i, 1);

            _this89.sortieSubject.next(_this89.sorties);

            _this89.sortiesTrash.push(res);

            _this89.sortieTrashSubject.next(_this89.sortiesTrash);
          });
        }
      }, {
        key: "restoreSortie",
        value: function restoreSortie(id) {
          var _this90 = this;

          return this.api.post('sortie:restore', id).then(function (res) {
            var i = _this90.sortiesTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this90.sortiesTrash.splice(i, 1);

            _this90.sortieTrashSubject.next(_this90.sortiesTrash);

            _this90.sorties.push(res);

            _this90.sortieSubject.next(_this90.sorties);
          });
        }
      }, {
        key: "getServerSorties",
        value: function getServerSorties() {
          var _this91 = this;

          this.api.post('sortie:all', this.lastId).then(function (res) {
            res.forEach(function (item) {
              return _this91.sorties.push(item);
            });
            _this91.lastId += res.length;

            _this91.sortieSubject.next(_this91.sorties);
          });
        }
      }, {
        key: "getSeverSortiesTrash",
        value: function getSeverSortiesTrash() {
          var _this92 = this;

          this.api.post('sortie:trash', this.lastTrashId).then(function (res) {
            res.forEach(function (item) {
              return _this92.sorties.push(item);
            });
            _this92.lastTrashId += res.length;

            _this92.sortieTrashSubject.next(_this92.sortiesTrash);
          });
        }
      }]);

      return SortieService;
    }();

    SortieService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    SortieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], SortieService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(api) {
        var _this93 = this;

        _classCallCheck(this, UserService);

        this.api = api;
        this.fonctionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.fonctionTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.userTrashSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.api.post('fonction:all', null).then(function (res) {
          _this93.fonctions = res;

          _this93.fonctionSubject.next(_this93.fonctions);
        });
        this.api.post('fonction:trash', null).then(function (res) {
          _this93.fonctionsTrash = res;

          _this93.fonctionTrashSubject.next(_this93.fonctionsTrash);
        });
        this.api.post('user:all', null).then(function (res) {
          _this93.users = res;

          _this93.userSubject.next(_this93.users);
        });
        this.api.post('user:trash', null).then(function (res) {
          _this93.usersTrash = res;

          _this93.userTrashSubject.next(_this93.usersTrash);
        });
        this.api.getStreamData().subscribe(function (res) {
          if (res.operation.model === "Fonction") {
            if (res.operation.typeOperation === 'add') {
              _this93.fonctions.push(res.data);

              _this93.fonctionSubject.next(_this93.fonctions);
            } else if (res.operation.typeOperation === 'edit') {
              var i = _this93.fonctions.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this93.fonctions[i] = res.data;

              _this93.fonctionSubject.next(_this93.fonctions);
            } else if (res.operation.typeOperation === 'delete') {
              var _i36 = _this93.fonctions.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this93.fonctions.splice(_i36, 1);

              _this93.fonctionSubject.next(_this93.fonctions);

              _this93.fonctionsTrash.push(res.data);

              _this93.fonctionTrashSubject.next(_this93.fonctionsTrash);

              _this93.fonctionSubject.next(_this93.fonctions);
            } else if (res.operation.typeOperation === 'restore') {
              var _i37 = _this93.fonctionsTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this93.fonctionsTrash.splice(_i37, 1);

              _this93.fonctionTrashSubject.next(_this93.fonctionsTrash);

              _this93.fonctions.push(res.data);

              _this93.fonctionSubject.next(_this93.fonctions);
            }
          } else if (res.operation.model === "User") {
            if (res.operation.typeOperation === 'add') {
              _this93.users.push(res.data);

              _this93.userSubject.next(_this93.users);
            } else if (res.operation.typeOperation === 'edit') {
              var _i38 = _this93.users.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this93.users[_i38] = res.data;

              _this93.userSubject.next(_this93.users);
            } else if (res.operation.typeOperation === 'delete') {
              var _i39 = _this93.users.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this93.users.splice(_i39, 1);

              _this93.userSubject.next(_this93.users);

              _this93.usersTrash.push(res.data);

              _this93.userTrashSubject.next(_this93.usersTrash);

              _this93.userSubject.next(_this93.users);
            } else if (res.operation.typeOperation === 'restore') {
              var _i40 = _this93.usersTrash.findIndex(function (item) {
                return item.id === res.data.id;
              });

              _this93.usersTrash.splice(_i40, 1);

              _this93.userTrashSubject.next(_this93.usersTrash);

              _this93.users.push(res.data);

              _this93.userSubject.next(_this93.users);
            }
          }
        });
      }
      /**
       * Fonction
       */


      _createClass(UserService, [{
        key: "getFonctions",
        value: function getFonctions() {
          return this.fonctionSubject.asObservable();
        }
      }, {
        key: "getFonctionsTrash",
        value: function getFonctionsTrash() {
          return this.fonctionTrashSubject.asObservable();
        }
      }, {
        key: "getFonctionTrash",
        value: function getFonctionTrash(id) {
          return this.fonctionsTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getFonction",
        value: function getFonction(id) {
          return this.fonctions.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addFonction",
        value: function addFonction(data) {
          var _this94 = this;

          return this.api.post('fonction:add', data).then(function (res) {
            _this94.fonctions.push(res);

            _this94.fonctionSubject.next(_this94.fonctions);
          });
        }
      }, {
        key: "editFonction",
        value: function editFonction(data) {
          var _this95 = this;

          return this.api.post('fonction:edit', data).then(function (res) {
            var i = _this95.fonctions.findIndex(function (item) {
              return item.id === res.id;
            });

            _this95.fonctions[i] = res;

            _this95.fonctionSubject.next(_this95.fonctions);
          });
        }
      }, {
        key: "deleteFonction",
        value: function deleteFonction(id) {
          var _this96 = this;

          return this.api.post('fonction:delete', id).then(function (res) {
            var i = _this96.fonctions.findIndex(function (item) {
              return item.id === res.id;
            });

            _this96.fonctions.splice(i, 1);

            _this96.fonctionSubject.next(_this96.fonctions);

            _this96.fonctionsTrash.push(res);

            _this96.fonctionTrashSubject.next(_this96.fonctionsTrash);
          });
        }
      }, {
        key: "restoreFonction",
        value: function restoreFonction(id) {
          var _this97 = this;

          return this.api.post('fonction:restore', id).then(function (res) {
            var i = _this97.fonctionsTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this97.fonctionsTrash.splice(i, 1);

            _this97.fonctionTrashSubject.next(_this97.fonctionsTrash);

            _this97.fonctions.push(res);

            _this97.fonctionSubject.next(_this97.fonctions);
          });
        }
        /**
        * user
        */

      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.userSubject.asObservable();
        }
      }, {
        key: "getUsersTrash",
        value: function getUsersTrash() {
          return this.userTrashSubject.asObservable();
        }
      }, {
        key: "getUserTrash",
        value: function getUserTrash(id) {
          return this.usersTrash.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.users.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "addUser",
        value: function addUser(data) {
          var _this98 = this;

          return this.api.post('user:add', data).then(function (res) {
            _this98.users.push(res);

            _this98.userSubject.next(_this98.users);
          });
        }
      }, {
        key: "editUser",
        value: function editUser(data) {
          var _this99 = this;

          return this.api.post('user:edit', data).then(function (res) {
            var i = _this99.users.findIndex(function (item) {
              return item.id === res.id;
            });

            _this99.users[i] = res;

            _this99.userSubject.next(_this99.users);
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          var _this100 = this;

          return this.api.post('user:delete', id).then(function (res) {
            var i = _this100.users.findIndex(function (item) {
              return item.id === res.id;
            });

            _this100.users.splice(i, 1);

            _this100.userSubject.next(_this100.users);

            _this100.usersTrash.push(res);

            _this100.userTrashSubject.next(_this100.usersTrash);
          });
        }
      }, {
        key: "restoreUser",
        value: function restoreUser(id) {
          var _this101 = this;

          return this.api.post('user:restore', id).then(function (res) {
            var i = _this101.usersTrash.findIndex(function (item) {
              return item.id === res.id;
            });

            _this101.usersTrash.splice(i, 1);

            _this101.userTrashSubject.next(_this101.usersTrash);

            _this101.users.push(res);

            _this101.userSubject.next(_this101.users);
          });
        }
      }, {
        key: "getUserActivities",
        value: function getUserActivities(userId, lastId) {
          return this.api.post('user:activites', {
            userId: userId,
            lastId: lastId
          }).then(function (res) {
            return res;
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Aroam\Desktop\hotel-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map