import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms'; //, AbstractControl, ValidatorFn, ValidationErrors 
import { Store } from '@ngxs/store';
import {Login} from 'src/app/actions/login';
import { ContinueWithGoogleAction } from 'src/app/actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessage = "";
  showErrorMessage = false;
  loginForm = this.loginFormBuilder.group({
    email: ['',[Validators.email],],
    password: ['', [Validators.minLength(6), Validators.maxLength(25)]],
  },{ });
  constructor(
    private Nav: NavController,
    private readonly loginFormBuilder: FormBuilder,
    private readonly store: Store,
    private alertController: AlertController
  ) { }

  get email() {
    return this.loginForm?.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  userLogin(){
    if (this.loginForm.valid) {
      const loginEmail = this.loginForm?.get('email')?.value;
      const loginPassword = this.loginForm?.get('password')?.value;

      if (loginEmail != null && loginPassword!=null){
        this.store.dispatch(new Login(loginEmail,loginPassword));
      }
    }else {
      this.errorMessage = "Missing inputs, please fill all input fields";
      this.showErrorMessage = true;
      this.InvalidInforAlert();
    }
  }

  continueWithGoogleAuth() {
    this.store.dispatch(new ContinueWithGoogleAction());
  }

  async InvalidInforAlert()
  {
    const alert = await this.alertController.create({
      header: 'Invalid Login Information',
      message: 'Make sure that the password is at least 6 characters long and you have entered a valid registered email address',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
    await alert.present();

  }

  ngOnInit() {
  }

}
