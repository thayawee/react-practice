import React from 'react'
import Post from '../components/Post'
import Classes from './Home.module.css'
import usePosts from '../hooks/usePosts'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Home = () => {
  const { posts, setPosts, isLoading } = usePosts()
  const { isLoggedIn } = useAuth()

  console.log('from home:', isLoggedIn)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={Classes.container}>
      <div className={Classes.feedContainer}>
        <div className={Classes.header}>
          <h2>Feed</h2>
          {isLoggedIn && <Link to="/create">New Post</Link>}
        </div>
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Home
