import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-healthdata',
  templateUrl: './healthdata.page.html',
  styleUrls: ['./healthdata.page.scss'],
})
export class HealthDataPage implements OnInit {

  healthDataForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) {
    this.healthDataForm = this.formBuilder.group({
      height: ['', Validators.required],
      weight: ['', Validators.required],
      diet: ['', Validators.required],
      medicalConditions: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.healthDataForm.valid) {
      return;
    }
    this.firestore.collection('healthdata').add(this.healthDataForm.value);
  }

}
