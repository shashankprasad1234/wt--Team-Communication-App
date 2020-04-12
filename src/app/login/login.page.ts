import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authentication.service';
import { AlertController, NavController } from '@ionic/angular';
import 'firebase/auth'
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  public flag = false;
  user: string = '';
  password: string = '';
  signed_user: string = '';

  
  
  constructor(private authService: AuthenticateService, private router: Router, private alertCtrl: AlertController, private navCtrl: NavController) { }

  async loginUser(): Promise<void> {
    this.authService.loginUser(this.user, this.password).then(
      () => {
        console.log(this.authService.loggedin);
        console.log(this.authService.userDetails().email);
        this.router.navigate(['userdetail/menu']);
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role:'cancel'}],
        });
        await alert.present();
      }
    )
  }

  gotosignuppage(){
    this.router.navigate(['resetpassword'])
  }

  redirect(){
   
      this.router.navigate(['userdetail/home']);
  }

  signnedIn() {
   
  }

  ngOnInit() {
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
        console.log("logged in");
        self.router.navigate(['userdetail/menu'])
        // User is signed in.
      } else {
        console.log("logged out");
        return false;
      }
    });
    
  }
}
