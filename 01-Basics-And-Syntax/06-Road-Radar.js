const roadRadar = (speed, area) => {
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    const limit = limits[area];
    const difference = speed - limit;

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    }

    let status = "";
    if (difference <= 20) {
        status = "speeding";
    } else if (difference <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    );
};

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
