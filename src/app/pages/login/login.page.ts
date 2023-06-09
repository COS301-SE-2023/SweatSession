import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms'; //, AbstractControl, ValidatorFn, ValidationErrors 
import { Store } from '@ngxs/store';
import {Login} from 'src/app/actions/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss','../register/register.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = this.loginFormBuilder.group({
    email: ['',[Validators.email],],
    password: ['', [Validators.minLength(6), Validators.maxLength(25)]],
  },{ });
  constructor(
    private Nav: NavController,
    private readonly loginFormBuilder: FormBuilder,
    private readonly store: Store
  ) { }

  get email() {
    return this.loginForm?.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  userLogin(){
    //alert("in login.page.ts");
    if (this.loginForm.valid) {
      const loginEmail = this.loginForm?.get('email')?.value;
      const loginPassword = this.loginForm?.get('password')?.value;

      if (loginEmail != null && loginPassword!=null){
        // alert(loginEmail);
        // alert(loginPassword);
        this.store.dispatch(new Login(loginEmail,loginPassword));
      }
    }
    //this.Nav.navigateRoot('/home');
  }

  ngOnInit() {
  }

}
