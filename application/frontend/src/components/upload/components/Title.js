export default function Title(props) {
  function ChangeItem(event) {
    const item = event.target.value;
    props.setStates({ ...props.states, title: item });
    event.preventDefault();
  }
  return (
    <div className="d-flex flex-column gap-3">
      <div className="fs-5 fw-bold">Enter your title of the video*</div>
      <input
        type="text"
        className="form-control bg-secondary bg-opacity-25 rounded-3 p-3 ps-3 fs-5"
        onChange={ChangeItem}
        style={{ border: "none" }}
        value={props.states.title}
      />
    </div>
  );
}
