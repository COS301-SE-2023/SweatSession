export interface Exercise {
    id?: string;
    scheduleId: string;
    name: string;
    sets: number;
    reps: number;
    weight: number;
    hasChanged?: boolean;
}

export interface ExerciseList
{
    MuscleGroup: string;
    video:
        {
            id?: string;
            url: string;
            exersiseName: string;
            exerciseDescription: string;
        };
}
  
  