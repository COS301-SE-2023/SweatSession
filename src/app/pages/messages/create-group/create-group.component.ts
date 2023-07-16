import { Component, OnInit } from '@angular/core';
import { IGroup} from 'src/app/models';

@Component({
  selector: 'create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent  implements OnInit {
  group:IGroup = {}
  constructor() { }

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
   
  }

}
