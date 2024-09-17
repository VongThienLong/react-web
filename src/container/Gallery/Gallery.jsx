import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Gallery.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { threshold: 0.2 });

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='app__gallery section__padding flex__center' ref={containerRef}>
      
      <motion.div
        className='app__gallery-content'
        initial={{ opacity: 0, x: '-50vw' }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: 'tween', duration: 0.8 }}
      >
        <SubHeading title='instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </motion.div>
      
      <motion.div
        className='app__gallery-images'
        initial={{ opacity: 0, y: '15vh' }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'tween', duration: 1 }}
      >
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <motion.div
              className='app__gallery-images_card flex__center'
              key={'gallery_image' + index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'tween', duration: 0.6, delay: index * 0.3 + 0.5 }}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon' />
            </motion.div>
          ))}
        </div>

        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
