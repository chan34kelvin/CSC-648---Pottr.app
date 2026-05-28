import Compete from "../../button/Compete";
import SignIn from "../../button/SignIn";

import { GoSearch } from "react-icons/go";
import { useState, useEffect } from "react";
import SignOut from "../../button/SignOut";

export default function TailButtons(props) {

  const [logged, setLogged] = useState(() => false)
  useEffect(() => {
    if(sessionStorage.getItem("login") === "active"){
      setLogged(true)
    }else{
      setLogged(false)
    }
  }, [props.update])

  return (
    <div className="d-flex flex-row w-100 justify-content-end gap-4 align-items-center">
      <div className="fs-1 text-light">
        <SearchButton />
      </div>
      <div className="fs-1 text-light">
        <Compete />
      </div>
      <div className="fs-1 text-light">
        {!logged && (<SignIn />)}
        {logged && (<SignOut update={props.update} setUpdate={props.setUpdate}/>)}
      </div>
    </div>
  );
}

//search button only for nav bar
function SearchButton() {
  return (
    <div
      className="navbar-toggler fs-2 text-reset p-0 m-0"
      style={{ border: "none", boxShadow: "none", color: "inherit" }}
      data-bs-toggle="collapse"
      data-bs-target="#navSearch"
      type="button"
    >
      <GoSearch/>
    </div>
  );
}
