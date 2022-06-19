import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;


    if (error) {
            errorElement = <p className='text-danger'>Error: {error.message}</p>
    
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div >
            <div className='d-flex align-items-center'>
                <div className='bg-secondary w-50 line'></div>
                <p className='mt-2 px-2'>OR</p>
                <div className='bg-secondary w-50 line'></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-secondary'>Google SignIn</button>
            </div>
        </div>
    );
};

export default SocialLogin;