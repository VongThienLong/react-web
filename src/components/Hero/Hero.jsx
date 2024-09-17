import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import './Hero.css';

const Hero = ({ heroText }) => {
  return (
    <div className='app__hero app__wrapper' id='home'>
      <div className='app__hero_text'>
        <motion.h1
          className='app__hero-h1'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {heroText}
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
