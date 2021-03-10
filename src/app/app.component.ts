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
    { description: 'Steamed Milk', count: null, use: (b: Beverage) => new Milk(b) },
    { description: 'Mocha ', count: null, use: (b: Beverage) => new Mocha(b) },
    { description: 'Soy', count: null, use: (b: Beverage) => new Soy(b) },
    { description: 'Whip', count: null, use: (b: Beverage) => new Whip(b) },
  ];

  get isSelect() { return this.beverage != null; }

  chooseBeverage(beverage: Beverage) {
    this.beverage = beverage;
  }

  onPay() {
    this.condiments.forEach(c => {
      for (let i = 0; i < c.count; i++) {
        this.beverage = c.use(this.beverage);
      }
      c.count = null;
    });
  }
}

