import { useParams } from "react-router-dom"

const users = [

    {   id: 1,
        Username: "seth",
        UserRole: "Fullstack Developer",
        EmailAddress: "seth199299@gmail.com",
        ProfileSummary: "I am a good web developer, with 1 year experience"
    },

        {
            id: 2,
            Username: "seth",
            UserRole: "Fullstack Developer",
            EmailAddress: "seth199299@gmail.com",
            ProfileSummary: "I am a good web developer, with 1 year experience"
        }

]


export default function UserInformation(){
   const {id} = useParams();

   const user = users.find(user => user.id == Number(id))

   if (!user){
    return <p>No User available</p>;
   }

    return(
        <div>
            <h1>User Information</h1> <hr />
            
            <h2>{user.Username}</h2>  
            <h3>{user.UserRole}</h3> 
            <h3>{user.EmailAddress}</h3>
            <h4>{user.ProfileSummary}</h4>
        </div>
    )
}