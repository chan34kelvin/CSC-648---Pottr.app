import { Link } from "react-router-dom";
import { MdScatterPlot } from "react-icons/md";

export default function Brand() {
  return (
    <div className="d-flex">
      <Link to="/" className="text-decoration-none text-light">
        <div className="d-flex flex-row align-items-center fs-1">
          Pottr
          <MdScatterPlot className="mt-3 fs-2" />
        </div>
      </Link>
    </div>
  );
}
