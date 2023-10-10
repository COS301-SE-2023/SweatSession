import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IPersonalBest } from 'src/app/models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';
import { GymsearchComponent } from '../../search/gymsearch/gymsearch.component';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'add-personal-best',
  templateUrl: './add-personal-best.component.html',
  styleUrls: ['./add-personal-best.component.scss'],
})
export class AddPersonalBestComponent implements OnInit {
  PersonalBestForm: FormGroup;
  showForm: boolean = false;
  placeId: string;
  location: string;
  myVariable: string = "Click on the location icon";
  
  constructor(private modalController: ModalController,
        private formBuilder: FormBuilder,
        private firestore : AngularFirestore,
        private personalbestService: PersonalbestService,
        private cdr: ChangeDetectorRef,
        private navigate: NavigationService) { }

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
    this.navigate.back();
  }

  ngOnInit() 
  {
    this.PersonalBestForm = this.formBuilder.group({
      exercise: [null, [Validators.required]],
      weight: [null, [Validators.required, Validators.min(0)]],
      reps: [null, [Validators.required, Validators.min(0)]],
      date: [null, [Validators.required]],
      location: [null, [Validators.required]],
      notes: [null, [Validators.required]],
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
      // Assuming PersonalBestForm is correctly initialized and has a 'location' control
    const locationControl = this.PersonalBestForm.get('location');

    if (locationControl) {
      // alert("IN location Control");
      // Update the value of the 'location' control
      locationControl.setValue(data.selectedGym);

      // Clear validators (if needed)
      locationControl.clearValidators();

      // Update validity (if needed)
      locationControl.updateValueAndValidity();

      // Trigger change detection
      this.cdr.detectChanges();
    }

    // Assign placeId
      this.placeId = data.placeId;    }
  }
}