function addWater() {
    if (this.waterLevel < this.maxWaterLevel) ++this.waterLevel;
}

function makeCoffee(typeOfCoffee = "Americano") {
    if (this.waterLevel === 0) return "Please add water";
    return `An ${typeOfCoffee} made with ${this.beans}`;
}

function makeCoffeeMachine(beans, maxWaterLevel = 5) {
    const coffee = {};
    coffee.beans = beans;
    coffee.waterLevel = 0;
    coffee.maxWaterLevel = maxWaterLevel;
    coffee.addWater = addWater;
    coffee.makeCoffee = makeCoffee;
    return coffee;
}

module.exports = makeCoffeeMachine;