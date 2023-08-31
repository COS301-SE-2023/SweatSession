import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateWorkoutSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { GymsearchComponent } from '../../search/gymsearch/gymsearch.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.scss'],
})
export class EditScheduleComponent  implements OnInit {
  @Input() schedule:IWorkoutScheduleModel;
  isChange = false;
  constructor(private store:Store, private modalController: ModalController) { }

  ngOnInit() {}

  checkChange() {
    this.isChange = true;
  }

  editSchedule() {
    this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
  }

  async openLocationModal() {
    const modal = await this.modalController.create({
      component: GymsearchComponent, // Replace LocationModalPage with the name of your modal component
    });
    await modal.present();
  
    // Handle the location selection event when the modal is dismissed
    const { data } = await modal.onDidDismiss();
    // if (data && data.selectedGym && data.placeId) {
    //   console.log(data);
    //   this.schedule.location = data.selectedGym;
    //   this.placeId = data.placeId;    }
  }
}
