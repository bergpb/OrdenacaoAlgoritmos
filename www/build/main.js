webpackJsonp([9],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFilaCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalFilaCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalFilaCodigoPage = /** @class */ (function () {
    function ModalFilaCodigoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalFilaCodigoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalFilaCodigoPage');
    };
    ModalFilaCodigoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalFilaCodigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-fila-codigo',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-fila-codigo/modal-fila-codigo.html"*/'<!--\n  Generated template for the ModalFilaCodigoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Código</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-content>\n'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-fila-codigo/modal-fila-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalFilaCodigoPage);
    return ModalFilaCodigoPage;
}());

//# sourceMappingURL=modal-fila-codigo.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFilaAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalFilaAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalFilaAplicacaoPage = /** @class */ (function () {
    function ModalFilaAplicacaoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.inicio = 0;
        this.fim = -1;
        this.fila = new Array();
    }
    ModalFilaAplicacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalFilaAplicacaoPage');
    };
    ModalFilaAplicacaoPage.prototype.atualizaFila = function () {
        var filaAux = new Array();
        filaAux = this.fila;
        var inicioAux = this.inicio;
        this.fila = new Array();
        console.log("Fora do While");
        while (inicioAux <= this.fim) {
            console.log("Dentro do While");
            console.log(filaAux[inicioAux]);
            this.fila.push(filaAux[inicioAux]);
            inicioAux++;
        }
        this.inicio = 0;
        this.fim = this.fila.length - 1;
    };
    ModalFilaAplicacaoPage.prototype.insert = function () {
        console.log("Valor inserido: " + this.num);
        this.fim++;
        this.fila.push(this.num);
        console.log(this.fila);
        this.num = null;
    };
    ModalFilaAplicacaoPage.prototype.remove = function () {
        this.inicio++;
        this.atualizaFila();
        console.log(this.fila);
        console.log(this.inicio);
        console.log(this.fim);
    };
    ModalFilaAplicacaoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalFilaAplicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-fila-aplicacao',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-fila-aplicacao/modal-fila-aplicacao.html"*/'<!--\n  Generated template for the ModalFilaAplicacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>modal_fila_aplicacao</ion-title>\n  </ion-navbar>\n  <button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da fila </h2>\n<div class="row">\n  <div *ngFor="let item of fila" style="width: 100%;">\n    <input type="number" style="width: 100%;text-align:center;" value={{item}}>\n  </div>\n</div>\n<br/>\n<h2> Operações da fila </h2>\n<div class="row">\n  <div style="width: 100%;">\n    <input [(ngModel)]="num">\n  </div>\n</div>\n<button ion-button color="secondary" outline (click)="insert()">Insere</button>\n<button ion-button color="danger" outline (click)="remove()">Retira</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-fila-aplicacao/modal-fila-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalFilaAplicacaoPage);
    return ModalFilaAplicacaoPage;
}());

//# sourceMappingURL=modal-fila-aplicacao.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalListaCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalListaCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalListaCodigoPage = /** @class */ (function () {
    function ModalListaCodigoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalListaCodigoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalListaCodigoPage');
    };
    ModalListaCodigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-lista-codigo',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-lista-codigo/modal-lista-codigo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>modal_lista_codigo</ion-title>\n  </ion-navbar>\n  <button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da Pilha </h2>\n\n<button ion-button color="secondary" outline >Insere</button>\n<button ion-button color="danger" outline >Retira</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-lista-codigo/modal-lista-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalListaCodigoPage);
    return ModalListaCodigoPage;
}());

//# sourceMappingURL=modal-lista-codigo.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalListaAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalListaAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalListaAplicacaoPage = /** @class */ (function () {
    function ModalListaAplicacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalListaAplicacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalListaAplicacaoPage');
    };
    ModalListaAplicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-lista-aplicacao',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-lista-aplicacao/modal-lista-aplicacao.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>modal_lista_aplicacao</ion-title>\n  </ion-navbar>\n  <button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da Pilha </h2>\n\n<button ion-button color="secondary" outline >Insere</button>\n<button ion-button color="danger" outline >Retira</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-lista-aplicacao/modal-lista-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalListaAplicacaoPage);
    return ModalListaAplicacaoPage;
}());

