import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
        <div className='service'>
            <img src={img}/>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <Link to='/checkout'><button className='btn btn-primary'>Book</button></Link>
        </div>
    );
};

export default Service;