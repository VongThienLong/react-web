import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { threshold: 0.2 });

  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="G letter" />
      </div>

      <div className='app__aboutus-content flex__center' ref={containerRef}>
        <motion.div
          className='app__aboutus-content_about'
          initial={{ opacity: 0 }}
          animate={isContainerInView ? { opacity: 1 } : {}}
          transition={{ type: 'tween', duration: 1 }}
        >
          <motion.h1
            className='headtext__cormorant'
            initial={{ x: '-100vw', opacity: 0}}
            animate={isContainerInView ? { x: 0, opacity: 1} : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.1 }}
          >
            About Us
          </motion.h1>

          <motion.img
            src={images.spoon}
            alt="spoon"
            className='spoon__img'
            initial={{ y: '-50px', opacity: 0 }}
            animate={isContainerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.2 }}
          />

          <motion.p
            className='p__opensans'
            initial={{ y: '100px', opacity: 0 }}
            animate={isContainerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </motion.p>

          <motion.button
            type='button'
            className='custom__button'
            initial={{ y: '100px', opacity: 0 }}
            animate={isContainerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.4 }}
          >
            Know More
          </motion.button>
        </motion.div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="knife" />
        </div>

        <motion.div
          className='app__aboutus-content_history'
          initial={{ opacity: 0 }}
          animate={isContainerInView ? { opacity: 1 } : {}}
          transition={{ type: 'tween', duration: 1 }}
        >
          <motion.h1
            className='headtext__cormorant'
            initial={{ x: '100vw', opacity: 0 }}
            animate={isContainerInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.1 }}
          >
            Our History
          </motion.h1>

          <motion.img
            src={images.spoon}
            alt="spoon"
            className='spoon__img'
            initial={{ y: '50px', opacity: 0 }}
            animate={isContainerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.2 }}
          />

          <motion.p
            className='p__opensans'
            initial={{ y: '-100px', opacity: 0 }}
            animate={isContainerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </motion.p>

          <motion.button
            type='button'
            className='custom__button'
            initial={{ y: '-100px', opacity: 0}}
            animate={isContainerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.4 }}
          >
            Know More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
