import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PilhaPage } from './pilha';

@NgModule({
  declarations: [
    PilhaPage,
  ],
  imports: [
    IonicPageModule.forChild(PilhaPage),
  ],
})
export class PilhaPageModule {}
