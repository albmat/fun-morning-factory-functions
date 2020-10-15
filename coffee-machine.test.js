const makeCoffeeMachine = require('./coffee-machine');

describe('properties', function () {
    test('Returns an object', function () {
        const testCoffee = makeCoffeeMachine();
        expect(typeof testCoffee).toBe("object");
    });
    test('Have a beans property which is equal to the first given argument', function () {
        const testCoffee = makeCoffeeMachine("Java Lava");
        expect(testCoffee.beans).toBe("Java Lava");
    })
    test('Have a waterLevel property which instantiates as 0​​', function () {
        const testCoffee = makeCoffeeMachine();
        expect(testCoffee.waterLevel).toBe(0);
    });
    test('Have a maxWaterLevel property that is 5 by default but can be passed as an argument​', function () {
        const testCoffee = makeCoffeeMachine("Hello");
        expect(testCoffee.maxWaterLevel).toBe(5);

        const testCoffee1 = makeCoffeeMachine("Hello", 20);
        expect(testCoffee1.maxWaterLevel).toBe(20);
    });
});

describe('properties', function () {
    test('​Have an addWater method', function () {
        const testCoffee = makeCoffeeMachine();
        expect(typeof testCoffee.addWater).toBe("function");
    });
    test('​AddWater method will increase the waterLevel by 1 each time its called but not above the maxWaterLevel​', function () {
        const testCoffee = makeCoffeeMachine(); // maxWaterLevel by default is 5
        testCoffee.addWater();
        expect(testCoffee.waterLevel).toBe(1);

        const testCoffee1 = makeCoffeeMachine("hello", 0);
        testCoffee1.addWater();
        expect(testCoffee1.waterLevel).toBe(0);
    });
    test('Have a makeCoffee method', function () {
        const testCoffee = makeCoffeeMachine();
        expect(typeof testCoffee.makeCoffee).toBe("function");
    });
    test('MakeCoffee method will ​return: "Please add water" if the waterLevel is 0​', function () {
        const testCoffee = makeCoffeeMachine(); // object
        expect(testCoffee.makeCoffee()).toBe("Please add water");
    });
    test('MakeCoffee method will ​return: "An Espresso made with Java Lava"​', function () {
        const testCoffee = makeCoffeeMachine("Java Lava"); // object
        testCoffee.addWater(); // function +1
        expect(testCoffee.makeCoffee("Espresso")).toBe("An Espresso made with Java Lava");
        expect(testCoffee.makeCoffee("Americano")).toBe("An Americano made with Java Lava");
    });
})