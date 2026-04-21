function solve(...args) {
    const counts = {};
    const firstSeenAt = {};
    let index = 0;

    for (const arg of args) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!counts.hasOwnProperty(type)) {
            counts[type] = 0;
            firstSeenAt[type] = index++;
        }

        counts[type]++;
    }

    Object.keys(counts)
        .sort((a, b) => counts[b] - counts[a] || firstSeenAt[a] - firstSeenAt[b])
        .forEach((type) => console.log(`${type} = ${counts[type]}`));
}
