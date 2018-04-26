import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalFilaAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-fila-aplicacao',
  templateUrl: 'modal-fila-aplicacao.html',
})
export class ModalFilaAplicacaoPage {

  public inicio: any = 0;
  public fim: any = -1;
  public num: any;
  public fila: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.fila = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFilaAplicacaoPage');
  }

  atualizaFila(){
    let filaAux = new Array();
    filaAux = this.fila;
    let inicioAux = this.inicio;
    this.fila = new Array();
    console.log("Fora do While");
    while(inicioAux <= this.fim){
      console.log("Dentro do While");
      console.log(filaAux[inicioAux]);
      this.fila.push(filaAux[inicioAux]);
      inicioAux++;
    }

    this.inicio = 0;
    this.fim = this.fila.length - 1;
  }

  insert(){
    console.log("Valor inserido: " + this.num);
    this.fim++;
    this.fila.push(this.num);
    console.log(this.fila);
    this.num = null;
  }

  remove(){
    this.inicio++;
    this.atualizaFila();
    console.log(this.fila);
    console.log(this.inicio);
    console.log(this.fim);
  }



  closeModal() {
    this.viewCtrl.dismiss();
  }
}
