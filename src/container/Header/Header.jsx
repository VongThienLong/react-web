import React from 'react';

import './Header.css';
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper app__banner' id='home'>
    <div className='app__wrapper_banner'>
      <div className='app__wrapper_info app__info'>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
    </div>
  </div>
);

export default Header;
