import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import workoutVideo from '../assets/workout.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={workoutVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Let's Get Active</h1>
            <p>Helping people get fit and live a healthly lifestyle</p>
            <div>
                <Link to='/register' className='btn'>Register</Link>
                <Link to='/login' className='btn btn-light'>Launch</Link>
            </div>
        </div>
    </div>
  )
}

export default Video