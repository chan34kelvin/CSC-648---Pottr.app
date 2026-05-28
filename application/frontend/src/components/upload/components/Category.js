export default function Category(props) {
  function ChangeItem(event) {
    const item = event.target.value;
    props.setStates({ ...props.states, category: item });
    event.preventDefault();
  }
  return (
    <div className="d-flex flex-column gap-3">
      <div className="fs-5 fw-bold">Choose a game*</div>
      <select
        className="form-select bg-secondary bg-opacity-25 rounded-3 p-3 ps-3 fs-5"
        onChange={ChangeItem}
        style={{border: "none" }}
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