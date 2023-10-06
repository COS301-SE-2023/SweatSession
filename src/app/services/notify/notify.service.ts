import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private toastController: ToastController) {}

  async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      color: 'success',
      duration: 2000,
      position: 'top',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
        }
      ]
    });

    await toast.present();
  }

  async presentFailureToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      color: 'danger',
      duration: 2000,
      position: 'top',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
        }
      ]
    });

    await toast.present();
  }
}
