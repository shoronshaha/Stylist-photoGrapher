import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='flex justify-center my-4 '>
                <div style={{ height: "2px" }} className='bg-blue-700 w-[100px] mt-3'></div>
                <p className='px-2'>or</p>
                <div style={{ height: "2px" }} className='bg-blue-700 w-[100px] mt-3'></div>
            </div>
            <div>
                <button value="button" className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700 my-4 w-full" id="whoobe-ibemp">Google Sign In</button>
                <button value="button" className="px-4 py-2 rounded bg-indigo-400 text-white hover:bg-indigo-700 my-4 w-full" id="whoobe-ibemp">Github Sign In</button>
                <button value="button" className="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 my-4 w-full" id="whoobe-ibemp">Facebook Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;