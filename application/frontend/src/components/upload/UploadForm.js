import Active from "./components/Active.js";
import Category from "./components/Category.js";
import Competition from "./components/Competition.js";
import Title from "./components/Title.js";
import DropFileInput from "./DropFileInput.js";

export default function UploadForm(props) {
  return (
    <div className="row mx-auto g-3">
      <div className="col-12">
        <div className="fs-1">
          Upload
          <hr />
        </div>
      </div>
      <div className="col-md-7 d-flex flex-column gap-4">
        <Active states={props.active} setStates={props.setActive} />
        <div className="blockquote-footer fs-5" id="">
          Active or Inactive (Not Mandatory)
        </div>
      </div>
      {props.categories && (
        <div className="col-md-6 d-flex flex-column gap-4">
          <Category
            states={props.states}
            setStates={props.setStates}
            categories={props.categories}
          />
          <div className="blockquote-footer fs-5" id="categoryValid">
            (Mandatory)
          </div>
        </div>
      )}
      <div className="col-md-6 d-flex flex-column gap-4">
        <Competition
          states={props.states}
          setStates={props.setStates}
          cards={props.cards}
        />
        <div className="blockquote-footer fs-5" id="competitionValid">
          (Mandatory)
        </div>
      </div>
      <div className="col-md-12 d-flex flex-column gap-4">
        <Title states={props.states} setStates={props.setStates} />
        <div className="blockquote-footer fs-5" id="titleValid">
          (Mandatory)
        </div>
      </div>
      <div className="col-md-12 d-flex flex-column gap-3">
        <div className="fs-5" style={{ fontWeight: "600" }}>
          Upload your video file here
        </div>
        <DropFileInput onFileChange={(files) => props.fileChange(files)} />
      </div>
      <div className="col-md-12 d-flex flex-column my-5 gap-3">
        <div className="blockquote-footer fs-4" id="uploadValid">
          Please upload a file to continue
        </div>
        <button
          variant="contained"
          className="btn btn-primary fs-5 p-3"
          onClick={props.onSubmit}
          style={{ maxWidth: "200px" }}
          id="uploadButton"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
