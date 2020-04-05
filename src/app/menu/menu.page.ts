import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
  {
    title: 'Home',
    url: 'projectlist',
    icon: 'home'
  },
  {
    title: 'Add New Project',
    url: 'home',
    icon: 'add'
  }

];

  selectedpath ='';
  constructor(private router:Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
   }

  ngOnInit() {
  }

}