//# sourceMappingURL=modal-lista-aplicacao.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPilhaAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPilhaAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPilhaAplicacaoPage = /** @class */ (function () {
    function ModalPilhaAplicacaoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalPilhaAplicacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPilhaAplicacaoPage');
    };
    ModalPilhaAplicacaoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPilhaAplicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-pilha-aplicacao',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-pilha-aplicacao/modal-pilha-aplicacao.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>modal_fila_aplicacao</ion-title>\n  </ion-navbar>\n  <button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da Pilha </h2>\n\n<button ion-button color="secondary" outline >Insere</button>\n<button ion-button color="danger" outline >Retira</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-pilha-aplicacao/modal-pilha-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalPilhaAplicacaoPage);
    return ModalPilhaAplicacaoPage;
}());

//# sourceMappingURL=modal-pilha-aplicacao.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPilhaCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPilhaCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPilhaCodigoPage = /** @class */ (function () {
    function ModalPilhaCodigoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalPilhaCodigoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalFilaCodigoPage');
    };
    ModalPilhaCodigoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPilhaCodigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-pilha-codigo',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-pilha-codigo/modal-pilha-codigo.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Código</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-content>'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/modal-pilha-codigo/modal-pilha-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalPilhaCodigoPage);
    return ModalPilhaCodigoPage;
}());

