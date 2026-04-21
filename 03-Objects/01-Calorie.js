const getCaloriesObject = (arr) => {
    const result = {};

    for (let i = 0; i < arr.length; i += 2) {
        const key = arr[i];
        const value = arr[i + 1];
        result[key] = value;
    }

    return result;
};

console.log(
    getCaloriesObject([
        "Potato",
        "93",
        "Skyr",
        "63",
        "Cucumber",
        "18",
        "Milk",
        "42",
    ]),
);
