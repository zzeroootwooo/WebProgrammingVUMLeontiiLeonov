const calculatePrice = (fruit, weight, pricePerKg) => {
    const weightKg = weight / 1000;
    const cost = weightKg * pricePerKg;
    console.log(`I need $${cost.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
};

calculatePrice("orange", 2500, 1.8);
calculatePrice("apple", 1563, 2.35);
