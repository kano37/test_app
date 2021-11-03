import { Injectable } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCrtl: AlertController) { }

  async alertConOk(title: string, msg: string) {

    const alert = await this.alertCrtl.create({
      header: title,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

  }
}
