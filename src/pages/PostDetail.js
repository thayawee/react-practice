import React from 'react'
import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import classes from './PostDetail.module.css'

const PostDetail = () => {
  const { id } = useParams()
  const { post, isLoading } = usePost(id)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.container}>
      {post && (
        <>
          {/* <h1>id: {id}</h1>
          <p>title: {post.title}</p>
          <p>body: {post.body}</p> */}
          <h1>{post.title}</h1>
          <p>Posted by userId: {post.userId}</p>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}

export default PostDetail
