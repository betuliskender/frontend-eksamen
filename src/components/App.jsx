import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/App.css'
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import SignUp from './SignUp'
import DisplayAllProjects from './DisplayAllProjects'
import facade from '../utils/loginFacade'
import { useEffect } from 'react'
import AddProject from './AddProject'
import AddProjectHour from './AddProjectHour'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logOut = () => {
    setLoggedIn(false)
    setProfile(initialProfile)
    onChange()
  }
  
  useEffect(() => {
}, [])

  return (
    <div className="App">
      <BrowserRouter basename="frontend">
      <Header facade={facade} logOut={logOut} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/projects" element={facade.hasUserAccess("admin", loggedIn) && <DisplayAllProjects/>}/>
        <Route path="/project" element={facade.hasUserAccess("admin", loggedIn) && <AddProject/>}/>
        <Route path="/projecthour" element={facade.hasUserAccess("user", loggedIn) && <AddProjectHour/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
