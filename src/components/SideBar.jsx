import { Link } from "react-router-dom";

export default function SideBar() {
    return(
        <aside>
            <ul>
                <li>
                   <Link to="/dashboard"> Dashboard </Link>
                </li>

                <li>
                   <Link to="/tasks">Tasks</Link>
                </li>

                <li>
                   <Link to="/reports">Report</Link>
                </li>

                <li>
                   <Link to="/profile">Profile</Link>
                </li>

                <li>
                   <Link to="/settings">Settings</Link>
                </li>

            </ul>
        </aside>
    )
}