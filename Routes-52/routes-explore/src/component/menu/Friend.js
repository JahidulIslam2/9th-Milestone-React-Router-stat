import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserFnd from './userfriend/UserFnd';


const Friend = () => {
    const friends=useLoaderData();
    return (
        <div> 
            {
                friends.map((friend,key)=> <UserFnd friend={friend} key={key}></UserFnd>) 
            }
        </div>
    );
};

export default Friend;