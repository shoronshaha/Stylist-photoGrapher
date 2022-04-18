import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const { serviceId } = useParams();
    return (
        <div>
            <h1>welcome to details: {serviceId}</h1>

            <button value="button" className="px-4 py-2 rounded bg-orange-400 text-white hover:bg-orange-600 my-4 w-50" id="whoobe-ibemp">checkout</button>
        </div>
    );
};

export default ServiceDetails;