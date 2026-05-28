import Brand from "./components/Brand";
import SearchBar from "./components/SearchBar";
import TailButtons from "./components/TailButton";

export default function Navigation(props) {
  return (
    <div className="container-xxl px-xxl-5" style={{ maxWidth: "1800px" }}>
      <div className="navbar navbar-expand-lg row d-flex align-items-center g-3 mx-auto">
        {/* brand - logo of the website */}
        <div className="col-3 order-1">
          <Brand />
        </div>

        {/* search bar - searches for new competitions */}
        <div
          className="navbar-collapse collapse col-lg-6 order-3 order-lg-2 mb-3 mb-lg-0"
          id="navSearch"
        >
          <div className=" d-flex w-100">
            <SearchBar />
          </div>
        </div>

        {/* tail buttons, include login, signout and compete */}
        <div className="col-3 d-flex order-2 order-lg-3">
          <TailButtons update={props.update} setUpdate={props.setUpdate}/>
        </div>
      </div>
    </div>
  );
}
