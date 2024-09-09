import React from 'react';
import './GoogleMap.css';

const GoogleMap = () => (
    <div className='app__googleMap app__wrapper section__padding'>
        <iframe 
            title='Google Map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7878689196327!2d106.69744551029198!3d10.827539589279835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBWxINuIExhbmcgLSBDxqEgc-G7nyBjaMOtbmg!5e0!3m2!1svi!2s!4v1725867337890!5m2!1svi!2s" 
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
)
    
export default GoogleMap;