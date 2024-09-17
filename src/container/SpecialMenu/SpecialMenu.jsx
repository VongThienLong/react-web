import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

const SpecialMenu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 1 });

  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu That Fits Your Palette' />
        <motion.h1
          className='headtext__cormorant'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ type: 'tween', duration: 1 }}
        >
          Today's Special
        </motion.h1>
      </div>

      <div className='app__specialMenu-menu' ref={ref}>
        <motion.div
          className='app__specialMenu-menu_wine'
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: 'tween', duration: 1 }}
        >
          <motion.p
            className='app__specialMenu-menu_heading'
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.2 }}
          >
            Wine & Beer
          </motion.p>
          <div className='app__specialMenu-menu_items'>
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt='menu img' />
        </div>

        <motion.div
          className='app__specialMenu-menu_cocktail'
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: 'tween', duration: 1 }}
        >
          <motion.p
            className='app__specialMenu-menu_heading'
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'tween', duration: 1, delay: 0.2 }}
          >
            Cocktails
          </motion.p>
          <div className='app__specialMenu-menu_items'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div style={{ marginTop: '15px' }}>
        <motion.button
          type='button'
          className='custom__button'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ type: 'tween', duration: 1, delay: 0.4 }}
        >
          View More
        </motion.button>
      </div>
    </div>
  );
};

export default SpecialMenu;
