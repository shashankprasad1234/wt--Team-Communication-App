import { Component, ViewChild } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { NavController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticateService } from '../services/authentication.service';
import 'firebase/auth'
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasklist=[];
  namelist=[];
  taskname: string="";
  memname: string="";

  pages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'View Projects',
      url: 'projectlist',
      icon: 'eye'
    },
    {
      title: 'Chat',
      url: 'chat',
      icon: 'chatbubbles'
    },
    {
      title: 'profile',
      url: 'profile',
      icon: 'man'
    },
    {
      title: 'Log Out',
      url: '',
      icon: 'log-out'
    }
  
  ];
  selectedpath: string = '';

  

  constructor(public navCtrl: NavController, private router: Router, private authService: AuthenticateService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
  }
  
  addname() {
    if (this.memname.length > 0) {
      let name = this.memname;
      this.namelist.push(name);
      this.memname = "";
  
    }
  }
  deletename(index){
    this.namelist.splice(index, 1);
}
  ngOnInit(){
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
        console.log("logged in");
        
        // User is signed in.
      } else {
        console.log("logged out");
        self.router.navigate([''])
      }
    });
  }

}
