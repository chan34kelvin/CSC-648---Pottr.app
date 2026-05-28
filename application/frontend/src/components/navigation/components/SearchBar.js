import { GoSearch } from "react-icons/go";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState(() => {
    return "";
  });
  const reDirect = useHistory();

  function Search(event) {
    let whereToGo = "/search/";
    event.preventDefault();
    if (searchText === "" || searchText === "?") {
      whereToGo = "/competition";
    }
    // reDirect.replace(whereToGo+searchText)
    reDirect.push(whereToGo + searchText);
  }

  return (
    <form className="d-flex flex-row align-self-center w-100" onSubmit={Search}>
      <input
        type="text"
        className="form-control p-2 ps-4 fs-5 bg-opacity-25"
        style={{
          borderRadius: "30px 0px 0px 30px",
          border: "none",
        }}
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        placeholder="Search Competition"
      />
      <button
        type="submit"
        className="btn px-4"
        style={{
          background: "white",
          border: "none",
          borderRadius: "0px 30px 30px 0px",
        }}
      >
        <GoSearch className="fs-4" />
      </button>
    </form>
  );
}
