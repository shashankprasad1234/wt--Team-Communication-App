import { Component, OnInit } from '@angular/core';
import 'firebase/auth'
import * as firebase from 'firebase';
import { FirebaseService } from '../services/firebase.service';
import { Project } from '../models/project.model';
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

  skills: Array<string> = [];
  taskname: string = "";
  uname: string = "";

  addUser()
  {
    let updatedProj = new Project;
    updatedProj = this.currProj;
    updatedProj.members.push(this.uname);
    this.currProj = updatedProj;
    this.fireService.updateProj(updatedProj);
    this.uname = "";
  }

  removeUser(username: string)
  {
    let updatedProj = new Project;
    updatedProj = this.currProj;
    const index = updatedProj.members.indexOf(username, 0);
    if (index > -1)
    {
      updatedProj.members.splice(index, 1)
    }
    this.currProj = updatedProj;
    this.fireService.updateProj(updatedProj);
    if(username == this.username)
    {
      this.router.navigate(['main/projectlist']);
    }
  }

  addTask()
  {
    let updatedProj = new Project;
    updatedProj = this.currProj;
    updatedProj.tasks.push(this.taskname);
    console.log(updatedProj);
    var tempArr = Object.values(updatedProj.skills);
    tempArr.push(this.skills);
    updatedProj.skills = {...tempArr};
    this.currProj = updatedProj;
    this.fireService.updateProj(updatedProj);
    this.skills = [];
  }

  deleteTask(ind: number)
  {
    let updatedProj = new Project;
    updatedProj = this.currProj;
    updatedProj.tasks.splice(ind, 1);
    var tempArr = Object.values(updatedProj.skills);
    tempArr.splice(ind, 1);
    updatedProj.skills = {...tempArr};
    this.currProj = updatedProj;
    this.fireService.updateProj(updatedProj);
  }


  gotoChat(){
    this.router.navigate(['main/chat']);
  }

  constructor(
    private router: Router,
    private fireService: FirebaseService) {
    }

    currProj = this.fireService.currProject;
    currUser = firebase.auth().currentUser
    username = this.currUser.displayName;

  ngOnInit() {
    this.fireService.inProjectPage = false;
    this.fireService.inChatPage = false;
  }

}
