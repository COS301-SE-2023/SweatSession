import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IAddGOAL, IGOAL, IGOALS, ITASK} from "../../models";
import {Store} from "@ngxs/store";
import {FitnessgoalService, NavigationService} from "../../services";
import {AuthApi} from "../../states";
import {getAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {forEach} from "@angular-devkit/schematics";
import firebase from "firebase/compat/app";
import {AngularFirestore} from "@angular/fire/compat/firestore";
@Component({
  selector: 'app-goalview',
  templateUrl: './goalview.page.html',
  styleUrls: ['./goalview.page.scss'],
})
export class GoalviewPage  implements OnInit {

  constructor(private fb: FormBuilder,
              private store: Store,
              private fitnessgaolservive: FitnessgoalService,
              private authApi: AuthApi,
              private router: Router,
              private formBuilder: FormBuilder,
              private firestore: AngularFirestore,
              private navigate: NavigationService) {}

  goals: IGOALS = {
    goals: []
  }

  selectedSegment: string = '0';
  currUserId: string | undefined = undefined;

  TaskForm = this.formBuilder.group({
    Taskses: this.formBuilder.array([])
  });





  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }

  getUserid() {
    return  this.authApi.getCurrentUserId();
  }

  get Taskses(): FormArray {
    return this.TaskForm.get('Taskses') as FormArray;
  }

  addControl(): void {
    this.Taskses.push(
        this.formBuilder.group({
            id: '',
            content: ''
        })
    );

  }

  goback() {
    this.navigate.back();
  }

  remove(i: number): void {
    this.Taskses.removeAt(i);
  }


  formValue(): void {
    console.log(this.goalForm.value);
  }

  removeGoal() {

  }


  onSubmit() {

    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;

    if (this.currUserId!=undefined)
    {
      sessionStorage.setItem('currUserId', this.currUserId);
    }
    else
    {
      this.currUserId = sessionStorage.getItem('currUserId') ?? "";
    }

    const Tasks2 : ITASK[] = [];
    const tasksesArray = this.TaskForm.get('Taskses') as FormArray;

    for (let i = 0; i < tasksesArray.length; i++) {
    const tasksControl = tasksesArray.controls[i];
    const tasksValue = tasksControl.value;

    const task:ITASK = {
      id : this.firestore.createId(),
      content : tasksValue.content,
      done : false
    }
    Tasks2.push(task);
  }

    const goal2 :IGOAL = 
    {
      id: this.firestore.createId(),
      name: this.goalForm.value.name!,
      description: this.goalForm.value.description!,
      startDate: this.goalForm.value.start!,
      endDate: this.goalForm.value.end!,
      isCompleted: false,
      Tasks: Tasks2
    }

    const Iadd : IAddGOAL = 
    {
      userId: this.currUserId,
      goal: goal2
    }
    this.fitnessgaolservive.addGoal(Iadd);

    this.navigate.back();
  }

  goalForm : FormGroup;

  ngOnInit()
  {
    this.goalForm = this.formBuilder.group({

      name: null,
      description: null,
      coverPicture: null,
      start: null,
      end: null,
      progress: null,
      days_left: null,
    });

    this.goalForm.valueChanges.subscribe((data) => {
      this.isValid(data);
    }
    );
  }

  isValid(formData :any) {
    if (
        formData.name != null &&
        formData.description != null &&
        formData.start != null &&
        formData.end != null &&
        this.Taskses.length > 0
    ) {
      // console.log('Form is valid');
      return true;
    } else {
      // console.log('Form is not valid');
      return false;
    }
  }

}
