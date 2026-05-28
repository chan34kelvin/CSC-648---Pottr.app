import { MdEmojiEvents } from "react-icons/md"
import { GiPayMoney } from "react-icons/gi"
import { IoIosTimer } from "react-icons/io"
import FindDays from "../../../utils/helpers/FindDays"

export default function CardDetails(props) {

    const detailColor = "#696969"
    let padding = ""

    let showTime= FindDays(props.details.time, props.details.active)

    return (
        <div className={"d-flex flex-row text-reset " + padding + " "} style={{}}>
            <div className={"d-flex flex-row align-items-center p-0 pe-2"} data-toggle="tooltip" title="Prize money" style={{ fontSize: "100%", color: detailColor }} disabled>
                <MdEmojiEvents />
                <div className="me-auto">
                    ${props.details.prize}
                </div>
            </div>
            <div className={"d-flex flex-row align-items-center pe-2"} data-toggle="tooltip" title="Enter fee" style={{ fontSize: "100%", color: detailColor }} disabled>
                <GiPayMoney />
                <div className="mx-auto">
                    ${props.details.fee}
                </div>
            </div>
            <div className={"d-flex flex-row align-items-center overflow-hidden "} data-toggle="tooltip" title="Days left" style={{ fontSize: "100%", color: detailColor }} disabled>
                <IoIosTimer />
                <div className="mx-auto">
                    {showTime}
                </div>
            </div>
        </div>
    )
}