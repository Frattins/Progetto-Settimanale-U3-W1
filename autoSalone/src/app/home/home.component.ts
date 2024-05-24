import { Component, OnInit } from '@angular/core';
import { iCar } from '../models/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carArr: iCar[] = [];
  randomCar: iCar[] = [];
  threeCarModels: iCar[] = [];

  ngOnInit() {
    this.getCar().then(() => {
      this.randomCar = this.getRandomCar();
      this.threeCarModels = this.getThreeCarModels();
    });
  }

  async getCar() {
    const response = await fetch("../../../assets/db.json");
    const carData: iCar[] = await response.json();
    this.carArr = carData;
  }

  getRandomCar(): iCar[] {
    const shuffled = [...this.carArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }

  getThreeCarModels(): iCar[] {
    const uniqueBrands = new Map<string, iCar>();
    for (const car of this.carArr) {
      if (!uniqueBrands.has(car.brand)) {
        uniqueBrands.set(car.brand, car);
      }
      if (uniqueBrands.size === 3) {
        break;
      }
    }
    return Array.from(uniqueBrands.values());
  }


}
