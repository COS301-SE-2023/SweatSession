export interface Exercise {
    id?: string;
    scheduleId: string;
    name: string;
    sets: number;
    reps: number;
    weight: number;
    hasChanged?: boolean;
}

export interface ExerciseList {
    id?: string;
    name: string;
    videoUrls: string[];
}
  
  