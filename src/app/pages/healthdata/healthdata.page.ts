import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProfileService } from '../../services';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-healthdata',
  templateUrl: './healthdata.page.html',
  styleUrls: ['./healthdata.page.scss'],
})
export class HealthDataPage implements OnInit {
  currUserId: string | undefined | null;
  isBeating: boolean = false;

  healthDataForm: FormGroup;
  isLoading: boolean = true;
  
  startBeating() {
    this.isBeating = true;
    setTimeout(() => {
      this.stopBeating();
    }, 1000);
  }

  stopBeating() {
    this.isBeating = false;
  }

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService, private firestore: AngularFirestore) {
    this.healthDataForm = this.formBuilder.group({
      height: ['', Validators.required],
      weight: ['', Validators.required],
      diet: ['', Validators.required],
      medicalConditions: ['', Validators.required],
      workoutCommitment: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required], 
      displayName: ['']
    });
  }

  ngOnInit() {
    this.setupProfile();
  }

  async setupProfile() {
    const auth = getAuth();
    
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currUserId = user.uid;
        sessionStorage.setItem('currUserId', this.currUserId);
      } else {
        this.currUserId = sessionStorage.getItem('currUserId');
      }
  
      if (this.currUserId) {
        const userProfile = await this.profileService.getProfile({ userId: this.currUserId }).toPromise();
        const displayName = userProfile?.profile.displayName;
        this.healthDataForm.patchValue({displayName}); 
        this.isLoading = false;   
        await this.fetchHealthData();
      }
    });
  }

  async fetchHealthData() {
    if(this.currUserId) {
      const userProfile = await this.profileService.getProfile({ userId: this.currUserId }).toPromise();
      const displayName = userProfile?.profile.displayName;
      this.firestore.collection('healthdata', ref => ref.where('displayName', '==', displayName))
        .valueChanges()
        .subscribe(data => {
          if (data.length > 0) {
            this.healthDataForm.patchValue(data[0]!);
          }
        });
    }
}

async checkHealthDataExistence(displayName: string) {
  const snapshot = await this.firestore.collection('healthdata', ref => ref.where('displayName', '==', displayName)).get().toPromise();
  
  if (snapshot?.empty) {
    return null;
  } else {
    return snapshot?.docs[0].id;
  }
}

async saveHealthData() {
  if(!this.healthDataForm.valid) {
    return;
  }

  if (!this.currUserId) {
    console.log('Current user ID is undefined');
    return;
  }

  const docId = await this.checkHealthDataExistence(this.healthDataForm.value.displayName);

  if (docId) {
    this.firestore.collection('healthdata').doc(docId).update(this.healthDataForm.value);
  } else {
    this.firestore.collection('healthdata').add(this.healthDataForm.value);
  }
}
}
