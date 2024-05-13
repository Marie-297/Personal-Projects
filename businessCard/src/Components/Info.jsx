import React, { Component } from 'react'
import Button from './Button'

class Info extends Component {
  render() {
    return (
      <div>
        <div className="Image">
          <img src={this.props.imgPic} alt="profile-pic" />
        </div>
        <h2 className="profile-name">
          {this.props.profileName}
        </h2>
        <h4 className="status">
          {this.props.profileStatus}
        </h4>
        <p className="website">
          {this.props.profileWebsite}
        </p>
        <div className="buttons">
          <Button imgName='../../src/assets/Images/gmail.svg' buttonName='Email' bgColor='white' />
          <Button imgName='../../src/assets/Images/linkedin.svg' buttonName='LinkedIn' bgColor='rgb(48, 48, 230)' textColor='white'/>
        </div>
      </div>
    )
  }
}

export default Info
