import { MuscleGroupService } from './muscleGroup.service';


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
