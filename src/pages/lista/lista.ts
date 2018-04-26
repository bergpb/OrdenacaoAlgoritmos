import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalListaCodigoPage } from '../modal-lista-codigo/modal-lista-codigo';
import { ModalListaAplicacaoPage } from '../modal-lista-aplicacao/modal-lista-aplicacao';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }
  openModalCodigo(){
    let myModal = this.modalCtrl.create(ModalListaCodigoPage);
    myModal.present();
    console.log('modal codigo aberto');
  }
  
  openModalAplicacao(){
    let myModal = this.modalCtrl.create(ModalListaAplicacaoPage);
    myModal.present();
    console.log('modal aplicacao aberto');
  }

}
