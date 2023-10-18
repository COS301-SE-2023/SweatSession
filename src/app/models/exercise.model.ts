export interface Exercise {
    id?: string;
    scheduleId: string;
    name: string;
    sets: number;
    reps: number;
    weight: number;
    hasChanged?: boolean;
    duration: number;
    completed: boolean;
}

export interface ExerciseList
{
    MuscleGroup: string;
    video:
        {
            id?: string;
            url: string;
            exersiseName: string;
            difficulty: string;
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

export interface weightdata {
    weight: number;
    date: Date;
    userId: string;
}