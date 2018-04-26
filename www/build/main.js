webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFilaAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-modal-fila-aplicacao',template:/*ion-inline-start:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\modal-fila-aplicacao\modal-fila-aplicacao.html"*/'<!--\n\n  Generated template for the ModalFilaAplicacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>modal_fila_aplicacao</ion-title>\n\n  </ion-navbar>\n\n  <button ion-button icon-left (click)="closeModal()">\n\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n\n  Voltar\n\n</button>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h2> Execução da fila </h2>\n\n<div class="row">\n\n  <div *ngFor="let item of fila" style="width: 100%;">\n\n    <input type="number" style="width: 100%;text-align:center;" value={{item}}>\n\n  </div>\n\n</div>\n\n<br/>\n\n<h2> Operações da fila </h2>\n\n<div class="row">\n\n  <div style="width: 100%;">\n\n    <input [(ngModel)]="num">\n\n  </div>\n\n</div>\n\n<button ion-button color="secondary" outline (click)="insert()">Insere</button>\n\n<button ion-button color="danger" outline (click)="remove()">Retira</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\modal-fila-aplicacao\modal-fila-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _c || Object])
    ], ModalFilaAplicacaoPage);
    return ModalFilaAplicacaoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=modal-fila-aplicacao.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFilaCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-modal-fila-codigo',template:/*ion-inline-start:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\modal-fila-codigo\modal-fila-codigo.html"*/'<!--\n\n  Generated template for the ModalFilaCodigoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Código</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<button ion-button icon-left (click)="closeModal()">\n\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n\n  Voltar\n\n</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\modal-fila-codigo\modal-fila-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalFilaCodigoPage);
    return ModalFilaCodigoPage;
}());

//# sourceMappingURL=modal-fila-codigo.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fila/fila.module": [
		278,
		4
	],
	"../pages/lista/lista.module": [
		275,
		3
	],
	"../pages/modal-fila-aplicacao/modal-fila-aplicacao.module": [
		274,
		2
	],
	"../pages/modal-fila-codigo/modal-fila-codigo.module": [
		277,
		1
	],
	"../pages/pilha/pilha.module": [
		276,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fila_fila__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pilha_pilha__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_lista__ = __webpack_require__(50);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n        \n\n    <h2>Estrutura de dados</h2>\n\n    <h4>Conceitos e aplicação</h4>\n\n  \n\n  <ion-content class="card-background-page">\n\n    <div class="row">\n\n        <div class="col">\n\n        <ion-card (click)="EstruturaFila()">\n\n        <img src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.2;"/>\n\n        <div class="card-title">Fila</div>\n\n        <div class="card-subtitle">FIFO</div>\n\n        </ion-card>\n\n      </div>\n\n      <div class="col">\n\n        <ion-card (click)="EstruturaPilha()">\n\n        <img src="assets/imgs/Ordena.png" style="opacity: 0.2;"/>\n\n        <div class="card-title">Pilha</div>\n\n        <div class="card-subtitle">LIFO</div>\n\n        </ion-card>\n\n      </div>\n\n    </div>\n\n    <div class="row">\n\n        <div class="col">\n\n        <ion-card (click)="EstruturaLista()">\n\n        <img src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.1;"/>\n\n        <div class="card-title">Lista</div>\n\n        <div class="card-subtitle">Sequência</div>\n\n        </ion-card>\n\n      </div>\n\n      <div class="col">\n\n        <ion-card>\n\n        <img  src="assets/imgs/Ordena.png" style="opacity: 0.1;"/>\n\n        <div class="card-title">Inserir</div>\n\n        <div class="card-subtitle">Insert Sort</div>\n\n        </ion-card>\n\n      </div>\n\n    </div>\n\n    <div class="row">\n\n        <div class="col">\n\n        <ion-card (click)="Estrutura()">\n\n        <img src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.1;"/>\n\n        <div class="card-title">Bolha</div>\n\n        <div class="card-subtitle">Bubble Sort</div>\n\n        </ion-card>\n\n      </div>\n\n      <div class="col">\n\n        <ion-card>\n\n        <img  src="assets/imgs/Ordena.png" style="opacity: 0.1;"/>\n\n        <div class="card-title">Mistura</div>\n\n        <div class="card-subtitle">Merge Sort</div>\n\n        </ion-card>\n\n      </div>\n\n    </div>\n\n    </ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fila_fila__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pilha_pilha__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lista_lista__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal_fila_codigo_modal_fila_codigo__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modal_fila_aplicacao_modal_fila_aplicacao__ = __webpack_require__(102);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_fila_aplicacao_modal_fila_aplicacao__["a" /* ModalFilaAplicacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal-fila-aplicacao/modal-fila-aplicacao.module#ModalFilaAplicacaoPageModule', name: 'ModalFilaAplicacaoPage', segment: 'modal-fila-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista/lista.module#ListaPageModule', name: 'ListaPage', segment: 'lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pilha/pilha.module#PilhaPageModule', name: 'PilhaPage', segment: 'pilha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-fila-codigo/modal-fila-codigo.module#ModalFilaCodigoPageModule', name: 'ModalFilaCodigoPage', segment: 'modal-fila-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fila/fila.module#FilaPageModule', name: 'FilaPage', segment: 'fila', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_fila_aplicacao_modal_fila_aplicacao__["a" /* ModalFilaAplicacaoPage */]
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

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_fila_fila__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pilha_pilha__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lista_lista__ = __webpack_require__(50);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\app\app.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    function ListaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaPage');
    };
    ListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista',template:/*ion-inline-start:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\lista\lista.html"*/'<!--\n\n  Generated template for the ListaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>lista</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\lista\lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListaPage);
    return ListaPage;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PilhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the PilhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PilhaPage = /** @class */ (function () {
    function PilhaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PilhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PilhaPage');
    };
    PilhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pilha',template:/*ion-inline-start:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\pilha\pilha.html"*/'<!--\n\n  Generated template for the PilhaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>pilha</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\pilha\pilha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PilhaPage);
    return PilhaPage;
}());

//# sourceMappingURL=pilha.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_fila_codigo_modal_fila_codigo__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_fila_aplicacao_modal_fila_aplicacao__ = __webpack_require__(102);
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
            selector: 'page-fila',template:/*ion-inline-start:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\fila\fila.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Fila - Conceito</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h3>Conceito</h3>\n\n   <img src="assets/imgs/Fila.gif"/>\n\n<p>Uma fila é uma estrutura de dados dinâmica que admite remoção de elementos e inserção de novos objetos.  </p>\n\n<p>Mais especificamente, uma  fila é uma estrutura sujeita à seguinte regra de operação:  sempre que houver uma remoção,o elemento removido é o que está na estrutura há mais tempo.</p>\n\n<p>Em outras palavras, o primeiro objeto inserido na fila é também o primeiro a ser removido. Essa política é conhecida pela sigla FIFO (= First-In-First-Out).\n\n</p>\n\n<span style="margin-top: 100px">\n\n  \n\n\n\n</span>\n\n\n\n<a href="https://www.ime.usp.br/~pf/algoritmos/aulas/fila.html">Referência</a>\n\n</ion-content>\n\n<ion-footer><div class="row">\n\n  <div class="col">\n\n    <button ion-button full color="secondary" (click)="openModalCodigo()">Código</button>\n\n  </div>\n\n  <div class="col">\n\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n\n  </div>\n\n</div></ion-footer>'/*ion-inline-end:"C:\desenvolvimento\ionic\OrdenacaoAlgoritmos\src\pages\fila\fila.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], FilaPage);
    return FilaPage;
}());

//# sourceMappingURL=fila.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map