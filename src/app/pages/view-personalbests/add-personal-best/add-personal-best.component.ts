import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IPersonalBest } from 'src/app/models';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { getAuth } from '@angular/fire/auth';
import { PersonalbestRepository } from 'src/app/repository/personalbest.repository';

@Component({
  selector: 'app-add-personal-best',
  templateUrl: './add-personal-best.component.html',
  styleUrls: ['./add-personal-best.component.scss'],
})
export class AddPersonalBestComponent  implements OnInit {

  selectedExercise: string;
  weight: number;
  repetitions: number;
  date: string;
  notes: string;

  exerciseOptions: string[] = [];


  constructor(private modalController: ModalController,
                      private firestore:AngularFirestore,
                      private personalbestRepository: PersonalbestRepository) { }

  ngOnInit(): void {
    this.getExercises()
  }

  dismiss() {
    this.modalController.dismiss();
  }  

  getExercises() {
    return this.exerciseOptions = ['Push up' , 'Sit up' , 'rope Skips'];
  }

  addPersonalBest() {

    const personalBest : IPersonalBest = {
      id : this.firestore.createId(),
      exercise: "Push ups",
      // exercise: this.selectedExercise,
      weight: this.weight,
      matrix: 'kg',
      repetitions: this.repetitions,
      date: this.date,
      notes: this.notes
    };


    this.personalbestRepository.addPersonalBest(personalBest);
  


    // Reset the form fields
    this.selectedExercise = '';
    this.weight = 0;
    this.repetitions = 0;
    this.date = '';
    this.notes = '';
  }

}
