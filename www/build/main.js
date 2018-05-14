webpackJsonp([20],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the BuscasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscasPage = /** @class */ (function () {
    function BuscasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuscasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscasPage');
    };
    BuscasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscas',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/buscas/buscas.html"*/'<!--\n  Generated template for the PilhaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buscas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h3>Conceito</h3>\n  <img class="fix_image" src="assets/imgs/Buscabinseq.gif"/>\n<h4>Binaria</h4>\n<p>A pesquisa ou busca binária (em inglês binary search algorithm ou binary chop) é um algoritmo de busca em vetores que segue o paradigma de divisão e conquista. Ela parte do pressuposto de que o vetor está ordenado e realiza sucessivas divisões do espaço de busca comparando o elemento buscado (chave) com o elemento no meio do vetor. Se o elemento do meio do vetor for a chave, a busca termina com sucesso. Caso contrário, se o elemento do meio vier antes do elemento buscado, então a busca continua na metade posterior do vetor. E finalmente, se o elemento do meio vier depois da chave, a busca continua na metade anterior do vetor.</p>\n<h4>Sequencial</h4>\n<p>Encontrar informações em uma matriz desordenada requer uma pesquisa\nsequencial, começando no primeiro elemento e parando quando o elemento procurado\nou o final da matriz é encontrado. Esse método deve ser usado em dados desordenados,\nmas também pode ser aplicado a dados ordenados.\nÉ fácil de ser codificada. Funciona da seguinte forma: a partir do primeiro\nregistro, pesquise sequencialmente até encontrar a chave procurada; então pare.</p>\n<h5> Segue abaixo os pseudocódigos</h5>\n<h6> Pesquisa Binária</h6>\n<code style="white-space: pre-line;">\n  BUSCA-BINÁRIA (V[], início, fim, e)\n    i recebe o índice do meio entre início e fim\n    se (v[i] = e) entao\n        devolva o índice i   # elemento e encontrado\n    fimse\n    se (inicio = fim) entao\n        não encontrou o elemento procurado\n    senão\n       se (V[i] vem antes de e) então\n          faça a BUSCA-BINÁRIA(V, i+1, fim, e)\n       senão\n          faça a BUSCA-BINÁRIA(V, inicio, i-1, e)\n       fimse\n    fimse\n </code>\n <h6> Pesquisa Binária</h6>\n<code style="white-space: pre-line;">\nPESQUISA-SEQUENCIAL\nprocura (lista, elemento):\nverifica (lista, lista)\npor índice no intervalo (lista):\nse lista [indice] == elemento:\nretorna indice\nse não:\nretorna Nenhum\n </code>\n                  <br/>\n                  <br/>\n<a href="https://erinaldosn.files.wordpress.com/2010/12/aula33.pdf">Referência</a>\n</ion-content>'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/buscas/buscas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BuscasPage);
    return BuscasPage;
}());

//# sourceMappingURL=buscas.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFilaCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-modal-fila-codigo',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-fila-codigo/modal-fila-codigo.html"*/'<!--\n  Generated template for the ModalFilaCodigoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Código</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-fila-codigo/modal-fila-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalFilaCodigoPage);
    return ModalFilaCodigoPage;
}());

//# sourceMappingURL=modal-fila-codigo.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFilaAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    function ModalFilaAplicacaoPage(alertCtrl, navCtrl, navParams, viewCtrl) {
        this.alertCtrl = alertCtrl;
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
        while (inicioAux <= this.fim) {
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
        if (this.fila.length > 0) {
            this.inicio++;
            this.atualizaFila();
            console.log(this.fila);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Falha!',
                subTitle: 'Fila está vazia, você não pode retirar!',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    ModalFilaAplicacaoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalFilaAplicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-fila-aplicacao',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-fila-aplicacao/modal-fila-aplicacao.html"*/'<!--\n  Generated template for the ModalFilaAplicacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Fila - Aplicação  \n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">\n        <span ion-text color="primary" >Fechar</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n<div class="center">\n<h2> Elementos na fila: </h2>\n<div class="row">\n  <div *ngIf="fila.length == 0">\n    <div style="color: red;">\n      Fila vazia!\n    </div>\n  </div>\n  <div *ngFor="let item of fila">\n    <input class="form-control" type="number" value={{item}}>\n  </div>\n</div>\n<br/>\n<h2> Operações: </h2>\n<div class="row">\n  <div style="width: 100%;">\n    <input [(ngModel)]="num">\n  </div>\n</div>\n<button class="form-control" ion-button color="secondary" outline (click)="insert()">Inserir</button>\n<button class="form-control" ion-button color="danger" outline (click)="remove()">Remover</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-fila-aplicacao/modal-fila-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalFilaAplicacaoPage);
    return ModalFilaAplicacaoPage;
}());

