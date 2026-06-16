import tasks from "../data/tasks.js";
import TaskList from "../components/TaskList";
import Searchbar from "../components/Searchbar";

export default function TasksMenu(){
    return(
        <div>
            <h1>Tasks</h1>

            <Searchbar/>

            <TaskList tasks={tasks}/>
        </div>

    )
}