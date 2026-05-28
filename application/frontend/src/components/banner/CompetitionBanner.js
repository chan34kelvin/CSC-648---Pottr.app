import Competitions from "../button/Competitions";
import DisplayComps from "../button/DisplayComps";
import DetailDisplay from "../display/DetailDisplay";
import TimerDisplay from "../display/TimerDisplay";

export default function CompetitionBanner(props) {
  return (
    <div className="d-flex flex-column text-md-center mt-2 mb-4 mt-lg-5 mb-md-5 gap-3 gap-sm-4">
      {/* timer and showing the winner */}
      <div className="d-flex justify-content-md-center">
        <TimerDisplay competition={props.competition} winner={props.winner} />
      </div>

      {/* competition title and the details of it */}
      <div
        className="d-flex flex-wrap gap-3 align-items-center justify-content-md-center mb-4"
        style={{
          background: " -webkit-linear-gradient(#fff, #adadad)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <div className="fs-4">{props.competition.title}</div>
        <div className="fs-4 d-none d-sm-flex">-</div>
        {props.competition.details && (
          <div className="fs-4">
            <DetailDisplay details={props.competition.details} game={props.competition.category}/>
          </div>
        )}
      </div>

      {/* display the button to redirect to more competitions and how many entries in the competition */}
      <div className="d-flex flex-wrap gap-4 gap-xxl-5 justify-content-md-center">
        <div className="fs-3">
          <DisplayComps length={props.length} text={"Entries"} />
        </div>
        <div className="fs-3">
          <Competitions />
        </div>
      </div>
    </div>
  );
}
