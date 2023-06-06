import React from 'react'
import classes from './Greeting.module.css'
const Greeting = (props) => {
  // const name = 'm'
  const { name } = props
  const isLogin = false

  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>{isLogin ? name : 'Unknown'}</p>
    </div>
  )
}

export default Greeting
