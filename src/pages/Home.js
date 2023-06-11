import React from 'react'
import Post from '../components/Post'
import Classes from './Home.module.css'
import usePosts from '../hooks/usePosts'

const Home = () => {
  const { posts, setPosts, isLoading } = usePosts()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={Classes.container}>
      <div className={Classes.feedContainer}>
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Home
