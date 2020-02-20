(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intrants-intrants-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/intrants/intrants.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/intrants/intrants.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  mode=\"ios\">\n  <ion-grid fixed>\n    <ion-row *ngFor=\"let categorie of categories|sortBy:'asc':['nom']\" class=\"ion-margin-bottom\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"true\" mode=\"ios\">\n          <ion-button fill=\"clear\"  (click)=\"categorie.expand=!categorie.expand\">\n            <ion-icon slot=\"icon-only\" name=\"ios-arrow-forward\" *ngIf=\"!categorie.expand\"></ion-icon>\n            <ion-icon slot=\"icon-only\" name=\"ios-arrow-down\"  *ngIf=\"categorie.expand\"></ion-icon>\n          </ion-button>\n          <ion-label (click)=\"onShowCategorie(categorie.id)\">{{categorie.nom}}  \n            <ion-badge>{{(intrants|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length}}</ion-badge></ion-label>\n\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"onAddIntrant(categorie.id)\">\n              <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onEditCategorie(categorie.id)\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onDeleteCategorie(categorie.id)\">\n              <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n         \n        </ion-item>\n        <div *ngIf=\"categorie.expand\" class=\"container\">\n          <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n            <ion-slide *ngFor=\"let intrant of intrants|filterBy:'categorieId':categorie.id|sortBy:'asc':['nom', 'prenom']|searchBy:data.searchValue\">\n             <ion-card mode=\"ios\">\n               <ion-card-header>\n                <ion-card-title color=\"secondary\">{{intrant.nom}}</ion-card-title>\n                 <ion-card-subtitle color=\"danger\" >{{intrant.quantiteStock}} en stock</ion-card-subtitle>\n                 \n               </ion-card-header>\n               <ion-card-content>\n                 <ion-row>\n                   <p>\n                     {{intrant.description}}\n                   </p>\n                 </ion-row>\n                <ion-row>\n                  <ion-col offset=\"6\" size=\"2\">\n                    <ion-button fill=\"clear\" (click)=\"onEditIntrant(intrant.id)\">\n                      <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                   <ion-button fill=\"clear\" (click)=\"onDeleteIntrant(intrant.id)\">\n                     <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash\"></ion-icon>\n                   </ion-button>\n                 </ion-col>\n                </ion-row>\n               </ion-card-content>\n             </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <ion-text color=\"danger\" *ngIf=\"(intrants|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length===0\" >\n            <p>Aucune intrant trouvée!</p>\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-text color=\"danger\" *ngIf=\"categories.length===0\">\n      <p>Aucune categorie de intrant! Veuillez ajouter une categorie de intrant!</p>\n    </ion-text>\n  \n  <ion-fab  *ngIf=\"!trash\"  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onAddCategorie()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/private/intrants/intrants.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/private/intrants/intrants.module.ts ***!
  \***********************************************************/
/*! exports provided: IntrantsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntrantsPageModule", function() { return IntrantsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _intrants_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intrants.page */ "./src/app/pages/private/intrants/intrants.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _intrants_page__WEBPACK_IMPORTED_MODULE_6__["IntrantsPage"]
    }
];
let IntrantsPageModule = class IntrantsPageModule {
};
IntrantsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_intrants_page__WEBPACK_IMPORTED_MODULE_6__["IntrantsPage"]]
    })
], IntrantsPageModule);



/***/ }),

/***/ "./src/app/pages/private/intrants/intrants.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/private/intrants/intrants.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvaW50cmFudHMvaW50cmFudHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/private/intrants/intrants.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/private/intrants/intrants.page.ts ***!
  \*********************************************************/
/*! exports provided: IntrantsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntrantsPage", function() { return IntrantsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/produit.service */ "./src/app/services/produit.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/categorie-form/categorie-form.component */ "./src/app/components/categorie-form/categorie-form.component.ts");
/* harmony import */ var src_app_components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/categorie-profil/categorie-profil.component */ "./src/app/components/categorie-profil/categorie-profil.component.ts");
/* harmony import */ var src_app_components_intrant_form_intrant_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/intrant-form/intrant-form.component */ "./src/app/components/intrant-form/intrant-form.component.ts");
/* harmony import */ var src_app_components_intrant_profil_intrant_profil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/intrant-profil/intrant-profil.component */ "./src/app/components/intrant-profil/intrant-profil.component.ts");









let IntrantsPage = class IntrantsPage {
    constructor(popoverController, produitService, data) {
        this.popoverController = popoverController;
        this.produitService = produitService;
        this.data = data;
        this.trash = false;
    }
    ngOnInit() {
        this.categorieSubscription = this.produitService.getCategories().subscribe((res) => {
            this.categories = [];
            res.forEach(item => {
                if (item.isIntrant)
                    this.categories.push(item);
            });
        });
        this.intrantSubscription = this.produitService.getIntrants().subscribe((res) => {
            this.intrants = res;
        });
        this.categorieTrashSubscription = this.produitService.getCategoriesTrash().subscribe((res) => {
            this.categoriesTrash = res;
        });
    }
    ngOnDestroy() {
        this.categorieSubscription.unsubscribe();
        this.intrantSubscription.unsubscribe();
        this.categorieTrashSubscription.unsubscribe();
    }
    onAddCategorie() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_5__["CategorieFormComponent"],
                translucent: false,
                componentProps: {
                    isIntrant: true
                }
            });
            popover.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.produitService.addCategorie(res.data);
            });
            yield popover.present();
        });
    }
    onEditCategorie(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_5__["CategorieFormComponent"],
                translucent: false,
                componentProps: {
                    id: id
                }
            });
            popover.onDidDismiss().then((res) => {
                if (res.data)
                    this.produitService.editCategorie(res.data);
            });
            yield popover.present();
        });
    }
    onShowCategorie(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_6__["CategorieProfilComponent"],
                translucent: false,
                componentProps: {
                    id: id,
                    trash: this.trash
                }
            });
            yield popover.present();
        });
    }
    onDeleteCategorie(id) {
        this.produitService.deleteCategorie(id);
    }
    onRestoreCategorie(id) {
        this.produitService.restoreCategorie(id);
    }
    onAddIntrant(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_intrant_form_intrant_form_component__WEBPACK_IMPORTED_MODULE_7__["IntrantFormComponent"],
                translucent: false
            });
            popover.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.produitService.addIntrant(res.data);
            });
            yield popover.present();
        });
    }
    onEditIntrant(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_intrant_form_intrant_form_component__WEBPACK_IMPORTED_MODULE_7__["IntrantFormComponent"],
                translucent: false,
                componentProps: {
                    id: id
                }
            });
            popover.onDidDismiss().then((res) => {
                if (res.data)
                    this.produitService.editIntrant(res.data);
            });
            yield popover.present();
        });
    }
    onShowIntrant(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_intrant_profil_intrant_profil_component__WEBPACK_IMPORTED_MODULE_8__["IntrantProfilComponent"],
                translucent: false,
                componentProps: {
                    id: id,
                    trash: this.trash
                }
            });
            yield popover.present();
        });
    }
    onDeleteIntrant(id) {
        if (window.confirm('Voulez vous vraiment supprimer ce produit?'))
            this.produitService.deleteIntrant(id);
    }
    onRestoreIntrant(id) {
        this.produitService.restoreIntrant(id);
    }
};
IntrantsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
IntrantsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intrants',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intrants.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/intrants/intrants.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intrants.page.scss */ "./src/app/pages/private/intrants/intrants.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], IntrantsPage);



/***/ })

}]);
//# sourceMappingURL=intrants-intrants-module-es2015.js.map