//# sourceMappingURL=modal-fila-aplicacao.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BolhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_bolha_codigo_modal_bolha_codigo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_bolha_aplicacao_modal_bolha_aplicacao__ = __webpack_require__(107);
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
 * Generated class for the BolhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BolhaPage = /** @class */ (function () {
    function BolhaPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    BolhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BolhaPage');
    };
    BolhaPage.prototype.openModalCodigo = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_bolha_codigo_modal_bolha_codigo__["a" /* ModalBolhaCodigoPage */]);
        myModal.present();
        console.log('modal codigo aberto');
    };
    BolhaPage.prototype.openModalAplicacao = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_bolha_aplicacao_modal_bolha_aplicacao__["a" /* ModalBolhaAplicacaoPage */]);
        myModal.present();
        console.log('modal aplicacao aberto');
    };
    BolhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bolha',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/bolha/bolha.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bolha - Conceito</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Conceito</h3>\n  <img class="fix_image" src="assets/imgs/Bubblesort.gif"/>\n<p>O bubble sort, ou ordenação por flutuação (literalmente "por bolha"), é um algoritmo de ordenação dos mais simples.  A ideia é percorrer o vector diversas vezes, e a cada passagem fazer flutuar para o topo o maior elemento da sequência. Essa movimentação lembra a forma como as bolhas em um tanque de água procuram seu próprio nível, e disso vem o nome do algoritmo.\n</p>\n<h5> Segue abaixo um pseudocódigo</h5>\n\n<code style="white-space: pre-line;">\n  função bubblesort3 (var a como array)\n     para i de 1 a N\n         troca = 0\n         para j de 0 a N - i\n            se a [j]> a [j + 1]\n               troca (a [j], a [j + 1])\n               troca = troca + 1\n         se troca = 0\n             pausa\nfim função\n </code>\n                  <br/>\n                  <br/>\n\n<a href="https://pt.wikipedia.org/wiki/Bubble_sort">Referência</a>\n</ion-content>\n<ion-footer><div class="row">\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n  </div>\n</div></ion-footer>'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/bolha/bolha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], BolhaPage);
    return BolhaPage;
}());

//# sourceMappingURL=bolha.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBolhaCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the ModalBolhaCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalBolhaCodigoPage = /** @class */ (function () {
    function ModalBolhaCodigoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalBolhaCodigoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalFilaCodigoPage');
    };
    ModalBolhaCodigoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalBolhaCodigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-bolha-codigo',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-bolha-codigo/modal-bolha-codigo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>modal_bolha_codigo</ion-title>\n  </ion-navbar>\n  <button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da Pilha </h2>\n\n<button ion-button color="secondary" outline >Insere</button>\n<button ion-button color="danger" outline >Retira</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-bolha-codigo/modal-bolha-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalBolhaCodigoPage);
    return ModalBolhaCodigoPage;
}());

//# sourceMappingURL=modal-bolha-codigo.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBolhaAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalBolhaAplicacaoPage = /** @class */ (function () {
    function ModalBolhaAplicacaoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.lista = new Array();
        this.lista.push({ "value": 1 });
    }
    ModalBolhaAplicacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalFilaCodigoPage');
    };
    ModalBolhaAplicacaoPage.prototype.addInput = function () {
        var num = Math.floor((Math.random() * 100) + 1);
        this.lista.push({ "value": num });
        console.log(this.lista);
    };
    ModalBolhaAplicacaoPage.prototype.ordenar = function () {
        var aux;
        for (var i = 0; i < this.lista.length; i++) {
            for (var j = 0; j < this.lista.length; j++) {
                if (this.lista[i].value < this.lista[j].value) {
                    aux = this.lista[i].value;
                    this.lista[i].value = this.lista[j].value;
                    this.lista[j].value = aux;
                }
            }
        }
        console.log(this.lista);
    };
    ModalBolhaAplicacaoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalBolhaAplicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-bolha-aplicacao',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-bolha-aplicacao/modal-bolha-aplicacao.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Bolha - Aplicação\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="closeModal()">\n\n        <span ion-text color="primary" >Fechar</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n<div class="center">\n\n<h2> Execução do Bolha </h2>\n\n<div *ngFor="let item of lista; let i = index">\n\n  <input [(ngModel)]="lista[i].value"\n\n         class="form-control"\n\n         type="number"\n\n         value={{item.value}}>\n\n</div>\n\n<button ion-button color="secondary" outline (click)="addInput()" >Adicionar</button>\n\n<button ion-button color="danger" outline (click)="ordenar()" >Ordenar</button>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-bolha-aplicacao/modal-bolha-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalBolhaAplicacaoPage);
    return ModalBolhaAplicacaoPage;
}());

//# sourceMappingURL=modal-bolha-aplicacao.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserirPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_inserir_codigo_modal_inserir_codigo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_inserir_aplicacao_modal_inserir_aplicacao__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InserirPage = /** @class */ (function () {
    function InserirPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    InserirPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InserirPage');
    };
    InserirPage.prototype.openModalCodigo = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_inserir_codigo_modal_inserir_codigo__["a" /* ModalInserirCodigoPage */]);
        myModal.present();
        console.log('modal codigo aberto');
    };
    InserirPage.prototype.openModalAplicacao = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_inserir_aplicacao_modal_inserir_aplicacao__["a" /* ModalInserirAplicacaoPage */]);
        myModal.present();
        console.log('modal aplicacao aberto');
    };
    InserirPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inserir',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/inserir/inserir.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Insert - Conceito</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Conceito</h3>\n  <img class="fix_image" src="assets/imgs/Insertsort.gif"/>\n<p>Insertion Sort, ou ordenação por inserção, é o algoritmo de ordenação que, dado uma estrutura (array, lista) constrói uma matriz final com um elemento de cada vez, uma inserção por vez. Assim como algoritmos de ordenação quadrática, é bastante eficiente para problemas com pequenas entradas, sendo o mais eficiente entre os algoritmos desta ordem de classificação.\n</p>\n<h5> Segue abaixo um pseudocódigo</h5>\n\n<code style="white-space: pre-line;"> FUNÇÃO INSERTION_SORT (A[], tamanho)\n        VARIÁVEIS\n                i, j, eleito\n        PARA I <- 1 ATÉ (tamanho-1) FAÇA\n                eleito <- A[i];\n                j <- i-1;\n                ENQUANTO ((j>=0) E (eleito < A[j])) FAÇA\n                          A[j+1]:= A[j];\n# Elemento de lista numerada\n                          j:=j-1;\n                FIM_ENQUANTO\n                A[j+1] <- eleito;\n        FIM_PARA\nFIM;</code>\n                  <br/>\n                  <br/>\n\n<a href="https://pt.wikipedia.org/wiki/Insertion_sort">Referência</a>\n</ion-content>\n<ion-footer><div class="row">\n  \n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n  </div>\n</div></ion-footer>'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/inserir/inserir.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], InserirPage);
    return InserirPage;
}());

