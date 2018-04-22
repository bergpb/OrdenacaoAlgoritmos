import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilaPage } from '../fila/fila';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filaPage: any;
  
  constructor(public navCtrl: NavController) {
    this.filaPage = FilaPage;
  }
  Estrutura(){
    this.navCtrl.push(this.filaPage, {
            
        });
  }
}
