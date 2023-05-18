import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {
  
  username:string; 
  password:string;
  email:string;
  
  constructor(private Nav: NavController)
  {
    this.username = "";
    this.password = "";
    this.email = "";
  }

  ngOnInit() {
  }

  register()
  {
    //impliment it later
    
    // if(true) //will check if user registered successfully
    this.Nav.navigateRoot('/home');
  }
}