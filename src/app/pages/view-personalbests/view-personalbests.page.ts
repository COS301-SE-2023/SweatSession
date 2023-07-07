import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPersonalBestComponent } from './add-personal-best/add-personal-best.component';
@Component({
  selector: 'app-view-personalbests',
  templateUrl: './view-personalbests.page.html',
  styleUrls: ['./view-personalbests.page.scss'],
})
export class ViewPersonalbestsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  async openPopup() {
    const modal = await this.modalController.create({
      component: AddPersonalBestComponent,
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
