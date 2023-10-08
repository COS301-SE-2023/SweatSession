import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from '@angular/fire/auth';
import { Navigate } from '@ngxs/router-plugin';
import { signOut } from '@firebase/auth';
import { AlertController, NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
// import { AuthState } from 'src/app/states/auth';
//import { RegisterRepository } from 'src/app/repository/register.repository';

//import { getAuth } from 'firebase/auth';
// import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthApi {
  constructor(private readonly authObject: Auth,
     private Nav: NavController,
    private alertController: AlertController,
    private store: Store
    ) {}//, private repository: RegisterRepository         //, private service: RegisterService

  auth$() {
    return authState(this.authObject);
  }


  async getCurrentUserId() {
    const auth = getAuth();
    return (auth.currentUser?.uid);
  }

  async login(regEmail: string, regPassword: string) {
    try {
      await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
      // AuthState.currUserId=await this.getCurrentUserId();
      //return await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);

      this.Nav.navigateRoot('/home'); // this is so they are only directed to login when they enter a valid email and password combination
    } catch (error) {
      console.error('Firebase error:', error);
      // alert("Incorrect email password combination");
      this.IncorrectCombination();
    }
  }

  async IncorrectCombination()
  {
    const alert = await this.alertController.create({
      header: 'Invalid Login Information',
      message: 'Incorrect email password combination',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }

  async register(regEmail: string, regPassword: string) {
    try {
      await createUserWithEmailAndPassword(this.authObject, regEmail, regPassword);
      // AuthState.currUserId=null;
      this.Nav.navigateRoot('/home'); // this is so they are only directed to login when they enter a valid email and password combination
      return true;
    } catch (error) {
      // Handle the Firebase error
      console.error('Firebase error:', error);
      alert("Incorrect registration info.");
      return false;
      //return "Incorrect registration info.";
      //return "";
    }
    // alert("in auth api register function");
    // return await createUserWithEmailAndPassword(this.authObject, regEmail, regPassword);
  }

  async continueWithGoogle() {
    // try {
    //   const googleAuthProvider = new GoogleAuthProvider();
    //   const userCredentials = await signInWithPopup(this.authObject, googleAuthProvider);
    //   this.Nav.navigateRoot('/home')
    //   return userCredentials;
    // } catch (error) {
    //   return false;
    // }
    const googleAuthProvider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(this.authObject, googleAuthProvider);
    this.Nav.navigateRoot('/home')
    return userCredentials;
  }

  async LogoutConfirmed() {

    // const auth = getAuth();
    // console.log(auth.currentUser?.uid);
    // alert("logout");
    sessionStorage.removeItem('currUserId');
    sessionStorage.removeItem("otheruser");
    sessionStorage.removeItem("otherUserBadgesName");
    sessionStorage.removeItem("otherUserBadgesId");
    await signOut(this.authObject);
    // context.dispatch(new Navigate(['login']));
    this.store.dispatch(new Navigate(['login']));
  }

  async logout() { // Do not want to refactor the code will switch content
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.LogoutConfirmed();
          },
        },
      ],
    });
    await alert.present();
  }
}