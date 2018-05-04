import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-bolha-aplicacao',
  templateUrl: 'modal-bolha-aplicacao.html',
})
export class ModalBolhaAplicacaoPage {

  public lista : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.lista = new Array();
    this.lista.push({"value" : 1});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFilaCodigoPage');
  }

  addInput(){
    let num = Math.floor((Math.random() * 100) + 1);
    this.lista.push({"value" : num});
    console.log(this.lista);
  }

  ordenar(){
    let aux;
    for (let i = 0; i < this.lista.length; i++) {
      for (let j = 0; j < this.lista.length; j++) {
          if(this.lista[i].value < this.lista[j].value){
            aux = this.lista[i].value;
            this.lista[i].value = this.lista[j].value;
            this.lista[j].value = aux;
        }
      }
    }
    console.log(this.lista);
  }

   closeModal() {
    this.viewCtrl.dismiss();
  }

}
