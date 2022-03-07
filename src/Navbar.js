import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className='nav'>

            <div className="topnav">
                <Link to='/'  className="navMenu">Home</Link>
                <Link to='/student'  className="navMenu">Students</Link>
                <Link to='/contact'  className="navMenu">Contact Us</Link>
            </div>  

      </div>
    )
  }
}

export default Navbar