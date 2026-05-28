import Reset from "../button/Reset";
import Active from "./Active";
import Category from "./Category";
import Fee from "./Fee";
import Prize from "./Prize";

export default function CategoryFilter(props) {
  return (
    <div
      className="offcanvas offcanvas-start bg-light"
      tabindex="-1"
      id={props.id}
    >
      <div className="offcanvas-header text-light">
        <div className="offcanvas-title fs-1" style={{ color: "black" }}>
          Filters
        </div>
        <button
          className="btn btn-close text-reset fs-4"
          data-bs-dismiss="offcanvas"
          style={{ color: "white" }}
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="row g-4">
          <div className="col-12">
            <Category
              states={props.states}
              setStates={props.setStates}
              categories={props.categories}
            />
          </div>
          <div className="col-12">
            <Active states={props.states} setStates={props.setStates} />
          </div>
          <div className="col-12">
            <Prize states={props.states} setStates={props.setStates} />
          </div>
          <div className="col-12">
            <Fee states={props.states} setStates={props.setStates} />
          </div>
          <div className="col-12 mt-5">
            <Reset states={props.states} setStates={props.setStates} />
          </div>
        </div>
      </div>
    </div>
  );
}
