import { useState } from 'react'
import './App.css'
import ByteSpaceLanding from './pages/ByteSpaceLanding'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
    
      <Routes>
        <Route path="/" element={<ByteSpaceLanding/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
       </Routes>
    </>
  )
}

export default App
