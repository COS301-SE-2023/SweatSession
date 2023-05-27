import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth
} from '@angular/fire/auth';

import { signOut } from '@firebase/auth';
import { NavController } from '@ionic/angular';
//import { getAuth } from 'firebase/auth';

@Injectable()
export class AuthApi {
  constructor(private readonly authObject: Auth, private Nav: NavController) {}

  auth$() {
    return authState(this.authObject);
  }


  async getCurrentUserId(){
    const auth = getAuth();
    return(auth.currentUser?.uid);
  }



  async login(regEmail: string, regPassword: string) {
    try {
      //alert("in auth api login function");
      await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
      //return await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
      
      this.Nav.navigateRoot('/home'); // this is so they are only directed to login when they enter a valid email and password combination
    }catch (error) {
      // Handle the Firebase error
      console.error('Firebase error:', error);
      alert("Incorrect email password combination");
      //return "";
    }
  }

  async register(regEmail: string, regPassword: string) {
    try {
      await createUserWithEmailAndPassword(this.authObject, regEmail, regPassword);
      this.Nav.navigateRoot('/home'); // this is so they are only directed to login when they enter a valid email and password combination
    }catch (error) {
      // Handle the Firebase error
      console.error('Firebase error:', error);
      alert("Incorrect registration info.");
      //return "Incorrect registration info.";
      //return "";
    }
  }

  async logout() {
    // const auth = getAuth();
    // console.log(auth.currentUser?.uid);
    // alert("logout");
    return await signOut(this.authObject);
  }
}
