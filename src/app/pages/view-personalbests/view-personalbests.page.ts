import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { AddPersonalBestComponent } from './add-personal-best/add-personal-best.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgChartsModule } from 'ng2-charts';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-personalbests',
  templateUrl: './view-personalbests.page.html',
  styleUrls: ['./view-personalbests.page.scss'],
})
export class ViewPersonalbestsPage implements OnInit {

  constructor(private nav: NavController) {

  }

  ngOnInit() {
    
  }

  async addBest() {
    this.nav.navigateRoot("add-personal-best")
  }
}
