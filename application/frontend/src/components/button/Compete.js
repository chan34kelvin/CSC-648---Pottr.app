import { Link } from "react-router-dom";
import { GiCrossedSwords } from "react-icons/gi"
import { RiSwordFill } from "react-icons/ri"

export default function Compete(){
    return(
        <Link to= "/upload" className="text-reset d-flex align-items-center">
            <RiSwordFill/>
        </Link>
    )
}