import { Component, Pipe } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the ModalPilhaAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Pipe({
  name: 'reverse'
})

@IonicPage()
@Component({
  selector: 'page-modal-pilha-aplicacao',
  templateUrl: 'modal-pilha-aplicacao.html',
})
export class ModalPilhaAplicacaoPage {

  public topo: any = 0;
  public num: any;
  public pilha: any;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.pilha = new Array();
  }

  insert(){
    this.pilha.reverse();
    this.pilha.push(this.num);
    this.num = null;
    this.pilha.reverse();
  }

  remove(){
    if(this.pilha.length > 0){
      this.pilha.reverse();
      this.pilha.pop();
      this.pilha.reverse();
    } else {
      let alert = this.alertCtrl.create({
      title: 'Falha!',
      subTitle: 'Pilha está vazia, você não pode retirar!',
      buttons: ['Ok']
      });
      alert.present();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPilhaAplicacaoPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
