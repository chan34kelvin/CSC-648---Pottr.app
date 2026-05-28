import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Competitions(props) {
  return (
    <div className="">
      <Link
        to="/competition"
        className="text-decoration-none d-flex flex-row align-items-center bg-light text-reset p-2 px-5"
        style={{ borderRadius: "5px" }}
      >
        <IoGameController
          className="me-3"
          size="30px"
          style={{ color: "purple" }}
        />
        <div
          className="text-center"
          style={{
            background: " -webkit-linear-gradient(#999, #4B0082)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "400",
          }}
        >
          View competitions
        </div>
      </Link>
    </div>
  );
}
