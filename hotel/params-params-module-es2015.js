(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["params-params-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/params/params.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/params/params.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n    <ion-tab-bar slot=\"top\">\r\n        <ion-tab-button tab=\"controls\" expand=\"block\">\r\n            <ion-label>Controls</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"proprietes\" expand=\"block\">\r\n            <ion-label>Proprietes</ion-label>\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/private/params/params.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/private/params/params.module.ts ***!
  \*******************************************************/
/*! exports provided: ParamsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsPageModule", function() { return ParamsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _params_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./params.page */ "./src/app/pages/private/params/params.page.ts");







const routes = [
    {
        path: '',
        component: _params_page__WEBPACK_IMPORTED_MODULE_6__["ParamsPage"],
        children: [
            { path: '', redirectTo: 'controls', pathMatch: 'full' },
            { path: 'proprietes', loadChildren: './propriete/propriete.module#ProprietePageModule' },
            { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
            { path: 'controls', loadChildren: './controls/controls.module#ControlsPageModule' },
        ]
    }
];
let ParamsPageModule = class ParamsPageModule {
};
ParamsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_params_page__WEBPACK_IMPORTED_MODULE_6__["ParamsPage"]]
    })
], ParamsPageModule);



/***/ }),

/***/ "./src/app/pages/private/params/params.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/private/params/params.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvcGFyYW1zL3BhcmFtcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/private/params/params.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/private/params/params.page.ts ***!
  \*****************************************************/
/*! exports provided: ParamsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsPage", function() { return ParamsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ParamsPage = class ParamsPage {
    constructor() { }
    ngOnInit() {
    }
};
ParamsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-params',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./params.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/params/params.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./params.page.scss */ "./src/app/pages/private/params/params.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ParamsPage);



/***/ })

}]);
//# sourceMappingURL=params-params-module-es2015.js.map