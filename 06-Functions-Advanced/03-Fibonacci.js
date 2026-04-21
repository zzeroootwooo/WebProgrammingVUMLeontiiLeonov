function getFibonator() {
    let previous = 0;
    let current = 1;

    return function () {
        const result = current;
        current = previous + current;
        previous = result;
        return result;
    };
}
