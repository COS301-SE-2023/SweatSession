import { Injectable } from '@angular/core';
import { MUSCLE_GROUP_DATA, Video } from '../../models/muscleGroup.model';

@Injectable({
  providedIn: 'root'
})
export class MuscleGroupService {

  constructor() { }

  getVideosByMuscleGroup(muscle: string): Video[] {
    return MUSCLE_GROUP_DATA[muscle];
  }
}
