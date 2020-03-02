(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produits-produits-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/produits/produits.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/produits/produits.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  mode=\"ios\">\n  <ion-grid fixed>\n    <ion-row *ngFor=\"let categorie of categories|sortBy:'asc':['nom']\" class=\"ion-margin-bottom\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"true\" mode=\"ios\">\n          <ion-button fill=\"clear\"  (click)=\"categorie.expand=!categorie.expand\">\n            <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\" *ngIf=\"!categorie.expand\"></ion-icon>\n            <ion-icon slot=\"icon-only\" name=\"chevron-down-outline\"  *ngIf=\"categorie.expand\"></ion-icon>\n          </ion-button>\n          <ion-label (click)=\"onShowCategorie(categorie.id)\">{{categorie.nom}}  \n            <ion-badge>{{(produits|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length}}</ion-badge></ion-label>\n\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"onAddProduit(categorie.id)\">\n              <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onEditCategorie(categorie.id)\">\n              <ion-icon color=\"warning\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onDeleteCategorie(categorie.id)\">\n              <ion-icon color=\"danger\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n         \n        </ion-item>\n        <div *ngIf=\"categorie.expand\" class=\"container\">\n          <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n            <ion-slide *ngFor=\"let produit of produits|filterBy:'categorieId':categorie.id|sortBy:'asc':['nom', 'prenom']|searchBy:data.searchValue\">\n             <ion-card mode=\"ios\">\n              <div class=\"img\">\n                <img src=\"{{produit.photo}}\">\n              </div>\n               <ion-card-header>\n                <ion-card-title color=\"secondary\">{{produit.nom}}</ion-card-title>\n                 <ion-card-subtitle color=\"danger\" >{{produit.prixUnitaireVente}} F CFA</ion-card-subtitle>\n                 \n               </ion-card-header>\n               <ion-card-content>\n                 <!-- <ion-row>\n                   <p>\n                     {{produit.description}}\n                   </p>\n                 </ion-row> -->\n                <ion-row>\n                  <ion-col class=\"ion-no-padding\" offset=\"6\" size=\"2\">\n                    <ion-button fill=\"clear\" (click)=\"onEditProduit(produit.id)\">\n                      <ion-icon slot=\"icon-only\" color=\"warning\" name=\"create-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col class=\"ion-no-padding\" size=\"2\">\n                   <ion-button fill=\"clear\" (click)=\"onDeleteProduit(produit.id)\">\n                     <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n                   </ion-button>\n                 </ion-col>\n                </ion-row>\n               </ion-card-content>\n             </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <ion-text color=\"danger\" *ngIf=\"(produits|filterBy:'categorieId':categorie.id|searchBy:data.searchValue).length===0\" >\n            <p>Aucune produit trouvée!</p>\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-text color=\"danger\" *ngIf=\"categories.length===0\">\n      <p>Aucune categorie de produit! Veuillez ajouter une categorie de produit!</p>\n    </ion-text>\n  \n  <ion-fab  *ngIf=\"!trash\"  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onAddCategorie()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/private/produits/produits.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/private/produits/produits.module.ts ***!
  \***********************************************************/
/*! exports provided: ProduitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitsPageModule", function() { return ProduitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _produits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produits.page */ "./src/app/pages/private/produits/produits.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _produits_page__WEBPACK_IMPORTED_MODULE_6__["ProduitsPage"]
    }
];
let ProduitsPageModule = class ProduitsPageModule {
};
ProduitsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_produits_page__WEBPACK_IMPORTED_MODULE_6__["ProduitsPage"]]
    })
], ProduitsPageModule);



/***/ }),

