import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { AuthenticateService } from '../services/authentication.service';


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
  }
 

];

  logoutpage = [
    {
      title: 'Log Out',
      icon: 'log-out',
      
    }
  ]

  homepage = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    }
  ]

  projectlistpage = [
    {
      title: 'View Projects',
      url: 'projectlist',
      icon: 'eye'
    }
  ]

  chatpage = [
    {
      title: 'Chat',
      url: 'chat',
      icon: 'chatbubbles'
    }
  ]

  profilepage = [
    {
      title: 'profile',
      url: 'profile',
      icon: 'man'
    }
  ]

  gotohome(){
    this.router.navigate(['main/home'])
  }

  gotoprojects(){
    this.router.navigate(['main/projectlist'])
  }

  gotochat(){
    this.router.navigate(['main/chat'])
  }

  gotoprofile(){
    this.router.navigate(['main/profile'])
  }

  logOut(){
    this.authService.logoutUser();
    
    

    this.router.navigate(['']);
  }

  selectedpath ='';
  constructor(private router:Router, private authService: AuthenticateService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
   }

  ngOnInit() {
  }

}
