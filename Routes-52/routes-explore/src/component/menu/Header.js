import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (
        <div>

            <nav className='nav'>
                <NavLink className={({isActive})=>isActive ? 'active' : undefined} 
                to='/main'>Main</NavLink>
                <NavLink to='/friend'>Friend</NavLink>
                <NavLink to='/album'>Album</NavLink>
                <NavLink to='/support'>Support</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/settings'>Next Page</NavLink>
            </nav>
            <h1>Click Any Button Please:---------------</h1>
        </div>
    );
};

export default Header;