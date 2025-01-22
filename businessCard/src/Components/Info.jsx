import React, { Component } from 'react'
import Button from './Button'
import Gmail from '../assets/Images/gmail.svg';
import Linkedin from '../assets/Images/linkedin.svg';	

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
          <Button imgName={Gmail} buttonName='Email' bgColor='white' />
          <Button imgName={Linkedin} buttonName='LinkedIn' bgColor='rgb(48, 48, 230)' textColor='white'/>
        </div>
      </div>
    )
  }
}

export default Info
