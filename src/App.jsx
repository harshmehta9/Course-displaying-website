import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Home/Hero'
import SignUp from './components/Admin/SignUp'
import SignIn from './components/Admin/SignIn'
import AddCourse from './components/Admin/AddCourse'
import Courses from './components/Admin/Courses'
import EditCourse from './components/Admin/EditCourse'
import BrowseCourse from './components/Users/BrowseCourse'
import Aboutme from './components/Home/Aboutme'

function App() {
  
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/addcourse' element={<AddCourse/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/courses/:courseId' element={<EditCourse/>}></Route>
        <Route path="/browsecourse" element={<BrowseCourse/>}></Route>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/aboutme' element={<Aboutme/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
