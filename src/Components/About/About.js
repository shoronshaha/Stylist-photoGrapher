import React from 'react';
import profile from '../../Images/profile.jpg'

const About = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center m-10'>
                <div className='m-10'>
                    <h1 className='text-6xl text-orange-500 font-bold'>Shoron <span className='text-blue-400'>Shaha</span></h1>
                    <p className='mt-5 text-[30px] text-purple-500 font-bold'>Junior Developer</p>
                </div>
                <div className=''>
                    <img className='w-[300px] rounded-full' src={profile} alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;