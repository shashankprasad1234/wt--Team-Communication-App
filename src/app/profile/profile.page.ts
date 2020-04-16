import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import 'firebase/auth';
import * as firebase from 'firebase';
import { User } from '../models/user.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private fireService: FirebaseService
    ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
  }

  userArr: User[] = [];
  pages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Projects',
      url: 'projectlist',
      icon: 'eye'
    },
    {
      title: 'Chat',
      url: 'chat',
      icon: 'chatbubbles'
    },
    {
      title: 'Profile',
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

  presUserArr: User[] = [];
  currUser = firebase.auth().currentUser
  username = this.currUser.displayName;
  currProject : string = '';
  goback() {
    this.router.navigate(['main/home'])
  }

  ngOnInit() {
    this.fireService.inProjectPage = false;
    this.fireService.updateLoginStatus(this.currUser.displayName,"offline");
    this.fireService.getUsers().subscribe(data => 
      {
        console.log(data);
        this.userArr = data.map( user => {
          const userData = user.payload.doc.data() as User;
          if(userData.username == this.username)
          {
            this.presUserArr.push(userData);
          }
          return userData;
        })
      })
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("logged in");
        // User is signed in.
      } else {
        console.log("logged out");
        this.router.navigate([''])
      }
    });
  }

}
