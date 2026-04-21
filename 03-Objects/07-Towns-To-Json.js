const townsToJson = (input) => {
    const result = [];

    for (let i = 1; i < input.length; i++) {
        const parts = input[i]
            .split("|")
            .map((p) => p.trim())
            .filter((p) => p !== "");

        const town = parts[0];
        const latitude = Number(Number(parts[1]).toFixed(2));
        const longitude = Number(Number(parts[2]).toFixed(2));

        result.push({
            Town: town,
            Latitude: latitude,
            Longitude: longitude,
        });
    }

    console.log(JSON.stringify(result));
};


townsToJson([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
]);
townsToJson(
    ["| Town | Latitude | Longitude |",
"| Veliko Turnovo | 43.0757 | 25.6172 |",
"| Monatevideo | 34.50 | 56.11 |"]
);
