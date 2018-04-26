import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the ModalListaAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-lista-aplicacao',
  templateUrl: 'modal-lista-aplicacao.html',
})
export class ModalListaAplicacaoPage {

  public num: any;
  public lista: any;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.lista = new Array();
  }

  insert(){
    this.lista.push(this.num);
    this.num = null;
  }

  remove(){
    if(this.lista.length > 0){
      var idx = this.lista.findIndex(element => element == this.num);
      if(idx === -1){
        let alert = this.alertCtrl.create({
        title: 'Falha!',
        subTitle: 'O elemento não foi encontrado!',
        buttons: ['Ok']
        });
        alert.present();
      } else {
        this.lista[idx] = null;
        let arrayAux = new Array();
        arrayAux = this.lista;
        this.lista = [];
        for(let i = 0; i < arrayAux.length; i++){
          if(arrayAux[i] != null){
            this.lista.push(arrayAux[i]);
          }
        }
        this.num = null;
      }

    } else {
      let alert = this.alertCtrl.create({
      title: 'Falha!',
      subTitle: 'Lista está vazia, você não pode retirar!',
      buttons: ['Ok']
      });
      alert.present();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalListaCodigoPage');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }

}
