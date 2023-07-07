import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-personal-best',
  templateUrl: './add-personal-best.component.html',
  styleUrls: ['./add-personal-best.component.scss'],
})
export class AddPersonalBestComponent implements OnInit {
  myForm: FormGroup;
  exerciseOptions: string[] = [];

  constructor(private modalController: ModalController) {
    this.ngOnInit();
    this.myForm = new FormGroup({
      selectedExercise: new FormControl('', Validators.required),
      weight: new FormControl(0, Validators.required),
      repetitions: new FormControl(0, Validators.required),
      date: new FormControl('', Validators.required),
      notes: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getExercises();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  getExercises() {
    this.exerciseOptions = ['Push up', 'Sit up', 'Rope Skips'];
    console.log("Exersise options", this.exerciseOptions); // Add this line
  }

  addPersonalBest() {
    // Handle the form submission and personal best creation
  }
}
