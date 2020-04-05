import { Component, ViewChild } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasklist=[];
  namelist=[];
  taskname: string="";
  memname: string="";
  constructor(public navCtrl: NavController) {}
  
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


}
