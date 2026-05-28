import { VscSettings } from "react-icons/vsc";

export default function Filter(props) {
  return (
    <div className="">
      <a
        href= {"#"+props.id}
        data-bs-toggle="offcanvas"
        role= "button"
        className="text-decoration-none d-flex flex-row align-items-center bg-secondary bg-opacity-25 text-reset p-2 px-5"
        style={{ borderRadius: "5px" }}
      >
        <VscSettings
          className="me-3"
          size="30px"
          style={{ color: "lightblue" }}
        />
        <div
          className="text-center"
          style={{ color: "lightblue" }}
        //   style={{
        //     background: " -webkit-linear-gradient(#fff, #4B0082)",
        //     WebkitBackgroundClip: "text",
        //     WebkitTextFillColor: "transparent",
        //     fontWeight: "400",
        //   }}
        >
          Open Filter
        </div>
      </a>
    </div>
  );
}