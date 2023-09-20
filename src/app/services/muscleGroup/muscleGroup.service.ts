import { Injectable } from '@angular/core';
import { MuscleGroup, Video, MUSCLE_GROUP_DATA } from '../../models/muscleGroup.model';

@Injectable({
  providedIn: 'root'
})
export class MuscleGroupService {

  constructor() { }

  getVideosByMuscleGroup(muscle: string): Video[] {
    return MUSCLE_GROUP_DATA[muscle];
  }
}
