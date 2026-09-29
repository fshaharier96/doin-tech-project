import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ByteSpaceLanding from './pages/ByteSpaceLanding'
import { Route, Router } from 'react-router-dom'
import Login from './pages/Login'
import Sign


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <ByteSpaceLanding/>
      <Router>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
       </Router>
    </>
  )
}

export default App
