import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {AlertController} from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { NativeAudio } from '@ionic-native/native-audio';


/**
 * Generated class for the GameMenu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game-menu',
  templateUrl: 'game-menu.html',
})
export class GameMenu {
  age:any;
  game1 =       [1,2,4,3,3,4,2,1,2,3,1,4,4,1,3,2];
  game1_begin = [0,0,4,0,0,4,0,1,2,0,0,4,0,0,3,0];
  icon_start;
  audio:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController,private nativeAudio: NativeAudio ) {
    this.age = this.navParams.get('age');

  }

  ionViewDidLoad() {
    this.preset_game();

    this.ageChanged();

  }
  preset_game(){
    if (this.age == 'child') {
      this.playmusic();

      for (var i = 0; i < this.game1_begin.length; i++) {

        if (this.game1_begin[i] != 0) {
          if (this.game1_begin[i] == 1) {
            this.icon_start = 'smile_1';
          } else if (this.game1_begin[i] == 2) {
            this.icon_start = 'smile_2';
          } else if (this.game1_begin[i] == 3) {
            this.icon_start = 'smile_3';
          } else if (this.game1_begin[i] == 4) {
            this.icon_start = 'smile_4';
          }

          let cell = document.getElementById('child_icon_' + i);
          cell.setAttribute("src","../../assets/img/"+this.icon_start+".png" );


        }

      }
    }

  }

  playmusic(){
    this.audio = new Audio("../../assets/happy.mp3");
    this.audio.play();

  }

  stopmusic(){
    this.audio.stop();

  }

  ageChanged(){

    let background = document.getElementById('background_main');
    if(this.age == 'child'){
      this.preset_game();
      background.setAttribute("style", "background-color: #FEEA49");

    }else if( this.age == 'adult'){

      background.setAttribute("style", "background-color: #8C78FE");


    }else{
      background.setAttribute("style", "background-color: #EA4842");


    }



  }

  cell_clicked(cell_id){
    let cell = document.getElementById('child_icon_'+cell_id);
    console.log(cell);

    let alert = this.alertCtrl.create({
      title: 'Wähle aus!',
      message:'',
      cssClass:'alerting2',
      enableBackdropDismiss:true,
      buttons: [
        {
          text:'',
          cssClass:'alerting2',
          handler: () => {
            this.changeTO("smile_1",cell,cell_id,1)
          }
        },
        {
          text:'',
          cssClass:'alerting2',
          handler: () => {

            this.changeTO("smile_2",cell,cell_id,2)
          }
        },
        {
          text:'',
          cssClass:'alerting2',
          handler: () => {

            this.changeTO("smile_3",cell,cell_id,3)
          }
        },
        {
          text:'',
          cssClass:'alerting2',
          handler: () => {

            this.changeTO("smile_4",cell,cell_id,4)
          }
        }

      ]
    });
    alert.present();







  }

  falseanswer(){

      let actionSheet = this.actionSheetCtrl.create({
        title: '   ',
        cssClass: 'actionSheet',

        buttons: [
          {
            text: 'Weiter',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });

      actionSheet.present();
    }




  changeTO(icon,cell,id,solution){

    if(this.game1[id]==solution){
      cell.setAttribute("src", "../../assets/img/"+icon+".png");

    }else{

      this.falseanswer();

    }




  }

  change_age(){
    console.log("check");
    let alert = this.alertCtrl.create({
      title: 'Ändere dein Alter',
      message:'',
      cssClass:'alerting',
      enableBackdropDismiss:true,
      buttons: [
        {
          text:'',
          cssClass:'alerting',
          handler: () => {
            this.age = "child";
            this.ageChanged()
          }
        },
        {
          text:'',
          cssClass:'alerting',
          handler: () => {
            this.age = "adult";
            this.audio.pause();
            this.ageChanged()
          }
        },
        {
          text:'',
          cssClass:'alerting',
          handler: () => {
            this.age = "senior";
            this.audio.pause();
            this.ageChanged()
          }
        }

      ]
    });
    alert.present();

  }

}
