import React, { Component } from 'react'
import ImgGrid from '../assets/images/Group 77.jpg';

export class Uppersection extends Component {
  render() {
    return (
      <div className='uppersection'>
        <img src={ImgGrid} alt="img-grid" className='img-grid'/>
        <h1 className="header">
          Online Experiences
        </h1>
        <p className="text">
          Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
        </p>
      </div>
    )
  }
}

export default Uppersection
