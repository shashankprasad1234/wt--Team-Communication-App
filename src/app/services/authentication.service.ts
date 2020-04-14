import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import 'firebase/auth'
import { Storage } from '@ionic/storage';
 

@Injectable()
export class AuthenticateService {
    public loggedin = false;    
  constructor(private storage: Storage){}

  username: string = '';
 
  signupUser(email: string, password: string, username: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(result) {
  return result.user.updateProfile({
    displayName: username
  })
}).catch(function(error) {
  console.log(error);
});

  }
  
  setUser(user: string){
    this.storage.set('user', user)
  }

  getUser(){
    let self = this;
    this.storage.get('user').then((val) => {
      self.username = val;
      console.log('Your username is', val);
    });
    return self.username;
  }

 loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
     this.loggedin = true;
     this.setUser(email);
     return firebase.auth().signInWithEmailAndPassword(email,password);
 }
 
  logoutUser():Promise<void>{
      this.loggedin = false;
    return firebase.auth().signOut();
  }
 
  userDetails(){
    return firebase.auth().currentUser;
  }



  
}
 