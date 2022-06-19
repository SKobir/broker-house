import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div >
            <h2 className='d-flex justify-content-center mb-5'>This is my Blogs</h2>
            <div className='blogs'>
                <div className='blog'>
                    <h3>Difference between authorization and authentication?</h3>
                    <p>Ans: Determines whether users are who they claim to be. Determines what users can and cannot access.
                        Challenges the user to validate credentials (for example, through passwords, answers to security questions, or facial recognition).	Verifies whether access is allowed through policies and rules.
                        Usually done before authorization	Usually done after successful authentication.
                        Generally, transmits info through an ID Token.	Generally, transmits info through an Access Token.
                        Generally governed by the OpenID Connect (OIDC) protocol.	Generally governed by the OAuth 2.0 framework.
                        Example: Employees in a company are required to authenticate through the network before accessing their company email.	Example: After an employee successfully authenticates, the system determines what information the employees are allowed to access.</p>
                </div>
                <div className='blog'>
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Ans: Firebase helps you build and run successful apps.Backed by Google, loved by developers.Accelerate app development with fully managed backend infrastructure.Learn more today.Accelerate Development.It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p>
                </div>
                <div className='blog'>
                    <h3>What other services does firebase provide other than authentication?</h3>
                    <p>There are many services which Firebase provides, Most useful of them are:

                        Cloud Firestore,
                        Cloud Functions,
                        Hosting,
                        Cloud Storage,
                        Google Analytics,
                        Predictions,
                        Cloud Messaging,
                        Dynamic Links,
                        Remote Config.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;