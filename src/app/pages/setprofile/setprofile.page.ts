import { Component, OnInit,ViewChild  } from '@angular/core';
//import { profile } from 'console';
import { IonContent, ModalController } from '@ionic/angular';
import { SetProfileService } from '../../services/setprofile/setprofile.service';
import { IProfileModel } from 'src/app/models';

@Component({
  selector: 'app-setprofile',
  templateUrl: './setprofile.page.html',
  styleUrls: ['./setprofile.page.scss'],
})
export class SetprofilePage implements OnInit {

  
  // user: IProfileModel = {userId: '123', name: 'Triumph Ndlovu', email: 'TriumphSynapse@gmail.com', bio: 'hiiiiiiiiiiiiiiiiiiii', profileURL: 'https://i.pravatar.cc/150?img=68', phoneNumber: '0123456789'};
  user!: IProfileModel;

  ProfilePicture: string = 'https://i.pravatar.cc/150?img=68';// for now

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

  enableEditMode() {
    console.log('Enabling edit mode');
    this.editMode = true;
  }
  
  closePicturePopup() {
    this.modalController.dismiss('cancel');
  }
  constructor(private modalController: ModalController, setprofileservices: SetProfileService)//, private ProfileService: ProfileService)
  {
    const userId = '123';

    setprofileservices.getProfile(this.user).subscribe((profile) => {
      this.user = profile.profile;
    });

    // this.profileservices.getUserProfile(userId)
    // .then((profile) => {
    //   this.user = profile;
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  }

  ngOnInit() {
    // const userId = '123'; // Replace with the actual user ID
    // this.pr
    // (userId).subscribe(userData => {
    //   console.log('User Data:', userData);

    //   this.user = userData;

    // });
  }
  

 }
