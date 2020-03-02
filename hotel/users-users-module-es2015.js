(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/users/users.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/users/users.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  mode=\"ios\">\n  <ion-grid fixed>\n    <ion-row *ngFor=\"let fonction of fonctions|sortBy:'asc':['nom']\" class=\"ion-margin-bottom\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"true\" mode=\"ios\">\n          <ion-button fill=\"clear\"  (click)=\"fonction.expand=!fonction.expand\">\n            <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\" *ngIf=\"!fonction.expand\"></ion-icon>\n            <ion-icon slot=\"icon-only\" name=\"chevron-down-outline\"  *ngIf=\"fonction.expand\"></ion-icon>\n          </ion-button>\n          <ion-label (click)=\"onShowFonction(fonction.id)\">{{fonction.nom}}  \n            <ion-badge>{{(users|filterBy:'fonctionId':fonction.id|searchBy:data.searchValue).length}}</ion-badge></ion-label>\n\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"onAddUser(fonction.id)\">\n              <ion-icon slot=\"start\" name=\"person-add-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onEditFonction(fonction.id)\">\n              <ion-icon color=\"warning\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"onDeleteFonction(fonction.id)\">\n              <ion-icon color=\"danger\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n         \n        </ion-item>\n        <div *ngIf=\"fonction.expand\" class=\"container\">\n          <ion-slides mode=\"ios\" pager=\"ios\"  [options]=\"slidesOptions\">\n            <ion-slide *ngFor=\"let user of users|filterBy:'fonctionId':fonction.id|sortBy:'asc':['nom', 'prenom']|searchBy:data.searchValue\">\n             <ion-card mode=\"ios\">\n              <div class=\"img\">\n                <img src=\"{{user.photo}}\">\n              </div>\n               <ion-card-header>\n                <ion-card-title (click)=\"onShowUser(user.id)\" color=\"secondary\">{{user.nom}} {{user.prenom}}</ion-card-title>\n                 <ion-card-subtitle >{{user.contact}}</ion-card-subtitle>\n                 \n               </ion-card-header>\n               <ion-card-content class=\"ion-no-margin\">\n                <ion-row>\n                  <ion-col  class=\"ion-no-padding\" offset=\"3\" size=\"3\">\n                    <ion-button fill=\"clear\" (click)=\"onShowUser(user.id)\">\n                      <ion-icon slot=\"icon-only\" name=\"eye-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col  class=\"ion-no-padding\" size=\"3\">\n                    <ion-button fill=\"clear\" (click)=\"onEditUser(user.id)\">\n                      <ion-icon slot=\"icon-only\" color=\"warning\" name=\"create-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col  class=\"ion-no-padding\" size=\"3\">\n                   <ion-button fill=\"clear\" (click)=\"onDeleteUser(user.id)\">\n                     <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n                   </ion-button>\n                 </ion-col>\n                </ion-row>\n               </ion-card-content>\n             </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <ion-text color=\"danger\" *ngIf=\"(users|filterBy:'fonctionId':fonction.id|searchBy:data.searchValue).length===0\" >\n            <p>Aucun utilisateur trouvé!</p>\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-text color=\"danger\" *ngIf=\"fonctions.length===0\">\n      <p>Aucune fonction! Veuillez ajouter une fonction!</p>\n    </ion-text>\n  \n  <ion-fab  *ngIf=\"!trash\"  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onAddFonction()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/private/users/users.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/private/users/users.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "./src/app/pages/private/users/users.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]
    }
];
let UsersPageModule = class UsersPageModule {
};
UsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
    })
], UsersPageModule);



/***/ }),

/***/ "./src/app/pages/private/users/users.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/private/users/users.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\n  height: 170px;\n  width: 100%;\n}\n.img img {\n  height: 100%;\n  width: 100%;\n}\nion-card {\n  width: 220px;\n  height: 300px;\n  background-color: white;\n}\nion-card ion-card-title {\n  font-size: 1.4em;\n}\n.container {\n  background-color: rgba(0, 100, 255, 0.1);\n  height: 330px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS91c2Vycy9DOlxcVXNlcnNcXEFyb2FtXFxEZXNrdG9wXFxob3RlbC1mcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXHByaXZhdGVcXHVzZXJzXFx1c2Vycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvdXNlcnMvdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNFUjtBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FEU0E7RUFDSSx3Q0FBQTtFQUNBLGFBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvdXNlcnMvdXNlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgLy8gaW9uLXJvd3tcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vICAgICB0b3A6IDVweDtcclxuICAgICAgICAvLyAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwxMDAsMjU1LDAuMSk7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG59IiwiLmltZyB7XG4gIGhlaWdodDogMTcwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDI1NSwgMC4xKTtcbiAgaGVpZ2h0OiAzMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/private/users/users.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/private/users/users.page.ts ***!
  \***************************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_components_fonction_form_fonction_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/fonction-form/fonction-form.component */ "./src/app/components/fonction-form/fonction-form.component.ts");
