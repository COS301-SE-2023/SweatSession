import { Component, OnInit,ViewChild  } from '@angular/core';
//import { profile } from 'console';
import { IonContent, ModalController } from '@ionic/angular';
import { SetProfileService } from '../../services/setprofile/setprofile.service';
import { IProfileModel , IGetProfile , } from 'src/app/models';
import { AuthState } from 'src/app/states/auth/auth.state';
import {AuthenticationStateModel} from 'src/app/states/auth/auth.state';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { Select, Store } from '@ngxs/store';
import {GetProfileAction} from 'src/app/actions/profile.action';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'app-setprofile',
  templateUrl: './setprofile.page.html',
  styleUrls: ['./setprofile.page.scss'],
})
export class SetprofilePage implements OnInit {

  
  // user: IProfileModel = {userId: '123', name: 'Triumph Ndlovu', email: 'TriumphSynapse@gmail.com', bio: 'hiiiiiiiiiiiiiiiiiiii', profileURL: 'https://i.pravatar.cc/150?img=68', phoneNumber: '0123456789'};
  user! : IProfileModel;
  getUser : IGetProfile = {userId: 'na'};

  ProfilePicture: string = 'https://i.pravatar.cc/150?img=68'; // for now

  selectedPicture: string | null = null;

  onPictureChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.ProfilePicture = reader.result as string;

      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
 
    this.editMode = false;
    this.user.profileURL = this.ProfilePicture;

    this.modalController.dismiss('save');
    console.log('Saving profile:', this.user);
  }

  savePicture() {
    // Perform save logic here
    // this.oldProfilePicture = this.selectedPicture;
    // SetProfileService.updateProfile(this.user).subscribe((profile) => {
    //   this.user = profile.profile;
    // });
    this.modalController.dismiss('save');
  }
  
  openPicturePopup() {
    this.modalController.create({
      component: 'editPictureModal',
      componentProps: {
        selectedPicture: this.ProfilePicture,
      },
    }).then((modal) => {
      modal.present();
    });
  }

  editMode = false;
  isEditMode = false;

  enableEditMode() {
    console.log('Enabling edit mode');
    this.editMode = true;
  }
  
  closePicturePopup() {
    this.modalController.dismiss('cancel');
  }

  temp! : String;
  constructor(
    private modalController: ModalController, 
    setprofileservices: SetProfileService, 
    private authApi: AuthApi,
    private readonly store: Store,
    private navigation: NavigationService
    )//, private ProfileService: ProfileService)
    {   
      // this.user = {userId: 'sdHzZS6WSslwe4xo51rK', name: 'no name provided', email: 'no email provided', bio: 'no bio provided', profileURL: 'https://i.pravatar.cc/150?img=68', phoneNumber: '0000000000'};
      // this.user = {userId: 'abc', name: 'Triumph Ndlovu', email: 'no email provided', bio: 'no bio provided', profileURL: 'https://i.pravatar.cc/150?img=68', phoneNumber: '0000000000'};
      

    
      // tempUserID = authApi.getCurrentUserId();
    
      // this.getUser.userId =  this.tempUserID.toString();
        
      
      // t = await this.getUserid();
      
      // this.getUserid();
      
      // setprofileservices.getProfile(this.getUser).subscribe((profile) => {
      //   this.user = profile.profile;
      // });
      
    }
    
    //  getUserid() {

    //   this.getUser.userId = await this.authApi.getCurrentUserId() ?? 'na';
    //   // alert("We got User ==> " + this.getUser.userId);
    // }

  

  toggleEditMode() {
    this.isEditMode = true;
    console.log('Toggled Edit');
  }

  isAnyFieldEdited(): boolean {
    return (
      this.user.name !== this.user.name ||
      this.user.bio !== this.user.bio ||
      this.user.phoneNumber !== this.user.phoneNumber
    );
  }

  ngOnInit() {
    // const userId = '123'; // Replace with the actual user ID
    // this.pr
    // (userId).subscribe(userData => {
    //   console.log('User Data:', userData);

    //   this.user = userData;

    // });
  }
  
  back() {
    this.navigation.back();
  }

 }
