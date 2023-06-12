import React from 'react'
import classes from './Greeting.module.css'
import { useAuth } from '../providers/AuthProvider'

const Greeting = () => {
  const { username } = useAuth()

  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>{username}</p>
    </div>
  )
}

export default Greeting