//# sourceMappingURL=modal-pilha-codigo.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fila/fila.module": [
		278,
		8
	],
	"../pages/lista/lista.module": [
		279,
		7
	],
	"../pages/modal-fila-aplicacao/modal-fila-aplicacao.module": [
		280,
		6
	],
	"../pages/modal-fila-codigo/modal-fila-codigo.module": [
		281,
		5
	],
	"../pages/modal-lista-aplicacao/modal-lista-aplicacao.module": [
		282,
		4
	],
	"../pages/modal-lista-codigo/modal-lista-codigo.module": [
		283,
		3
	],
	"../pages/modal-pilha-aplicacao/modal-pilha-aplicacao.module": [
		284,
		2
	],
	"../pages/modal-pilha-codigo/modal-pilha-codigo.module": [
		285,
		1
	],
	"../pages/pilha/pilha.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fila_fila__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pilha_pilha__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_lista__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.filaPage = __WEBPACK_IMPORTED_MODULE_2__fila_fila__["a" /* FilaPage */];
        this.pilhaPage = __WEBPACK_IMPORTED_MODULE_3__pilha_pilha__["a" /* PilhaPage */];
        this.listaPage = __WEBPACK_IMPORTED_MODULE_4__lista_lista__["a" /* ListaPage */];
        this.filaPage = __WEBPACK_IMPORTED_MODULE_2__fila_fila__["a" /* FilaPage */];
        this.pilhaPage = __WEBPACK_IMPORTED_MODULE_3__pilha_pilha__["a" /* PilhaPage */];
        this.listaPage = __WEBPACK_IMPORTED_MODULE_4__lista_lista__["a" /* ListaPage */];
    }
    HomePage.prototype.EstruturaFila = function () {
        this.navCtrl.push(this.filaPage);
    };
    HomePage.prototype.EstruturaPilha = function () {
        this.navCtrl.push(this.pilhaPage);
    };
    HomePage.prototype.EstruturaLista = function () {
        this.navCtrl.push(this.listaPage);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n        \n    <h2>Estrutura de dados</h2>\n    <h4>Conceitos e aplicação</h4>\n  \n  <ion-content class="card-background-page">\n    <div class="row">\n        <div class="col">\n        <ion-card (click)="EstruturaFila()">\n        <img src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.2;"/>\n        <div class="card-title">Fila</div>\n        <div class="card-subtitle">FIFO</div>\n        </ion-card>\n      </div>\n      <div class="col">\n        <ion-card (click)="EstruturaPilha()">\n        <img src="assets/imgs/Ordena.png" style="opacity: 0.2;"/>\n        <div class="card-title">Pilha</div>\n        <div class="card-subtitle">LIFO</div>\n        </ion-card>\n      </div>\n    </div>\n    <div class="row">\n        <div class="col">\n        <ion-card (click)="EstruturaLista()">\n        <img src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.1;"/>\n        <div class="card-title">Lista</div>\n        <div class="card-subtitle">Sequência</div>\n        </ion-card>\n      </div>\n      <div class="col">\n        <ion-card>\n        <img  src="assets/imgs/Ordena.png" style="opacity: 0.1;"/>\n        <div class="card-title">Inserir</div>\n        <div class="card-subtitle">Insert Sort</div>\n        </ion-card>\n      </div>\n    </div>\n    <div class="row">\n        <div class="col">\n        <ion-card (click)="Estrutura()">\n        <img src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.1;"/>\n        <div class="card-title">Bolha</div>\n        <div class="card-subtitle">Bubble Sort</div>\n        </ion-card>\n      </div>\n      <div class="col">\n        <ion-card>\n        <img  src="assets/imgs/Ordena.png" style="opacity: 0.1;"/>\n        <div class="card-title">Mistura</div>\n        <div class="card-subtitle">Merge Sort</div>\n        </ion-card>\n      </div>\n    </div>\n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fila_fila__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pilha_pilha__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lista_lista__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal_fila_codigo_modal_fila_codigo__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modal_fila_aplicacao_modal_fila_aplicacao__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modal_pilha_codigo_modal_pilha_codigo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modal_pilha_aplicacao_modal_pilha_aplicacao__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal_lista_codigo_modal_lista_codigo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_modal_lista_aplicacao_modal_lista_aplicacao__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fila_fila__["a" /* FilaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pilha_pilha__["a" /* PilhaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_fila_codigo_modal_fila_codigo__["a" /* ModalFilaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_fila_aplicacao_modal_fila_aplicacao__["a" /* ModalFilaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_pilha_codigo_modal_pilha_codigo__["a" /* ModalPilhaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modal_pilha_aplicacao_modal_pilha_aplicacao__["a" /* ModalPilhaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_lista_codigo_modal_lista_codigo__["a" /* ModalListaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modal_lista_aplicacao_modal_lista_aplicacao__["a" /* ModalListaAplicacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fila/fila.module#FilaPageModule', name: 'FilaPage', segment: 'fila', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista/lista.module#ListaPageModule', name: 'ListaPage', segment: 'lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-fila-aplicacao/modal-fila-aplicacao.module#ModalFilaAplicacaoPageModule', name: 'ModalFilaAplicacaoPage', segment: 'modal-fila-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-fila-codigo/modal-fila-codigo.module#ModalFilaCodigoPageModule', name: 'ModalFilaCodigoPage', segment: 'modal-fila-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-lista-aplicacao/modal-lista-aplicacao.module#ModalListaAplicacaoPageModule', name: 'ModalListaAplicacaoPage', segment: 'modal-lista-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-lista-codigo/modal-lista-codigo.module#ModalListaCodigoPageModule', name: 'ModalListaCodigoPage', segment: 'modal-lista-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-pilha-aplicacao/modal-pilha-aplicacao.module#ModalPilhaAplicacaoPageModule', name: 'ModalPilhaAplicacaoPage', segment: 'modal-pilha-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-pilha-codigo/modal-pilha-codigo.module#ModalPilhaCodigoPageModule', name: 'ModalPilhaCodigoPage', segment: 'modal-pilha-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pilha/pilha.module#PilhaPageModule', name: 'PilhaPage', segment: 'pilha', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fila_fila__["a" /* FilaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pilha_pilha__["a" /* PilhaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_fila_codigo_modal_fila_codigo__["a" /* ModalFilaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_fila_aplicacao_modal_fila_aplicacao__["a" /* ModalFilaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_pilha_codigo_modal_pilha_codigo__["a" /* ModalPilhaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modal_pilha_aplicacao_modal_pilha_aplicacao__["a" /* ModalPilhaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_lista_codigo_modal_lista_codigo__["a" /* ModalListaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modal_lista_aplicacao_modal_lista_aplicacao__["a" /* ModalListaAplicacaoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_fila_fila__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pilha_pilha__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lista_lista__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Fila', component: __WEBPACK_IMPORTED_MODULE_5__pages_fila_fila__["a" /* FilaPage */] },
            { title: 'Pilha', component: __WEBPACK_IMPORTED_MODULE_6__pages_pilha_pilha__["a" /* PilhaPage */] },
            { title: 'Lista', component: __WEBPACK_IMPORTED_MODULE_7__pages_lista_lista__["a" /* ListaPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_fila_codigo_modal_fila_codigo__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_fila_aplicacao_modal_fila_aplicacao__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilaPage = /** @class */ (function () {
    function FilaPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    FilaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilaPage');
    };
    FilaPage.prototype.openModalCodigo = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_fila_codigo_modal_fila_codigo__["a" /* ModalFilaCodigoPage */]);
        myModal.present();
        console.log('modal codigo aberto');
    };
    FilaPage.prototype.openModalAplicacao = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_fila_aplicacao_modal_fila_aplicacao__["a" /* ModalFilaAplicacaoPage */]);
        myModal.present();
        console.log('modal aplicacao aberto');
    };
    FilaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fila',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/fila/fila.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fila - Conceito</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Conceito</h3>\n   <img src="assets/imgs/Fila.gif"/>\n<p>Uma fila é uma estrutura de dados dinâmica que admite remoção de elementos e inserção de novos objetos.  </p>\n<p>Mais especificamente, uma  fila é uma estrutura sujeita à seguinte regra de operação:  sempre que houver uma remoção,o elemento removido é o que está na estrutura há mais tempo.</p>\n<p>Em outras palavras, o primeiro objeto inserido na fila é também o primeiro a ser removido. Essa política é conhecida pela sigla FIFO (= First-In-First-Out).\n</p>\n<span style="margin-top: 100px">\n  \n\n</span>\n\n<a href="https://www.ime.usp.br/~pf/algoritmos/aulas/fila.html">Referência</a>\n</ion-content>\n<ion-footer><div class="row">\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalCodigo()">Código</button>\n  </div>\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n  </div>\n</div></ion-footer>'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/fila/fila.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], FilaPage);
    return FilaPage;
}());

