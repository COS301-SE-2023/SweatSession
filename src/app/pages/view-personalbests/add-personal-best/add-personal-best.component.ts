import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IPersonalBest } from 'src/app/models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';

@Component({
  selector: 'app-add-personal-best',
  templateUrl: './add-personal-best.component.html',
  styleUrls: ['./add-personal-best.component.scss'],
})
export class AddPersonalBestComponent implements OnInit {
  exerciseOptions: any = [];
  PersonalBestForm: FormGroup;
  PersonalBes : IPersonalBest = 
  {
    id : this.firestore.createId(),
    exercise : "default exercise",
    weight : 0,
    repetitions : 0,
    date : "the date",
    notes: "decription of the best",
    
  }
  constructor(private modalController: ModalController,
                      private firestore : AngularFirestore,
                      private personalbestServices :PersonalbestService,
                      private formBuilder: FormBuilder ) 
{
  this.workaround();
}

ngOnInit(): void {
    
}
  workaround(): void { //lazy loading causing some issues
    this.getExercises();
    this.PersonalBestForm = this.formBuilder.group({
      name: [''],
      email: [''],
    });

    
  }

  onSubmit() {
    if (this.PersonalBestForm.invalid) {
      return;
    }

    // Get the form data
    const formData = this.PersonalBestForm.value;
    console.log('Form Data:', formData);

    // Clear the form or perform other actions
    // this.PersonalBestForm.reset();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  // get exerciseOptionsgetter() {
  //   return this.myForm.get('selectedExercise');
  // }

  getExercises() {
    this.exerciseOptions = ['Push up', 'Sit up', 'Rope Skips'];
    console.log("Exersise options", this.exerciseOptions); // Add this line
  }

  addPersonalBest() {
    // this.PersonalBes = {
    //   ...this.PersonalBes,
    //   weight: this.PersonalBes.weight,
    //   repetitions: this.PersonalBes.repetitions,
    //   notes: this.PersonalBes.notes
    // };

    console.log("Done Hey");
    console.table(this.PersonalBes);
  
  }

}