import { Component } from '@angular/core';
import { iCar } from '../models/car';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  carArr: iCar[] = [];


  ngOnInit() {
    this.getCar().then(() => {
      this.getAudiCars();
    });
  }

  async getCar() {
    const response = await fetch("../../../assets/db.json");
    const carData: iCar[] = await response.json();
    this.carArr = carData;
  }

  getAudiCars(): iCar[] {
    return this.carArr.filter(car => car.brand === "Audi");
  }
}
