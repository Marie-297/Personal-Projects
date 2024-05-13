import React, { Component } from 'react'
import logo from '../assets/images/airbnb 1.png'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <img src={logo} alt="logo" className='logoImg' />
        </nav>
      </div>
    )
  }
}

export default Navbar
