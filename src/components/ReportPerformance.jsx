const Projects = [
    {
        id: 1,
        totalTask: 20,
        completeTask: 15,
        pending: 5,
        summary: "Finish all pending task if any"

    }

    

]

export default function ReportPerformance () {
    return(

        <div>
          <h4>My project</h4>
         {
            Projects.map(project => 
                <div key={project.id}>
                    <h3>{`Total Task: ${project.totalTask}`}</h3> 
                    <h3>{`Complete Task: ${project.completeTask}`}</h3>
                    <h3>{`Pending Task: ${project.pending}`}</h3> 
                    <h3>{`Remarks: ${project.summary}`}</h3>

                </div>
            )
         }

        </div>
    )
}