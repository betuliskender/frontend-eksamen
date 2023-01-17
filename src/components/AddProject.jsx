import React from 'react'
import { useState, useEffect } from 'react'
import { ApiPost } from '../utils/apiFetcher'

const AddProject = () => {
const [projects, setProjects] = useState()

useEffect(() => {
  
}, [])

const onChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    const propertyName = e.target.name
    setProjects({...projects, [propertyName]: value})
}

const onClick = () => {
    ApiPost('/project', setProjects, projects)
}

  return (
    <div>
        <form>
            <label>Name</label>
            <input name="name" type="text" onChange={onChange}/>
            <label>Description</label>
            <input name="description" type="text" onChange={onChange}/>
        </form>
        <button onClick={onClick}>Add Project</button>
    </div>
  )
}

export default AddProject
