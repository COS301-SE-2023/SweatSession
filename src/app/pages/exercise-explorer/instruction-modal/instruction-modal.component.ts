import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ExerciseList} from "../../../models/exercise.model";

@Component({
  selector: 'app-instruction-modal',
  templateUrl: './instruction-modal.component.html',
  styleUrls: ['./instruction-modal.component.scss'],
})
export class InstructionModalComponent  implements OnInit {
  @Input() Exersisedata: ExerciseList;
  Instructions: string[] = [];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.populateInstructions();
  }


  dismissModal() {
    this.modalController.dismiss();
  }

  private populateInstructions() {
    // popuilate with mock data
    this.Instructions = this.Exersisedata.video.instructions;
  }
}
