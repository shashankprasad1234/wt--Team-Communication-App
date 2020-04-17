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
  currProj = this.userService.currProject;
  
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
  isLoading = 0;
  timearr: any;
  status: string = '';
  
  constructor(public navCtrl: NavController,
    private router: Router,
    private firestore: AngularFirestore,
    private userService: FirebaseService,
    public _zone: NgZone) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
    //this.scrollval();
   this.scrollToBottomOnInit();
   this.userService.alreadySeen = this.presUserArr;
    this.presUserArr = [];
    this.userService.getChatDetails(this.userService.currProject.name).subscribe(data => 
      {
        //console.log(data);
        this.presUserArr = [];
        this.userArr = data.reverse().map( user => {
          //console.log(user.payload.doc.metadata)
          const userData = user.payload.doc.data();
          
          this.currProject = this.userService.currProject.name;
            if(userData.group == this.currProject){
              this.firestore.collection(userData.username).doc(userData.username).get().subscribe(data => 
                userData.status = data.data().status
             )
             if(this.userService.alreadySeen.includes(userData) == false){
               //console.log(userData)
              this.presUserArr.push(userData);
             } 
            }
          return userData;
        })
      })
     // console.log(this.userArr);
     this.userService.inChatPage = true;
     this.updateLoginStatus();    
      
  }

  async sendMessage(){
 
    
    if(this.message == ""){
      return;
    }
    if(this.message == "list tasks"){
      console.log("list tasks")
      this.message = "Tasks:\n";
      for(let i=0;i<this.userService.currProject.tasks.length;i++){
        this.message = this.message.concat(" ",this.userService.currProject.tasks[i]," : ",this.userService.currProject.taskStatus[i],"\n");
      }
    }
    else if(this.message == "list members"){
        this.message="Members:\n";
        console.log("list members")
        for(let i=0;i<this.userService.currProject.members.length;i++){
          this.message = this.message.concat(" ",this.userService.currProject.members[i],"\n");
        }
    }
    else if(this.message == "list resources")
    {
      await this.userService.getRes().subscribe(async data => {
        var dataLen = Object.keys(data).length;
        if(dataLen < 1)
        {
          this.message = "No incomplete tasks found.\n";
          this.sendMessage(); 
          return;
        }
        this.message = "Resources:\n";
        for(let i = 0; i < Object.keys(data).length; i++)
        {
          this.message = this.message.concat("\n", this.userService.currProject.tasks[i]);
          for(let j = 0; j < 3; j++)
          {
            this.message = this.message.concat("  ", data[i][j]);
          }
          this.message.concat("\n");
        }
        this.sendMessage(); 
      })
    }
    console.log(this.currProject);
    this.firestore.collection(this.userService.currProject.name).add({
      group: this.userService.currProject.name,
      message: this.message,
      username: this.username,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    })
    this.scrollToBottomOnInit();
    this.message = '';
    //this.presUserArr = [];  
  }
  
  scrollToBottomOnInit() {
    let that = this;
    setTimeout(()=>{that.contentArea.scrollToBottom(0);},100)
  }

  updateLoginStatus(){
    for(let i=0;i<this.presUserArr.length;i++){
      this.firestore.collection(this.presUserArr[i].username).doc(this.presUserArr[i].username).get().subscribe(data => 
        this.presUserArr[i].status = data.data().status)
    }

    console.log(10);
    if(this.userService.inChatPage == true){
      setTimeout(() => {
        console.log('Chat periodic refresh');
        this.updateLoginStatus();
      }, 4000);
    }else{
      console.log(this.userService.inChatPage);
    }
  }

  delay(event){
    this.isLoading = 1;
    setTimeout(() => {
      this.loadData(event);
    },1000);
  }
  
  loadData(event){
    if(this.isLoading){
      console.log("hi")
    setTimeout(() => {  this.userService.messagesLimit = this.userService.messagesLimit + 20;
    this.presUserArr = [];
    this.userService.getChatDetails(this.userService.currProject.name).subscribe(data => 
      {
        //console.log(data);
        this.presUserArr = [];
        this.userArr = data.reverse().map( user => {
          //console.log(user.payload.doc.metadata)
          const userData = user.payload.doc.data();
          
          this.currProject = this.userService.currProject.name;
            if(userData.group == this.currProject){
              this.firestore.collection(userData.username).doc(userData.username).get().subscribe(data => 
                userData.status = data.data().status
             )
             //console.log(userData)
              this.presUserArr.push(userData);
            }
          return userData;
        })
        this.isLoading = 0;
        this.contentArea.scrollToPoint(0,1300,1);

      }
      
      )
      event.target.complete()
    },500);
    }
  }
 
  ngOnInit() {   
    this.userService.inProjectPage = false;
    this.scrollToBottomOnInit(); 
    this.userService.updateLoginStatus(this.currUser.displayName,"online");
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
        console.log("logged in");
        //self.scrollToBottomOnInit();
        // User is signed in.
      } else {
        console.log("logged out");
        self.router.navigate([''])
      }
    });
  }

}