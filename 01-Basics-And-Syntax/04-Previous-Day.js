const getPreviousDay = (year, month, day) => {
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);

    const prevYear = date.getFullYear();
    const prevMonth = date.getMonth() + 1;
    const prevDay = date.getDate();

    console.log(`${prevYear}-${prevMonth}-${prevDay}`);
};

getPreviousDay(2016, 9, 30)
getPreviousDay(2015, 5, 10)
