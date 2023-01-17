import React from 'react'
import { useState, useEffect } from 'react'
import { ApiGet, ApiPost } from '../utils/apiFetcher'

const AddProjectHour = () => {
    const [projectHour, setProjectHour] = useState()
    const [developer, setDeveloper] = useState()
    const [project, setProject] = useState()

    useEffect(() => {
        ApiGet("/developer", setDeveloper)
        ApiGet("/project", setProject)
  
    }, [])

    const onChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        const propertyName = e.target.name
        setProjectHour({...projectHour, [propertyName]: value})
    }

    const onClick = () => {
        ApiPost('/hour', setProjectHour, projectHour)
        console.log(projectHour)
    }

    const selectDeveloper = (e) => {
        e.preventDefault()
        const value = e.target.value
        let newDeveloper = developer.find(x => x.name === value)
        let newProjectHour = projectHour
        newProjectHour.developer = newDeveloper
        setProjectHour(newProjectHour)
    }

    const selectProject = (e) => {
        e.preventDefault()
        const value = e.target.value
        let newProject = project.find(x => x.name === value)
        let newProjectHour = projectHour
        newProjectHour.project = newProject
        setProjectHour(newProjectHour)
    }

  return (
    <div>
        <form>
            <label>Hours Spent</label>
            <input name="hoursSpent" type="text" onChange={onChange}/>
            <label>Description</label>
            <input name="description" type="text" onChange={onChange}/>
            <label>User Story</label>
            <input name="userStory" type="text" onChange={onChange}/>
            <label for="developer">Developer</label>
                     
             <select class="developer" name="developer" id="developer" onChange={selectDeveloper}>
                {developer && developer.map(developer => 
                    <option key={developer.id} value={developer.name}>{developer.name}</option>
                    )}
            </select> 

            <label for="project">Project</label>
                     
             <select class="project" name="project" id="project" onChange={selectProject}>
                {project && project.map(project => 
                    <option key={project.id} value={project.name}>{project.name}</option>
                    )}
            </select> 

        </form>
        <button onClick={onClick}>Add Project</button>
      
    </div>
  )
}

export default AddProjectHour
