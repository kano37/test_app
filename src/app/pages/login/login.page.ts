import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Usuario} from "../../interfaces/interfaces";
import {Storage} from "@ionic/storage";
import {AlertController, LoadingController} from "@ionic/angular";
import {AlertService} from "../../services/alert.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = {
    email:'',
    password:'',
    remember: false
  };


  constructor(private storage: Storage, private alertService: AlertService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.storage.create()
  }

  async login(flogin: NgForm){

    let loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'crescent'
    });
    await loading.present();
    if (flogin.valid){
      if(this.usuario.remember){
        this.storage.clear();
        this.rememberUser(this.usuario);
      }
    loading.dismiss();

      console.log('Ok');

    }else {
      loading.dismiss();
    this.alertService.alertConOk('Error','El formato de su email o la contraseña no son validos');
      }
    }
    async rememberUser(usuario: Usuario){
    await this.storage.set('user', usuario);
    console.log(this.storage.get('user'));
    }

  }


