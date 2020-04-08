import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {

  project ="projectname";
  members = ["aaa","bbb","ccc"];
  tasks =[
    {
      name:"fuck this shit :(",
      member:"aaa",
      status:"complete"
    },
    {
      name:"task2",
      member:"aaa",
      status:"incomplete"
    },
    {
      name:"task 3",
      member:"bbb",
      status:"complete"
    }
  ];

  goback(){
    this.router.navigate(['main/projectlist'])
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
