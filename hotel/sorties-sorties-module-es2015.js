(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sorties-sorties-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/sorties/sorties.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/sorties/sorties.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div *ngIf=\"!trash\">\n      <ion-list>\n          <ion-list-header>\n              <ion-label>Listes des sorties de produits</ion-label>\n          </ion-list-header>\n          <ion-item-sliding *ngFor=\"let item of sorties|searchBy:data.searchValue\">\n              <ion-item (click)=\"onShow(item.id)\">\n                  <ion-label color=\"secondary\">{{getUserNom(item.userId)}} </ion-label>\n    \n                  <ion-note slot=\"end\">{{item.createdAt|date:' HH:mm dd-MM-yy'}}</ion-note>\n              </ion-item>\n              <ion-item-options side=\"end\">\n                  <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n                      <ion-icon name=\"eye\"></ion-icon>\n                  </ion-item-option>\n                  <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n                      <ion-icon name=\"create\"></ion-icon>\n                  </ion-item-option>\n                  <ion-item-option color=\"danger\" (click)=\"onDelete(item.id)\">\n                      <ion-icon name=\"trash\"></ion-icon>\n                  </ion-item-option>\n              </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n  </div>\n\n  <div *ngIf=\"trash\">\n      <ion-list>\n          <ion-list-header>\n              <ion-label>Listes des sorties de produits</ion-label>\n          </ion-list-header>\n          <ion-item-sliding *ngFor=\"let item of sortiesTrash|sortBy:'asc':'nom'\">\n              <ion-item (click)=\"onShow(item.id)\">\n                  <ion-label color=\"secondary\">{{item.createdAt|date:'dd-MM-yy HH:mm'}} {{item.numeroFacture}}\n                  </ion-label>\n                  <ion-badge slot=\"end\" color=\"tertiary\" mode=\"ios\">{{item.montantTotal}}\n                  </ion-badge>\n              </ion-item>\n              <ion-item-options side=\"end\">\n                  <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n                      <ion-icon name=\"eye\"></ion-icon>\n                  </ion-item-option>\n                  <!-- <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n              <ion-icon  name=\"create\"></ion-icon>\n            </ion-item-option> -->\n                  <ion-item-option color=\"success\" (click)=\"onRestore(item.id)\">\n                      <ion-icon name=\"undo\"></ion-icon>\n                  </ion-item-option>\n              </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button *ngIf=\"!trash\" color=\"danger\" (click)=\"trash=true\">\n          <ion-icon name=\"trash\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button *ngIf=\"trash\" color=\"success\" (click)=\"trash=false\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n  <ion-fab *ngIf=\"!trash\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"onAdd()\">\n          <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/private/sorties/sorties.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/private/sorties/sorties.module.ts ***!
  \*********************************************************/
/*! exports provided: SortiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortiesPageModule", function() { return SortiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sorties_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sorties.page */ "./src/app/pages/private/sorties/sorties.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _sorties_page__WEBPACK_IMPORTED_MODULE_6__["SortiesPage"]
    }
];
let SortiesPageModule = class SortiesPageModule {
};
SortiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sorties_page__WEBPACK_IMPORTED_MODULE_6__["SortiesPage"]]
    })
], SortiesPageModule);



/***/ }),

/***/ "./src/app/pages/private/sorties/sorties.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/private/sorties/sorties.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvc29ydGllcy9zb3J0aWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/private/sorties/sorties.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/private/sorties/sorties.page.ts ***!
  \*******************************************************/
/*! exports provided: SortiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortiesPage", function() { return SortiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_sortie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sortie.service */ "./src/app/services/sortie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_sortie_form_sortie_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/sortie-form/sortie-form.component */ "./src/app/components/sortie-form/sortie-form.component.ts");
/* harmony import */ var src_app_components_sortie_profil_sortie_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/sortie-profil/sortie-profil.component */ "./src/app/components/sortie-profil/sortie-profil.component.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let SortiesPage = class SortiesPage {
    constructor(modalController, data, sortieService, userService, router) {
        this.modalController = modalController;
        this.data = data;
        this.sortieService = sortieService;
        this.userService = userService;
        this.router = router;
        this.trash = false;
    }
    ngOnInit() {
        this.sortieSubscription = this.sortieService.getSorties().subscribe((res) => {
            this.sorties = res;
        });
        this.sortieTrashSubscription = this.sortieService.getSortiesTrash().subscribe((res) => {
            this.sortiesTrash = res;
        });
    }
    ngOnDestroy() {
        this.sortieSubscription.unsubscribe();
        this.sortieSubscription.unsubscribe();
        this.sortieTrashSubscription.unsubscribe();
    }
    onAdd() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_sortie_form_sortie_form_component__WEBPACK_IMPORTED_MODULE_6__["SortieFormComponent"],
            });
            modal.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.sortieService.addSortie(res.data);
            });
            yield modal.present();
        });
    }
    onEdit(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_sortie_form_sortie_form_component__WEBPACK_IMPORTED_MODULE_6__["SortieFormComponent"],
                componentProps: {
                    id: id
                }
            });
            modal.onDidDismiss().then((res) => {
                if (res.data)
                    this.sortieService.editSortie(res.data);
            });
            yield modal.present();
        });
    }
    onShow(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_sortie_profil_sortie_profil_component__WEBPACK_IMPORTED_MODULE_7__["SortieProfilComponent"],
                componentProps: {
                    id: id,
                    trash: this.trash
                }
            });
            yield modal.present();
        });
    }
    onDelete(id) {
        this.sortieService.deleteSortie(id);
    }
    onRestore(id) {
        this.sortieService.restoreSortie(id);
    }
    getUserNom(id) {
        return this.userService.getUser(id).nom;
    }
    loadData(event) {
        if (!this.trash)
            this.sortieService.getServerSorties();
        else
            this.sortieService.getSeverSortiesTrash();
    }
};
SortiesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_services_sortie_service__WEBPACK_IMPORTED_MODULE_4__["SortieService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SortiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sorties',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sorties.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/sorties/sorties.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sorties.page.scss */ "./src/app/pages/private/sorties/sorties.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        src_app_services_sortie_service__WEBPACK_IMPORTED_MODULE_4__["SortieService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], SortiesPage);



/***/ })

}]);
//# sourceMappingURL=sorties-sorties-module-es2015.js.map