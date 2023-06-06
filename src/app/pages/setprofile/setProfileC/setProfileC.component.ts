import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetProfileAction, } from '../../../actions/profile.action';
import { IGetProfile,IProfileModel } from '../../../models';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SetProfileService } from 'src/app/services';
import { AuthApi } from 'src/app/states/auth/auth.api';
@Component({
  selector: 'app-setprofile-c',
  templateUrl: './setProfileC.component.html',
  styleUrls: ['./setProfileC.component.scss'],
})

export class SetprofileCComponent  implements OnInit {
  
  user$ = 'userId' // we need a way to get it like this
  profileForm = new FormGroup({

    userId: new FormControl(''),
    name: new FormControl(''),
    displayName: new FormControl(''),
    email: new FormControl(''),
    bio: new FormControl(''),
    phoneNumber: new FormControl(''),
    profileURL: new FormControl(''),
    height: new FormControl(''),
    weight: new FormControl(''),
    age: new FormControl(''),

  });
  
  ProfilePicture: string = 'https://i.pravatar.cc/150?img=20'; 
  getUser : IGetProfile = {userId: 'na'};
  constructor
  (
    private store: Store,
    private modalController: ModalController,
    setprofileservices: SetProfileService, 
    private authApi: AuthApi,
  )
    {
      
      this.getUserid();
      
      setprofileservices.getProfile(this.getUser).subscribe((profile) => {
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
            // height: profile.profile.height,
            // weight: profile.profile.weight,
          }
          
        );
      });
    }
    GetProfileAction(IGetProfile: IGetProfile) {
      this.store.dispatch(new GetProfileAction(IGetProfile));
    }

    async getUserid() {

      this.getUser.userId = await this.authApi.getCurrentUserId();
      alert("We got User ==> " + this.getUser.userId);
   
    }

  saveProfile()
  {
    
  }

  openPicturePopup()
  {
    // this.modalController.create({
    //   component: 'editPictureModal',
    //   componentProps: {
    //     selectedPicture: this.ProfilePicture,
    //   },
    // }).then((modal) => {
    //   modal.present();
    // });
  }

  toggleEditMode() {
    // this.isEditMode = true;
    // console.log('Toggled Edit');
  }

  onPictureChange(event: any) {
    // const file = event.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     this.ProfilePicture = reader.result as string;

    //   };
    //   reader.readAsDataURL(file);
    // }
  }

  ngOnInit()
  {
     
  }

}