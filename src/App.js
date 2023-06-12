import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'
import PostDetail from './pages/PostDetail'
import Login from './pages/Login'
import GuardedRoute from './guards/GuardedRoute'
import { useAuth } from './providers/AuthProvider'

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
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}>
          <Route path="/create" element={<Create />} />
        </Route>
        <Route path="/post/:id" element={<PostDetail />} />
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
