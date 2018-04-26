import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalMisturaCodigoPage } from '../modal-mistura-codigo/modal-mistura-codigo';
import { ModalMisturaAplicacaoPage } from '../modal-mistura-aplicacao/modal-mistura-aplicacao';

/**
 * Generated class for the MisturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mistura',
  templateUrl: 'mistura.html',
})
export class MisturaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisturaPage');
  }
openModalCodigo(){
    let myModal = this.modalCtrl.create(ModalMisturaCodigoPage);
    myModal.present();
    console.log('modal codigo aberto');
  }
  
  openModalAplicacao(){
    let myModal = this.modalCtrl.create(ModalMisturaAplicacaoPage);
    myModal.present();
    console.log('modal aplicacao aberto');
  }
}
