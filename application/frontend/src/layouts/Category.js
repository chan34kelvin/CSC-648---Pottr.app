
//layout
export default function Category(props) {
  return (
    <div className="d-flex flex-column">
      <div className="container-xxl px-xxl-5" style={{ maxWidth: "1800px" }}>
        <div className="row mx-auto g-3">
          <div className="col-12">
            {props.banner}
          </div>
        </div>
      </div>
      <div className="bg-light w-100" style={{ minHeight: "80vh" }}>
        {!props.notFound && (
          <div
            className="container-xxl px-xxl-5"
            style={{ maxWidth: "1800px" }}
          >
            {props.cards}
          </div>
        )}
        {props.notFound && (
          <div
            className="container-xxl px-xxl-5 fs-1 mt-5"
            style={{ maxWidth: "1800px" }}
          >
            <div className="d-flex flex-column gap-4">
              <div className="">
                0 Results found, Please enter new filters or search values.
              </div>
              <a href="/competition" className="">
                Go back to competitions
              </a>
            </div>
          </div>
        )}
      </div>
      {props.filter}
    </div>
  );
}
