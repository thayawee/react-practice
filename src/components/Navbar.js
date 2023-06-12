import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  console.log('from navbar:', isLoggedIn)

  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <p>Navbar</p>
        <NavLink to="/" className={(arg) => (arg.isActive ? classes.active : undefined)}>
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <NavLink to="/profile" className={(arg) => (arg.isActive ? classes.active : undefined)}>
              Profile
            </NavLink>
            <NavLink to="/login" className={(arg) => (arg.isActive ? classes.active : undefined)}>
              <button onClick={logout}>Logout</button>
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" className={(arg) => (arg.isActive ? classes.active : undefined)}>
            <button>Login</button>
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Navbar
