export class CalorieSummary {
  private _targetCalories: number;
  private _dietCalories: number;
  private _workoutCalories: number;

  constructor(){
    this._targetCalories = 0;
    this._dietCalories = 0;
    this._workoutCalories = 0;
  }

  // Getter and Setter for targetCalories
  get targetCalories(): number {
    // alert(this._targetCalories);
    return this._targetCalories;
  }

  set targetCalories(value: number) {
    this._targetCalories = value;
  }

  // Getter and Setter for dietCalories
  get dietCalories(): number {
    return this._dietCalories;
  }

  set dietCalories(value: number) {
    this._dietCalories = value;
  }

  // Getter and Setter for workoutCalories
  get workoutCalories(): number {
    return this._workoutCalories;
  }

  set workoutCalories(value: number) {
    this._workoutCalories = value;
  }
}
