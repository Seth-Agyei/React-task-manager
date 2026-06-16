import { Link } from "react-router-dom";

export default function TaskCard({task}){
    return(
        <div>
            <h3>{task.title}</h3>

            <p>{task.status}</p>

            <Link
            to={`/task/${task.id}`}
            > View Details</Link>

        </div>
    )
}

