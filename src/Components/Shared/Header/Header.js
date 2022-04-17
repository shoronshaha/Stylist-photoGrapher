import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='w-full top-0 bg-purple-800 px-12 py-4 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-3xl text-white' to='/'>
                    Stylist PhotoGrapher
                </Link>
            </div>
            <div className='flex font-black gap-2 text-[16px]'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/dashboard'>CHECKOUT</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
                <CustomLink to='/login'>LOGIN</CustomLink>
            </div>
        </div>
    );
};

export default Header;