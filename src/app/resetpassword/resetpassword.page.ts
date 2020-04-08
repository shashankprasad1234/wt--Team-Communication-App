import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController ) { }

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


  SignUp() {
    if(/^[a-zA-Z][a-zA-Z0-9]*@gmail\.com$/.test(this.email)){
      if(/^[a-zA-Z][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]+$/.test(this.username)){
        if(this.password.length < 8){
          this.alert('Error','Password should be minimum 8 characters')
        }
        else if(this.password == this.confirmpassword){
          
          this.alert("Success","Account created")
          this.router.navigate(['userdetail']);
        }
        else{
          this.alert('Error','Passwords don\'t match')
        }
      }
      else{
        this.alert('Error', "Invalid Username")
      }
    }
    else{
      this.alert('Error', "Invalid Email Id")
    }
    
  }

  gotologinpage(){
    this.router.navigate([''])
  }

  
}
