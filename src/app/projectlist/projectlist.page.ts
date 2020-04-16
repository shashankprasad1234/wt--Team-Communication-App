import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import 'firebase/auth'
import * as firebase from 'firebase';
import { FirebaseService } from '../services/firebase.service';
import { Project } from '../models/project.model';
import { ChatPageModule } from '../chat/chat.module';
import { ChatPage } from '../chat/chat.page';


@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.page.html',
  styleUrls: ['./projectlist.page.scss'],
})
export class ProjectlistPage implements OnInit {
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

  currUser = firebase.auth().currentUser
  username = this.currUser.displayName;
  selectedpath: string = '';
  projArr: Array<Project> = [];

  constructor(
    private router: Router,
    private fireService: FirebaseService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
    this.fireService.getProjects()
    .where('members', 'array-contains', this.username)
    .get()
    .then(snapshot => {
      
      if(snapshot.empty)
      {
        console.log("No Projects for this User");
        return;
      }
      snapshot.forEach(project => {
        var newProj = project.data() as Project;
        if(this.projArr.includes(newProj) == false){
          this.projArr.push(newProj);
        }
        
      })
    })
    this.fireService.inProjectPage = true;
    this.getProj()
    
    
    // this.getProj();
   }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 5000);
  }

  goToChat(projectName: string, projectMembers: any[]){
    console.log(this.fireService.currProject);
    this.fireService.currProject = projectName;
    this.fireService.currMembers = projectMembers;
    console.log(this.fireService.currMembers)
    console.log(this.fireService.currProject);
    
    this.router.navigate(['main/chat'])
  }

  goToDetails(projectName: string){
    //go to project detail page
    this.fireService.currProject = projectName;
    
    this.router.navigate(['main/tasklist'])

  }

getProj(){
  let self = this;
  this.fireService.getProjects().where('members', 'array-contains', this.username).get().then(snapshot => {
    this.projArr = [];
    if(snapshot.empty)
    {
      console.log("No Projects for this User");
      return;
    }
    snapshot.forEach(project => {
      var newProj = project.data() as Project;
      if(this.projArr.includes(newProj) == false){
        this.projArr.push(newProj);
      }
      
    })
  })

    console.log(10);
    if(this.fireService.inProjectPage == true){
      setTimeout(() => {
        console.log('Async operation has ended');
        this.getProj();
      }, 5000);
    }else{
      console.log(this.fireService.inProjectPage);
    }
   
  }

  ngOnInit() {
    this.fireService.updateLoginStatus(this.currUser.displayName,"offline");
    
    // this.fireService.getProjects()
    // .where('members', 'array-contains', this.username)
    // .get()
    // .then(snapshot => {
    //   if(snapshot.empty)
    //   {
    //     console.log("No Projects for this User");
    //     return;
    //   }
    //   snapshot.forEach(project => {
    //     var newProj = project.data() as Project;
    //     this.projArr.push(newProj);
    //   })
    // })

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
