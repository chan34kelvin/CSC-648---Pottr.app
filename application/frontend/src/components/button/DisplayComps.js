
export default function DisplayComps(props) {
  return (
    <div className="text-light">
      <div
        className="d-flex flex-row align-items-center text-reset gap-3 p-2 px-5"
        style={{ borderRadius: "5px", border: "1px solid" }}
        data-toggle="tooltip" title="Total competitions hosted"
      >
        <div className=""># {props.text}:</div>
        <div className="">{props.length}</div>
      </div>
    </div>
  );
}
