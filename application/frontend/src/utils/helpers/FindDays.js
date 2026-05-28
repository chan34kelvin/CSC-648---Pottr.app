import Timer from "./Timer"

export default function FindDays( time, active ){

    //need to know if this is active, and the end time
    let showTime = "Ended"

    if (!active) {
        const TimeObj = Timer(time)
        if (!TimeObj["ifEnd"]) {
            if ((TimeObj["days"] === "") && (TimeObj["hours"] === "1 Hour" || TimeObj["hours"] === "")) {
                showTime = "<1h"
            } else if (TimeObj["days"] === "") {
                showTime = TimeObj["hours"].replace(" Hours", "h")
            } else {
                showTime = TimeObj["days"].replace(" Days", "d").replace(" Day", "d")
            }
        }
    }

    return showTime
}