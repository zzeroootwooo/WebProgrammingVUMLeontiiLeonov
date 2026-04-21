function solve(array, order) {
    const sorters = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    return array.sort(sorters[order]);
}
