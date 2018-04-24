import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalFilaAplicacaoPage } from './modal-fila-aplicacao';

@NgModule({
  declarations: [
    ModalFilaAplicacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalFilaAplicacaoPage),
  ],
})
export class ModalFilaAplicacaoPageModule {}
