import React from 'react';
import Thumbnail from '../../../Images/Thumbnail/photographer 2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='containers'>
            <img style={{ width: '100%' }} src={Thumbnail} alt="" />

            <div>
                <h1 className='centers text-5xl font-bold text-white-500'>Stylist Photographer</h1>
            </div>
        </div>
    );
};

export default Banner;