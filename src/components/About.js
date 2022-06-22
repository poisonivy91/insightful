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
                    <p>- The minimum amount of calories the body needs to sustain itself -</p>
                    <p>- Base caloric intake to factor with the total daily energy expendature(TDEE) factor -</p>
                    <p>- Example -</p>
                    <p>- 20yr old  male has a BMR of 1682 - </p>
                    <p>- Being moderately active(1.55) Multiply to 1682 =  BMR of 2607 - </p>
                    <Link to='/calculators' className='btn'>Learn More</Link>
                </div>
                <div className='card'>
                    <h3>- HRMax -</h3>
                    <span className='bar'></span>
                    <p className='calc'>Heart Rate Max</p>
                    <p>- Calculate the maximum heart rate based on age and gender -</p>
                    <p>- Examples -</p>
                    <p>- Heart Rate Max = 2020 - 20 = 200 bpm </p>
                    <p>- Age: 20 = 100 to 170 bpm - max : 200 bpm </p>
                    <p>- Target HR at 60% of HRmax = 120 bpm -</p>
                    <p>- Target HR at 70% of HRmax = 140 bpm -</p>
                    <p>- Target HR at 80% of HRmax = 160 bpm -</p>
                    <Link to='/calculators' className='btn'>Learn More</Link>
                </div>
                <div className='card'>
                    <h3>- Body Comp -</h3>
                    <span className='bar'></span>
                    <p className='calc'>Body Composition</p>
                    <p>- Is the composite of all the body measurements- -</p>
                    <p>- Lean Muscle Mass-</p>
                    <p>- Body Fat-</p>
                    <p>- BMR-</p>
                    <p>- Macros-</p>
                    <Link to='/bodycomposition' className='btn'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default About