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
import { ModalFilaCodigoPage } from '../pages/modal-fila-codigo/modal-fila-codigo';
import { ModalFilaAplicacaoPage } from '../pages/modal-fila-aplicacao/modal-fila-aplicacao';
import { ModalPilhaCodigoPage } from '../pages/modal-pilha-codigo/modal-pilha-codigo';
import { ModalPilhaAplicacaoPage } from '../pages/modal-pilha-aplicacao/modal-pilha-aplicacao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilaPage,
    PilhaPage,
    ListaPage,
    ModalFilaCodigoPage,
    ModalFilaAplicacaoPage,
    ModalPilhaCodigoPage,
    ModalPilhaAplicacaoPage
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
    ModalFilaCodigoPage,
    ModalFilaAplicacaoPage,
    ModalPilhaCodigoPage,
    ModalPilhaAplicacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
