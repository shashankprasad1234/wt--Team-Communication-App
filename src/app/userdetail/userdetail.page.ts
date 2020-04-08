import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.page.html',
  styleUrls: ['./userdetail.page.scss'],
})
export class UserdetailPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }

  firstname: string = '';
  lastname: string = '';
  gender: string = '';
  skills: string = '';
  

  ngOnInit() {
  }

  async alert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      message: message,
      subHeader: title,
      buttons: ['OK']
    });
    await alert.present();
  }

  gotomainpage() {
    if(this.firstname.length != 0 && this.lastname.length != 0 && this.gender.length != 0 && this.skills.length != 0){
      this.alert('Success','Details recorded');
      this.router.navigate(["menu"]);

    }
    else{
      this.alert('Error','Fill details!');
      console.log(this.firstname,this.lastname,this.gender, this.skills)
    }
    
  }
}
