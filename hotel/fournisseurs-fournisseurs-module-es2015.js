(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fournisseurs-fournisseurs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/fournisseurs/fournisseurs.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/fournisseurs/fournisseurs.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div *ngIf=\"!trash\">\n        <ion-list>\n            <ion-list-header>\n                <ion-label>Listes des fournisseurs de produits</ion-label>\n            </ion-list-header>\n\n            <ion-item *ngFor=\"let item of fournisseurs|searchBy:data.searchValue\">\n                <ion-label (click)=\"onShow(item.id)\" color=\"secondary\">{{item.nom}}</ion-label>\n                <ion-label color=\"dark\">{{item.contact}}</ion-label>\n                <ion-buttons slot=\"end\" color=\"tertiary\" mode=\"ios\">\n                    <ion-button color=\"primary\" (click)=\"onShow(item.id)\">\n                        <ion-icon name=\"eye\"></ion-icon>\n                    </ion-button>\n                    <ion-button color=\"warning\" (click)=\"onEdit(item.id)\">\n                        <ion-icon name=\"create\"></ion-icon>\n                    </ion-button>\n                    <ion-button color=\"danger\" (click)=\"onDelete(item.id)\">\n                        <ion-icon name=\"trash\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-item>\n\n        </ion-list>\n    </div>\n\n    <div *ngIf=\"trash\">\n        <ion-list>\n            <ion-list-header>\n                <ion-label>Listes des fournisseurs de produits</ion-label>\n            </ion-list-header>\n            <ion-item-sliding *ngFor=\"let item of fournisseursTrash|sortBy:'asc':'nom'\">\n                <ion-item (click)=\"onShow(item.id)\">\n                    <ion-label color=\"secondary\">{{item.createdAt|date:'dd-MM-yy'}} {{item.numero}}</ion-label>\n                    <ion-badge slot=\"end\" color=\"tertiary\" mode=\"ios\">{{item.montantTotal}}\n                    </ion-badge>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n                        <ion-icon name=\"eye\"></ion-icon>\n                    </ion-item-option>\n                    <!-- <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n              <ion-icon  name=\"create\"></ion-icon>\n            </ion-item-option> -->\n                    <ion-item-option color=\"success\" (click)=\"onRestore(item.id)\">\n                        <ion-icon name=\"undo\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button *ngIf=\"!trash\" color=\"danger\" (click)=\"trash=true\">\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button *ngIf=\"trash\" color=\"success\" (click)=\"trash=false\">\n            <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-fab *ngIf=\"!trash\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"onAdd()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/private/fournisseurs/fournisseurs.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/private/fournisseurs/fournisseurs.module.ts ***!
  \*******************************************************************/
/*! exports provided: FournisseursPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FournisseursPageModule", function() { return FournisseursPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fournisseurs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fournisseurs.page */ "./src/app/pages/private/fournisseurs/fournisseurs.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _fournisseurs_page__WEBPACK_IMPORTED_MODULE_6__["FournisseursPage"]
    }
];
let FournisseursPageModule = class FournisseursPageModule {
};
FournisseursPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_fournisseurs_page__WEBPACK_IMPORTED_MODULE_6__["FournisseursPage"]]
    })
], FournisseursPageModule);



/***/ }),

/***/ "./src/app/pages/private/fournisseurs/fournisseurs.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/private/fournisseurs/fournisseurs.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvZm91cm5pc3NldXJzL2ZvdXJuaXNzZXVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/private/fournisseurs/fournisseurs.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/private/fournisseurs/fournisseurs.page.ts ***!
  \*****************************************************************/
/*! exports provided: FournisseursPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FournisseursPage", function() { return FournisseursPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entree.service */ "./src/app/services/entree.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_fournisseur_form_fournisseur_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/fournisseur-form/fournisseur-form.component */ "./src/app/components/fournisseur-form/fournisseur-form.component.ts");
/* harmony import */ var src_app_components_fournisseur_profil_fournisseur_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/fournisseur-profil/fournisseur-profil.component */ "./src/app/components/fournisseur-profil/fournisseur-profil.component.ts");








let FournisseursPage = class FournisseursPage {
    constructor(popoverController, data, entreeService, router) {
        this.popoverController = popoverController;
        this.data = data;
        this.entreeService = entreeService;
        this.router = router;
        this.trash = false;
    }
    ngOnInit() {
        this.fournisseurSubscription = this.entreeService.getFournisseurs().subscribe((res) => {
            this.fournisseurs = res;
        });
        this.fournisseurTrashSubscription = this.entreeService.getFournisseursTrash().subscribe((res) => {
            this.fournisseursTrash = res;
        });
    }
    ngOnDestroy() {
        this.fournisseurSubscription.unsubscribe();
        this.fournisseurSubscription.unsubscribe();
        this.fournisseurTrashSubscription.unsubscribe();
    }
    onAdd() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_fournisseur_form_fournisseur_form_component__WEBPACK_IMPORTED_MODULE_6__["FournisseurFormComponent"],
                translucent: false
            });
            popover.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.entreeService.addFournisseur(res.data);
            });
            yield popover.present();
        });
    }
    onEdit(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_fournisseur_form_fournisseur_form_component__WEBPACK_IMPORTED_MODULE_6__["FournisseurFormComponent"],
                translucent: false,
                componentProps: {
                    id: id
                }
            });
            popover.onDidDismiss().then((res) => {
                if (res.data)
                    this.entreeService.editFournisseur(res.data);
            });
            yield popover.present();
        });
    }
    onShow(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_fournisseur_profil_fournisseur_profil_component__WEBPACK_IMPORTED_MODULE_7__["FournisseurProfilComponent"],
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
        this.entreeService.deleteFournisseur(id);
    }
    onRestore(id) {
        this.entreeService.restoreFournisseur(id);
    }
};
FournisseursPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_4__["EntreeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
FournisseursPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fournisseurs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fournisseurs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/fournisseurs/fournisseurs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fournisseurs.page.scss */ "./src/app/pages/private/fournisseurs/fournisseurs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        src_app_services_entree_service__WEBPACK_IMPORTED_MODULE_4__["EntreeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], FournisseursPage);



/***/ })

}]);
//# sourceMappingURL=fournisseurs-fournisseurs-module-es2015.js.map