import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPilhaCodigoPage } from '../modal-pilha-codigo/modal-pilha-codigo';
import { ModalPilhaAplicacaoPage } from '../modal-pilha-aplicacao/modal-pilha-aplicacao';

@IonicPage()
@Component({
  selector: 'page-pilha',
  templateUrl: 'pilha.html',
})
export class PilhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PilhaPage');
  }
openModalCodigo(){
    let myModal = this.modalCtrl.create(ModalPilhaCodigoPage);
    myModal.present();
    console.log('modal codigo aberto');
  }
  
  openModalAplicacao(){
    let myModal = this.modalCtrl.create(ModalPilhaAplicacaoPage);
    myModal.present();
    console.log('modal aplicacao aberto');
  }
}
