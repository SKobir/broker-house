import React from 'react';
import profile from '../../images/Profile.jpg';

const About = () => {
    return (
        <div >
            <h1 className='d-flex justify-content-center my-5'>About Me</h1>
            <div className='d-flex justify-content-center'>
                <div className='text-center px-5 w-50'>
                    <img src={profile} style={{ height: '300px' }} alt="" />
                    <p>Ever since I was thining about entering my professionla life I have throught that I would enter my professional life as a web developer. The reason is that I already like web developing. And I also know that in order to be proficient at somthing, you have to work hard. That's why I am willing to work as hard as I can to become a web developer.</p>
                </div>
            </div>

        </div>
    );
};

export default About;