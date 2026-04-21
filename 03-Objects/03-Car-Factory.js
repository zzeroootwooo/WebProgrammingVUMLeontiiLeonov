const carFactory = (order) => {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];

    const engine = engines.find((e) => e.power >= order.power);

    const carriage = {
        type: order.carriage,
        color: order.color,
    };

    const size = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
    const wheels = [size, size, size, size];

    return {
        model: order.model,
        engine,
        carriage,
        wheels,
    };
};

console.log(
    carFactory({
        model: "VW Golf II",
        power: 90,
        color: "blue",
        carriage: "hatchback",
        wheelsize: 14,
    })
);

console.log(
    carFactory({
        model: "Opel Vectra",
        power: 110,
        color: "grey",
        carriage: "coupe",
        wheelsize: 17,
    })
);
