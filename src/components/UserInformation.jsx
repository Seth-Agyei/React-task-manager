

const users = [

    {   id: 1,
        username: "seth",
        role: "Fullstack Developer",
        email: "seth199299@gmail.com",
        summary: "I am a good web developer, with 1 year experience"
    },

    
]


export default function UserInformation({id}){
   
 return(
   <>
    {users.map(user => (
    <div key={user.id}>
            <h1>User Information</h1> <hr />
            
            <h2>{user.username}</h2>  
            <h3>{user.role}</h3> 
            <h3>{user.email}</h3>
            <h4>{user.summary}</h4>
        </div>
    )
   )} </>
)
  
}