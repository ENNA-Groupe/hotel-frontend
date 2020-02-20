(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consommations-consommations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/consommations/consommations.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/consommations/consommations.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col *ngFor=\"let table of tables\" size=\"12\">\n        <ion-card mode=\"ios\" >\n          <ion-card-header>\n            <ion-card-title>Table N {{table.numero}}  <ion-badge color=\"secondary\" mode=\"ios\">4200 FCFA</ion-badge></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item *ngFor=\"let conso of consommations\">\n                <ion-label>{{conso.produit}}</ion-label>\n                <div slot=\"end\">\n                  <ion-badge  color=\"secondary\" mode=\"ios\">{{conso.quantite}}</ion-badge>\n                  <ion-button (click)=\"onClick()\">\n                    <ion-icon slot=\"icon-only\" name=\"onAddConso(table.id, conso.id)\"></ion-icon>\n                  </ion-button>\n                </div>\n               \n              </ion-item>\n            </ion-list>\n            <p>Aucune consommation</p>\n          </ion-card-content>\n          <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n            <ion-fab-button color=\"success\" (click)=\"endConso()\">\n              <ion-icon name=\"checkmark\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n          <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <ion-fab-button (click)=\"onAddConso(table.id)\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n \n   \n  <ion-fab  *ngIf=\"!trash\"  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onAddTable()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/private/consommations/consommations.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/private/consommations/consommations.module.ts ***!
  \*********************************************************************/
/*! exports provided: ConsommationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsommationsPageModule", function() { return ConsommationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _consommations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consommations.page */ "./src/app/pages/private/consommations/consommations.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _consommations_page__WEBPACK_IMPORTED_MODULE_6__["ConsommationsPage"]
    }
];
let ConsommationsPageModule = class ConsommationsPageModule {
};
ConsommationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_consommations_page__WEBPACK_IMPORTED_MODULE_6__["ConsommationsPage"]]
    })
], ConsommationsPageModule);



/***/ }),

/***/ "./src/app/pages/private/consommations/consommations.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/private/consommations/consommations.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvY29uc29tbWF0aW9ucy9jb25zb21tYXRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/private/consommations/consommations.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/private/consommations/consommations.page.ts ***!
  \*******************************************************************/
/*! exports provided: ConsommationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsommationsPage", function() { return ConsommationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_consommation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/consommation.service */ "./src/app/services/consommation.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_components_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/table-form/table-form.component */ "./src/app/components/table-form/table-form.component.ts");
/* harmony import */ var src_app_components_table_profil_table_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/table-profil/table-profil.component */ "./src/app/components/table-profil/table-profil.component.ts");
/* harmony import */ var src_app_components_consommation_form_consommation_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/consommation-form/consommation-form.component */ "./src/app/components/consommation-form/consommation-form.component.ts");








let ConsommationsPage = class ConsommationsPage {
    constructor(popoverController, consommationService, modalController, data) {
        this.popoverController = popoverController;
        this.consommationService = consommationService;
        this.modalController = modalController;
        this.data = data;
        this.trash = false;
    }
    ngOnInit() {
        this.tableSubscription = this.consommationService.getTables().subscribe((res) => {
            this.tables = res;
        });
        this.consommationSubscription = this.consommationService.getConsommations().subscribe((res) => {
            this.consommations = res;
        });
        this.tableTrashSubscription = this.consommationService.getTablesTrash().subscribe((res) => {
            this.tablesTrash = res;
        });
    }
    ngOnDestroy() {
        this.tableSubscription.unsubscribe();
        this.consommationSubscription.unsubscribe();
        this.tableTrashSubscription.unsubscribe();
    }
    onAddTable() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_5__["TableFormComponent"],
                translucent: false
            });
            popover.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.consommationService.addTable(res.data);
            });
            yield popover.present();
        });
    }
    onEditTable(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_5__["TableFormComponent"],
                translucent: false,
                componentProps: {
                    id: id
                }
            });
            popover.onDidDismiss().then((res) => {
                if (res.data)
                    this.consommationService.editTable(res.data);
            });
            yield popover.present();
        });
    }
    onShowTable(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_table_profil_table_profil_component__WEBPACK_IMPORTED_MODULE_6__["TableProfilComponent"],
                translucent: false,
                componentProps: {
                    id: id,
                    trash: this.trash
                }
            });
            yield popover.present();
        });
    }
    onDeleteTable(id) {
        this.consommationService.deleteTable(id);
    }
    onRestoreTable(id) {
        this.consommationService.restoreTable(id);
    }
    onAddConso(tableId, consoId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!consoId) {
                const modal = yield this.modalController.create({
                    component: src_app_components_consommation_form_consommation_form_component__WEBPACK_IMPORTED_MODULE_7__["ConsommationFormComponent"],
                    componentProps: {
                        tableId: tableId
                    }
                });
                modal.onDidDismiss().then((res) => {
                    console.log(res.data);
                    if (res.data) {
                        this.consommationService.addConsommation({ consommation: { tableId: tableId }, produits: res.data });
                    }
                });
                yield modal.present();
            }
            else {
                let conso = this.consommationService.getConsommation(consoId);
                this.consommationService.addConsommation(conso);
            }
        });
    }
    onEditConsommation(id) {
    }
    onShowConsommation(id) {
    }
    onDeleteConsommation(id) {
        if (window.confirm('Voulez vous vraiment supprimer ce Consommation?'))
            this.consommationService.deleteConsommation(id);
    }
    onRestoreConsommation(id) {
        this.consommationService.restoreConsommation(id);
    }
};
ConsommationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_consommation_service__WEBPACK_IMPORTED_MODULE_3__["ConsommationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
ConsommationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consommations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consommations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/consommations/consommations.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consommations.page.scss */ "./src/app/pages/private/consommations/consommations.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_consommation_service__WEBPACK_IMPORTED_MODULE_3__["ConsommationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], ConsommationsPage);



/***/ })

}]);
//# sourceMappingURL=consommations-consommations-module-es2015.js.map