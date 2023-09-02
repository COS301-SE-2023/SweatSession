import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  
  PersonalBestForm: FormGroup;
  showForm: boolean = false;
  placeId: string;
  location: string;
  myVariable: string = "Click on the location icon";
  constructor(private modalController: ModalController,
        private formBuilder: FormBuilder,
        private firestore : AngularFirestore,
        private personalbestService: PersonalbestService) { }

  async openPopup() {
    this.showForm = true;
  }

  isValid(formData :any) {
    if (
      formData.date != null &&
      formData.exercise != null &&
      formData.location != null &&
      formData.notes != null &&
      formData.reps != null &&
      formData.weight != null
    ) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit() {
    if (this.PersonalBestForm.invalid) {
      console.log('Invalid form');
      return;
    }

    // Get the form data
    const formData = this.PersonalBestForm.value;
    console.log('Form Data:', formData);
   
    const PersonalBest :  IPersonalBest = 
    {
      id : this.firestore.createId(),
      exercise: formData.exercise,
      weight: formData.weight,
      reps: formData.reps,
      location: formData.location,
      date: formData.date.split('T')[0],
      notes: formData.notes,
    }

    console.table(PersonalBest);
    this.personalbestService.addPersonalbest(PersonalBest);

    this.PersonalBestForm.reset();
    this.showForm = false;

    
  }

  ngOnInit() 
  {
    this.PersonalBestForm = this.formBuilder.group({
      exercise: null,
      weight: null,
      reps: null,
      date: null,
      location: null,
      notes: null,
    });

    this.PersonalBestForm.valueChanges.subscribe((formData) => {
      this.isValid(formData);
    });

  }

  getTodayDate(): string {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    return `${currentYear}-${currentMonth}-${currentDay}`;
  }

  async openLocationModal() {
    const modal = await this.modalController.create({
      component: GymsearchComponent, // Replace LocationModalPage with the name of your modal component
    });
    await modal.present();
  
    // Handle the location selection event when the modal is dismissed
    const { data } = await modal.onDidDismiss();
    if (data && data.selectedGym && data.placeId) {
      console.log(data);
      // this.schedule.location = data.selectedGym;
      this.PersonalBestForm.clearValidators(); 
      this.PersonalBestForm.updateValueAndValidity();
      // this.PersonalBestForm.setValue({"location": data.selectedGym});
      this.PersonalBestForm.get('location')!.reset(data.selectedGym);
      // this.myVariable=data.selectedGym;
      // this.PersonalBestForm.patchValue({
      //   location: data.selectedGym
      // });
      this.placeId = data.placeId;    }
  }
}
