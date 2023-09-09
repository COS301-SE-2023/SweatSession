import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent  implements OnInit {
  @Input() name!:string;
  @Input() receivedDescription!:string;
  @Input() notReceivedDescription!:string;
  @Input() received!:boolean;
  @Input() imageName!:string;

  constructor() { }

  ngOnInit() {}

}
