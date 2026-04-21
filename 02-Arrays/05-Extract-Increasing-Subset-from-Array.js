const extractIncreasingSubset = (arr) => {
    const result = [];
    let currentMax = -Infinity;

    for (const item of arr) {
        if (item >= currentMax) {
            result.push(item);
            currentMax = item;
        }
    }

    return result;
};

console.log(extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubset([1, 2, 3, 4]));
console.log(extractIncreasingSubset([20, 3, 2, 15, 6, 1]));
