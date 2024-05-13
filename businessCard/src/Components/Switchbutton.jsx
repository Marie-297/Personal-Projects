import React, { Component } from 'react'

class Switchbutton extends Component {
  render() {
    const { toggleDarkMode } = this.props;
    return (
      <div className='switch'>
        <button className='button' onClick={toggleDarkMode}>
          <div className="outer">
            <div className="inner"></div>
          </div>
        </button>
      </div>
    )
  }
}

export default Switchbutton;
