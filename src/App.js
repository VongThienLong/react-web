import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Laurels, SpecialMenu, About, Menu, ContactUs,  Login, Booking, GoogleMap } from './container';
import { Hero, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

const HomePage = () => (
  <div>
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Laurels />
    <Gallery />
    <FindUs />
  </div>
);

const AboutPage = () => (
  <div>
    <Hero heroText="About Us" />
    <About />
  </div>
);

const MenuPage = () => (
  <div>
    <Hero heroText="Our Menu" />
    <Menu />
  </div>
);

const ContactPage = () => (
  <div>
    <Hero heroText="Contact Us" />
    <ContactUs />
    <GoogleMap />
  </div>
);

const LoginPage = () => (
  <div>
    <Login />
  </div>
);

const BookingPage = () => (
  <div>
    <Hero heroText={"Make A Reservation"} />
    <Booking />
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
