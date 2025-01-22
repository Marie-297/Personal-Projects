import React, { Component } from 'react'
import Twitter from '../assets/Images/twitter.svg';
import Facebook from '../assets/Images/facebook.svg';
import Insta from '../assets/Images/instagram.svg';
import Github from '../assets/Images/github.svg';

class Footer extends Component {
  render() {
    return (
      <div>
       <div className="socials">
        <a href="">
            <img src={Twitter} alt="twitter" />
          </a>

          <a href="">
            <img src={Facebook} alt="facebook" />
          </a>

          <a href="">
            <img src={Insta} alt="instagram" />
          </a>

          <a href="">
            <img src={Github} alt="github" />
          </a>
       </div>
      </div>
    )
  }
}

export default Footer
