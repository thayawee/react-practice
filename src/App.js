import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'

// * Data from database
// const initPosts = [
//   {
//     id: 1,
//     title: "Let's learn React!",
//   },
//   {
//     id: 2,
//     title: 'How to install Node.js',
//   },
//   {
//     id: 3,
//     title: 'Basic HTML',
//   },
// ]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
