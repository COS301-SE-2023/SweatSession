import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddChatGroup } from 'src/app/actions';
import { IGroup} from 'src/app/models';

@Component({
  selector: 'create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent  implements OnInit {
  group:IGroup = {}
  constructor(private store: Store) { }

  ngOnInit() {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.group.profileURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  createGroup() {
   this.store.dispatch(new AddChatGroup(this.group));
  }

}
