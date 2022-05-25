import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className="notFound-container">
                <img src="./images/notFound.svg" alt="" />
                {/* <h2>404</h2> */}
                {/* <p>The page you are looking for is not exist</p> */}
            </div>
        </div>
    );
};

export default NotFound;