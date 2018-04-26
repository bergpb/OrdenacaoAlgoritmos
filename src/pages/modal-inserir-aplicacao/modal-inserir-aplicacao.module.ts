import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalInserirAplicacaoPage } from './modal-inserir-aplicacao';

@NgModule({
  declarations: [
    ModalInserirAplicacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalInserirAplicacaoPage),
  ],
})
export class ModalInserirAplicacaoPageModule {}
