import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IPersonalBest } from 'src/app/models';
import { NavigationService } from 'src/app/services';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';
import { GymsearchComponent } from '../../search/gymsearch/gymsearch.component';

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
  myVariable: string = "Select location";
  repsBest:boolean = false;
  weightBest: boolean = false;
  
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

    // console.table(PersonalBest);
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

      this.personalbestService.getExercisesByName(formData.exercise).subscribe((data) => {
        if(data.length == 0)
        {
          this.weightBest = true;
          this.repsBest = true;
        }
        else
        {
            let largestweight = 0;
            let largestreps = 0;

          data.forEach((element) => {
            if(element.reps! > largestreps)
            {
              largestreps = element.reps!;
            }
            if(element.weight! > largestweight)
            {
              largestweight = element.weight!;
            }
          });

          if(largestreps <= formData.reps)
          {
            this.repsBest = true;
          }
          else
          {
            this.repsBest = false;
          }

          if(largestweight <= formData.weight)
          {
            this.weightBest = true;
          }
          else
          {
            this.weightBest = false;
          }
        }
      });

      this.isValid(formData);
    });

  }

  isrepsvalid() {
    return this.repsBest;
  }

  isweightvalid() {
    return this.weightBest;
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