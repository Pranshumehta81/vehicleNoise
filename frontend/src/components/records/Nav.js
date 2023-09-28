
import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav({ setIsLogin }) {

  const logoutSubmit = () => {
    localStorage.clear()
    setIsLogin(false)
  }

  return (
    <nav className='main-nav'>
      <div className="logo">
        <img src="https://rkvy-raftaariitbhu.org/wp-content/uploads/2019/06/IIT-Logo.jpg" alt="Logo" /> {/* Add your image URL here */}
        <h2>
          {/* <span>N</span>ote
          <span>D</span>own */}
        </h2>
      </div>
      <ul className='menu'>
        <li className='menu_item'><Link to="/">Home</Link></li>
        <li className='menu_item'><Link to="/create">Analyze Noise</Link></li>
        <li className='menu_item'><Link to="/mitigation">Mitigation ways</Link></li>
        <li className='menu_item'><Link to="/about">About Us</Link></li>
        <li className="menu_item" onClick={logoutSubmit}><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
