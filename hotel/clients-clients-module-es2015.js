(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/clients/clients.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/clients/clients.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div *ngIf=\"!trash\">\n      <ion-list>\n          <ion-list-header>\n              <ion-label>Listes des clients</ion-label>\n          </ion-list-header>\n\n          <ion-item *ngFor=\"let item of clients|searchBy:data.searchValue\">\n              <ion-label (click)=\"onShow(item.id)\" color=\"secondary\">{{item.nom}} {{item.prenom}}</ion-label>\n              <ion-label color=\"dark\">{{item.contact1}}</ion-label>\n              <ion-buttons slot=\"end\" color=\"tertiary\" mode=\"ios\">\n                  <ion-button color=\"primary\" (click)=\"onShow(item.id)\">\n                      <ion-icon name=\"eye\"></ion-icon>\n                  </ion-button>\n                  <ion-button color=\"warning\" (click)=\"onEdit(item.id)\">\n                      <ion-icon name=\"create\"></ion-icon>\n                  </ion-button>\n                  <ion-button color=\"danger\" (click)=\"onDelete(item.id)\">\n                      <ion-icon name=\"trash\"></ion-icon>\n                  </ion-button>\n              </ion-buttons>\n          </ion-item>\n\n      </ion-list>\n  </div>\n\n  <div *ngIf=\"trash\">\n      <ion-list>\n          <ion-list-header>\n              <ion-label>Listes des clients</ion-label>\n          </ion-list-header>\n          <ion-item-sliding *ngFor=\"let item of clientsTrash|sortBy:'asc':'nom'\">\n              <ion-item (click)=\"onShow(item.id)\">\n                  <ion-label color=\"secondary\">{{item.createdAt|date:'dd-MM-yy'}} {{item.numero}}</ion-label>\n                  <ion-badge slot=\"end\" color=\"tertiary\" mode=\"ios\">{{item.montantTotal}}\n                  </ion-badge>\n              </ion-item>\n              <ion-item-options side=\"end\">\n                  <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n                      <ion-icon name=\"eye\"></ion-icon>\n                  </ion-item-option>\n                  <!-- <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n            <ion-icon  name=\"create\"></ion-icon>\n          </ion-item-option> -->\n                  <ion-item-option color=\"success\" (click)=\"onRestore(item.id)\">\n                      <ion-icon name=\"undo\"></ion-icon>\n                  </ion-item-option>\n              </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button *ngIf=\"!trash\" color=\"danger\" (click)=\"trash=true\">\n          <ion-icon name=\"trash\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button *ngIf=\"trash\" color=\"success\" (click)=\"trash=false\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n  <ion-fab *ngIf=\"!trash\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"onAdd()\">\n          <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/private/clients/clients.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/private/clients/clients.module.ts ***!
  \*********************************************************/
/*! exports provided: ClientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageModule", function() { return ClientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients.page */ "./src/app/pages/private/clients/clients.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _clients_page__WEBPACK_IMPORTED_MODULE_6__["ClientsPage"]
    }
];
let ClientsPageModule = class ClientsPageModule {
};
ClientsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_clients_page__WEBPACK_IMPORTED_MODULE_6__["ClientsPage"]]
    })
], ClientsPageModule);



/***/ }),

/***/ "./src/app/pages/private/clients/clients.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/private/clients/clients.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvY2xpZW50cy9jbGllbnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/private/clients/clients.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/private/clients/clients.page.ts ***!
  \*******************************************************/
/*! exports provided: ClientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPage", function() { return ClientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/client-form/client-form.component */ "./src/app/components/client-form/client-form.component.ts");
/* harmony import */ var src_app_components_client_profil_client_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/client-profil/client-profil.component */ "./src/app/components/client-profil/client-profil.component.ts");








let ClientsPage = class ClientsPage {
    constructor(popoverController, data, locationService, router) {
        this.popoverController = popoverController;
        this.data = data;
        this.locationService = locationService;
        this.router = router;
        this.trash = false;
    }
    ngOnInit() {
        this.clientSubscription = this.locationService.getClients().subscribe((res) => {
            this.clients = res;
        });
        this.clientTrashSubscription = this.locationService.getClientsTrash().subscribe((res) => {
            this.clientsTrash = res;
        });
    }
    ngOnDestroy() {
        this.clientSubscription.unsubscribe();
        this.clientSubscription.unsubscribe();
        this.clientTrashSubscription.unsubscribe();
    }
    onAdd() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_6__["ClientFormComponent"],
                translucent: false
            });
            popover.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.locationService.addClient(res.data);
            });
            yield popover.present();
        });
    }
    onEdit(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_6__["ClientFormComponent"],
                translucent: false,
                componentProps: {
                    id: id
                }
            });
            popover.onDidDismiss().then((res) => {
                if (res.data)
                    this.locationService.editClient(res.data);
            });
            yield popover.present();
        });
    }
    onShow(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_client_profil_client_profil_component__WEBPACK_IMPORTED_MODULE_7__["ClientProfilComponent"],
                translucent: false,
                componentProps: {
                    id: id,
                    trash: this.trash
                }
            });
            yield popover.present();
        });
    }
    onDelete(id) {
        this.locationService.deleteClient(id);
    }
    onRestore(id) {
        this.locationService.restoreClient(id);
    }
};
ClientsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ClientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clients',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clients.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/clients/clients.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clients.page.scss */ "./src/app/pages/private/clients/clients.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ClientsPage);



/***/ })

}]);
//# sourceMappingURL=clients-clients-module-es2015.js.map