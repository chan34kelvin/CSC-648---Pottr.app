import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-dark text-light">
      <div className="container-xxl px-xxl-5" style={{ maxWidth: "1800px" }}>
        <div className="row mx-auto g-3">
          <div className="col-12 d-flex flex-column gap-5">
            <div className="row g-3 gy-5 my-3 mb-5">
              <div className="col-md-6 col-xxl-3 d-flex flex-column fs-5 gap-4">
                <div className="fs-4" style={{ fontWeight: "600" }}>
                  Creators
                </div>
                <div className="d-flex flex-column gap-3">
                  <Links content="Damon Chen (Team Lead)" />
                  <Links content="Alex Chau (Github Master)" />
                  <Links content="Steven Liao (Backend Lead)" />
                  <Links content="Hugh Nguyen (Scrum Master)" />
                  <Links content="Chaoyi Ying (Frontend Lead)" />
                  <Links content="Kelvin Chan (Frontend Lead) :D" />
                </div>
              </div>
              <div className="col-md-6 col-xxl-3 d-flex flex-column fs-5 gap-4">
                <div className="fs-4" style={{ fontWeight: "600" }}>
                  General
                </div>
                <div className="d-flex flex-column gap-4">
                  <Links content="About Us" />
                </div>
              </div>
              <div className="col-md-6 col-xxl-3 d-flex flex-column fs-5 gap-4">
                <div className="fs-4" style={{ fontWeight: "600" }}>
                  Team's Github
                </div>
                <div className="d-flex flex-column gap-2">
                  <Links content="Team-1 github repo" />
                </div>
              </div>
              <div className="col-md-6 col-xxl-3 d-flex flex-column gap-4">
                <div className="fs-4" style={{ fontWeight: "600" }}>
                  🦦 Pottr. app
                </div>
                <div className="fs-5" style={{ minWidth: "" }}>
                  Please support us on Pottr, compete and win big money :D
                </div>
                <hr />
                <div className="fs-5" style={{ fontWeight: "500" }}>
                  @ 2021 Copyrighted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Links(props) {
  return (
    <Link
      to="/about"
      className="text-decoration-none"
      style={{ color: "#D3D3D3", fontWeight: "400" }}
    >
      {props.content}
    </Link>
  );
}
