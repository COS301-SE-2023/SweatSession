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
    if(!this.group.profileURL)
      this.group.profileURL = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    this.store.dispatch(new AddChatGroup(this.group));
  }

  isValidInput() {
    const {displayName, bio, profileURL} = this.group;

    if(bio && displayName) {
      return true;
    }
    return false;
  }

}
