import { BehaviorSubject, Observable } from 'rxjs';
export class CalorieSummary {
    // Static variables
    // private static _targetCalories: number;
    // private static _dietCalories: number;
    // private static _workoutCalories: number;
    private static _targetCaloriesSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private static _dietCaloriesSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private static _workoutCaloriesSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  
    constructor(){
        // CalorieSummary._targetCalories = 0;
        // CalorieSummary._dietCalories = 0;
        // CalorieSummary._workoutCalories = 0;
    }
    
    // // Getter and Setter for targetCalories
    // public static get targetCalories(): number {
    //   // alert(this._targetCalories)
    //   return this._targetCalories;
    // }
  
    // public static set targetCalories(value: number) {
    //   this._targetCalories = value;
    // }
  
    // // Getter and Setter for dietCalories
    // public static get dietCalories(): number {
    //   return this._dietCalories;
    // }
  
    // public static set dietCalories(value: number) {
    //   this._dietCalories = value;
    // }
  
    // // Getter and Setter for workoutCalories
    // public static get workoutCalories(): number {
    //   return this._workoutCalories;
    // }
  
    // public static set workoutCalories(value: number) {
    //   this._workoutCalories = value;
    // }

    public static get targetCalories$(): Observable<number> {
      return this._targetCaloriesSubject.asObservable();
    }
    
    public static set targetCalories(value: number) {
      this._targetCaloriesSubject.next(value);
    }
    
    public static get dietCalories$(): Observable<number> {
      return this._dietCaloriesSubject.asObservable();
    }
    
    public static set dietCalories(value: number) {
      this._dietCaloriesSubject.next(value);
    }
    
    public static get workoutCalories$(): Observable<number> {
      return this._workoutCaloriesSubject.asObservable();
    }
    
    public static set workoutCalories(value: number) {
      this._workoutCaloriesSubject.next(value);
    }
    
  }
  