export default function Reset(props) {

  return (
    <div className="text-dark">
      <div
        className="d-flex justify-content-center text-reset gap-3 p-3 px-5"
        style={{ borderRadius: "5px", border: "1px solid" }}
        onClick={(event) => {
            let reseted= {}
            for(let key in props.states){
                reseted[key]= ""
            }
            props.setStates(reseted)
            event.preventDefault()
        }}
        type="button"
      >
        <div className="fs-5 text-center">Reset filters</div>
      </div>
    </div>
  );
}