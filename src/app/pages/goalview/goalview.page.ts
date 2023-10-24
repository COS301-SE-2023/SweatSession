import { Component, OnInit } from '@angular/core';
import { getAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { IAddGOAL, IGOAL, IGOALS, ITASK } from "../../models";
import { FitnessgoalService, NavigationService } from "../../services";
import { AuthApi } from "../../states";
@Component({
  selector: 'app-goalview',
  templateUrl: './goalview.page.html',
  styleUrls: ['./goalview.page.scss'],
})
export class GoalviewPage  implements OnInit {

  today: string;
  tommorow: string;
  starteddate: any;
  constructor(private fb: FormBuilder,
              private store: Store,
              private fitnessgaolservive: FitnessgoalService,
              private authApi: AuthApi,
              private router: Router,
              private formBuilder: FormBuilder,
              private firestore: AngularFirestore,
              private navigate: NavigationService)
  {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add 1 to month as it is 0-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    this.today = `${year}-${month}-${day}`

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const year2 = tomorrow.getFullYear();
    const month2 = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Add 1 to month as it is 0-based
    const day2 = String(tomorrow.getDate()).padStart(2, '0');

    this.tommorow = `${year2}-${month2}-${day2}`;
  }

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

    if(formData.start != null)
    {
      this.starteddate = formData.start;
    }

    if (
        formData.name != null &&
        formData.description != null &&
        formData.start != null &&
        formData.end != null &&
        this.Taskses.length > 0 &&
        (new Date(formData.start)) < (new Date(formData.end))
    )
    {



      return true;
    }
    else
    {
      return false;
    }
  }

}
