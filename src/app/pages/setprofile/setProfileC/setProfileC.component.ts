import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetProfileAction, } from '../../../actions/profile.action';
import { IGetProfile,IProfileModel } from '../../../models';
import { FormControl, FormGroup } from '@angular/forms';
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
  });
  
  constructor(private store: Store) { }

  GetProfileAction(IGetProfile: IGetProfile) {
    this.store.dispatch(new GetProfileAction(IGetProfile));
  }

  saveProfile()
  {
    //yeap
  }

  

  ngOnInit() {}

}