import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Header.css';
import { images } from '../../constants';

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {threshold: 0.2 });

  return (
    <div className='app__header app__wrapper app__banner' id='home' ref={ref}>
      <div className='app__wrapper_banner'>
        <div className='app__wrapper_info app__info'>
          <motion.h1
            className='app__header-h1'
            initial={{ x: '-100vw', opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1 }}
          >
            The Key to Fine Dining
          </motion.h1>

          <motion.p
            className='p__opensans'
            initial={{ x: '-100vw', opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.2 }}
            style={{ marginBottom: '2rem' }}
          >
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.
          </motion.p>

          <motion.button
            type='button'
            className='custom__button'
            initial={{ y: '100vh', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 0.8, delay: 0.4 }}
          >
            Explore Menu
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;
