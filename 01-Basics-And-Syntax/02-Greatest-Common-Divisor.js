const greatestCommonDivisor = (firstInt, secondInt) => {
    let a = firstInt;
    let b = secondInt;

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    console.log(a);
};

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
