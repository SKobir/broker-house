import React from 'react';
import './NotFound.css'
import error from '../../../images/error.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={error} alt="" />
        </div>
    );
};

export default NotFound;