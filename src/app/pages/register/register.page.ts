import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
//import { ReactiveFormsModule } from '@angular/forms';
import {ContinueWithGoogleAction, Register} from 'src/app/actions/register';
//import {RegisterPageModule} from './register.module'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registrationForm = this.regFormBuilder.group({
    email: ['',[Validators.email],],
    password: ['', [Validators.minLength(6), Validators.maxLength(25)]],
    cPassword: ['', []],
  },{ });
  constructor(
    private Nav: NavController,
    private readonly regFormBuilder: FormBuilder,
    private readonly store: Store,
    private alertController: AlertController
  ){}

  get email() {
    return this.registrationForm?.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }
  get cPassword() {
    return this.registrationForm.get('cPassword');
  }

  async AcceptUserTerms() {
    const alert = await this.alertController.create({
      header: 'Terms and Conditions',
      message: 'Some text for the terms and conditions that can be really long and stuff and Some text for the terms and conditions that can be really long and stuff and',
      buttons: [
        {
          text: 'Decline',
          role: 'cancel',
        },
        {
          text: 'Accept',
          handler: () => {
            this.register();
          },
        },
      ],
    });
    await alert.present();
  }

  async InvalidInforAlert()
  {
    const alert = await this.alertController.create({
      header: 'Invalid Registration Information',
      message: 'Make sure that the password is at least 6 characters long and you have entered a valid email address',
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

  register()
  {
    if (this.registrationForm.valid) {
      const regEmail = this.registrationForm?.get('email')?.value;
      const regPassword = this.registrationForm?.get('password')?.value;
      if (regEmail != null && regPassword!=null)
      {
        this.store.dispatch(new Register(regEmail,regPassword));
      }
    }else
    {
      this.InvalidInforAlert();
    }
  }

  continueWithGoogleAuth() {
    this.store.dispatch(new ContinueWithGoogleAction());
  }
}