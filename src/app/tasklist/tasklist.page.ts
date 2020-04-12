import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import 'firebase/auth';
import * as firebase from 'firebase';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {

  project ="projectname";
  members = ["aaa","bbb","ccc"];
  tasks =[
    {
      name:"fuck this shit :(",
      member:"aaa",
      status:"complete"
    },
    {
      name:"task2",
      member:"aaa",
      status:"incomplete"
    },
    {
      name:"task 3",
      member:"bbb",
      status:"complete"
    }
  ];

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
  ]

  goback(){
    this.router.navigate(['main/projectlist'])
  }
  selectedpath = '';
  constructor(private router: Router, private authService: AuthenticateService) { 
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
