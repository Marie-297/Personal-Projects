import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <button style={{backgroundColor: this.props.bgColor, color: this.props.textColor}}>
          <img src={this.props.imgName} alt="logo" />
          {this.props.buttonName}
        </button>
      </div>
    )
  }
}

export default Button
