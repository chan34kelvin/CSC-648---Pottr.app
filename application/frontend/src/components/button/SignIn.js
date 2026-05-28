import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg"

export default function SignIn() {
  return (
    <Link to="/signin" className="text-reset d-flex align-items-center">
      <CgProfile />
    </Link>
  );
}
