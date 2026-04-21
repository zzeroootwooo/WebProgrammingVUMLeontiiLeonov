function calculator() {
    let firstSelector;
    let secondSelector;
    let resultSelector;

    return {
        init(selector1, selector2, outputSelector) {
            firstSelector = selector1;
            secondSelector = selector2;
            resultSelector = outputSelector;
        },
        add() {
            const firstValue = Number(document.querySelector(firstSelector).value);
            const secondValue = Number(document.querySelector(secondSelector).value);
            document.querySelector(resultSelector).value = firstValue + secondValue;
        },
        subtract() {
            const firstValue = Number(document.querySelector(firstSelector).value);
            const secondValue = Number(document.querySelector(secondSelector).value);
            document.querySelector(resultSelector).value = firstValue - secondValue;
        }
    };
}
