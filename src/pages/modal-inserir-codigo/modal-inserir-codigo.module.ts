import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalInserirCodigoPage } from './modal-inserir-codigo';

@NgModule({
  declarations: [
    ModalInserirCodigoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalInserirCodigoPage),
  ],
})
export class ModalInserirCodigoPageModule {}
