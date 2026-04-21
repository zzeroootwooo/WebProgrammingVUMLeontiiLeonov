const rotateArray = (array, rotationsCount) => {
    const n = array.length;
    if (n === 0) return [];

    const efficientRotations = rotationsCount % n;

    const result = [...array];

    for (let i = 0; i < efficientRotations; i++) {
        const last = result.pop();
        result.unshift(last);
    }

    return result;
};

console.log(rotateArray(["1", "2", "3", "4"], 2));
console.log(rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15));
