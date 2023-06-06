import React from 'react'
import classes from './Post.module.css'
const post = (props) => {
  const { post } = props

  const handleClick = (id) => {
    alert(`Post id: ${id} clicked`)
  }

  return (
    <div onClick={() => handleClick(post.id)} className={classes.post}>
      <p>id: {post.id}</p>
      <p>title: {post.title}</p>
    </div>
  )
}

export default post
