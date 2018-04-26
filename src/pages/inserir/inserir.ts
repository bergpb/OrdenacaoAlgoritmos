import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalInserirCodigoPage } from '../modal-inserir-codigo/modal-inserir-codigo';
import { ModalInserirAplicacaoPage } from '../modal-inserir-aplicacao/modal-inserir-aplicacao';

@IonicPage()
@Component({
  selector: 'page-inserir',
  templateUrl: 'inserir.html',
})
export class InserirPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController){
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InserirPage');
  }
   openModalCodigo(){
    let myModal = this.modalCtrl.create(ModalInserirCodigoPage);
    myModal.present();
    console.log('modal codigo aberto');
  }
  
  openModalAplicacao(){
    let myModal = this.modalCtrl.create(ModalInserirAplicacaoPage);
    myModal.present();
    console.log('modal aplicacao aberto');
  }

}
