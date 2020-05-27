import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { error } from 'protractor';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController, private authService: AuthenticateService ) { }

  ngOnInit() {
  }

  username: string = '';
  password: string = '';
  confirmpassword: string = '';
  email: string = '';

  async alert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      message: message,
      subHeader: title,
      buttons: ['OK']
    });
    await alert.present();
  }

  public setuser(username: string , password: string, confirmpassword: string, email: string){
    this.username = username;
    this.password = password;
    this.confirmpassword = confirmpassword;
    this.email = email;
  }

  async signupUser(): Promise<any>{
    console.log("enter");
    
    if(this.password == this.confirmpassword){
      console.log("entered_if")
      console.log(this.password);
      console.log(this.confirmpassword);
      console.log(this.username);
      console.log(this.email);
      
      try{
      this.authService.signupUser(this.email, this.password, this.username).then(
        () => {
          //this.router.navigate(['userdetail']);
          console.log("entertrue")
          
        },
        async error => {
          console.log("async error");
          const alertt = await this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: 'Ok', role: 'cancel' }],
          });
          await alertt.present();
        }
      )
      }
      finally
      {
      
      console.log("exit");
      console.log(this.password);
      console.log(this.confirmpassword);
      console.log(this.username);
      console.log(this.email);
      return new Promise(resolve => {
        resolve(0);
      });
      }

    }
    else{
      this.alert('Error','Passwords don\'t match');
      console.log("enterfalse")
      return new Promise(resolve => {
        resolve(0);
      });
    }
  }


  signup(){
    if (this.password.length >=8 && this.username.length >=8)
    {
    if (this.password == this.confirmpassword )
    {
      console.log("1")
      return 1;
    }
    console.log("0")
    return 0;
  }
  console.log("0")
  return 0;
  }

  gotologinpage(){
    this.router.navigate([''])
  }

  
}
