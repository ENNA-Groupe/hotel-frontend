(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-public-public-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/public/public.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/public/public.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background\">\n  <ion-row id=\"content-top\">\n    <ion-col  size=\"12\">\n   <h1 class=\"text-center primary title1\">AUBERGE DES AMIS</h1>\n    </ion-col>\n  </ion-row>\n  <ion-row id=\"content-bottom\" class=\"ion-padding\">\n    <ion-col size-md=\"4\" offset-md=\"4\" size=\"12\">\n      <ion-router-outlet></ion-router-outlet>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/public/public.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/public/public.module.ts ***!
  \***********************************************/
/*! exports provided: PublicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPageModule", function() { return PublicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _public_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public.page */ "./src/app/pages/public/public.page.ts");







const routes = [
    {
        path: '',
        component: _public_page__WEBPACK_IMPORTED_MODULE_6__["PublicPage"],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login',
                loadChildren: './login/login.module#LoginPageModule'
            },
            { path: 'change-password',
                loadChildren: './change-password/change-password.module#ChangePasswordPageModule'
            }
        ]
    }
];
let PublicPageModule = class PublicPageModule {
};
PublicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_public_page__WEBPACK_IMPORTED_MODULE_6__["PublicPage"]]
    })
], PublicPageModule);



/***/ }),

/***/ "./src/app/pages/public/public.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/public/public.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --background: url('bg.jpg') 0 0/100% 100% no-repeat;\n}\n\n#content-top {\n  height: 30%;\n}\n\n#content-bottom {\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL0M6XFxVc2Vyc1xcQXJvYW1cXERlc2t0b3BcXGhvdGVsLWZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xccHVibGljXFxwdWJsaWMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wdWJsaWMvcHVibGljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1EQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvcHVibGljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JnLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbiNjb250ZW50LXRvcHtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4jY29udGVudC1ib3R0b217XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxufSIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JnLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbiNjb250ZW50LXRvcCB7XG4gIGhlaWdodDogMzAlO1xufVxuXG4jY29udGVudC1ib3R0b20ge1xuICBoZWlnaHQ6IDcwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/public/public.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/public/public.page.ts ***!
  \*********************************************/
/*! exports provided: PublicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPage", function() { return PublicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PublicPage = class PublicPage {
    constructor() { }
    ngOnInit() {
    }
};
PublicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-public',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./public.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/public/public.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./public.page.scss */ "./src/app/pages/public/public.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PublicPage);



/***/ })

}]);
//# sourceMappingURL=pages-public-public-module-es2015.js.map