import React, { Component } from 'react'
import './BackgroundStyles.css'

export class Background extends Component {
  render() {
    return (
      <div className='background'>
          <div className='heading'>
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
          </div>
      </div>
    )
  }
}

export default Background