//# sourceMappingURL=inserir.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalInserirCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the ModalInserirCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalInserirCodigoPage = /** @class */ (function () {
    function ModalInserirCodigoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalInserirCodigoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalFilaCodigoPage');
    };
    ModalInserirCodigoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalInserirCodigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-inserir-codigo',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-inserir-codigo/modal-inserir-codigo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>modal_inserir_aplicacao</ion-title>\n  </ion-navbar>\n  <button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da Pilha </h2>\n\n<button ion-button color="secondary" outline >Insere</button>\n<button ion-button color="danger" outline >Retira</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-inserir-codigo/modal-inserir-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalInserirCodigoPage);
    return ModalInserirCodigoPage;
}());

//# sourceMappingURL=modal-inserir-codigo.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalInserirAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the ModalInserirAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalInserirAplicacaoPage = /** @class */ (function () {
    function ModalInserirAplicacaoPage(alertCtrl, navCtrl, navParams, viewCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalInserirAplicacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalInserirAplicacaoPage');
    };
    ModalInserirAplicacaoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalInserirAplicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-inserir-aplicacao',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-inserir-aplicacao/modal-inserir-aplicacao.html"*/'<!--\n  Generated template for the ModalInserirAplicacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Insert - Aplicação\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">\n        <span ion-text color="primary" >Fechar</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da Inserir </h2>\n\n<button class="form-control" ion-button color="secondary" outline (click)="insert()">Inserir</button>\n<button class="form-control" ion-button color="danger" outline (click)="remove()">Remover</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-inserir-aplicacao/modal-inserir-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalInserirAplicacaoPage);
    return ModalInserirAplicacaoPage;
}());

//# sourceMappingURL=modal-inserir-aplicacao.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalListaCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    function ModalListaCodigoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalListaCodigoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalListaCodigoPage');
    };
    ModalListaCodigoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalListaCodigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-lista-codigo',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-lista-codigo/modal-lista-codigo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>modal_lista_codigo</ion-title>\n  </ion-navbar>\n  <button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da Pilha </h2>\n\n<button ion-button color="secondary" outline >Insere</button>\n<button ion-button color="danger" outline >Retira</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-lista-codigo/modal-lista-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalListaCodigoPage);
    return ModalListaCodigoPage;
}());

//# sourceMappingURL=modal-lista-codigo.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalListaAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    function ModalListaAplicacaoPage(alertCtrl, navCtrl, navParams, viewCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.lista = new Array();
    }
    ModalListaAplicacaoPage.prototype.insert = function () {
        this.lista.push(this.num);
        this.num = null;
    };
    ModalListaAplicacaoPage.prototype.remove = function () {
        var _this = this;
        if (this.lista.length > 0) {
            var idx = this.lista.findIndex(function (element) { return element == _this.num; });
            if (idx === -1) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Falha!',
                    subTitle: 'O elemento não foi encontrado!',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
            else {
                this.lista[idx] = null;
                var arrayAux = new Array();
                arrayAux = this.lista;
                this.lista = [];
                for (var i = 0; i < arrayAux.length; i++) {
                    if (arrayAux[i] != null) {
                        this.lista.push(arrayAux[i]);
                    }
                }
                this.num = null;
            }
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Falha!',
                subTitle: 'Lista está vazia, você não pode retirar!',
                buttons: ['Ok']
            });
            alert_2.present();
        }
    };
    ModalListaAplicacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalListaCodigoPage');
    };
    ModalListaAplicacaoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalListaAplicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-lista-aplicacao',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-lista-aplicacao/modal-lista-aplicacao.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Lista - Aplicação\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">\n        <span ion-text color="primary" >Fechar</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <div class="center">\n<h2> Execução da Lista </h2>\n<div class="row">\n  <div *ngIf="lista.length == 0">\n    <div style="color: red;">\n      Lista vazia!\n    </div>\n  </div>\n  <div *ngFor="let item of lista" style="width: 100%;">\n    <input class="form-control" type="number" style="width: 100%;text-align:center;" value={{item}}>\n  </div>\n</div>\n<br/>\n<h2> Operações da Lista </h2>\n<div class="row">\n  <div style="width: 100%;">\n    <input [(ngModel)]="num">\n  </div>\n</div>\n<button class="form-control" ion-button color="secondary" outline (click)="insert()">Inserir</button>\n<button class="form-control" ion-button color="danger" outline (click)="remove()">Remover</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-lista-aplicacao/modal-lista-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalListaAplicacaoPage);
    return ModalListaAplicacaoPage;
}());

//# sourceMappingURL=modal-lista-aplicacao.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalMisturaAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the ModalMisturaAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalMisturaAplicacaoPage = /** @class */ (function () {
    function ModalMisturaAplicacaoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalMisturaAplicacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalFilaCodigoPage');
    };
    ModalMisturaAplicacaoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalMisturaAplicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-mistura-aplicacao',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-mistura-aplicacao/modal-mistura-aplicacao.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>modal_mistura_aplicacao</ion-title>\n  </ion-navbar>\n  <button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da Pilha </h2>\n\n<button ion-button color="secondary" outline >Insere</button>\n<button ion-button color="danger" outline >Retira</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-mistura-aplicacao/modal-mistura-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalMisturaAplicacaoPage);
    return ModalMisturaAplicacaoPage;
}());

