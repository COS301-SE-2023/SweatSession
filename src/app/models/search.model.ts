import { IWorkoutScheduleModel } from "./workoutSchedule.model";

export interface ISearchTerms{
    searchQuery?: string;
    showSuggestions?: boolean;
    suggestions?: string[];
    filteredSuggestions?: any[];
    initial?: boolean;
}