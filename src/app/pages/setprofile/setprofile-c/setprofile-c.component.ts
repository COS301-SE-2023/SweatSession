import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetProfileAction, } from '../../../actions/profile.action';
import { IGetProfile,IProfileModel } from '../../../models';
@Component({
  selector: 'app-setprofile-c',
  templateUrl: './setprofile-c.component.html',
  styleUrls: ['./setprofile-c.component.scss'],
})

export class SetprofileCComponent  implements OnInit {
  
  @Input() user!: IProfileModel;
  
  constructor(private store: Store) { }

  GetProfileAction(IGetProfile: IGetProfile) {
    this.store.dispatch(new GetProfileAction(IGetProfile));
  }

  ngOnInit() {}

}