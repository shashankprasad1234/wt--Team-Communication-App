import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model';
import { Project } from '../models/project.model';

import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }
  currProject: string = '';
  thisUser: User;
  currMembers: any[];

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: User) {
    return this.firestore.collection('users').add(user);
  }

  getProjects() {
    return this.firestore.collection('projects').ref;
  }

  getChatDetails(projectname: string) {
    let chatRef = this.firestore.collection<any>(projectname, ref => ref.orderBy('created_at'));
    return chatRef.snapshotChanges()
  }

  createProject(project: Project) {
    return this.firestore.collection('projects').add({ ...project });
  }

  updateLoginStatus(user: string, status: string) {
    
      console.log(user);
      this.firestore.collection(user).doc(user).set({
        user: user,
        status: status
      });
     
  

  }



  setCurrProject() {
    return this.currProject;

  }
  getUser(username: string) {
    this.firestore.collection('users').ref
      .where('username', '==', username)
      .limit(1)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("Invalid User")
          return this.thisUser;
        }
        return snapshot[0] as User;
      });
  }
}
