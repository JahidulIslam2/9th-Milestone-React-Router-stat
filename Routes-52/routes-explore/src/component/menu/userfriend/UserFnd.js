import React from 'react';
import { Link } from 'react-router-dom';
import './UserFriend.css';

const UserFnd = (props) => {
    const{name,username,email,id}=props.friend;

    return (
        //email dynamic id ,make url dynaminc
        <div className='info'>
            <h2>Name: {name}</h2>
            <h3>user Name:{username}</h3>
            <p>Email: <Link to={`/email${id}`}>{email}</Link></p>           
        </div>
    );
};

export default UserFnd;