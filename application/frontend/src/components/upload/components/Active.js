export default function Active(props) {
  function ChangeItem(event) {
    const item = event.target.value;
    props.setStates({ ...props.states, active: item });
    event.preventDefault();
  }
  return (
    <div className="d-flex flex-column gap-3">
      <div className="fs-5 fw-bold">Choose the competition status:</div>
      <select
        className="form-select bg-secondary bg-opacity-25 rounded-3 p-3 ps-3 fs-5"
        onChange={ChangeItem}
        style={{border: "none" }}
        value={props.states.active}
      >
        <option value="">Choose</option>
        <option value="Active">Active competitions</option>
        <option value="Inactive">Inactive competitions</option>
      </select>
    </div>
  );
}
