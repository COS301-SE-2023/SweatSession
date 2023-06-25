export interface Exercise {
    id?: string;
    scheduleId: string;
    name: string;
    sets: number;
    reps: number;
    weight: number;
    hasChanged?: boolean;
}
  
  