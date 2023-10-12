import { Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { EditGroup } from 'src/app/actions';
import { IGroup } from 'src/app/models';

@Component({
  selector: 'edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss'],
})
export class EditGroupComponent  implements OnInit{
  @Input() group: IGroup;
  editGroup: IGroup;
  valuesChanged = false;

  constructor(private store: Store, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.editGroup = this.group;
  }

  edit() {
    this.store.dispatch(new EditGroup({group: this.editGroup}));
    this.valuesChanged = false;
    this.closeModal();
  }

  isChange() {
    this.valuesChanged = true;
  }

  onFileSelected(event: any) {
   this.isChange();
    const file: File = event.target.files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.editGroup.profileURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  selectFile() {
    document.getElementById('GroupProfileImgInput')?.click();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
