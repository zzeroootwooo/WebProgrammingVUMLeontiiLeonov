function add(number) {
    let sum = number;

    function calculator(nextNumber) {
        sum += nextNumber;
        return calculator;
    }

    calculator.toString = function () {
        return sum;
    };

    return calculator;
}
