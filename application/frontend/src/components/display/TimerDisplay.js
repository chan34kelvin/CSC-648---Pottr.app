import Timer from "../../utils/helpers/Timer";
import { Link, useHistory } from "react-router-dom";

export default function TimerDisplay(props) {
  const history = useHistory();
  let show = [];

  //updates timer with the latest time
  //redirects when competition ended to show winner
  if (!props.competition.active) {
    let TimeObj = Timer(props.competition.time);
    if (!TimeObj["ifEnd"]) {
      let i = 0;
      for (const time in TimeObj) {
        if (TimeObj[time] !== "") {
          show[i++] = <div key={i} className="">{TimeObj[time]}</div>;
        }
      }
      i = 0;
    } else {
        history.go(0)
    }
  } else {
    show[0] = <div className="">Competition Ended</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      {
        <div
          className="display-4 text-light fw-bold d-flex flex-wrap justify-content-md-center gap-3 gap-lg-4"
          // style={{
          //   background: " -webkit-linear-gradient(#a679ca, #fff)",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          // }}
        >
          {show}
        </div>
      }
      {props.competition.active && props.winner && (
        <div
          className="d-flex flex-wrap gap-3 justify-content-md-center align-items-center mt-2"
          id="winner"
        >
          <div
            className="text-light fs-3 fw-bold"
            // style={{
            //   background: " -webkit-linear-gradient(#a679ca, #fff)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            // }}
          >
            Winner:
          </div>
          <Link
            to={"/post/" + props.winner.postId}
            className="fs-3 text-primary"
            id="winnerTitle"
          >
            {props.winner.title}
          </Link>
        </div>
      )}
    </div>
  );
}
