import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
// import { AddPersonalBestComponent } from './add-personal-best/add-personal-best.component';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgChartsModule } from 'ng2-charts';
// import { ReactiveFormsModule } from '@angular/forms';
import { IPersonalBest } from 'src/app/models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';
import { GymsearchComponent } from '../search/gymsearch/gymsearch.component';

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
