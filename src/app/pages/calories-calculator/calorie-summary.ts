export class CalorieSummary {
    // Static variables
    private static _targetCalories: number;
    private static _dietCalories: number;
    private static _workoutCalories: number;
  
    constructor(){
        CalorieSummary._targetCalories = 0;
        CalorieSummary._dietCalories = 0;
        CalorieSummary._workoutCalories = 0;
      }
    
    // Getter and Setter for targetCalories
    public static get targetCalories(): number {
      return this._targetCalories;
    }
  
    public static set targetCalories(value: number) {
      this._targetCalories = value;
    }
  
    // Getter and Setter for dietCalories
    public static get dietCalories(): number {
      return this._dietCalories;
    }
  
    public static set dietCalories(value: number) {
      this._dietCalories = value;
    }
  
    // Getter and Setter for workoutCalories
    public static get workoutCalories(): number {
      return this._workoutCalories;
    }
  
    public static set workoutCalories(value: number) {
      this._workoutCalories = value;
    }
  }
  