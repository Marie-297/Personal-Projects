import React, { Component } from 'react'
import Star from '../../src/assets/images/Star.png';

export class Lowersection extends Component {
  render() {
    return (
      <div className='lowersection'>
        <div className="card">
          <div className="card-img">
            <img src={this.props.srcname} alt="pic" />
          </div>
          <div className="card-details">
            <div className="rating">
              <img src={Star} alt="star" className='star'/>
              <p className="rate"> {this.props.rate}</p>
              <p className="rate-count">({this.props.count}) -</p>
              <p className="country">USA</p>
            </div>
            <p className="details-text">
              {this.props.details}
            </p>
            <p className="details-text">
              <span>From ${this.props.details2}</span> / person
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Lowersection
