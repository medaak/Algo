module.exports = class Player {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        return "Hello my name is " + this.name
    }
    getDogAge() {
        return 3;
    }
    getSum(prices, number) {
        let sum = number;
        for (let price of prices) {
            sum += price
        }
        return sum
    }
}
