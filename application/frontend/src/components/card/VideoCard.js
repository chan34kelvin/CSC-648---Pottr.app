import CardVideo from "./components/CardVideo";
import { Link } from "react-router-dom";

export default function VideoCard(props) {

  return (
    <div className="row paper_hover ">
      <div className="col-sm-12">
        <CardVideo video={props.info.videoPath} id={props.info.postId} />
      </div>
      <div className="col-sm-12">
        <Link
          to={"/post/" + props.info.postId}
          className="d-flex flex-column text-decoration-none text-dark gap-2"
        >
          <div className="fs-5 mt-2 text-truncate">{props.info.title}</div>
        </Link>
      </div>
    </div>
  );
}