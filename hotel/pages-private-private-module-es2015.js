(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-private-private-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/private.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/private.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col>\n        <ion-title class=\"primary\">AUBERGE DES AMIS</ion-title>\n      </ion-col>\n      <ion-col>\n        <ion-input type=\"text\" *ngIf=\"isSearching\" placeholder=\"Recherche...\" [(ngModel)]=\"data.searchValue\"\n          [ngModelOptions]=\"{standalone: true}\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!isSearching\" (click)=\"onSearch(true)\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"isSearching\" (click)=\"onSearch(false)\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"onClick()\">\n        <ion-badge color=\"primary\" mode=\"ios\">42</ion-badge>\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-app>\n    <ion-split-pane contentId=\"main-content\">\n      <ion-menu contentId=\"main-content\">\n        <ion-content class=\"background\">\n          <ion-list lines=\"none\" id=\"list-top\">\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <img [src]=\"user.photo\" />\n              </ion-avatar>\n              <ion-label color=\"warning\">{{user.nom}} {{user.prenom}}</ion-label>\n            </ion-item>\n          </ion-list>\n\n          <ion-list lines=\"none\" id=\"list-middle\">\n            <ion-menu-toggle autoHide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n              <ion-item [routerLink]=\"p.url\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\n                <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n                <ion-label>\n                  {{p.title}}\n                </ion-label>\n              </ion-item>\n\n            </ion-menu-toggle>\n          </ion-list>\n\n          <ion-list lines=\"none\" id=\"list-bottom\">\n            <ion-menu-toggle autoHide=\"false\">\n              <ion-item button (click)=\"onLogout()\" detail=\"false\">\n                <ion-icon slot=\"start\" color=\"danger\" name=\"log-out\"></ion-icon>\n                <ion-label color=\"danger\">\n                  Deconnexion\n                </ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n\n          </ion-list>\n        </ion-content>\n      </ion-menu>\n\n      <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n    </ion-split-pane>\n\n  </ion-app>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/private/private.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/private/private.module.ts ***!
  \*************************************************/
/*! exports provided: PrivatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePageModule", function() { return PrivatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _private_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private.page */ "./src/app/pages/private/private.page.ts");







const routes = [
    {
        path: '',
        component: _private_page__WEBPACK_IMPORTED_MODULE_6__["PrivatePage"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
            { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
            { path: 'locations', loadChildren: './location/location.module#LocationPageModule' },
            { path: 'chambres', loadChildren: './chambres/chambres.module#ChambresPageModule' },
            { path: 'intrants', loadChildren: './intrants/intrants.module#IntrantsPageModule' },
            { path: 'params', loadChildren: './params/params.module#ParamsPageModule' },
            { path: 'produits', loadChildren: './produits/produits.module#ProduitsPageModule' },
            { path: 'consommations', loadChildren: './consommations/consommations.module#ConsommationsPageModule' },
            { path: 'entrees', loadChildren: './entrees/entrees.module#EntreesPageModule' },
            { path: 'fournisseurs', loadChildren: './fournisseurs/fournisseurs.module#FournisseursPageModule' },
            { path: 'sorties', loadChildren: './sorties/sorties.module#SortiesPageModule' },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsPageModule' },
            { path: 'stats', loadChildren: './stats/stats.module#StatsPageModule' },
        ]
    }
];
let PrivatePageModule = class PrivatePageModule {
};
PrivatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_private_page__WEBPACK_IMPORTED_MODULE_6__["PrivatePage"]]
    })
], PrivatePageModule);



/***/ }),

