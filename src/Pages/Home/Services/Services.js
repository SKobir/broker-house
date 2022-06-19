import React from 'react';
import './Services.css'
import service1 from '../../../images/image01.png';
import service2 from '../../../images/image02.png';
import service3 from '../../../images/image03.png';
import Service from '../Service/Service';


const services = [
    {
        id: 1,
        name: 'Buying and selling real estate',
        price: 1500,
        description: "Buy various real estate at a reasonable price that you want to sell. And if you want to buy real estate, we'll be able to introduce you to properties that you'll love.",
        img: service1,
    },
    {
        id: 2,
        name: 'Real estate brokerage',
        price: 1000,
        description: "We connect our customers in a win-win relationship. Leave all the hassle of real estate transactions to us.",
        img: service2,
    },
    {
        id: 3,
        name: 'Real estate rental business',
        price: 2500,
        description: "Using our network, we are looking for the property you want. We will help you with your wonderful life starting from now on. Let us know what you want.",
        img: service3,
    },
]

const Services = () => {
    return (
        <div id='services' className='container' >
            <div className='row'>
                <h2 className='text-center text-primary mt-5'>Our Services:</h2>
                <div className='services-container'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;