import React from 'react';
import { motion} from 'framer-motion';
import './MenuItem.css';

const MenuItem = ({ title, price, tags, index }) => {
  return (
    <motion.div
      className='app__menuItem'
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{amount: 0.5}}
      transition={{ type: 'tween', duration: 0.5, delay: index * 0.2 }}  
    >
      <motion.div
        className='app__menuItem-head'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{amount: 0.5}}
        transition={{ type: 'tween', duration: 0.5, delay: index * 0.2 + 0.1 }}  
      >
        <div className='app__menuItem-name'>
          <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
        </div>

        <div className='app__menuItem-dash'></div>

        <div className='app__menuItem-price'>
          <p className='p__cormorant'>{price}</p>
        </div>
      </motion.div>

      <motion.div
        className='app__menuItem-sub'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{amount: 0.5}}
        transition={{ type: 'tween', duration: 0.5, delay: index * 0.2 + 0.2 }}  
      >
        <p className='p__opensans' style={{ color: '#AAA' }}>{tags}</p>
      </motion.div>
    </motion.div>
  );
};

export default MenuItem;
