import React, { useState } from 'react'
import classes from './Login.module.css'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(usernameInput, passwordInput)

      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={classes.loginForm}>
      <label>Username:</label>
      <input type="text" onChange={(e) => setUsernameInput(e.target.value)} />

      <label>Password:</label>
      <input type="password" onChange={(e) => setPasswordInput(e.target.value)} />

      <input type="submit" value="Login" />
    </form>
  )
}

export default Login
