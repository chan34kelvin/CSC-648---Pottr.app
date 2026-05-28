
//competition page layout
export default function Competition(props) {
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
        <div className="container-xxl px-xxl-5" style={{ maxWidth: "1800px" }}>
          {props.card}
        </div>
      </div>
    </div>
  );
}
