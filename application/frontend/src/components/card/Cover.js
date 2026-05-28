import { Link } from "react-router-dom";
import CoverCard from "./CoverCard";
import TopCard from "./TopCard";

export default function Cover(props) {
  const cards = props.cards;
  return (
    <div className="row mx-auto g-3 my-3 my-xxl-5">
      <div
        className="col-xxl-6 mx-auto mb-4 my-xxl-0"
        style={{ maxWidth: "900px" }}
      >
        <div className="d-flex flex-column gap-4">
          <div className="fs-2 fw-bold">Top Competitions</div>
          {cards.slice(0, 3).map((card) => (
            <TopCard key={card.id} info={card} />
          ))}
        </div>
      </div>
      <div
        className="col-xxl-6 mx-auto mb-4 my-xxl-0"
        style={{ maxWidth: "900px" }}
      >
        <div className="">
          <div className="mb-5">
            <TitleHelper />
            <hr style={{height: "5px"}}/>
          </div>
          <div className="row gy-5 gx-3">
            {cards.slice(3, 7).map((card) => (
              <div key={card.id} className="col-sm-6">
                <CoverCard info={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

//function for the title and the link
function TitleHelper() {
  return (
    <div className="d-flex flex-wrap align-items-center gap-3">
      <div className="fs-2 fw-bold me-auto">More Competitions</div>
      <Link
        to="/competition"
        className="fs-4"
        style={{
          color: "#4B0082",
          background: " -webkit-linear-gradient(#999, #4B0082)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "400",
        }}
      >
        View All
      </Link>
    </div>
  );
}
