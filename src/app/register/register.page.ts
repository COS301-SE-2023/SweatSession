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
  
  constructor(private NavC: NavController)
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
    //   this.NavC.navigateRoot('/home');
  }
}