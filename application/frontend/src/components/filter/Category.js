export default function Category(props) {
  function ChangeItem(event) {
    const item = event.target.value;
    props.setStates({ ...props.states, category: item });
    event.preventDefault();
  }
  return (
    <div className="d-flex flex-column gap-3">
      <div className="fs-4 fw-bold">Choose a game:</div>
      <select
        className="form-select bg-light rounded-0 p-3 ps-0 fs-4"
        onChange={ChangeItem}
        style={{border: "none", borderBottom: "3px black solid" }}
        value={props.states.category}
      >
        <option value="">Choose</option>
        {props.categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
