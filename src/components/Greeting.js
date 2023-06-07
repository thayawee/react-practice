import React, { useState } from 'react'
import classes from './Greeting.module.css'
const Greeting = (props) => {
  // const name = 'm'
  // const { name } = props
  // const isLogin = false
  const [name, setName] = useState('m')

  const handleClick = () => {
    setName('john')
  }

  return (
    <>
      <div className={classes.card}>
        <h3>Welcome!</h3>
        <p>{name}</p>
        {/* <p>{isLogin ? name : 'Unknown'}</p> */}
      </div>
      <button onClick={handleClick}>Change name</button>
    </>
  )
}

export default Greeting
