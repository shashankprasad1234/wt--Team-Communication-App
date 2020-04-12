import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import 'firebase/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.page.html',
  styleUrls: ['./userdetail.page.scss'],
})
export class UserdetailPage implements OnInit {

  constructor(private router: Router,
    private alertCtrl: AlertController,
    private authService: AuthenticateService,
    private firestore: AngularFirestore) { }

  currUser = firebase.auth().currentUser
  firstname: string = '';
  lastname: string = '';
  gender: string = '';
  skills = [];
  username = this.currUser.displayName;
  email = this.currUser.email;
  

  ngOnInit() {
    if(this.authService.userDetails() != null){
      console.log(this.authService.userDetails().displayName);
    }
    
  }

  async alert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      message: message,
      subHeader: title,
      buttons: ['OK']
    });
    await alert.present();
  }

  saveDetails() {
    if(this.firstname.length != 0 && this.lastname.length != 0 && this.gender.length != 0 && this.skills.length != 0){
      new Promise<any>((resolve, reject) => 
      {
        this.firestore
          .collection("users")
          .add({
                email: this.email,
                username: this.username,
                firstname: this.firstname,
                lastname: this.lastname,
                gender: this.gender,
                skills: this.skills
          })
          .then(res => {}, err => reject(err));
      })
      this.router.navigate(["menu"]);

    }
    else{
      this.alert('Error','Fill details!');
    }
  }

}
