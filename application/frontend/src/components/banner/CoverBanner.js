import Competitions from "../button/Competitions";
import DisplayComps from "../button/DisplayComps";

export default function CoverBanner(props) {
  return (
    <div className="d-flex flex-column text-md-center mt-2 mb-4 mt-lg-5 mb-sm-5 gap-4 gap-md-5">
      <div
        className="display-3 text-light fw-bolder"
        style={{
          background: " -webkit-linear-gradient(#a679ca, #fff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        GET REWARD WITH YOUR CLIPS
      </div>
      <div
        className="fs-5 blockquote-footer"
        style={{
          background: " -webkit-linear-gradient(#fff, #adadad)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Take your clips to the next level. Be the best and get rewarded for it.
      </div>
      <div className="d-flex flex-wrap gap-4 gap-xxl-5 justify-content-md-center">
        <div className="fs-3">
          <DisplayComps length={props.length} text={"Competitions"}/>
        </div>
        <div className="fs-3">
          <Competitions />
        </div>
      </div>
    </div>
  );
}
