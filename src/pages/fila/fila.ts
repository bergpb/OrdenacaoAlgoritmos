import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalFilaCodigo } from '../modal-fila-codigo/modal-fila-codigo';
import { ModalFilaAplicacao } from '../modal-fila-aplicacao/modal-fila-aplicacao';

@IonicPage()
@Component({
  selector: 'page-fila',
  templateUrl: 'fila.html',
})
export class FilaPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController){
                this.ModalFilaCodigo = ModalFilaCodigo;
                this.ModalFilaAplicacao = ModalFilaAplicacao;
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilaPage');
  }
  
  openModalCodigo(){
    let myModal = this.modalCtrl.create(this.ModalFilaCodigo);
    myModal.present();
    console.log('modal codigo aberto');
  }
  
  openModalAplicacao(){
    let myModal = this.modalCtrl.create(this.ModalFilaAplicacao);
    myModal.present();
    console.log('modal aplicacao aberto');
  }

}