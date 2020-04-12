import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import 'firebase/auth'

 

@Injectable()
export class AuthenticateService {
    public loggedin = false;    
  constructor(){}
 
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
 
 loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
     this.loggedin = true;
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
 