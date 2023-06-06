import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent  implements OnInit {
  @Input() name!:string;
  @Input() description!:string;
  @Input() received!:boolean;

  constructor() { }

  ngOnInit() {}

}