//# sourceMappingURL=modal-mistura-aplicacao.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalMisturaCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the ModalMisturaCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalMisturaCodigoPage = /** @class */ (function () {
    function ModalMisturaCodigoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalMisturaCodigoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalFilaCodigoPage');
    };
    ModalMisturaCodigoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalMisturaCodigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-mistura-codigo',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-mistura-codigo/modal-mistura-codigo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>modal_mistura_aplicacao</ion-title>\n  </ion-navbar>\n  <button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-header>\n\n\n<ion-content padding>\n<h2> Execução da Pilha </h2>\n\n<button ion-button color="secondary" outline >Insere</button>\n<button ion-button color="danger" outline >Retira</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-mistura-codigo/modal-mistura-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalMisturaCodigoPage);
    return ModalMisturaCodigoPage;
}());

//# sourceMappingURL=modal-mistura-codigo.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPilhaAplicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    function ModalPilhaAplicacaoPage(alertCtrl, navCtrl, navParams, viewCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.topo = 0;
        this.pilha = new Array();
    }
    ModalPilhaAplicacaoPage.prototype.insert = function () {
        this.pilha.reverse();
        this.pilha.push(this.num);
        this.num = null;
        this.pilha.reverse();
    };
    ModalPilhaAplicacaoPage.prototype.remove = function () {
        if (this.pilha.length > 0) {
            this.pilha.reverse();
            this.pilha.pop();
            this.pilha.reverse();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Falha!',
                subTitle: 'Pilha está vazia, você não pode retirar!',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    ModalPilhaAplicacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPilhaAplicacaoPage');
    };
    ModalPilhaAplicacaoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPilhaAplicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'reverse'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-pilha-aplicacao',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-pilha-aplicacao/modal-pilha-aplicacao.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Pilha - Aplicação\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">\n        <span ion-text color="primary" >Fechar</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="center">\n<h2> Execução da Pilha </h2>\n<div class="row">\n  <div *ngIf="pilha.length == 0">\n    <div style="color: red;">\n      Pilha vazia!\n    </div>\n  </div>\n  <div *ngFor="let item of pilha" style="width: 100%;">\n    <input class="form-control" type="number" style="width: 100%;text-align:center;" value={{item}}>\n  </div>\n</div>\n<br/>\n<h2> Operações da Pilha </h2>\n<div class="row">\n  <div style="width: 100%;">\n    <input [(ngModel)]="num">\n  </div>\n</div>\n<button class="form-control" ion-button color="secondary" outline (click)="insert()">Inserir</button>\n<button class="form-control" ion-button color="danger" outline (click)="remove()">Remover</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-pilha-aplicacao/modal-pilha-aplicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalPilhaAplicacaoPage);
    return ModalPilhaAplicacaoPage;
}());

//# sourceMappingURL=modal-pilha-aplicacao.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPilhaCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-modal-pilha-codigo',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-pilha-codigo/modal-pilha-codigo.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Código</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button icon-left (click)="closeModal()">\n  <ion-icon name="ios-arrow-round-back"></ion-icon>\n  Voltar\n</button>\n</ion-content>'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/modal-pilha-codigo/modal-pilha-codigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalPilhaCodigoPage);
    return ModalPilhaCodigoPage;
}());

//# sourceMappingURL=modal-pilha-codigo.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the QuickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuickPage = /** @class */ (function () {
    function QuickPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuickPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuickPage');
    };
    QuickPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quick',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/quick/quick.html"*/'<!--\n  Generated template for the PilhaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Quick</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h3>Conceito</h3>\n  <img class="fix_image" src="assets/imgs/Quicksort.gif"/>\n<p>O algoritmo quicksort é um método de ordenação muito rápido e eficiente, inventado por C.A.R. Hoare em 1960[1], quando visitou a Universidade de Moscovo como estudante. Naquela época, Hoare trabalhou em um projeto de tradução de máquina para o National Physical Laboratory. Ele criou o quicksort ao tentar traduzir um dicionário de inglês para russo, ordenando as palavras, tendo como objetivo reduzir o problema original em subproblemas que possam ser resolvidos mais fácil e rápido. Foi publicado em 1962 após uma série de refinamentos.</p>\n<h5> Segue abaixo um pseudocódigo</h5>\n\n<code style="white-space: pre-line;">\n  Quicksort (A como matriz, baixa como int, alta como int) [\n     if (baixo <alto) [\n         pivot_location = Partição (A, baixa, alta)\n         Quicksort (A, baixa, pivot_location)\n         Quicksort (A, pivot_location + 1, high)\n     ]\n]\nPartição (A como matriz, baixa como int, alta como int) [\n      pivô = A [baixo]\n      parte esquerda = baixa\n\n      para i = baixo + 1 a alto [\n          if (A [i] <pivot) então [\n              troca (A [i], A [parte esquerda + 1])\n              parte esquerda = parte esquerda + 1\n          ]\n      ]\n      troca (pivô, A [parte esquerda])\n\n     return (parte esquerda)]\n </code>\n                  <br/>\n                  <br/>\n<a href="https://pt.wikipedia.org/wiki/Quicksort">Referência</a>\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/quick/quick.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuickPage);
    return QuickPage;
}());