/* harmony import */ var src_app_components_fonction_profil_fonction_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/fonction-profil/fonction-profil.component */ "./src/app/components/fonction-profil/fonction-profil.component.ts");
/* harmony import */ var src_app_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/user-form/user-form.component */ "./src/app/components/user-form/user-form.component.ts");
/* harmony import */ var src_app_components_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/user-profil/user-profil.component */ "./src/app/components/user-profil/user-profil.component.ts");









let UsersPage = class UsersPage {
    constructor(popoverController, modalController, userService, data) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.userService = userService;
        this.data = data;
        this.slidesOptions = {
            initialSlide: 0,
            spaceBetween: 4,
            slidesPerView: 4,
            breakpoints: {
                // when window width is >= 320px
                385: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 1
                },
                // when window width is >= 640px
                765: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
                // freeMode: true,
            }
        };
        this.fonctions = [];
        this.trash = false;
    }
    ngOnInit() {
        this.fonctionSubscription = this.userService.getFonctions().subscribe((res) => {
            if (res.length > 0) {
                this.fonctions = [];
                res.forEach((item) => {
                    item.expand = false;
                    this.fonctions.push(item);
                });
            }
        });
        this.userSubscription = this.userService.getUsers().subscribe((res) => {
            this.users = res;
        });
        this.fonctionTrashSubscription = this.userService.getFonctionsTrash().subscribe((res) => {
            this.fonctionsTrash = res;
        });
    }
    ngOnDestroy() {
        this.fonctionSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
        this.fonctionTrashSubscription.unsubscribe();
    }
    onAddFonction() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_fonction_form_fonction_form_component__WEBPACK_IMPORTED_MODULE_5__["FonctionFormComponent"],
                translucent: false
            });
            popover.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.userService.addFonction(res.data);
            });
            yield popover.present();
        });
    }
    onEditFonction(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_fonction_form_fonction_form_component__WEBPACK_IMPORTED_MODULE_5__["FonctionFormComponent"],
                translucent: false,
                componentProps: {
                    id: id
                }
            });
            popover.onDidDismiss().then((res) => {
                if (res.data)
                    this.userService.editFonction(res.data);
            });
            yield popover.present();
        });
    }
    onShowFonction(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_fonction_profil_fonction_profil_component__WEBPACK_IMPORTED_MODULE_6__["FonctionProfilComponent"],
                translucent: false,
                componentProps: {
                    id: id,
                    trash: this.trash
                }
            });
            yield popover.present();
        });
    }
    // onGoToItems(id){
    //   this.router.navigate(['private/users-tab/users', id]);
    // }
    onDeleteFonction(id) {
        this.userService.deleteFonction(id);
    }
    onRestoreFonction(id) {
        this.userService.restoreFonction(id);
    }
    onAddUser(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"],
                translucent: false,
                componentProps: {
                    foncId: id
                }
            });
            popover.onDidDismiss().then((res) => {
                console.log(res.data);
                if (res.data)
                    this.userService.addUser(res.data);
            });
            yield popover.present();
        });
    }
    onEditUser(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"],
                translucent: false,
                componentProps: {
                    id: id
                }
            });
            popover.onDidDismiss().then((res) => {
                if (res.data)
                    this.userService.editUser(res.data);
            });
            yield popover.present();
        });
    }
    onShowUser(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_8__["UserProfilComponent"],
                componentProps: {
                    id: id,
                    trash: this.trash
                }
            });
            yield modal.present();
        });
    }
    onDeleteUser(id) {
        this.userService.deleteUser(id);
    }
    onRestoreUser(id) {
        this.userService.restoreUser(id);
    }
};
UsersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
UsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/users/users.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.page.scss */ "./src/app/pages/private/users/users.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], UsersPage);



/***/ })

}]);
//# sourceMappingURL=users-users-module-es2015.js.map