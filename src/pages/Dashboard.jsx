import SideBar from "../components/SideBar"
import DashBoardStats from "../components/DashBoardStats"
import UserCard from "../components/UserCard"

export default function Dashboard(){
    return(
        <div>
            <SideBar/>
            
            <main>
                <h1>Dashboard</h1>

                <UserCard/>
      
                <DashBoardStats/>

            </main>

        </div>
    )
}