/***/ "./src/app/pages/private/private.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/private/private.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".split-pane-md.split-pane-visible > .split-pane-side {\n  min-width: 270px;\n  max-width: 20% !important;\n}\n\nion-content.background {\n  --background: url('bg.jpg') 0 0/100% 100% no-repeat !important;\n}\n\nion-item {\n  --background: transparent !important;\n}\n\n#list-top {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n#list-bottom {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nion-input {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9DOlxcVXNlcnNcXEFyb2FtXFxEZXNrdG9wXFxob3RlbC9zcmNcXGFwcFxccGFnZXNcXHByaXZhdGVcXHByaXZhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcml2YXRlL3ByaXZhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREtBO0VBQ0ksOERBQUE7QUNGSjs7QURLQTtFQUNJLG9DQUFBO0FDRko7O0FES0E7RUFFSSwyQ0FBQTtBQ0hKOztBRFVBO0VBQ0ksd0NBQUE7QUNQSjs7QURVQTtFQUNJLFVBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvcHJpdmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BsaXQtcGFuZS1tZC5zcGxpdC1wYW5lLXZpc2libGU+LnNwbGl0LXBhbmUtc2lkZSB7XHJcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyKTtcclxuICAgIC8vIGJvcmRlci1sZWZ0OiAwO1xyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2xpc3QtdG9we1xyXG4gICAgLy8gaGVpZ2h0OiAyMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAgMXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMSk7XHJcbn1cclxuXHJcbi8vICNsaXN0LW1pZGRsZXtcclxuLy8gICAgIGhlaWdodDogNjAlO1xyXG4vLyB9XHJcblxyXG4jbGlzdC1ib3R0b217XHJcbiAgICBib3JkZXItdG9wOiAgMXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMSk7XHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iLCIuc3BsaXQtcGFuZS1tZC5zcGxpdC1wYW5lLXZpc2libGUgPiAuc3BsaXQtcGFuZS1zaWRlIHtcbiAgbWluLXdpZHRoOiAyNzBweDtcbiAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuI2xpc3QtdG9wIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuI2xpc3QtYm90dG9tIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaW9uLWlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/private/private.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/private/private.page.ts ***!
  \***********************************************/
/*! exports provided: PrivatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePage", function() { return PrivatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PrivatePage = class PrivatePage {
    constructor(menu, data, auth, router) {
        this.menu = menu;
        this.data = data;
        this.auth = auth;
        this.router = router;
        this.isSearching = false;
        this.appPages = [
            {
                title: 'Dashboard',
                url: '/private/dashboard',
                icon: 'apps'
            },
            {
                title: 'Location',
                url: '/private/locations',
                icon: 'bed'
            },
            {
                title: 'Consommation',
                url: '/private/consommations',
                icon: 'beer'
            },
            {
                title: 'Chambres',
                url: '/private/chambres',
                icon: 'home'
            },
            {
                title: 'Produits',
                url: '/private/produits',
                icon: 'appstore'
            },
            {
                title: 'Intrants',
                url: '/private/intrants',
                icon: 'archive'
            },
            {
                title: 'Entrees',
                url: '/private/entrees',
                icon: 'return-left'
            },
            {
                title: 'Sorties',
                url: '/private/sorties',
                icon: 'return-right'
            },
            {
                title: 'Utilisateurs',
                url: '/private/users',
                icon: 'people'
            },
            {
                title: 'Clients',
                url: '/private/clients',
                icon: 'person'
            },
            {
                title: 'Fournisseurs',
                url: '/private/fournisseurs',
                icon: 'contact'
            },
            {
                title: 'Parametres',
                url: '/private/params',
                icon: 'cog'
            },
            {
                title: 'Stats',
                url: '/private/stats',
                icon: 'stats'
            }
        ];
        this.loggedIn = false;
        this.dark = false;
        this.user = { id: null, identifiant: '', password: '', nom: 'TEST', prenom: 'Test', photo: './assets/user.png', contact1: '90909090', contact2: '99009900', createdAt: '', deletedAt: '', updatedAt: '' };
    }
    ngOnInit() {
        this.userSub = this.data.getUser().subscribe(user => { if (user)
            this.user = user; });
    }
    onSearch(val) {
        this.data.searchValue = '';
        this.isSearching = val;
    }
    onLogout() {
        this.auth.logout().then(res => {
            if (res)
                this.router.navigate(['']);
        });
    }
};
PrivatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PrivatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./private.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/private.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./private.page.scss */ "./src/app/pages/private/private.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], PrivatePage);



/***/ })

}]);
//# sourceMappingURL=pages-private-private-module-es2015.js.map