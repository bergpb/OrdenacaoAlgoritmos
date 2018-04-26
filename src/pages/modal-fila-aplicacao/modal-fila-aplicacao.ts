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
  
  num: integer;
  fila: any = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFilaAplicacaoPage');
  }
  
  insert(){
    console.log("Valor inserido: " + this.num);
    this.fila.push(this.num);
    console.log(this.fila);
    this.num = "";
  }
  
  remove(){
    console.log("Valor removido: " + this.num);
    this.fila.splice();
    console.log(this.fila);
  }
  
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
