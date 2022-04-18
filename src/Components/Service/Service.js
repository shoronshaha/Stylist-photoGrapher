import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, hireMe, img, price, title } = service;
    const { workTime, light, clickPhoto, retouch, print, video } = service.description
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/checkout/${title}`);

    }

    return (
        <div>
            <div className="flex justify-center mt-6">

                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <h5 className="text-purple-700 font-bold  text-3xl mb-5">{title}</h5>
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img style={{ width: '100%', height: '250px' }} className="rounded-t-lg" src={img} alt="" />
                    </a>
                    <div className="p-6">
                        <p className='text-xl mb-2'>Price:$ {price}</p>
                        <p className="text-gray-700 text-base mb-4">
                            {hireMe}
                        </p>
                        <div className='flex justify-center my-4 '>
                            <div style={{ height: "2px" }} className='bg-blue-700 w-[100px] mt-3'></div>
                            <p className='px-2'>Description</p>
                            <div style={{ height: "2px" }} className='bg-blue-700 w-[100px] mt-3'></div>
                        </div>
                        <div className='text-left text-[1vw] my-2'>
                            <p><span className='font-bold'>Work Time:</span>{workTime}</p>
                            <p><span className='font-bold'>Light: </span>{light}</p>
                            <p><span className='font-bold'>ClickPhoto:</span> {clickPhoto}</p>
                            <p><span className='font-bold'>Retouch:</span> {retouch}</p>
                            <p><span className='font-bold'>Print:</span> {print}</p>
                            <p><span className='font-bold'>video:</span> {video}</p>
                        </div>
                        <button onClick={() => navigateToServiceDetail(id)} type="button" className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Check-Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;