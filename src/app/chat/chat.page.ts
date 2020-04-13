import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { NavController, IonContent} from '@ionic/angular';
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

  @ViewChild(IonContent, {static: true}) contentArea: IonContent;
  currUser = firebase.auth().currentUser
  username = this.currUser.displayName;
  message: string = '';
  
  currentUser = this.username;


  currProject : string = '';

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
  
  constructor(public navCtrl: NavController,
    private router: Router,
    private firestore: AngularFirestore,
    private userService: FirebaseService,
    public _zone: NgZone) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
   
    this.presUserArr = [];
    this.userService.getChatDetails(this.userService.currProject).subscribe(data => 
      {
        console.log(data);
        this.presUserArr = [];
        this.userArr = data.map( user => {
          console.log(user.payload.doc.metadata)
          const userData = user.payload.doc.data();
          this.currProject = this.userService.setCurrProject();
            if(userData.group == this.currProject){
              this.presUserArr.push(userData);
            }
            console.log(userData)
          return userData;
        })
      })
      console.log(this.userArr);
    
      
  }

  sendMessage(){
    console.log(this.currProject);
    this.firestore.collection(this.userService.currProject).add({
      group: this.userService.currProject,
      message: this.message,
      username: this.username,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    })
    this.scrollToBottomOnInit();
    this.message = '';
    this.presUserArr = [];
  }
  
  scrollToBottomOnInit() {
    let that = this;
    setTimeout(()=>{that.contentArea.scrollToBottom();},100)
  }

  ngOnInit() {
    this.scrollToBottomOnInit();
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