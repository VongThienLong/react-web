import React, {useRef} from 'react';
import { motion , useInView} from 'framer-motion';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 1 });

  return (
    <div className='app__bg app__wrapper section__padding' ref={ref}>
      
      <motion.div
        className='app__wrapper_img app__wrapper_img-reverse'
        initial={{ x: '100vw', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: 'tween', duration: 1 }}
      >
        <img src={images.chef} alt="chef" />
      </motion.div>

      <motion.div
        className='app__wrapper_info'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <motion.div
          initial={{ y: '-50vw', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
        >
          <SubHeading title="Chef's word" />
        </motion.div>

        <motion.h1
          className='headtext__cormorant'
          initial={{ x: '-100vw', opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: 'tween', duration: 1, delay: 0.5 }}
        >
          What We Believe In
        </motion.h1>

        <motion.div
          className='app__chef-content'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className='app__chef-content_quote'
            initial={{ x: '-100vw', opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.7 }}
          >
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </motion.div>

          <motion.p
            className='p__opensans'
            initial={{ y: '100vw', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 1 }}
          >
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </motion.p>
        </motion.div>

        <motion.div
          className='app__chef-sign'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', duration: 1, delay: 1.2 }}
        >
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="chef sign" />
        </motion.div>
      </motion.div>
    </div>
)};

export default Chef;