/***/ "./src/app/pages/private/produits/produits.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/private/produits/produits.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\n  height: 170px;\n  width: 100%;\n}\n.img img {\n  height: 100%;\n  width: 100%;\n}\nion-card {\n  width: 220px;\n  height: 300px;\n  background-color: white;\n}\nion-card ion-card-title {\n  font-size: 1.4em;\n}\n.container {\n  background-color: rgba(0, 100, 255, 0.1);\n  height: 330px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9wcm9kdWl0cy9DOlxcVXNlcnNcXEFyb2FtXFxEZXNrdG9wXFxob3RlbC1mcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXHByaXZhdGVcXHByb2R1aXRzXFxwcm9kdWl0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvcHJvZHVpdHMvcHJvZHVpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNFUjtBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FERUE7RUFDSSx3Q0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvcHJvZHVpdHMvcHJvZHVpdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwxMDAsMjU1LDAuMSk7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG59IiwiLmltZyB7XG4gIGhlaWdodDogMTcwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMjU1LCAwLjEpO1xuICBoZWlnaHQ6IDMzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/private/produits/produits.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/private/produits/produits.page.ts ***!
  \*********************************************************/
/*! exports provided: ProduitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitsPage", function() { return ProduitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/produit.service */ "./src/app/services/produit.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/categorie-form/categorie-form.component */ "./src/app/components/categorie-form/categorie-form.component.ts");
/* harmony import */ var src_app_components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/categorie-profil/categorie-profil.component */ "./src/app/components/categorie-profil/categorie-profil.component.ts");
/* harmony import */ var src_app_components_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/produit-form/produit-form.component */ "./src/app/components/produit-form/produit-form.component.ts");
/* harmony import */ var src_app_components_produit_profil_produit_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/produit-profil/produit-profil.component */ "./src/app/components/produit-profil/produit-profil.component.ts");










let ProduitsPage = class ProduitsPage {
    constructor(popoverController, produitService, data, router) {
        this.popoverController = popoverController;
        this.produitService = produitService;
        this.data = data;
        this.router = router;
        this.trash = false;
    }
    ngOnInit() {
        this.categorieSubscription = this.produitService.getCategories().subscribe((res) => {
            this.categories = [];
            res.forEach(item => {
                if (!item.isIntrant)
                    this.categories.push(item);
            });
        });
        this.produitSubscription = this.produitService.getProduits().subscribe((res) => {
            this.produits = res;
        });
        this.categorieTrashSubscription = this.produitService.getCategoriesTrash().subscribe((res) => {
            this.categoriesTrash = res;
        });
    }
    ngOnDestroy() {
        this.categorieSubscription.unsubscribe();
        this.produitSubscription.unsubscribe();
        this.categorieTrashSubscription.unsubscribe();
    }
    onAddCategorie() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_6__["CategorieFormComponent"],
                translucent: false,
                componentProps: {
                    isIntrant: false
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
                component: src_app_components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_6__["CategorieFormComponent"],
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
                component: src_app_components_categorie_profil_categorie_profil_component__WEBPACK_IMPORTED_MODULE_7__["CategorieProfilComponent"],
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
    onAddProduit(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_8__["ProduitFormComponent"],
                translucent: false
            });
            popover.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.produitService.addProduit(res.data);
            });
            yield popover.present();
        });
    }
    onEditProduit(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_8__["ProduitFormComponent"],
                translucent: false,
                componentProps: {
                    id: id
                }
            });
            popover.onDidDismiss().then((res) => {
                if (res.data)
                    this.produitService.editProduit(res.data);
            });
            yield popover.present();
        });
    }
    onShowProduit(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_produit_profil_produit_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProduitProfilComponent"],
                translucent: false,
                componentProps: {
                    id: id,
                    trash: this.trash
                }
            });
            yield popover.present();
        });
    }
    onDeleteProduit(id) {
        if (window.confirm('Voulez vous vraiment supprimer ce produit?'))
            this.produitService.deleteProduit(id);
    }
    onRestoreProduit(id) {
        this.produitService.restoreProduit(id);
    }
};
ProduitsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProduitsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produits',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./produits.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/produits/produits.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./produits.page.scss */ "./src/app/pages/private/produits/produits.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ProduitsPage);



/***/ })

}]);
//# sourceMappingURL=produits-produits-module-es2015.js.map