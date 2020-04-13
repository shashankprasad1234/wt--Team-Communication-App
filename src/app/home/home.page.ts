import { Component, ViewChild } from '@angular/core';
import { NavController, BooleanValueAccessor } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticateService } from '../services/authentication.service';
import 'firebase/auth'
import * as firebase from 'firebase';
import { Project } from '../models/project.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  skills = [];
  tasklist = [];
  skillslist = [];
  namelist = [];
  taskname: string = "";
  memname: string = "";
  projname: string = "";
  currUser = firebase.auth().currentUser;


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

  currProj = new Project();

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private authService: AuthenticateService,
    private fireService: FirebaseService) {
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

  addtask()
  {
    if (this.taskname.length > 0) {
      let name = this.taskname;
      this.tasklist.push(name);
      this.taskname = "";
    }
    this.skillslist.push(this.skills);
    this.skills = [];
  }

  deletetask(index)
  {
    this.tasklist.splice(index, 1);
    this.skillslist.splice(index, 1);
  }
  saveProject()
  {

    this.currProj.createdBy = this.currUser.displayName;
    this.currProj.members = this.namelist;
    this.currProj.name = this.projname;
    this.currProj.tasks = this.tasklist;
    this.currProj.skills = {...this.skillslist};
    console.log(this.currProj);
    this.fireService.createProject(this.currProj); 
    this.router.navigate(['main/projectlist']) 
  }


  ngOnInit(){
    console.log(this.authService.getUser());
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
