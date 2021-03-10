import { Component } from '@angular/core';
import { Beverage, HouseBlend, DarkRoast, Decaf, Espresso, Milk, Mocha, Soy, Whip } from './models'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  order: Beverage[] = [];
  beverage: Beverage = null;
  title = 'Starbuzz Coffee';
  beverages = [
    new HouseBlend(),
    new DarkRoast(),
    new Decaf(),
    new Espresso()
  ];
  condiments = [
    { description: 'Steamed Milk', cost: 0.10, use: (b: Beverage) => new Milk(b) },
    { description: 'Mocha ', cost: .20, use: (b: Beverage) => new Mocha(b) },
    { description: 'Soy', cost: .15, use: (b: Beverage) => new Soy(b) },
    { description: 'Whip', cost: .10, use: (b: Beverage) => new Whip(b) },
  ];

  chooseBeverage(beverage: Beverage) {
    this.beverage = beverage;
  }

  addCondiment(condiment) {
    this.beverage = condiment.use(this.beverage);
  }
}

