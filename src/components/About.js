import React from 'react'
import {Link} from 'react-router-dom'
import './AboutStyles.css'

const About = () => {
    return (
        <div className='about'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- BMR -</h3>
                    <span className='bar'></span>
                    <p className='calc'>Basal Metabolic Rate</p>
                    <p>- The BMR calculator helps you find out -</p>
                    <p>- how many calories needed to maintain your weight -</p>
                    <p>- Most people BMR Ranges -</p>
                    <p>- 1000/2000 calories each day to fuel basic function in resting state - </p>
                    <Link to='/calculators' className='btn'>Learn More</Link>
                </div>
                <div className='card'>
                    <h3>- HRMax -</h3>
                    <span className='bar'></span>
                    <p className='calc'>Heart Rate Max</p>
                    <p>- Find out the maximum heart rate for your age and gender -</p>
                    <p>- Examples -</p>
                    <p>- Target / Maximum Heart Rate : </p>
                    <p>- Age: 20 = 100 to 170 bpm - max : 200 bpm </p>
                    <p>- Age: 30-35 = 93/95 bpm to 157/162 bpm - max: 185/190 bpm </p>
                    <p>- Age: 40-45 = 88/90 bpm to 149/153 bpm - max: 180/175 bpm</p>
                    <p>- Age: 50-55 = 85/83 bpm to 145/140 bpm - max: 170/165 bpm</p>
                    <Link to='/calculators' className='btn'>Learn More</Link>
                </div>
                <div className='card'>
                    <h3>- Body Comp -</h3>
                    <span className='bar'></span>
                    <p className='calc'>Body Composition</p>
                    <p>- Helps with finding out how much of your weight is fat, muscle, water -</p>
                    <p>- Minimum Essential Fat: 2-5% -</p>
                    <p>- Healthy and Fit: 14-17% -</p>
                    <p>- Elite Athletes: 6-13% -</p>
                    <p>- Acceptable: 18-24% -</p>
                    <Link to='/calculators' className='btn'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default About