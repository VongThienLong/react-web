import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import framer-motion and useInView
import './Laurels.css';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';

// Award Card Component with animation
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <motion.div
    className='app__laurels_awards-card'
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: 'tween', duration: 1.2, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <img src={imgUrl} alt="award img" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </motion.div>
);

const Laurels = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <div className='app__bg app__wrapper section__padding' id='awards' ref={ref}>
      
      <motion.div
        className='app__wrapper_info'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ type: 'tween', duration: 0.8 }}
      >
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: 'tween', duration: 0.8, delay: 0.1 }}
        >
          <SubHeading title='Awards & Recognition' />
        </motion.div>

        <motion.h1
          className='headtext__cormorant'
          initial={{ y: '50vw', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: 'tween', duration: 0.8, delay: 0.2 }}
        >
          Our Laurels
        </motion.h1>

        <motion.div
          className='app__laurels_awards'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ type: 'tween', duration: 1, delay: 0.4 }}
        >
          {data.awards.map((award, index) => (
            <AwardCard award={award} key={award.title + index} />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className='app__wrapper_img'
        initial={{ opacity: 0, x: '100vw' }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: 'tween', duration: 1, delay: 0.5 }}
      >
        <img src={images.laurels} alt="laurels" />
      </motion.div>
    </div>
  );
};

export default Laurels;
