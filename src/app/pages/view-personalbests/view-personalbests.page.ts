import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPersonalBestComponent } from './add-personal-best/add-personal-best.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { IPersonalBest } from 'src/app/models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';

@Component({
  selector: 'app-view-personalbests',
  templateUrl: './view-personalbests.page.html',
  styleUrls: ['./view-personalbests.page.scss'],
})
export class ViewPersonalbestsPage implements OnInit {
  
  PersonalBestForm: FormGroup;
  showForm: boolean = false;
  constructor(private modalController: ModalController,
        private formBuilder: FormBuilder,
        private firestore : AngularFirestore,
        private personalbestService: PersonalbestService) { }

  async openPopup() {
    this.showForm = true;
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
      repetitions: formData.reps,
      location: formData.location,
      date: formData.date,
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
      exercise: [''],
      weight: 0,
      reps: 0,
      date: this.getTodayDate(),
      location: [''],
      notes: [''],
    });

  }

  getTodayDate(): string {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    return `${currentYear}-${currentMonth}-${currentDay}`;
  }

  // getTime(): string {
  //   const currentDate = new Date();
  //   const currentHour = currentDate.getHours().toString().padStart(2, '0');
  //   const currentMinute = (currentDate.getMinutes()).toString().padStart(2, '0'); //time in ten minutes;

  //   return `${currentHour}:${currentMinute}`;
  // }

}
