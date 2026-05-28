export default function Active(props) {
  function ChangeItem(event) {
    const item = event.target.value;
    props.setStates({ ...props.states, active: item });
    event.preventDefault();
  }
  return (
    <div className="d-flex flex-column gap-3">
      <div className="fs-4 fw-bold">Choose its status:</div>
      <select
        className="form-select bg-light rounded-0 p-3 ps-0 fs-4"
        onChange={ChangeItem}
        style={{ width: "150px", maxWidth: "100%", border: "none", borderBottom: "3px black solid" }}
        value={props.states.active}
      >
        <option value="">Choose</option>
        <option value="Inactive">Inactive</option>
        <option value="Active">Active</option>
      </select>
    </div>
  );
}