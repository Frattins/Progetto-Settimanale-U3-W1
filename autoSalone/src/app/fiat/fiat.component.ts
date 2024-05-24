import { Component } from '@angular/core';
import { iCar } from '../models/car';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {

  carArr: iCar[] = [];


  ngOnInit() {
    this.getCar().then(() => {
      this.getFiatCars();
    });
  }

  async getCar() {
    const response = await fetch("../../../assets/db.json");
    const carData: iCar[] = await response.json();
    this.carArr = carData;
  }

  getFiatCars(): iCar[] {
    return this.carArr.filter(car => car.brand === "Fiat");
  }
}
