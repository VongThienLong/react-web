import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';


import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className = "app__navBar">
    <div className='app__navBar-logo'>
      <img src={images.gericht} alt="app logo"/>
    </div>

    <ul className='app__navBar-links'>
      <li className='p__opensans'><Link to="/">Home</Link></li>
      <li className='p__opensans'><Link to="/about">About</Link></li>
      <li className='p__opensans'><Link to="/menu">Menu</Link></li>
      <li className='p__opensans'><Link to="/contact">Contact</Link></li>
    </ul>

    <div className='app__navBar-login'>
      <Link to="/login" className='p__opensans'>Log In / Register</Link>
      <div />
      <Link to="/booking" className='p__opensans'>Book A Table</Link>
    </div>

    <div className='app__navBar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {setToggleMenu(true)}}/>
      
      {toggleMenu && (
        <div className='app__navBar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => {setToggleMenu(false)}}/>
        <ul className='app__navBar-smallscreen_links'>
          <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to="/">Home</Link></li>
          <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to="/about">About</Link></li>
          <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to="/menu">Menu</Link></li>
          <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to="/contact">Contact</Link></li>
          <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to="/login">Login / Register</Link></li>
          <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to="/booking">Make A Reservation</Link></li>
        </ul> 
      </div>
      )}
    </div>
  </nav>
  );
}

export default Navbar;
