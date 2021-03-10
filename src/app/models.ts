// Beverages

export abstract class Beverage {

    protected _description: string;

    public getDescription(): string { return this._description; }

    public abstract cost(): number;
}

export class DarkRoast extends Beverage {

    public constructor() {
        super(); 
        this._description = "Dark Roast";
    }

    public cost(): number {
        return 0.99;

    }
}

export class Decaf extends Beverage {

    public constructor() {
        super(); this._description = "Decaf";
    }

    public cost(): number {
        return 1.05;

    }
}

export class Espresso extends Beverage {

    public constructor() {
        super(); this._description = "Espresso";
    }

    public cost(): number {
        return 1.99;

    }
}

export class HouseBlend extends Beverage {

    public constructor() {
        super(); this._description = "House Blend";
    }

    public cost(): number {
        return 0.89;

    }
}

// Condiments

export abstract class CondimentDecorator extends Beverage {
}

export class Milk extends CondimentDecorator {

    private beverage: Beverage;

    public constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Milk";
    }

    public cost(): number {
        return (this.beverage.cost() + 0.1);

    }
}

export class Mocha extends CondimentDecorator {

    private beverage: Beverage;

    public constructor(beverage: Beverage) {
        super(); this.beverage = beverage;
    }

    public getDescription(): string {
        return (this.beverage.getDescription() + ", Mocha");
    }

    public cost(): number {
        return (this.beverage.cost() + 0.2);

    }
}

export class Soy extends CondimentDecorator {

    private beverage: Beverage;

    public constructor(beverage: Beverage) {
        super(); this.beverage = beverage;
    }

    public getDescription(): string {
        return (this.beverage.getDescription() + ", Soy");
    }

    public cost(): number {
        return (this.beverage.cost() + 0.15);

    }
}

export class Whip extends CondimentDecorator {

    private beverage: Beverage;

    public constructor(beverage: Beverage) {
        super(); this.beverage = beverage;
    }

    public getDescription(): string {
        return (this.beverage.getDescription() + ", Whip");
    }

    public cost(): number {
        return (this.beverage.cost() + 0.1);

    }
}