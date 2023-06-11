import React from 'react'
import usePosts from '../hooks/usePosts'
import { useState } from 'react'
import Classes from './Create.module.css'

const Create = () => {
  const { posts, setPosts, isLoading } = usePosts()
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostBody, setNewPostBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newPostTitle,
          body: newPostBody,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await res.json()

      console.log(data)

      setPosts([...posts, data])
    } catch (err) {
      console.log(err)
    }

    setNewPostTitle('')
    setNewPostBody('')
  }

  return (
    <div>
      <form className={Classes.postForm} onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} required />

        <label>Body:</label>
        <input type="text" value={newPostBody} onChange={(e) => setNewPostBody(e.target.value)} required />

        <input type="submit" value="Post" />
      </form>
    </div>
  )
}

export default Create
