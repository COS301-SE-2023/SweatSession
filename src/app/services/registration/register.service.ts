import { Injectable } from '@angular/core';
import {RegisterRepository} from 'src/app/repository/register.repository'
import {IProfileModel, IUserModel} from 'src/app/models/profile.model';
// import { Timestamp } from 'firebase-admin/firestore';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private repository: RegisterRepository) { }

  async register(currUserId:string, regEmail:string){
      // if (currUserId){
      //   const newUser:IUserModel = {
      //     id:currUserId,
      //     email: regEmail,
      //     //created: Timestamp.now()
      //   }
      // }
      // alert("In register Service");
      const newUser:IUserModel = {
        id:currUserId,
        email: regEmail,
        created: Timestamp.now()
      }
      console.log(newUser);

      const [dName] = regEmail.split("@"); //this is to get the part until the @
      const newProfile:IProfileModel = {
        userId:currUserId,
        displayName:dName,
        email: regEmail
      }
      console.log(newProfile);
      //this.repository.createUser(newUser);
      //this.repository.createProfile({});
      // alert("In register Service");
      this.repository.createUser(newUser);
      this.repository.createProfile(newProfile);
  }
}