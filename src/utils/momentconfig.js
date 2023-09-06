import moment from "moment"

export const weekCheck = () => {
    let weekTest = [];
    const weekCurrentMoment = moment().subtract(6, "days");
    const weeKEndMoment = moment().add(1, "days");
    while (weekCurrentMoment.isBefore(weeKEndMoment, "day")) {
        let week = ` ${weekCurrentMoment.format("DD MMM")}`;
        weekTest.push(week);
        weekCurrentMoment.add(1, "days");
    }
    return weekTest
}


export const yearCheck = () => {
    let yearTest = [];
    const yearCurrentMoment = moment().subtract(12, "months");
    const yearEndMoment = moment().add(1, "months");
    while (yearCurrentMoment.isBefore(yearEndMoment, "month")) {
        let year = ` ${yearCurrentMoment.format("MMM")}`;
        yearTest.push(year);
        yearCurrentMoment.add(1, "months");
    }
    return yearTest
}


export const monthCheck = () => {
    let monthTest = [];
    const currentMonthMoment = moment().subtract(30, "days");
    const endMonthMoment = moment().add(1, "days");
    while (currentMonthMoment.isBefore(endMonthMoment, "day")) {
        let month = ` ${currentMonthMoment.format("DD")}`;
        monthTest.push(month);
        currentMonthMoment.add(1, "days");
    }
    return monthTest
}

export const getDaysOfCurrentMonth = () => {
    let currentDate = (moment()._d).toString().split(' ');
    let daysInCurrentMonth = moment().daysInMonth();
    let days = []
    for(let i = 1;  i <= daysInCurrentMonth; i++) {
        days.push(`${currentDate[1]} ${i}`);
    }
    return days;
}