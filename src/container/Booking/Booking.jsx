import React from 'react';
import { motion } from 'framer-motion';
import './Booking.css';
import { images } from '../../constants';

const Booking = () => (
    <div className='app__booking app__bg app__wrapper section__padding'>
        <motion.div
            className='app__wrapper_img'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{amount: 0.5}}
        >
            <img src={images.booking} alt="" />
        </motion.div>

        <motion.div
            className="app__booking-form"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{amount: 0.5}}
        >
            <form>
                <div className="form-inline">
                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <label htmlFor="firstName" className='p__cormorant'>First Name</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </motion.div>
                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <label htmlFor="lastName" className='p__cormorant'>Last Name</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </motion.div>
                </div>

                <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <label htmlFor="phone" className='p__cormorant'>Phone</label>
                    <input type="tel" id="phone" name="phone" required />
                </motion.div>

                <div className="form-inline">
                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <label htmlFor="date" className='p__cormorant'>Date</label>
                        <input type="date" id="date" name="date" required />
                    </motion.div>
                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <label htmlFor="numPeople" className='p__cormorant'>Number of People</label>
                        <input type="number" id="numPeople" name="numPeople" required />
                    </motion.div>
                </div>

                <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <label htmlFor="message" className='p__cormorant'>Message</label>
                    <textarea id="message" name="message"></textarea>
                </motion.div>

                <motion.button
                    type="submit"
                    className="custom__button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    Book Now
                </motion.button>
            </form>
        </motion.div>
    </div>
);

export default Booking;
