import { Injectable } from '@angular/core';
import {RegisterRepository} from 'src/app/repository/register.repository'
import {IProfileModel, IUserModel} from 'src/app/models/profile.model';
// import { Timestamp } from 'firebase-admin/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { BadgesRepository } from 'src/app/repository';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private registerRepository: RegisterRepository, private badgesRepository: BadgesRepository) { }

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
        name: regEmail,
        displayName:dName,
        email: regEmail,
        bio: "Hi there, I am new to Sweat Session!",
        profileURL: "https://i.pravatar.cc/150?img=20",//will add some default schelotte
        phoneNumber: "0000000000",
        height: '0',
        weight: '0',
      }
      console.log(newProfile);
      //this.repository.createUser(newUser);
      //this.repository.createProfile({});
      // alert("In register Service");
      this.registerRepository.createUser(newUser);
      this.registerRepository.createProfile(newProfile);
      this.badgesRepository.createBadgesDocument(currUserId);
  }
}