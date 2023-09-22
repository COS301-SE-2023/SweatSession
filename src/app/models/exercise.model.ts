export interface Exercise {
    id?: string;
    scheduleId: string;
    name: string;
    sets: number;
    reps: number;
    weight: number;
    hasChanged?: boolean;
    duration: number;
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
            instructions: string[];
        };
}
  
export interface healthData {
    age: number;
    diet: string;
    displayName: string;
    gender: string;
    height: number;
    medicalConditions: string;
    weight: number;
    workoutCommitment: string;
    weightGoals: number;
}