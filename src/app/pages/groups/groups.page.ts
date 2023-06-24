import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  Groups$: any[] = [
    {
      name: 'Group 1',
      description: 'This is a group',
      members: [
        {
          name: 'User 1',
          
        },
        {
          name: 'User 2',

        }],
        
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      size: 2,
      workoutType: 'Running',
      type: 'public'
    },
    {
      name: 'Group 2',
      description: 'This is a group',
      members: [
        {
          name: 'User 1',
          
        },
        {
          name: 'User 2',

        }],
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      size: 2,
      workoutType: 'Running',
      type: 'public'
    },
    {
      name: 'Group 3',
      description: 'This is a group',
      members: [
        {
          name: 'User 1',
          
        },
        {
          name: 'User 2',

        }],
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      size: 2,
      workoutType: 'Running',
      type: 'public'
    }
  ];

  constructor() { }


  ngOnInit() 
  {

  }

}
