import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/ui/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/ui/Jobs'
import Browse from './components/ui/Browse'
import Profile from './components/ui/Profile'
import JobDescription from './components/ui/JobDescription'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/description/:id" element={<JobDescription/>}/>
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
