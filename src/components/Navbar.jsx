import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav>
            <Link to="/"> Home </Link> 
            <br />
            <Link to="/dashboard"> Dashboard </Link> 
            <br />
            <Link to="/tasks"> Tasks </Link> 
            <br />
            <Link to="/about"> About </Link>
            <br />
            <Link to="/tasks-menu"> Task Menu </Link>


        </nav>



    )
}