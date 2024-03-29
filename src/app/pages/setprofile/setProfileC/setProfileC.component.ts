import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationStart, Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { Subscription } from "rxjs";
import { SetProfileService } from 'src/app/services';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { IGetProfile, IProfileModel } from '../../../models';


@Component({
  selector: 'app-setprofile-c',
  templateUrl: './setProfileC.component.html',
  styleUrls: ['./setProfileC.component.scss'],
})

export class SetprofileCComponent  implements OnInit {
  
  profileForm = new FormGroup({

    userId: new FormControl(''),
    name: new FormControl(''),
    displayName: new FormControl(''),
    email: new FormControl(''),
    bio: new FormControl(''),
    phoneNumber: new FormControl(''),
    profileURL: new FormControl(''),
    height: new FormControl(''),
    weight : new FormControl(''),

  });
  
  // ProfilePicture: string = 'assets/img/ProfileSE.png';

  remainingCharacters: number = 120;
  private navigationSubscription: Subscription;
  getUser : IGetProfile = {userId: 'na'};
  UpadateP? : IProfileModel;
  file: File | null = null;
  isEditMode = false;

  constructor
  (
    private store: Store,
    private modalController: ModalController,
    private setprofileservices: SetProfileService, 
    private authApi: AuthApi,
    private router: Router,
  ){
    this.profileForm.controls.bio.valueChanges.subscribe(() => {
      this.updateCharacterCount();
    });



  }

    getUserid() {
      return  this.authApi.getCurrentUserId();
    }
    
    saveProfile()
    {
      this.UpadateP = {
        userId: this.profileForm.value.userId ?? "",
        name: this.profileForm.value.name ?? "",
        displayName: this.profileForm.value.displayName ?? "",
        email: this.profileForm.value.email ?? "",
        bio: this.profileForm.value.bio ?? "",
        phoneNumber: this.profileForm.value.phoneNumber ?? "",
        profileURL: this.profileForm.value.profileURL ?? "",
        height: this.profileForm.value.height ?? "",
        weight: this.profileForm.value.weight ?? "",
      }
      this.setprofileservices.updateProfile(this.UpadateP);
      this.DetailsSaved();

    }

  getDp()
  {
    return this.profileForm.get('profileURL')?.value as string; 
  }




  updateCharacterCount() {
    const inputText = this.profileForm.value.bio ?? ``;
    this.remainingCharacters = 120 - inputText.length;
  }

  SaveFile() {
    if (this.file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.profileForm.patchValue({ profileURL: reader.result as string});
      };
      reader.readAsDataURL(this.file);
    }

    console.log(this.profileForm.value.profileURL);
  }



  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.SaveFile();

  }
  DetailsSaved()
  {
    this.isEditMode = false;
    this.file = null;
    this.ngOnInit();
  }
  ngOnInit()
  {
    this.getUserid().then((id) => {
      this.getUser.userId = id;
    this.setprofileservices.getProfile(this.getUser).subscribe((profile) => {
        // this.user = profile.profile.
        this.profileForm.patchValue(
          {
            userId: profile.profile.userId,
            name: profile.profile.name,
            displayName: profile.profile.displayName,
            email: profile.profile.email,
            bio: profile.profile.bio,
            phoneNumber: profile.profile.phoneNumber,
            profileURL: profile.profile.profileURL,
            height: (profile.profile.height)?.toString(),
            weight: (profile.profile.weight)?.toString(),
          },

          );

          if(profile.profile.profileURL == "")
          {
            this.profileForm.patchValue( {profileURL: 'src/assets/ProfileSE.jpg'});
          }
            this.navigationSubscription = this.router.events.subscribe((event) => {

              if (event instanceof NavigationStart) {
                const currentUrl = this.router.routerState.snapshot.url;

                if (event.url === currentUrl) {
                  location.reload();
                }
              }
            });
      });

    });

    setTimeout(() => {
      this.profileForm.valueChanges.subscribe((value) => {
        this.isEditMode = true;
      });
    }, 2000);

  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  takePicture() {
    document.getElementById('photoInput')?.click();
  }

  selectFile()
  {
    document.getElementById('fileInput')?.click();
  }


}