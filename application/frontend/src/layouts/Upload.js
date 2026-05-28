import "./css/Upload.css";

export default function Upload(props) {
  const loading = props.loading;
  return (
    <div
      className="bg-light px-md-3"
      style={{ minHeight: "100vh" }}
      id="upload"
    >
      {loading && (
        <div
          className="d-flex flex-column w-100 justify-content-center text-center fs-1 gap-3"
          style={{ position: "fixed", top: "30vh" }}
        >
          {
            //everytime it reloads, it goes back to top
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          <div className="">Loading... Please don't close the page</div>
          <div className="">You will be redirect shortly</div>
        </div>
      )}
      {!loading && (
        <div
          className="container-xxl px-xxl-5 py-4"
          style={{ maxWidth: "1000px", paddingTop: "2vw" }}
        >
          {props.form}
        </div>
      )}
    </div>
  );
}
