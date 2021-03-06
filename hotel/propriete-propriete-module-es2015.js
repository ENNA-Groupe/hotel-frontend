(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propriete-propriete-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/propriete-profil/propriete-profil.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/propriete-profil/propriete-profil.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  propriete-profil works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/params/propriete/propriete.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/params/propriete/propriete.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div *ngIf=\"!trash\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label>Listes des proprietes</ion-label>\n      </ion-list-header>\n      <ion-item-sliding *ngFor=\"let item of proprietes|searchBy:data.searchValue\">\n        <ion-item (click)=\"onShow(item.id)\">\n          <ion-label color=\"secondary\">{{item.nom}} {{item.model}}</ion-label>\n          <ion-badge slot=\"end\" color=\"tertiary\" mode=\"ios\">{{item.coutAdditionnel}}\n          </ion-badge>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n            <ion-icon name=\"eye\"></ion-icon>\n          </ion-item-option>\n          <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"onDelete(item.id)\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"trash\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label>Listes des proprietes</ion-label>\n      </ion-list-header>\n      <ion-item-sliding *ngFor=\"let item of proprietesTrash|sortBy:'asc':'nom'\">\n        <ion-item (click)=\"onShow(item.id)\">\n          <ion-label color=\"secondary\">{{item.nom}} {{item.model}}</ion-label>\n          <ion-badge slot=\"end\" color=\"tertiary\" mode=\"ios\">{{item.coutAdditionnel}}\n          </ion-badge>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"primary\" (click)=\"onShow(item.id)\">\n            <ion-icon name=\"eye\"></ion-icon>\n          </ion-item-option>\n          <!-- <ion-item-option color=\"warning\" (click)=\"onEdit(item.id)\">\n              <ion-icon  name=\"create\"></ion-icon>\n            </ion-item-option> -->\n          <ion-item-option color=\"success\" (click)=\"onRestore(item.id)\">\n            <ion-icon name=\"undo\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button *ngIf=\"!trash\" color=\"danger\" (click)=\"trash=true\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button *ngIf=\"trash\" color=\"success\" (click)=\"trash=false\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab *ngIf=\"!trash\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onAdd()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/propriete-profil/propriete-profil.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/propriete-profil/propriete-profil.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvcHJpZXRlLXByb2ZpbC9wcm9wcmlldGUtcHJvZmlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/propriete-profil/propriete-profil.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/propriete-profil/propriete-profil.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProprieteProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProprieteProfilComponent", function() { return ProprieteProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProprieteProfilComponent = class ProprieteProfilComponent {
    constructor() { }
    ngOnInit() { }
};
ProprieteProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propriete-profil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./propriete-profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/propriete-profil/propriete-profil.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./propriete-profil.component.scss */ "./src/app/components/propriete-profil/propriete-profil.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProprieteProfilComponent);



/***/ }),

/***/ "./src/app/pages/private/params/propriete/propriete.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/private/params/propriete/propriete.module.ts ***!
  \********************************************************************/
/*! exports provided: ProprietePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProprietePageModule", function() { return ProprietePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _propriete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./propriete.page */ "./src/app/pages/private/params/propriete/propriete.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _propriete_page__WEBPACK_IMPORTED_MODULE_6__["ProprietePage"]
    }
];
let ProprietePageModule = class ProprietePageModule {
};
ProprietePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_propriete_page__WEBPACK_IMPORTED_MODULE_6__["ProprietePage"]]
    })
], ProprietePageModule);



/***/ }),

/***/ "./src/app/pages/private/params/propriete/propriete.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/private/params/propriete/propriete.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvcGFyYW1zL3Byb3ByaWV0ZS9wcm9wcmlldGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/private/params/propriete/propriete.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/private/params/propriete/propriete.page.ts ***!
  \******************************************************************/
/*! exports provided: ProprietePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProprietePage", function() { return ProprietePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_propriete_form_propriete_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/propriete-form/propriete-form.component */ "./src/app/components/propriete-form/propriete-form.component.ts");
/* harmony import */ var src_app_components_propriete_profil_propriete_profil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/propriete-profil/propriete-profil.component */ "./src/app/components/propriete-profil/propriete-profil.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_params_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/params.service */ "./src/app/services/params.service.ts");







let ProprietePage = class ProprietePage {
    constructor(popoverController, data, paramsService) {
        this.popoverController = popoverController;
        this.data = data;
        this.paramsService = paramsService;
        this.trash = false;
    }
    ngOnInit() {
        this.proprieteSubscription = this.paramsService.getProprietes().subscribe((res) => {
            this.proprietes = res;
        });
        this.proprieteTrashSubscription = this.paramsService.getProprietesTrash().subscribe((res) => {
            this.proprietesTrash = res;
        });
    }
    ngOnDestroy() {
        this.proprieteSubscription.unsubscribe();
        this.proprieteSubscription.unsubscribe();
        this.proprieteTrashSubscription.unsubscribe();
    }
    onAdd() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_propriete_form_propriete_form_component__WEBPACK_IMPORTED_MODULE_2__["ProprieteFormComponent"],
                translucent: false
            });
            popover.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.paramsService.addPropriete(res.data);
            });
            yield popover.present();
        });
    }
    onEdit(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_propriete_form_propriete_form_component__WEBPACK_IMPORTED_MODULE_2__["ProprieteFormComponent"],
                translucent: false,
                componentProps: {
                    id: id
                }
            });
            popover.onDidDismiss().then((res) => {
                if (res.data)
                    this.paramsService.editPropriete(res.data);
            });
            yield popover.present();
        });
    }
    onShow(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_propriete_profil_propriete_profil_component__WEBPACK_IMPORTED_MODULE_3__["ProprieteProfilComponent"],
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
        this.paramsService.deletePropriete(id);
    }
    onRestore(id) {
        this.paramsService.restorePropriete(id);
    }
};
ProprietePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: src_app_services_params_service__WEBPACK_IMPORTED_MODULE_6__["ParamsService"] }
];
ProprietePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propriete',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./propriete.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/params/propriete/propriete.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./propriete.page.scss */ "./src/app/pages/private/params/propriete/propriete.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        src_app_services_params_service__WEBPACK_IMPORTED_MODULE_6__["ParamsService"]])
], ProprietePage);



/***/ })

}]);
//# sourceMappingURL=propriete-propriete-module-es2015.js.map