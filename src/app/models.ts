// Beverages

export abstract class Beverage {

    protected _description: string;

    public getDescription(): string { return this._description; }

    public abstract Cost(): number;
}

export class DarkRoast extends Beverage {

    public constructor() {
        super(); this._description = "Dark Roast Coffee";
    }

    public Cost(): number {
        return 0.99;

    }
}

export class Decaf extends Beverage {

    public constructor() {
        super(); this._description = "Decaf Coffee";
    }

    public Cost(): number {
        return 1.05;

    }
}

export class Espresso extends Beverage {

    public constructor() {
        super(); this._description = "Espresso Cofeee";
    }

    public Cost(): number {
        return 1.99;

    }
}

export class HouseBlend extends Beverage {

    public constructor() {
        super(); this._description = "House Blend Coffe";
    }

    public Cost(): number {
        return 0.89;

    }
}

// Condiments

export abstract class CondimentDecorator extends Beverage {
}

export class Milk extends CondimentDecorator {

    private beverage: Beverage;

    public constructor(beverage: Beverage) {
        super(); this.beverage = this.beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Milk";
    }

    public Cost(): number {
        return (this.beverage.Cost() + 0.1);

    }
}

export class Mocha extends CondimentDecorator {

    private beverage: Beverage;

    public constructor(beverage: Beverage) {
        super(); this.beverage = this.beverage;
    }

    public getDescription(): string {
        return (this.beverage.getDescription() + ", Mocha");
    }

    public Cost(): number {
        return (this.beverage.Cost() + 0.2);

    }
}

export class Soy extends CondimentDecorator {

    private beverage: Beverage;

    public constructor(beverage: Beverage) {
        super(); this.beverage = this.beverage;
    }

    public getDescription(): string {
        return (this.beverage.getDescription() + ", Soy");
    }

    public Cost(): number {
        return (this.beverage.Cost() + 0.15);

    }
}

export class Whip extends CondimentDecorator {

    private beverage: Beverage;

    public constructor(beverage: Beverage) {
        super(); this.beverage = this.beverage;
    }

    public getDescription(): string {
        return (this.beverage.getDescription() + ", Whip");
    }

    public Cost(): number {
        return (this.beverage.Cost() + 0.1);

    }
}