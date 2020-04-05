import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { map, first} from 'rxjs/operators';

interface User{
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = {
    email: "example3@gmail.com",
    password: "12345678",
  };


  constructor(public afAuth: AngularFireAuth) { }

 

  async createacc(){
    const user =await this.afAuth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password,
    );
    console.log(user);
  }
  async login()
  {
    const user = await this.afAuth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password,
    );
    console.log(user);
    if (this.afAuth.authState !=null)
    {
      const userconf = this.afAuth.authState.pipe(first()).toPromise();
    }
    if(user){
      this.afAuth.authState.pipe(map(authState => authState.uid));
      console.log(this.afAuth.authState.pipe(map(authState => authState.uid)));

      
    }
    else {
      console.log("none");

    }

  }

  ngOnInit() {
  }

}
