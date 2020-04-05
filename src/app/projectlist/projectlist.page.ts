import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.page.html',
  styleUrls: ['./projectlist.page.scss'],
})
export class ProjectlistPage implements OnInit {
  projects = [
    {
      title: 'project1',
      creator: 'a',
      members: 'a,b,c,d'
    },
    {
      title: 'Project 2',
      creator: 'b',
      members: 'a,b,c'
    }
  ];

  constructor() { }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 5000);
  }

  ngOnInit() {
  }

}
