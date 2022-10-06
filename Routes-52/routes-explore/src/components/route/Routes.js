import React from 'react';
import { Link } from 'react-router-dom';

const Routes = () => {
    return (
        <div className='menu'>
            <h1>yeaaaaa</h1>
            <Link to='/link'>Home</Link> <br/>
            <Link to='/Link2'>about</Link> <br/>
            <a href="link">link</a>
        </div>
    );
};

export default Routes;