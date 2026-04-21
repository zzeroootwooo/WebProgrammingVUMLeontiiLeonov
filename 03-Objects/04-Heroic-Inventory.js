const heroicInventory = (input) => {
    const heroes = [];

    for (const line of input) {
        const [name, levelStr, itemsStr] = line.split(" / ");
        const level = Number(levelStr);
        const items = itemsStr ? itemsStr.split(", ") : [];

        heroes.push({ name, level, items });
    }

    console.log(JSON.stringify(heroes));
};

heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);

heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