//# sourceMappingURL=fila.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_lista_codigo_modal_lista_codigo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_lista_aplicacao_modal_lista_aplicacao__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaPage = /** @class */ (function () {
    function ListaPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ListaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaPage');
    };
    ListaPage.prototype.openModalCodigo = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_lista_codigo_modal_lista_codigo__["a" /* ModalListaCodigoPage */]);
        myModal.present();
        console.log('modal codigo aberto');
    };
    ListaPage.prototype.openModalAplicacao = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_lista_aplicacao_modal_lista_aplicacao__["a" /* ModalListaAplicacaoPage */]);
        myModal.present();
        console.log('modal aplicacao aberto');
    };
    ListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/lista/lista.html"*/'<!--\n  Generated template for the ListaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>lista</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Conceito</h3>\n<p>A IMPLEMENTAR</p>\n\n<a href="https://www.ime.usp.br/~pf/algoritmos/aulas/fila.html">Referência</a>\n</ion-content>\n<ion-footer><div class="row">\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalCodigo()">Código</button>\n  </div>\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n  </div>\n</div></ion-footer>'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/lista/lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ListaPage);
    return ListaPage;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PilhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_pilha_codigo_modal_pilha_codigo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_pilha_aplicacao_modal_pilha_aplicacao__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PilhaPage = /** @class */ (function () {
    function PilhaPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    PilhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PilhaPage');
    };
    PilhaPage.prototype.openModalCodigo = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_pilha_codigo_modal_pilha_codigo__["a" /* ModalPilhaCodigoPage */]);
        myModal.present();
        console.log('modal codigo aberto');
    };
    PilhaPage.prototype.openModalAplicacao = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_pilha_aplicacao_modal_pilha_aplicacao__["a" /* ModalPilhaAplicacaoPage */]);
        myModal.present();
        console.log('modal aplicacao aberto');
    };
    PilhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pilha',template:/*ion-inline-start:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/pilha/pilha.html"*/'<!--\n  Generated template for the PilhaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pilha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h3>Conceito</h3>\n  <div class="row">\n    <div class="col">\n      <img src="assets/imgs/Pilhain.gif"/>\n    </div>\n    <div class="col">\n      <img src="assets/imgs/Pilhaout.gif"/>\n    </div>\n  </div>\n<p>Uma pilha é uma estrutura de dados que admite remoção de elementos e inserção de novos objetos. </p>\n<p>Mais especificamente, uma  pilha (= stack)  é uma estrutura sujeita à seguinte regra de operação:  sempre que houver uma remoção,\no elemento removido é o que está na estrutura há menos tempo.</p>\n<p>Em outras palavras, o primeiro objeto a ser inserido na pilha é o último a ser removido. Essa política é conhecida pela sigla LIFO (= Last-In-First-Out).\n</p>\n\n<a href="https://www.ime.usp.br/~pf/algoritmos/aulas/pilha.html">Referência</a>\n</ion-content>\n<ion-footer><div class="row">\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalCodigo()">Código</button>\n  </div>\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n  </div>\n</div></ion-footer>'/*ion-inline-end:"/home/nardier/Downloads/Development/OrdenacaoAlgoritmos/src/pages/pilha/pilha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], PilhaPage);
    return PilhaPage;
}());

//# sourceMappingURL=pilha.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map