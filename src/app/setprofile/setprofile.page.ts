import { Component, OnInit } from '@angular/core';
import { profile } from 'console';

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
  oldProfilePicture = this.user.profile
  selectedPicture: string | null = null;

  onPictureChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.selectedPicture = reader.result as string;

      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
 
    this.user.profile = this.selectedPicture;
    console.log('Saving profile:', this.user);
  }
  constructor() { }

  ngOnInit() {
  }

}
