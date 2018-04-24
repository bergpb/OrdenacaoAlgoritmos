import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilaPage } from '../fila/fila';
import { PilhaPage } from '../pilha/pilha';
import { ListaPage } from '../lista/lista';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filaPage: any = FilaPage;
  pilhaPage: any = PilhaPage;
  listaPage: any = ListaPage;
  
  constructor(public navCtrl: NavController) {
  this.filaPage = FilaPage;
  this.pilhaPage = PilhaPage;
  this.listaPage = ListaPage;
  }
  EstruturaFila(){
    this.navCtrl.push(this.filaPage);
  }
  EstruturaPilha(){
    this.navCtrl.push(this.pilhaPage);
  }
  EstruturaLista(){
    this.navCtrl.push(this.listaPage);
  }
}
