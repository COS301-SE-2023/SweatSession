import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IAddGOAL, IGOAL, IGOALS, ITASK} from "../../models";
import {Store} from "@ngxs/store";
import {FitnessgoalService} from "../../services";
import {AuthApi} from "../../states";
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
              private firestore: AngularFirestore

              )
            {
              this.TaskForm = this.formBuilder.group({
                Taskses: this.formBuilder.array([])
              });
            }


  goals: IGOALS = {
    goals: []
  }

  selectedSegment: string = '0';
  currentUserId: string | undefined = undefined;
  TaskForm: FormGroup;

  goalForm = new FormGroup({

    name: new FormControl(''),
    description: new FormControl(''),
    coverPicture: new FormControl('https://loremflickr.com/320/240'),
    start: new FormControl(''),
    end: new FormControl(''),
    progress: new FormControl(0),
    days_left: new FormControl(0),
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

  // Task(): any {
  //   return this.fb.group({
  //     Task: this.fb.control(''),
  //   });
  // }

  addControl(): void {
    this.Taskses.push(
        this.formBuilder.group({
            id: '',
            content: ''
        })
    );

  }

  goback()
  {
    this.router.navigate(['/fitnessgoals']);
  }
  remove(i: number): void {
    this.Taskses.removeAt(i);
  }

  formValue(): void {
    console.log(this.goalForm.value);
  }

  removeGoal() {

  }

  calculate_Progress() {
    return 0.5;
  }

  addGoal() {

    //success toast
    // close the modal
    console.log("Add Goal");
  }

  selectFile() {
    document.getElementById('fileInput')?.click();
  }

  getDp() {
    return this.goalForm.value.coverPicture;
  }


  onSubmit() {

    const id = this.getUserIDD();
    const id2 = this.firestore.createId();

    const new_goal: IGOAL = {
      id: id2,
      name: this.goalForm.value.name ?? "",
      description: this.goalForm.value.description ?? "",
      coverPicture: this.goalForm.value.coverPicture ?? "",
      startDate: this.goalForm.value.start ?? "",
      endDate: this.goalForm.value.end ?? "",
      progress: this.goalForm.value.progress ?? 0, //TODO: will need to fix these
      days_left: this.goalForm.value.days_left ?? 0,
      duration: 5,
    }

    // new_goal.duration = (new_goal.end.getTime() - new_goal.start.getTime()) / (1000 * 3600 * 24);
    const iaddGoal: IAddGOAL = {
        userId: id,
        goal: new_goal
    }


    this.fitnessgaolservive.addGoal(iaddGoal);

    this.Taskses.controls.forEach( (task) => {

        const iaddtask: ITASK = {
          id: id2 ?? "",
          done : false,
          content: task.get('content')?.value
        }

        this.fitnessgaolservive.addTask(iaddtask, id ?? "");

      });

    this.router.navigate(['/fitnessgoals']);
  }


  getUserIDD()
  {
    this.authApi.getCurrentUserId().then((currentUserId) => {

      this.currentUserId = currentUserId;

      if (this.currentUserId != undefined)
      {
        sessionStorage.setItem("currentUserId", this.currentUserId ?? "");
      }
      else
      {
        this.currentUserId = sessionStorage.getItem("currentUserId") ?? "";
      }
    });

    return this.currentUserId;
  }

  ngOnInit()
  {
  }

}
