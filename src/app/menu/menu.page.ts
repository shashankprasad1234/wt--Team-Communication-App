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
    url: 'home',
    icon: 'home'
  },
  {
    title: 'View Projects',
    url: 'projectlist',
    icon: 'eye'
  },
  {
    title: 'Chat',
    url: 'chat',
    icon: 'chatbubbles'
  },
  {
    title: 'profile',
    url: 'profile',
    icon: 'man'
  },
  {
    title: 'Log Out',
    url: '',
    icon: 'log-out'
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
