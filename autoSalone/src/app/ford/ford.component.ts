import { Component } from '@angular/core';
import { iCar } from '../models/car';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  carArr: iCar[] = [];


  ngOnInit() {
    this.getCar().then(() => {
      this.getFordCars();
    });
  }

  async getCar() {
    const response = await fetch("../../../assets/db.json");
    const carData: iCar[] = await response.json();
    this.carArr = carData;
  }

  getFordCars(): iCar[] {
    return this.carArr.filter(car => car.brand === "Ford");
  }
}
