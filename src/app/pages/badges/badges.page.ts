import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {
  badges=[{
      header:"Starter's Success",
      description:"Congratulations! You have completed your first workout plan",
      received:true
    },{
      header:"Starter's Success",
      description:"Congratulations! You have completed your first workout plan",
      received:true
    },{
      header:"Starter's Success",
      description:"Congratulations! You have completed your first workout plan",
      received:false
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
