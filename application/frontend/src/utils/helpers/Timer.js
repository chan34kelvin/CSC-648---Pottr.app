import { useState, useEffect } from "react";

//need to reference the owner of this code
export default function Timer( time ){

    const [currentDate, updateCurrentDate] = useState(new Date());

	const [dateDifference, updateDateDifference] = useState(new Date(time) - currentDate.getTime());

	const [day, updateDay] = useState(Math.floor((dateDifference / 86400000) % 30)); // time dateDifference in days (modulated to 30)
	const [hour, updateHour] = useState(Math.floor((dateDifference / 3600000) % 24)); // time dateDifference's hours (modulated to 24)
	const [min, updateMin] = useState(Math.floor((dateDifference / 60000) % 60)); // time dateDifference's minutes (modulated to 60)
	const [sec, updateSec] = useState(Math.floor((dateDifference / 1000) % 60)); // time dateDifference's seconds (modulated to 60)

	const dayLabel = (day === 1) ? "1 Day" : (day > 1) ? day + " Days" : "";
	const hourLabel = (hour === 1) ? "1 Hour" : (hour > 1) ? hour + " Hours" : "";
	const minLabel = (min === 1) ? "1 Minute" : (min > 1) ? min + " Minutes" : "";
	const secLabel = (sec === 1) ? "1 Second" : (sec > 1) ? sec + " Seconds" : "";

	useEffect(() => {
		const updateCountdown = window.setInterval(() => {
			updateCurrentDate(new Date());
			updateDateDifference(new Date(time) - currentDate.getTime());
			updateDay(Math.floor((dateDifference / 86400000) % 30));
			updateHour(Math.floor((dateDifference / 3600000) % 24));
			updateMin(Math.floor((dateDifference / 60000) % 60));
			updateSec(Math.floor((dateDifference / 1000) % 60));
		}, 1000);

		return () => {
			window.clearInterval(updateCountdown);
		};
	});

    return({
        days: dayLabel,
        hours: hourLabel,
        mins: minLabel,
        secs: secLabel,
        ifEnd: (dateDifference <= 0),
    })
}