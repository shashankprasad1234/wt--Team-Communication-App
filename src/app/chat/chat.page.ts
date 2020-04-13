import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import 'firebase/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  currUser = firebase.auth().currentUser
  username = this.currUser.displayName;
  message: string = '';
  
  currentUser = this.username;




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
  new_presUserArr : User[] = []
  userArr: User[] = [];
  presUserArr: User[] = [];
  timearr: any;
  
  constructor(public navCtrl: NavController, private router: Router, private firestore: AngularFirestore, private userService: FirebaseService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
   
    this.presUserArr = [];
    this.userService.getChatDetails().subscribe(data => 
      {
        console.log(data);
        this.presUserArr = [];
        this.userArr = data.map( user => {
          console.log(user.payload.doc.metadata)
          const userData = user.payload.doc.data() as User;
           
            this.presUserArr.push(userData);
          
            
            console.log(userData)
          return userData;
        })
      })
      console.log(this.userArr);
    
      
  }

 
  
  
  
  sendMessage(){
    
    this.firestore.collection('chattemp').add({
      group: "projectname",
      message: this.message,
      username: this.username,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    })
    this.message = '';
    this.presUserArr = [];
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