import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import 'firebase/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

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

  

  constructor(public navCtrl: NavController, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
  }

  ngOnInit() {
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
