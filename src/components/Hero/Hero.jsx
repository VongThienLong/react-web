import React from 'react'

import './Hero.css'

const Hero = ({heroText}) => (
    <div className='app__hero app__wrapper' id='home'>
        <div className='app__hero_text'>
            <h1 className='app__hero-h1'>{heroText}</h1>
        </div>
    </div>
)

export default Hero