import { BiLogIn } from "react-icons/bi"

export default function SignOut(props) {
  return (
    <div className="text-reset d-flex align-items-center" onClick={(event) => {
        event.preventDefault()
        props.setUpdate(props.update+0.01)
        sessionStorage.setItem("login", "no")
    }}>
      <BiLogIn/>
    </div>
  );
}