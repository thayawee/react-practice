import React, { useState } from 'react'
import classes from './Post.module.css'
const post = (props) => {
  const { post } = props
  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow(!isShow)
  }

  // const handleClick = (id) => {
  //   alert(`Post id: ${id} clicked`)
  // }

  return (
    // <div onClick={() => handleClick(post.id)} className={classes.post}>
    <div className={classes.post}>
      <p>id: {post.id}</p>
      <p>title: {post.title}</p>
      {isShow && <p>more post information...</p>}
      <button onClick={toggleShow}>{isShow ? 'Show Less' : 'Show More'}</button>
    </div>
  )
}

export default post
