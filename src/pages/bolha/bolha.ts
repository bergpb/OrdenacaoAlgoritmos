import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalBolhaCodigoPage } from '../modal-bolha-codigo/modal-bolha-codigo';
import { ModalBolhaAplicacaoPage } from '../modal-bolha-aplicacao/modal-bolha-aplicacao';

/**
 * Generated class for the BolhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bolha',
  templateUrl: 'bolha.html',
})
export class BolhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BolhaPage');
  }
 
  openModalCodigo(){
    let myModal = this.modalCtrl.create(ModalBolhaCodigoPage);
    myModal.present();
    console.log('modal codigo aberto');
  }
  
  openModalAplicacao(){
    let myModal = this.modalCtrl.create(ModalBolhaAplicacaoPage);
    myModal.present();
    console.log('modal aplicacao aberto');
  }
}
