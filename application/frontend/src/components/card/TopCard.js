import CardImage from "./components/CardImage";
import { Link } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import CardStatus from "./components/CardStatus";

export default function TopCard(props) {
  const info = props.info;
  return (
    <div className="row paper_hover gy-1 gx-4">
      <div className="col-sm-6">
        <CardImage image={info.image} id={info.id} />
      </div>
      <div className="col-sm-6 ps-sm-1">
        <Link
          to={"/competition/" + info.id}
          className="d-flex flex-column text-decoration-none text-dark gap-sm-3"
        >
          <div className="fs-4 fw-bold" style={{width: "90%"}}>{info.title}</div>
          <div className="fs-5">
            <CardDetails details={info.details} />
          </div>
          <div className="ms-1 d-flex flex-row align-items-center gap-3">
            <div className="fs-5">-</div>
            <div className="fs-5">
              <CardStatus active={info.active} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
