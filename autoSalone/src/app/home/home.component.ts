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
  filteredCars: iCar[] = [];

  ngOnInit() {
    this.getCar().then(() => {
      this.randomCar = this.getRandomCar();
      this.filteredCars = this.getFilteredCars();
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

  getFilteredCars(): iCar[] {
    return this.carArr.filter(car =>
      car.brand === 'Fiat' || car.brand === 'Audi' || car.brand === 'Ford'
    );
  }
}
