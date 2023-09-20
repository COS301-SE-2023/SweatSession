import { MuscleGroupService } from './muscleGroup.service';
import { MUSCLE_GROUP_DATA } from '../../models/muscleGroup.model';


describe('MuscleGroupService', () => {
    let muscleGroupService: MuscleGroupService;

    beforeEach(() => {
      muscleGroupService = new MuscleGroupService();
    });

    test('should return an array of videos for a given muscle group', () => {
        const muscleGroup = 'biceps';
        const videos = muscleGroupService.getVideosByMuscleGroup(muscleGroup);
        expect(videos.length).toBeGreaterThan(0);
      }); 
});
