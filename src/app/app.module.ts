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
import { ModalFilaCodigo } from '../pages/modal-fila-codigo/modal-fila-codigo';
import { ModalFilaAplicacao } from '../pages/modal-fila-aplicacao/modal-fila-aplicacao';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilaPage,
    PilhaPage,
    ListaPage,
    ModalFilaCodigo,
    ModalFilaAplicacao
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
    ModalFilaCodigo,
    ModalFilaAplicacao
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
