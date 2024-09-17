import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { threshold: 0.2 });

  return (
    <div className='app__wrapper section__padding app__bg' id='contact'>
      <motion.div 
        className='app__wrapper_info'
        ref={containerRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <SubHeading title={'Contact'} />
        <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
        
        <motion.div 
          className='app__wrapper-content'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className='p__opensans' style={{ color: '#AAA' }}>
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>
            Opening Hours
          </p>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        </motion.div>
        
        <motion.button 
          type='button' 
          className='custom__button' 
          style={{ marginTop: '2rem' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Visit Us
        </motion.button>
      </motion.div>

      <motion.div 
        className='app__wrapper_img'
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src={images.findus} alt="Find us location" />
      </motion.div>
    </div>
  );
};

export default FindUs;
