export default function Fee(props) {
  function ChangeItem(event) {
    const item = event.target.value;
    props.setStates({ ...props.states, fee: item });
    event.preventDefault();
  }
  return (
    <div className="d-flex flex-column gap-3">
      <div className="fs-4 fw-bold">Choose fee range:</div>
      <select
        className="form-select bg-light rounded-0 p-3 ps-0 fs-4"
        onChange={ChangeItem}
        style={{ width: "250px", maxWidth: "100%", border: "none", borderBottom: "3px black solid" }}
        value={props.states.fee}
      >
        <option value="">Choose the range</option>
        <option value="less than 10">less than 10</option>
        <option value="10 to 50">10 to 50</option>
        <option value="50 to 100">50 to 100</option>
        <option value="more than 100">more than 100</option>
      </select>
    </div>
  );
}