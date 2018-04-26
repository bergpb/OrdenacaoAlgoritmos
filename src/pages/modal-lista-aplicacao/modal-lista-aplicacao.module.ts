import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalListaAplicacaoPage } from './modal-lista-aplicacao';

@NgModule({
  declarations: [
    ModalListaAplicacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalListaAplicacaoPage),
  ],
})
export class ModalListaAplicacaoPageModule {}