//# sourceMappingURL=quick.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisturaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_mistura_codigo_modal_mistura_codigo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_mistura_aplicacao_modal_mistura_aplicacao__ = __webpack_require__(113);
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
 * Generated class for the MisturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisturaPage = /** @class */ (function () {
    function MisturaPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    MisturaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MisturaPage');
    };
    MisturaPage.prototype.openModalCodigo = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_mistura_codigo_modal_mistura_codigo__["a" /* ModalMisturaCodigoPage */]);
        myModal.present();
        console.log('modal codigo aberto');
    };
    MisturaPage.prototype.openModalAplicacao = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_mistura_aplicacao_modal_mistura_aplicacao__["a" /* ModalMisturaAplicacaoPage */]);
        myModal.present();
        console.log('modal aplicacao aberto');
    };
    MisturaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mistura',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/mistura/mistura.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mistura - Conceito</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Conceito</h3>\n  <img class="fix_image" src="assets/imgs/Mergesort.gif"/>\n<p>O merge sort, ou ordenação por mistura, é um exemplo de algoritmo de ordenação por comparação do tipo dividir-para-conquistar.\nSua ideia básica consiste em Dividir (o problema em vários sub-problemas e resolver esses sub-problemas através da recursividade) e Conquistar (após todos os sub-problemas terem sido resolvidos ocorre a conquista que é a união das resoluções dos sub-problemas). Como o algoritmo Merge Sort usa a recursividade, há um alto consumo de memória e tempo de execução, tornando esta técnica não muito eficiente em alguns problemas.\n</p>\n<h5> Segue abaixo um pseudocódigo</h5>\n\n<code style="white-space: pre-line;">\n  função mergesort (var a como array)\n      se (n == 1) retorna a\n\n      var l1 como array = a [0] ... a [n / 2]\n      var l2 como array = a [n / 2 + 1] ... a [n]\n\n      l1 = mergesort (l1)\n      l2 = mergesort (l2)\n\n      Mesclagem de retorno (l1, l2)\nfim função\n\nfunção merge (var a como array, var b como array)\n      var c como array\n\n      enquanto (aeb tem elementos)\n           if (a [0]> b [0])\n                adicione b [0] ao final de c\n                remova b [0] de b\n           outro\n                adicione um [0] ao final de c\n                remova um [0] de um\n      while (a tem elementos)\n           adicione um [0] ao final de c\n           remova um [0] de um\n      while (b tem elementos)\n           adicione b [0] ao final de c\n           remova b [0] de b\n      retorno c\nfim função\n </code>\n                  <br/>\n                  <br/>\n<a href="https://pt.wikipedia.org/wiki/Merge_sort">Referência</a>\n</ion-content>\n<!--\n<ion-footer><div class="row">\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalCodigo()">Código</button>\n  </div>\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n  </div>\n</div></ion-footer>\n-->'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/mistura/mistura.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MisturaPage);
    return MisturaPage;
}());

//# sourceMappingURL=mistura.js.map

