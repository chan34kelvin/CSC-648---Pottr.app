import { Link } from "react-router-dom";

export default function CardImage(props) {
  return (
    <Link
      to={"/competition/" + props.id}
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    >
      <div className="ratio ratio-16x9 ">
        <img src={"/Backgrounds/" + props.image} width="100%" height="100%" />
      </div>
    </Link>
  );
}
