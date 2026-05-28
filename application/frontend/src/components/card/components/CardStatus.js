export default function CardStatus(props) {
  return (
    <div className="text-reset">
      {props.active && (
        <div className="" style={{ color: "red" }}>
          Inactive
        </div>
      )}
      {!props.active && (
        <div className="" style={{ color: "green" }}>
          Active
        </div>
      )}
    </div>
  );
}
