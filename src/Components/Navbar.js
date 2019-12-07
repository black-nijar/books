import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from './Auth';

class Navbar extends Component {
  render() {
    return (
      <div className='ui navbar'>
        <nav className='navbar fixed-top navbar-dark bg-dark '>
          <div className='ui container'>
            <Link to='/addbook' className='navbar-brand'>Home</Link>
            <Link to='/' className='books'>Books</Link>
            <Link to='/mycart' className='mycart'>My Cart</Link>
            <Link to='/profile' className='Profile'>Profile</Link>
            <Auth/>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
