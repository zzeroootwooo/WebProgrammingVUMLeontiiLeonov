const sameNumbers = (number) => {
    const digits = String(number);
    const firstDigit = digits[0];
    let isSame = true;
    let sum = 0;

    for (const ch of digits) {
        if (ch !== firstDigit) {
            isSame = false;
        }
        sum += Number(ch);
    }

    console.log(isSame);
    console.log(sum);
};

sameNumbers(2222222);
sameNumbers(1234)
