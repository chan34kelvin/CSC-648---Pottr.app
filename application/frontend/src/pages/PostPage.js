import { useEffect, useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Comments from "../components/form/Comments";
import Env from "../env";
import VideoCard from "../components/card/VideoCard";

//unoptimized yet 
export default function PostPages(props) {
  const [post, setPost] = useState(() => []);
  const [posts, setPosts] = useState(() => []);
  const [competition, setCompetition] = useState(() => []);
  const parameter = useParams()["id"];
  const URLPath = process.env.PUBLIC_URL;
  const env = Env();

  useEffect(() => {
    const options = {
      method: "GET",
      url: env.url + "/posts/get/" + parameter,
      headers: { "Content-Type": "application/json" },
    };

    axios
      .request(options)
      .then(function (response) {
        setPost(response.data);

        //get other posts
        const options1 = {
          method: "GET",
          url: env.url + "/posts/getByCompId/" + response.data[0].competitionId,
          headers: { "Content-Type": "application/json" },
        };

        axios
          .request(options1)
          .then(function (response) {
            setPosts(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });

        //gets competition and disable votes if not login
        const options2 = {
          method: "GET",
          url:
            env.url +
            "/competitions/getCompetition/" +
            response.data[0].competitionId,
          headers: { "Content-Type": "application/json" },
        };

        axios
          .request(options2)
          .then(function (response1) {
            setCompetition(response1.data);

            //get hasvoted
            const options3 = {
              method: "POST",
              url: env.url + "/votes/hasVoted",
              headers: { "Content-Type": "application/json" },
              data: {
                postId: response.data[0].postId,
                competitionId: response.data[0].competitionId,
              },
            };

            if (!response1.data[0].winningPost) {
              if (sessionStorage.getItem("login") !== "active") {
                document.getElementById("vote").innerHTML = "Login to vote";
                document.getElementById("vote").disabled = true;
              } else if (sessionStorage.getItem("login") === "true") {
                axios
                  .request(options3)
                  .then(function (response) {
                    //if voted, disable the button
                    if (response.data.voted != 0) {
                      document.getElementById("vote").disabled = true;
                      document.getElementById("vote").innerHTML = "Voted";
                    } else {
                      document.getElementById("vote").disabled = false;
                      document.getElementById("vote").innerHTML = "Vote";
                    }
                  })
                  .catch(function (error) {
                    console.error(error);
                  });
              }
            } else {
              document.getElementById("vote").disabled = true;
              document.getElementById("vote").innerHTML = "Voting is over";
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });

    //everytime it reloads, it goes back to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [parameter, props.update, env.url]);

  function Voted() {
    if (document.getElementById("vote")) {
      document.getElementById("vote").disabled = true;
      document.getElementById("vote").innerHTML = "Voted";
      const options4 = {
        method: "POST",
        url: env.url + "/votes/vote",
        headers: { "Content-Type": "application/json" },
        data: {
          userId: "2",
          postId: post[0].postId,
          competitionId: post[0].competitionId,
        },
      };

      axios
        .request(options4)
        .then(function (response) {
          //show user saying they voted
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

  return (
    <div className="bg-light w-100" style={{ minHeight: "100vh" }}>
      <div
        className="container-xxl pt-3 pt-xl-4 px-xxl-5"
        style={{ maxWidth: "1800px" }}
      >
        <div className="row mx-auto g-3">
          <div className="col-12 d-flex flex-column flex-xxl-row gap-4">
            <div
              className="d-flex flex-column gap-4"
              style={{ minWidth: "75%" }}
            >
              {post.map((video) => (
                <div
                  className="ratio ratio-16x9 mt-xxl-3"
                  style={{ minHeight: "400px" }}
                >
                  <ReactPlayer
                    url={URLPath + "/" + video.videoPath}
                    className="position-absolute"
                    width="100%"
                    height="100%"
                    previewTabIndex={0}
                    controls
                  />
                </div>
              ))}
              <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <div className="fs-1 me-auto" style={{ fontWeight: "600" }}>
                    {post.map((video) => video.title)}
                  </div>
                  <button
                    className="btn btn-primary fs-3 px-5"
                    id="vote"
                    onClick={Voted}
                  >
                    Vote
                  </button>
                </div>
                <div className="d-flex flex-wrap gap-4">
                  <div className="fs-4 d-flex flex-wrap align-items-center gap-3">
                    <div className="" style={{ fontWeight: "500" }}>
                      Competition Name:
                    </div>
                    <div className="">
                      {competition.map((video) => video.competitionName)}
                    </div>
                  </div>
                  <div className="fs-4 d-flex flex-wrap align-items-center gap-3">
                    <div className="" style={{ fontWeight: "500" }}>
                      Game:
                    </div>
                    <div className="">
                      {competition.map((video) => video.categoryName)}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="m-0" />

              <div className="navbar navbar-expand-xxl">
                <button
                  className="btn navbar-toggler w-100 p-3 mb-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#comments"
                  style={{ background: "#E6E6FA" }}
                >
                  <div className="d-flex flex-row fs-2">
                    <div className="me-auto">Comments</div>
                    <div className="">
                      <TiArrowUnsorted />
                    </div>
                  </div>
                </button>
                <div className="navbar-collapse collapse w-100" id="comments">
                  <div className="w-100">
                    <Comments currentUserId="1" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className=""
              style={{ minWidth: "20%" }}
            >

              {/* shuffle part is obtained from flaviocopes */}
              <div className="row mx-auto g-2 gy-4">
                <div className="fs-3">Recommended</div>
                {posts
                  .filter((card) => {
                    return card["postId"] !== post[0]["postId"];
                  })
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 15)
                  .map((info) => (
                    <div className="col-sm-6 col-lg-4 col-xxl-12">
                      <VideoCard key={info["postId"]} info={info} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
