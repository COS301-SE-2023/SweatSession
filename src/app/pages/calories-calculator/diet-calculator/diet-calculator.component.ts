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
  foods: any[] = [];
  totalNutrition: any = {};

  constructor(private http: HttpClient) {}

  calculateNutrition() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-app-id': environment.nutritionixAppId,
      'x-app-key': environment.nutritionixAppKey,
    });

    const body = {
      query: this.meal
    };

    this.http.post('https://trackapi.nutritionix.com/v2/natural/nutrients', body, { headers }).subscribe(
      (response: any) => {
        this.foods = response.foods;
        this.calculateTotalNutrition();
      },
      (error) => {
        console.error('Error calculating nutrition:', error);
      }
    );
  }

  calculateTotalNutrition() {
    this.totalNutrition = this.foods.reduce((total, food) => {
      return {
        calories: (total.calories || 0) + food.nf_calories,
        protein: (total.protein || 0) + food.nf_protein,
        carbohydrates: (total.carbohydrates || 0) + food.nf_total_carbohydrate,
        fats: (total.fats || 0) + food.nf_total_fat,
        fiber: (total.fiber || 0) + food.nf_dietary_fiber,
        sugars: (total.sugars || 0) + food.nf_sugars,
        sodium: (total.sodium || 0) + food.nf_sodium
      }
    }, {});
  }
}  