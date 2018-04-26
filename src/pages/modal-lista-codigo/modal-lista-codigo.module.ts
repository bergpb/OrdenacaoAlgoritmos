import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalListaCodigoPage } from './modal-lista-codigo';

@NgModule({
  declarations: [
    ModalListaCodigoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalListaCodigoPage),
  ],
})
export class ModalListaCodigoPageModule {}
