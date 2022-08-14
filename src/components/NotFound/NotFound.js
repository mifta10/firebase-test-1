import React from 'react';
import Nav from '../Home/Nav/Nav';

const NotFound = () => {
    return (
        <div>
            <div className="bgMain text-center" style={{ color: '#fff', height: '100vh' }}>
            <Nav/>
            <div className="blog-content">
                <h1>Page is not available</h1>
            </div>
        </div>
        </div>
    );
};

export default NotFound;