import React from 'react';
import './Booking.css';
import {images} from '../../constants';

const Booking = () => (
    <div className='app__booking app__bg app__wrapper section__padding'>
        <div className='app__wrapper_img'>
            <img src={images.booking} alt="" />
        </div>

        <div className="app__booking-form">
            <form>
                <div className="form-inline">
                    <div className="form-group">
                        <label htmlFor="firstName" className='p__cormorant'>First Name</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className='p__cormorant'>Last Name</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="phone" className='p__cormorant'>Phone</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-inline">
                    <div className="form-group">
                        <label htmlFor="date" className='p__cormorant'>Date</label>
                        <input type="date" id="date" name="date" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numPeople" className='p__cormorant'>Number of People</label>
                        <input type="number" id="numPeople" name="numPeople" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message" className='p__cormorant'>Message</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit" className="custom__button">Book Now</button>
            </form>
        </div>
    </div>
);

export default Booking;