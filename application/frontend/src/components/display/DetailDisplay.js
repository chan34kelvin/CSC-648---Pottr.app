import { MdEmojiEvents } from "react-icons/md"
import { GiPayMoney } from "react-icons/gi"
import { IoGameController } from "react-icons/io5";

export default function DetailDisplay(props) {

    const detailColor = "#696969"
    let padding = ""

    return (
        <div className={"d-flex flex-wrap text-reset gap-3 " + padding + " "} style={{}}>
            <div className={"d-flex flex-row align-items-center gap-2"} data-toggle="tooltip" title="Prize money" style={{ fontSize: "100%", color: detailColor }} disabled>
                <MdEmojiEvents />
                <div className="me-auto">
                    ${props.details.prize}
                </div>
            </div>
            <div className={"d-flex flex-row align-items-center gap-2"} data-toggle="tooltip" title="Enter fee" style={{ fontSize: "100%", color: detailColor }} disabled>
                <GiPayMoney />
                <div className="mx-auto">
                    ${props.details.fee}
                </div>
            </div>
            <div className={"d-flex flex-row align-items-center overflow-hidden gap-2"} data-toggle="tooltip" title="Game" style={{ fontSize: "100%", color: detailColor }} disabled>
                <IoGameController/>
                <div className="mx-auto">
                    {props.game}
                </div>
            </div>
        </div>
    )
}