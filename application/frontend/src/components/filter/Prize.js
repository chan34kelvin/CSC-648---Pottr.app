export default function Prize(props) {
  function ChangeItem(event) {
    const item = event.target.value;
    props.setStates({ ...props.states, prize: item });
    event.preventDefault();
  }
  return (
    <div className="d-flex flex-column gap-3">
      <div className="fs-4 fw-bold">Choose prize range:</div>
      <select
        className="form-select bg-light rounded-0 p-3 ps-0 fs-4"
        onChange={ChangeItem}
        style={{ width: "250px", maxWidth: "100%", border: "none", borderBottom: "3px black solid" }}
        value={props.states.prize}
      >
        <option value="">Choose the range</option>
        <option value="less than 1000">less than 1000</option>
        <option value="1000 to 3000">1000 to 3000</option>
        <option value="5000 to 10000">5000 to 10000</option>
        <option value="more than 10000">more than 10000</option>
      </select>
    </div>
  );
}
