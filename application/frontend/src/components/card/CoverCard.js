import CardImage from "./components/CardImage";
import { Link } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import CardStatus from "./components/CardStatus";

export default function CoverCard(props) {
  const info = props.info;
  return (
    <div className="row paper_hover ">
      <div className="col-sm-12">
        <CardImage image={info.image} id={info.id} />
      </div>
      <div className="col-sm-12">
        <Link
          to={"/competition/" + info.id}
          className="d-flex flex-column text-decoration-none text-dark gap-2"
        >
          <div className="fs-5 mt-2 text-truncate">{info.title}</div>
          <div className="d-flex flex-wrap">
            <div className="fs-6">
              <CardDetails details={info.details} />
            </div>
            <div className="mx-auto fs-6">
              <CardStatus active={info.active} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