/***/ }),

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bolha/bolha.module": [
		291,
		19
	],
	"../pages/buscas/buscas.module": [
		289,
		18
	],
	"../pages/fila/fila.module": [
		290,
		17
	],
	"../pages/inserir/inserir.module": [
		292,
		16
	],
	"../pages/lista/lista.module": [
		293,
		15
	],
	"../pages/mistura/mistura.module": [
		308,
		14
	],
	"../pages/modal-bolha-aplicacao/modal-bolha-aplicacao.module": [
		294,
		13
	],
	"../pages/modal-bolha-codigo/modal-bolha-codigo.module": [
		295,
		12
	],
	"../pages/modal-fila-aplicacao/modal-fila-aplicacao.module": [
		296,
		11
	],
	"../pages/modal-fila-codigo/modal-fila-codigo.module": [
		297,
		10
	],
	"../pages/modal-inserir-aplicacao/modal-inserir-aplicacao.module": [
		298,
		9
	],
	"../pages/modal-inserir-codigo/modal-inserir-codigo.module": [
		299,
		8
	],
	"../pages/modal-lista-aplicacao/modal-lista-aplicacao.module": [
		300,
		7
	],
	"../pages/modal-lista-codigo/modal-lista-codigo.module": [
		301,
		6
	],
	"../pages/modal-mistura-aplicacao/modal-mistura-aplicacao.module": [
		302,
		5
	],
	"../pages/modal-mistura-codigo/modal-mistura-codigo.module": [
		303,
		4
	],
	"../pages/modal-pilha-aplicacao/modal-pilha-aplicacao.module": [
		304,
		3
	],
	"../pages/modal-pilha-codigo/modal-pilha-codigo.module": [
		305,
		2
	],
	"../pages/pilha/pilha.module": [
		306,
		1
	],
	"../pages/quick/quick.module": [
		307,
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fila_fila__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pilha_pilha__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_lista__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inserir_inserir__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bolha_bolha__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mistura_mistura__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__buscas_buscas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quick_quick__ = __webpack_require__(117);
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
        this.inserirPage = __WEBPACK_IMPORTED_MODULE_5__inserir_inserir__["a" /* InserirPage */];
        this.bolhaPage = __WEBPACK_IMPORTED_MODULE_6__bolha_bolha__["a" /* BolhaPage */];
        this.misturaPage = __WEBPACK_IMPORTED_MODULE_7__mistura_mistura__["a" /* MisturaPage */];
        this.buscasPage = __WEBPACK_IMPORTED_MODULE_8__buscas_buscas__["a" /* BuscasPage */];
        this.quickPage = __WEBPACK_IMPORTED_MODULE_9__quick_quick__["a" /* QuickPage */];
        this.filaPage = __WEBPACK_IMPORTED_MODULE_2__fila_fila__["a" /* FilaPage */];
        this.pilhaPage = __WEBPACK_IMPORTED_MODULE_3__pilha_pilha__["a" /* PilhaPage */];
        this.listaPage = __WEBPACK_IMPORTED_MODULE_4__lista_lista__["a" /* ListaPage */];
        this.inserirPage = __WEBPACK_IMPORTED_MODULE_5__inserir_inserir__["a" /* InserirPage */];
        this.bolhaPage = __WEBPACK_IMPORTED_MODULE_6__bolha_bolha__["a" /* BolhaPage */];
        this.misturaPage = __WEBPACK_IMPORTED_MODULE_7__mistura_mistura__["a" /* MisturaPage */];
        this.buscasPage = __WEBPACK_IMPORTED_MODULE_8__buscas_buscas__["a" /* BuscasPage */];
        this.quickPage = __WEBPACK_IMPORTED_MODULE_9__quick_quick__["a" /* QuickPage */];
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
    HomePage.prototype.OrdenacaoInserir = function () {
        this.navCtrl.push(this.inserirPage);
    };
    HomePage.prototype.OrdenacaoBolha = function () {
        this.navCtrl.push(this.bolhaPage);
    };
    HomePage.prototype.OrdenacaoMistura = function () {
        this.navCtrl.push(this.misturaPage);
    };
    HomePage.prototype.OrdenacaoBuscas = function () {
        this.navCtrl.push(this.buscasPage);
    };
    HomePage.prototype.OrdenacaoQuick = function () {
        this.navCtrl.push(this.quickPage);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-wrap >Estrutura de Dados - Conceito da Aplicação</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content padding no-bounce class="card-background-page home">\n  <div class="row">\n    <ion-col>\n      <ion-card (click)="EstruturaFila()">\n      <img class="home_image" src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.2;"/>\n      <div class="card-title">Fila</div>\n      <div class="card-subtitle">FIFO</div>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card (click)="EstruturaPilha()">\n      <img class="home_image" src="assets/imgs/Ordena.png" style="opacity: 0.2;"/>\n      <div class="card-title">Pilha</div>\n      <div class="card-subtitle">LIFO</div>\n      </ion-card>\n    </ion-col>\n  </div>\n  <div class="row">\n    <ion-col>\n      <ion-card (click)="EstruturaLista()">\n      <img class="home_image" src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.1;"/>\n      <div class="card-title">Lista</div>\n      <div class="card-subtitle">Sequência</div>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card (click)="OrdenacaoInserir()">\n      <img  class="home_image" src="assets/imgs/Ordena.png" style="opacity: 0.1;"/>\n      <div class="card-title">Inserir</div>\n      <div class="card-subtitle">Insert Sort</div>\n      </ion-card>\n    </ion-col>\n  </div>\n  <div class="row">\n      <ion-col>\n      <ion-card (click)="OrdenacaoBolha()">\n      <img class="home_image" src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.1;"/>\n      <div class="card-title">Bolha</div>\n      <div class="card-subtitle">Bubble Sort</div>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card (click)="OrdenacaoMistura()">\n      <img  class="home_image" src="assets/imgs/Ordena.png" style="opacity: 0.1;"/>\n      <div class="card-title">Mistura</div>\n      <div class="card-subtitle">Merge Sort</div>\n      </ion-card>\n    </ion-col>\n  </div>\n  <div class="row">\n      <ion-col>\n      <ion-card (click)="OrdenacaoQuick()">\n      <img class="home_image" src="assets/imgs/FilaPilhaLista.png" style="opacity: 0.1;"/>\n      <div class="card-title">Rápida</div>\n      <div class="card-subtitle">Quick Sort</div>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card (click)="OrdenacaoBuscas()">\n      <img  class="home_image" src="assets/imgs/Ordena.png" style="opacity: 0.1;"/>\n      <div style="margin-top: -10px !important" class="card-title">Binária e Sequencial</div>\n      <div style="padding-top: 15%" class="card-subtitle">Bin & Seque Search</div>\n      </ion-card>\n    </ion-col>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fila_fila__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pilha_pilha__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lista_lista__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inserir_inserir__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bolha_bolha__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mistura_mistura__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_buscas_buscas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_quick_quick__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_modal_fila_codigo_modal_fila_codigo__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modal_fila_aplicacao_modal_fila_aplicacao__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modal_pilha_codigo_modal_pilha_codigo__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modal_pilha_aplicacao_modal_pilha_aplicacao__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_modal_lista_codigo_modal_lista_codigo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modal_lista_aplicacao_modal_lista_aplicacao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_modal_inserir_codigo_modal_inserir_codigo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_modal_inserir_aplicacao_modal_inserir_aplicacao__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_modal_mistura_codigo_modal_mistura_codigo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_modal_mistura_aplicacao_modal_mistura_aplicacao__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modal_bolha_codigo_modal_bolha_codigo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modal_bolha_aplicacao_modal_bolha_aplicacao__ = __webpack_require__(107);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_bolha_bolha__["a" /* BolhaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inserir_inserir__["a" /* InserirPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mistura_mistura__["a" /* MisturaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modal_fila_codigo_modal_fila_codigo__["a" /* ModalFilaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_fila_aplicacao_modal_fila_aplicacao__["a" /* ModalFilaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modal_pilha_codigo_modal_pilha_codigo__["a" /* ModalPilhaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_pilha_aplicacao_modal_pilha_aplicacao__["a" /* ModalPilhaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_modal_lista_codigo_modal_lista_codigo__["a" /* ModalListaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modal_lista_aplicacao_modal_lista_aplicacao__["a" /* ModalListaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_modal_inserir_codigo_modal_inserir_codigo__["a" /* ModalInserirCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_modal_inserir_aplicacao_modal_inserir_aplicacao__["a" /* ModalInserirAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_modal_mistura_codigo_modal_mistura_codigo__["a" /* ModalMisturaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modal_mistura_aplicacao_modal_mistura_aplicacao__["a" /* ModalMisturaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modal_bolha_codigo_modal_bolha_codigo__["a" /* ModalBolhaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modal_bolha_aplicacao_modal_bolha_aplicacao__["a" /* ModalBolhaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_buscas_buscas__["a" /* BuscasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_quick_quick__["a" /* QuickPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buscas/buscas.module#BuscasPageModule', name: 'BuscasPage', segment: 'buscas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fila/fila.module#FilaPageModule', name: 'FilaPage', segment: 'fila', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bolha/bolha.module#BolhaPageModule', name: 'BolhaPage', segment: 'bolha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inserir/inserir.module#InserirPageModule', name: 'InserirPage', segment: 'inserir', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista/lista.module#ListaPageModule', name: 'ListaPage', segment: 'lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-bolha-aplicacao/modal-bolha-aplicacao.module#ModalBolhaAplicacaoPageModule', name: 'ModalBolhaAplicacaoPage', segment: 'modal-bolha-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-bolha-codigo/modal-bolha-codigo.module#ModalBolhaCodigoPageModule', name: 'ModalBolhaCodigoPage', segment: 'modal-bolha-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-fila-aplicacao/modal-fila-aplicacao.module#ModalFilaAplicacaoPageModule', name: 'ModalFilaAplicacaoPage', segment: 'modal-fila-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-fila-codigo/modal-fila-codigo.module#ModalFilaCodigoPageModule', name: 'ModalFilaCodigoPage', segment: 'modal-fila-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-inserir-aplicacao/modal-inserir-aplicacao.module#ModalInserirAplicacaoPageModule', name: 'ModalInserirAplicacaoPage', segment: 'modal-inserir-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-inserir-codigo/modal-inserir-codigo.module#ModalInserirCodigoPageModule', name: 'ModalInserirCodigoPage', segment: 'modal-inserir-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-lista-aplicacao/modal-lista-aplicacao.module#ModalListaAplicacaoPageModule', name: 'ModalListaAplicacaoPage', segment: 'modal-lista-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-lista-codigo/modal-lista-codigo.module#ModalListaCodigoPageModule', name: 'ModalListaCodigoPage', segment: 'modal-lista-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-mistura-aplicacao/modal-mistura-aplicacao.module#ModalMisturaAplicacaoPageModule', name: 'ModalMisturaAplicacaoPage', segment: 'modal-mistura-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-mistura-codigo/modal-mistura-codigo.module#ModalMisturaCodigoPageModule', name: 'ModalMisturaCodigoPage', segment: 'modal-mistura-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-pilha-aplicacao/modal-pilha-aplicacao.module#ModalPilhaAplicacaoPageModule', name: 'ModalPilhaAplicacaoPage', segment: 'modal-pilha-aplicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-pilha-codigo/modal-pilha-codigo.module#ModalPilhaCodigoPageModule', name: 'ModalPilhaCodigoPage', segment: 'modal-pilha-codigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pilha/pilha.module#PilhaPageModule', name: 'PilhaPage', segment: 'pilha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quick/quick.module#QuickPageModule', name: 'QuickPage', segment: 'quick', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mistura/mistura.module#MisturaPageModule', name: 'MisturaPage', segment: 'mistura', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fila_fila__["a" /* FilaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pilha_pilha__["a" /* PilhaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bolha_bolha__["a" /* BolhaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inserir_inserir__["a" /* InserirPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mistura_mistura__["a" /* MisturaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modal_fila_codigo_modal_fila_codigo__["a" /* ModalFilaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_fila_aplicacao_modal_fila_aplicacao__["a" /* ModalFilaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modal_pilha_codigo_modal_pilha_codigo__["a" /* ModalPilhaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_pilha_aplicacao_modal_pilha_aplicacao__["a" /* ModalPilhaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_modal_lista_codigo_modal_lista_codigo__["a" /* ModalListaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modal_lista_aplicacao_modal_lista_aplicacao__["a" /* ModalListaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_modal_inserir_codigo_modal_inserir_codigo__["a" /* ModalInserirCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_modal_inserir_aplicacao_modal_inserir_aplicacao__["a" /* ModalInserirAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_modal_mistura_codigo_modal_mistura_codigo__["a" /* ModalMisturaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modal_mistura_aplicacao_modal_mistura_aplicacao__["a" /* ModalMisturaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modal_bolha_codigo_modal_bolha_codigo__["a" /* ModalBolhaCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modal_bolha_aplicacao_modal_bolha_aplicacao__["a" /* ModalBolhaAplicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_buscas_buscas__["a" /* BuscasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_quick_quick__["a" /* QuickPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(213);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_fila_codigo_modal_fila_codigo__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_fila_aplicacao_modal_fila_aplicacao__ = __webpack_require__(104);
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
            selector: 'page-fila',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/fila/fila.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Fila - Conceito</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Conceito</h3>\n   <img class="fix_image" src="assets/imgs/Fila.gif"/>\n<p>Uma fila é uma estrutura de dados dinâmica que admite remoção de elementos e inserção de novos objetos.  </p>\n<p>Mais especificamente, uma  fila é uma estrutura sujeita à seguinte regra de operação:  sempre que houver uma remoção,o elemento removido é o que está na estrutura há mais tempo.</p>\n<p>Em outras palavras, o primeiro objeto inserido na fila é também o primeiro a ser removido. Essa política é conhecida pela sigla FIFO (= First-In-First-Out).\n</p>\n<h5> Segue abaixo um pseudocódigo</h5>\n\n<code style="white-space: pre-line;">\n Algoritmo Fila\nvar\nvarTipo fila_reg = registro\nvarTipo fila_reg = reginicio: inteiro\nvarTipo fila_reg = regfim: inteiro\nvarTipo fila_reg = regelemento: vetor [1.50] de inteiro\nvarTipo fila_reg = fim\nvartotal: inteiro\nvarfila: fila_reg\n\n inicio\n varfila.inicio ← 0\n varfila.fim ← 0\n vartotal ← 0\n \n Função vazia ( ): lógica\n varinicio\n varvaSe(total = 0) entao\n varvaSe(return .v.\n varvaSenão\n varvaSe(return .f.\n varvafim-se\n varfim\n \n Função cheia ( ): lógica\n varinicio\n varvaSe(total >=50) então\n varvaSe(return .v.\n varvaSenão\n varvaSe(return .f.\n varvafim-se\n varfim\n \n Procedimento enfileirar (elem: inteiro)\n varinicio\n varvaSe(cheia ( ) = .f..) então\n arvaSe( fila.elemento[inicio] ← elem\n arvaSe( fila.fim ← fila.fim + 1\n arvaSe( total ← total + 1\n varvaSe(fila.fim >= 50) então\n varvaSe( fila.fim = 0\n varvafim-se\n varva Senão\n varva enMostre(“Fila cheia”)\n var vafim-se\n var fim\n \n Funcao desenfileirar ( ): inteiro\n varvar\n varv excluido: inteiro\n varinicio\n varva Se (vazia ( ) = .f.) então\n arva enexcluido ← fila.elemento[inicio]\n arva enfila.inicio ← fila.inicio + 1\n arva enSe (fila.inicio > = tamanho) então\n arva enfila.inicio ← 0\n arv a fim-se\n arva total ← total – 1 retorne excluido\n varva Senão\n varva excluído ← nulo\n varva retorne excluído\n varva fim-se\n varfim\n \n Procedimento exibefila ( )\n varvar\n Procedi: inteiro\n varinicio\n Proced Para (i ← 0 até total) faça\n Proced ParMostre (“Posição “, i, “ valor ”, elemento [i] )\n Proced fim-para\n varfim\n fim\n                </code>\n                  <br/>\n                  <br/>\n\n<a href="https://www.ime.usp.br/~pf/algoritmos/aulas/fila.html">Referência</a>\n</ion-content>\n<ion-footer><div class="row">\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n  </div>\n</div></ion-footer>'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/fila/fila.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_lista_codigo_modal_lista_codigo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_lista_aplicacao_modal_lista_aplicacao__ = __webpack_require__(112);
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
            selector: 'page-lista',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/lista/lista.html"*/'<!--\n  Generated template for the ListaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lista - Conceito</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Conceito</h3>\n  <img class="fix_image_min" src="assets/imgs/Lista.png"/>\n<p>Uma lista encadeada é uma representação de uma sequência de objetos, todos do mesmo tipo, como feito na memória RAM (= random access memory) do computador.</p>\n\n<p>Ela é composta por células que apontam para o próximo elemento da lista. Para "ter" uma lista, basta guardar seu primeiro elemento, e seu último elemento aponta para uma célula nula.</p>\n\n<p>Cada elemento da sequência é armazenado em uma célula da lista: o primeiro elemento na primeira célula, o segundo na segunda e assim por diante.\n</p>\n<h5> Segue abaixo um pseudocódigo</h5>\n\n<code style="white-space: pre-line;">\n  Nó de registro [\n     dados // O dado a ser armazenado no nó\n     próximo // Referência ao próximo nó; nulo para o último nó\n  ]\n  Lista de registros [\n      nó primironó // ponteiro para o primeiro nó da lista; null para uma lista\n      vazio\n  ]\nA lista é simples e fácil de abrir primeiro e depois de cada próximo até fim.\n\n  nó: = list.firstnó\n  enquanto nó não nulo [\n      nó: = nó.next\n  ]\n </code>\n                  <br/>\n                  <br/>\n<a href="https://pt.wikipedia.org/wiki/Lista_ligada">Referência</a>\n</ion-content>\n<ion-footer><div class="row">\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n  </div>\n</div></ion-footer>'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/lista/lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_pilha_codigo_modal_pilha_codigo__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_pilha_aplicacao_modal_pilha_aplicacao__ = __webpack_require__(115);
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
            selector: 'page-pilha',template:/*ion-inline-start:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/pilha/pilha.html"*/'<!--\n  Generated template for the PilhaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pilha - Conceito</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h3>Conceito</h3>\n  <div class="row">\n    <div class="col">\n      <img class="fix_image" src="assets/imgs/Pilhain.gif"/>\n    </div>\n    <div class="col">\n      <img class="fix_image" src="assets/imgs/Pilhaout.gif"/>\n    </div>\n  </div>\n<p>Uma pilha é uma estrutura de dados que admite remoção de elementos e inserção de novos objetos. </p>\n<p>Mais especificamente, uma  pilha (= stack)  é uma estrutura sujeita à seguinte regra de operação:  sempre que houver uma remoção,\no elemento removido é o que está na estrutura há menos tempo.</p>\n<p>Em outras palavras, o primeiro objeto a ser inserido na pilha é o último a ser removido. Essa política é conhecida pela sigla LIFO (= Last-In-First-Out).\n</p>\n<h5> Segue abaixo um pseudocódigo</h5>\n\n<code style="white-space: pre-line;">\n  registro Nodo\n     dados\n     próximo\n \n   Pilha de discos\n      Node stackPointer\n \n   função push (Stack stack, Element element)\n      novo (newNode)\n      newNode.data: = elemento\n      newNode.next: = stack.stackPointer\n      stack.stackPointer: = newNode\n \n  função pop (pilha Stack)\n      nó: = stack.stackPointer\n      stack.stackPointer: = node.next\n      elemento: = node.data\n      elemento de retorno\n \n  função top (pilha Stack)\n      return stack.stackPointer.data\n \n  comprimento da função (pilha de pilha)\n      comprimento: = 0\n      nó: = stack.stackPointer\n      enquanto nó não nulo\n          comprimento: = comprimento + 1\n          nó: = node.next\n     \n      retorna tamanho;\n </code>\n                  <br/>\n                  <br/>\n<a href="https://www.ime.usp.br/~pf/algoritmos/aulas/pilha.html">Referência</a>\n</ion-content>\n<ion-footer><div class="row">\n\n  <div class="col">\n    <button ion-button full color="secondary" (click)="openModalAplicacao()">Aplicação</button>\n  </div>\n</div></ion-footer>'/*ion-inline-end:"/home/bergpb/Downloads/Desenvolvimento/OrdenacaoAlgoritmos/src/pages/pilha/pilha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], PilhaPage);
    return PilhaPage;
}());

//# sourceMappingURL=pilha.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map