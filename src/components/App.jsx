import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/App.css'
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import SignUp from './SignUp'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
