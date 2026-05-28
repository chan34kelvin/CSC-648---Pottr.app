import ReactPlayer from "react-player";
import React from "react";
import { Link } from "react-router-dom";


export default function CardVideo(props) {
  return (
    <div
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    >
      <div className="ratio ratio-16x9 ">
        <ReactPlayer
            url={"/"+props.video}
            className="position-absolute"
            width="100%"
            height="100%"
            previewTabIndex={0}
            controls
          />
          <Link to={"/post/"+props.id} id={props.id + "thumbnail"} />
      </div>
    </div>
  );
}