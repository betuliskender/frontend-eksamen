import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ApiGet, ApiPut } from '../utils/apiFetcher'

const DisplayAllProjects = () => {
    const [project, setProject] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [showAddForm, setShowAddForm] = useState(false)
    const [developer, setDeveloper] = useState()
    const [invoice, setInvoice] = useState()
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        ApiGet("/project", setProject)
        ApiGet("/developer", setDeveloper)
    }, [])

    const toggleProjectHour = (id) => {
        setShowForm(!showForm)
        setProject(project[id -1])
        ApiGet("/hour/invoice/" +id, setInvoice)
    
    }

    const onClick = (e) => {
        e.preventDefault()
        let totalCost = 0;
        invoice.forEach(invoice => {totalCost += invoice.total
        });
        setTotalCost(totalCost)
    }

    const addDeveloper = (id) => {
        setShowAddForm(!showAddForm)
        setProject(project[id-1])
    }

    const selectDeveloper = (e) => {
        e.preventDefault()
        const value = e.target.value
        let newDeveloper = developer.find(x => x.name === value)
        let newProject = project
        newProject.developers.push(newDeveloper)
        setProject(newProject)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        ApiPut("/project/", project)
        console.log(project)
    }

  return (
    <div>
        {!showForm && !showAddForm &&
        <div>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Desciption</th>
            </tr>
        </thead>
        {project != undefined && project.map((project) => (
            <tbody key={project.id}>
                <tr>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                    <td><button onClick={() => toggleProjectHour(project.id)}>See Project invoice</button></td>
                    <td><button onClick={() => addDeveloper(project.id)}>Add developer</button></td>
                </tr>
            </tbody>
        ))}
      </table>
      </div>
}
{showAddForm &&
<div>
    <form onSubmit={onSubmit}>
        <label for="developer">Developer</label>
                     
            <select class="developer" name="developer" id="developer" onChange={selectDeveloper}>
                    {developer != undefined && developer.map(developer => 
                        <option key={developer.id} value={developer.name}>{developer.name}</option>
                    )}
            </select> 

            <button type='submit' value='submit'>Add developer</button>
    </form>

</div>

}
{showForm &&
    <div>
        <table>
            <thead>
                <tr>
                    <th>Hour</th>
                    <th>Description</th>
                    <th>Billing pr hour</th>
                    <th>User Story</th>
                    <th>Developer id</th>
                    <th>Project id</th>
                    <th>Total</th>
                </tr>
            </thead>
            {invoice != undefined && invoice.map((invoice) => (
                <tbody key={invoice.id}>
                    <tr>
                        <td>{invoice.hours}</td>
                        <td>{invoice.description}</td>
                        <td>{invoice.billingPrHour}</td>
                        <td>{invoice.userStory}</td>
                        <td>{invoice.developerId}</td>
                        <td>{invoice.ProjectId}</td>
                        <td>{invoice.total}</td>
                    </tr>
                </tbody>
            ))}
        </table>
      
      
      <button onClick={onClick}>Click for Total Cost</button>
      {totalCost>0 && totalCost}


    </div>}
    </div>
  )
}

export default DisplayAllProjects
