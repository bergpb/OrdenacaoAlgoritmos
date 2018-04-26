import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FilaPage } from '../pages/fila/fila';
import { PilhaPage } from '../pages/pilha/pilha';
import { ListaPage } from '../pages/lista/lista';
import { InserirPage } from '../pages/inserir/inserir';
import { BolhaPage } from '../pages/bolha/bolha';
import { MisturaPage } from '../pages/mistura/mistura';
import { ModalFilaCodigoPage } from '../pages/modal-fila-codigo/modal-fila-codigo';
import { ModalFilaAplicacaoPage } from '../pages/modal-fila-aplicacao/modal-fila-aplicacao';
import { ModalPilhaCodigoPage } from '../pages/modal-pilha-codigo/modal-pilha-codigo';
import { ModalPilhaAplicacaoPage } from '../pages/modal-pilha-aplicacao/modal-pilha-aplicacao';
import { ModalListaCodigoPage } from '../pages/modal-lista-codigo/modal-lista-codigo';
import { ModalListaAplicacaoPage } from '../pages/modal-lista-aplicacao/modal-lista-aplicacao';
import { ModalInserirCodigoPage } from '../pages/modal-inserir-codigo/modal-inserir-codigo';
import { ModalInserirAplicacaoPage } from '../pages/modal-inserir-aplicacao/modal-inserir-aplicacao';
import { ModalMisturaCodigoPage } from '../pages/modal-mistura-codigo/modal-mistura-codigo';
import { ModalMisturaAplicacaoPage } from '../pages/modal-mistura-aplicacao/modal-mistura-aplicacao';
import { ModalBolhaCodigoPage } from '../pages/modal-bolha-codigo/modal-bolha-codigo';
import { ModalBolhaAplicacaoPage } from '../pages/modal-bolha-aplicacao/modal-bolha-aplicacao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilaPage,
    PilhaPage,
    ListaPage,
    BolhaPage,
    InserirPage,
    MisturaPage,
    ModalFilaCodigoPage,
    ModalFilaAplicacaoPage,
    ModalPilhaCodigoPage,
    ModalPilhaAplicacaoPage,
    ModalListaCodigoPage,
    ModalListaAplicacaoPage,
    ModalInserirCodigoPage,
    ModalInserirAplicacaoPage,
    ModalMisturaCodigoPage,
    ModalMisturaAplicacaoPage,
    ModalBolhaCodigoPage,
    ModalBolhaAplicacaoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilaPage,
    PilhaPage,
    ListaPage,
     BolhaPage,
    InserirPage,
    MisturaPage,
    ModalFilaCodigoPage,
    ModalFilaAplicacaoPage,
    ModalPilhaCodigoPage,
    ModalPilhaAplicacaoPage,
    ModalListaCodigoPage,
    ModalListaAplicacaoPage,
    ModalInserirCodigoPage,
    ModalInserirAplicacaoPage,
    ModalMisturaCodigoPage,
    ModalMisturaAplicacaoPage,
    ModalBolhaCodigoPage,
    ModalBolhaAplicacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
