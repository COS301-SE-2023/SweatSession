import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms'; //, AbstractControl, ValidatorFn, ValidationErrors 
import { Select, Store } from '@ngxs/store';
//import { ReactiveFormsModule } from '@angular/forms';
import {Register} from 'src/app/actions/register';
import {RegisterPageModule} from './register.module'

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
  },{ });//add code to check if passwords are equal
  constructor(
    private Nav: NavController,
    private readonly regFormBuilder: FormBuilder,
    private readonly store: Store
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

  ngOnInit() {
  }

  register()
  {
    if (this.registrationForm.valid) {
      const regEmail = this.registrationForm?.get('email')?.value;
      const regPassword = this.registrationForm?.get('password')?.value;
      if (regEmail != null && regPassword!=null){
        this.store.dispatch(new Register(regEmail,regPassword));
      }
    }
    this.Nav.navigateRoot('/home');
  }
}