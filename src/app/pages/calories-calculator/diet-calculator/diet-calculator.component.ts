import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'diet-calculator',
  templateUrl: './diet-calculator.component.html',
  styleUrls: ['./diet-calculator.component.scss'],
})
export class DietCalculatorComponent implements OnInit {

  ngOnInit() {}

  meal: string = '';
  nutrition: any;

  constructor(private http: HttpClient) {}

  calculateNutrition() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-app-id': environment.nutritionixAppId,
      'x-app-key': environment.nutritionixAppKey,
    });
  
    const body = {
      query: this.meal,
    };
  
    this.http.post('https://trackapi.nutritionix.com/v2/natural/nutrients', body, { headers }).subscribe(
      (response: any) => {
        let totalCalories = 0;
        let totalProtein = 0;
        let totalCarbohydrates = 0;
        let totalFats = 0;
  
        for (const food of response.foods) {
          totalCalories += food.nf_calories;
          totalProtein += food.nf_protein;
          totalCarbohydrates += food.nf_total_carbohydrate;
          totalFats += food.nf_total_fat;
        }
          this.nutrition = {
          calories: totalCalories,
          protein: totalProtein,
          carbohydrates: totalCarbohydrates,
          fats: totalFats,
        };
      },
      (error) => {
        console.error('Error calculating nutrition:', error);
      }
    );
  }
  

}
