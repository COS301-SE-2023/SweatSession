import { Injectable } from '@angular/core';
import {RegisterRepository} from 'src/app/repository/register.repository'
import {IProfileModel, IUserModel} from 'src/app/models/profile.model';
// import { Timestamp } from 'firebase-admin/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { BadgesRepository } from 'src/app/repository';
import { goalsRepository } from 'src/app/repository';
import { PointsRepository } from 'src/app/repository/points.repository';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private repository: RegisterRepository,
              private pointsRepository: PointsRepository,
              private badgesRepository: BadgesRepository,
              private goalsRepository: goalsRepository) { }
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
        name: dName,
        displayName:dName,
        email: regEmail,
        bio: "Hi there, I am new to SweatSession!",//SweatSession is one word
        profileURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",//will add some default schelotte
        phoneNumber: "0000000000",
        height: '0',
        weight: '0',
      }
      console.log(newProfile);
      //this.repository.createUser(newUser);
      //this.repository.createProfile({});
      // alert("In register Service");
      this.badgesRepository.createBadgesDocument(currUserId);
      // this.goalsRepository.creategoalsDocument(currUserId);
      this.repository.createUser(newUser);
      this.repository.createProfile(newProfile);
      this.pointsRepository.createPointsDocument(currUserId);
  }
}