const timeToWalk = (steps, length, speed) => {
    const distance = steps * length;
    const speedMetersPerSecond = speed / 3.6;
    const restMinutes = Math.floor(distance / 500);

    const totalSeconds = distance / speedMetersPerSecond + restMinutes * 60;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.round(totalSeconds % 60);

    const pad = (n) => String(n).padStart(2, "0");
    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
};

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
