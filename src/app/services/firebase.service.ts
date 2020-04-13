import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  thisUser: User;

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: User){
    return this.firestore.collection('users').add(user);
  }

  getProjects()
  {
    return this.firestore.collection('projects').ref;
  }

  getChatDetails(){
    let chatRef = this.firestore.collection<any>('chattemp', ref => ref.orderBy('created_at'));
    return chatRef.snapshotChanges()
  }

  createProject(project: Project)
  {
    return this.firestore.collection('projects').add({...project});
  }

  getUser(username: string)
  {
    this.firestore.collection('users').ref
    .where('username', '==', username)
    .limit(1)
    .get()
    .then(snapshot => {
      if(snapshot.empty)
      {
        console.log("Invalid User")
        return this.thisUser;
      }
      return snapshot[0] as User;
      });
  }
}
