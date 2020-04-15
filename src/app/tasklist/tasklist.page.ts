import { Component, OnInit } from '@angular/core';
import 'firebase/auth'
import * as firebase from 'firebase';
import { FirebaseService } from '../services/firebase.service';
import { Project } from '../models/project.model';
import { ChatPageModule } from '../chat/chat.module';
import { ChatPage } from '../chat/chat.page';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {

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

/*
  constructor(
    private router: Router,
    private fireService: FirebaseService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
  }

  goToChat(projectName: string, projectMembers: any[]){
    console.log(this.fireService.currProject);
    this.fireService.currProject = projectName;
    this.fireService.currMembers = projectMembers;
    console.log(this.fireService.currMembers)
    console.log(this.fireService.currProject);
    
    this.router.navigate(['main/chat'])
  }
*/
  ngOnInit() {
  }

}
