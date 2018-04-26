import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscasPage } from './buscas';

@NgModule({
  declarations: [
    BuscasPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscasPage),
  ],
})
export class BuscasPageModule {}
