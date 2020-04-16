import { Component, ViewChild } from '@angular/core';
import { NavController, BooleanValueAccessor } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticateService } from '../services/authentication.service';
import 'firebase/auth'
import * as firebase from 'firebase';
import { Project } from '../models/project.model';
import { FirebaseService } from '../services/firebase.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

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
  assignee = [];
  taskStatus = [];
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
    public toastController: ToastController,
    private router: Router,
    private authService: AuthenticateService,
    private fireService: FirebaseService,
    private firestore: AngularFirestore) {
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
    this.assignee.push("Not Assigned");
    this.taskStatus.push("Incomplete");
    this.skills = [];
  }

  deletetask(index)
  {
    this.tasklist.splice(index, 1);
    this.skillslist.splice(index, 1);
    this.assignee.splice(index, 1);
    this.taskStatus.splice(index, 1);

  }
  saveProject()
  {
    if(this.projname.length == 0)
    {
      this.presentToast('Project Name Empty');
    } 
    else if(this.namelist.length == 0)
    {
      this.presentToast('No members added');
    }
    else if(this.tasklist.length == 0)
    {
      this.presentToast(' No tasks added');      
    }
    else{

    this.currProj.createdBy = this.currUser.displayName;
    this.currProj.members = this.namelist;
    this.currProj.name = this.projname;
    this.currProj.tasks = this.tasklist;
    this.currProj.skills = {...this.skillslist};
    console.log(this.currProj);
    this.fireService.createProject(this.currProj); 
    this.router.navigate(['main/projectlist']) 
    }
  }



  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      header: "Cannot Create Project :",
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }
  ngOnInit(){
    this.fireService.inProjectPage = false;
    this.fireService.inChatPage = false;
    this.fireService.updateLoginStatus(this.currUser.displayName,"offline");
    this.firestore.collection(this.currUser.displayName).doc(this.currUser.displayName).get().subscribe(data => console.log(data.data().status));
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
