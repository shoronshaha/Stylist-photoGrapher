import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='w-full top-0 bg-purple-800 px-12 py-4 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-3xl text-white' to='/'>
                    Stylist PhotoGrapher
                </Link>
            </div>
            <div className='flex font-black gap-2 text-[16px]'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/checkout'>CHECKOUT</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
                {
                    user ?
                        <button className='text-white px-2 rounded bg-orange-400 hover:bg-orange-600' onClick={handleSignOut}>Sign-Out</button>
                        :
                        <CustomLink to='/login'>LOGIN</CustomLink>
                }
            </div>
        </div>
    );
};

export default Header;