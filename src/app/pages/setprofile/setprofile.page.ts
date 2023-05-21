import { Component, OnInit,ViewChild  } from '@angular/core';
//import { profile } from 'console';
import { IonContent, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-setprofile',
  templateUrl: './setprofile.page.html',
  styleUrls: ['./setprofile.page.scss'],
})
export class SetprofilePage implements OnInit {

  user: any = {
    profile: 'https://i.pravatar.cc/150?img=68',
    name: 'Triumph Ndlovu',
    email: 'TriumphSynapse@gmail.com',
    bio: 'Hii there, Im a Natty',
  };

  ProfilePicture = this.user.profile
  modalMode: 'ios' | 'md' = 'ios'; // Set the desired modal mode (ios or md)
  // selectedPicture: string | null = null;

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
    this.user.profile = this.ProfilePicture;
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
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

}
