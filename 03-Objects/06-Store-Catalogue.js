const storeCatalogue = (input) => {
    const products = input.map((line) => {
        const [name, priceStr] = line.split(" : ");
        return { name, price: Number(priceStr) };
    });

    products.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
    );

    let currentInitial = "";
    for (const product of products) {
        const initial = product.name[0];
        if (initial !== currentInitial) {
            currentInitial = initial;
            console.log(currentInitial);
        }
        console.log(`  ${product.name}: ${product.price}`);
    }
};

storeCatalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
]);

storeCatalogue([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10",
]);
