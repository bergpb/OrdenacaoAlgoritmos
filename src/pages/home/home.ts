import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilaPage } from '../fila/fila';
import { PilhaPage } from '../pilha/pilha';
import { ListaPage } from '../lista/lista';
import { InserirPage } from '../inserir/inserir';
import { BolhaPage } from '../bolha/bolha';
import { MisturaPage } from '../mistura/mistura';
import { BuscasPage } from '../buscas/buscas';
import { QuickPage } from '../quick/quick';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filaPage: any = FilaPage;
  pilhaPage: any = PilhaPage;
  listaPage: any = ListaPage;
  inserirPage: any = InserirPage;
  bolhaPage: any = BolhaPage;
  misturaPage: any = MisturaPage;
  buscasPage: any = BuscasPage;
  quickPage: any = QuickPage;
  constructor(public navCtrl: NavController) {
  this.filaPage = FilaPage;
  this.pilhaPage = PilhaPage;
  this.listaPage = ListaPage;
  this.inserirPage = InserirPage;
  this.bolhaPage = BolhaPage;
  this.misturaPage = MisturaPage;
  this.buscasPage = BuscasPage;
  this.quickPage = QuickPage;
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
  OrdenacaoInserir(){
    this.navCtrl.push(this.inserirPage);
  }
  OrdenacaoBolha(){
    this.navCtrl.push(this.bolhaPage);
  }
  OrdenacaoMistura(){
    this.navCtrl.push(this.misturaPage);
  }
  OrdenacaoBuscas(){
    this.navCtrl.push(this.buscasPage);
  }
  OrdenacaoQuick(){
    this.navCtrl.push(this.quickPage);
  }
}
