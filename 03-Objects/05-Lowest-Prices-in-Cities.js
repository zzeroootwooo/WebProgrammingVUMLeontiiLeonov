const lowestPricesInCities = (input) => {
    const products = {};

    for (const line of input) {
        const [town, product, priceStr] = line.split(" | ");
        const price = Number(priceStr);

        if (!Object.prototype.hasOwnProperty.call(products, product)) {
            products[product] = { price, town };
            continue;
        }

        const current = products[product];
        if (price < current.price) {
            products[product] = { price, town };
        }
    }

    Object.entries(products).forEach(([product, info]) => {
        console.log(`${product} -> ${info.price} (${info.town})`);
    });
};

lowestPricesInCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
