export default function Competition(props) {
  function ChangeItem(event) {
    const item = event.target.value;
    props.setStates({ ...props.states, competition: item });
    event.preventDefault();
  }
  return (
    <div className="d-flex flex-column gap-3">
      <div className="fs-5 fw-bold">Choose a competition*</div>
      <select
        className="form-select bg-secondary bg-opacity-25 rounded-3 p-3 ps-3 fs-5"
        onChange={ChangeItem}
        style={{border: "none" }}
        value={props.states.competition}
      >
        <option value="">Choose</option>
        {props.cards.map((info) => (
          <option key={info["title"]} value={info["title"]}>
            {info["title"]}
          </option>
        ))}
      </select>
    </div>
  );
}