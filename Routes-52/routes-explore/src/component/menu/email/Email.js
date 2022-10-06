import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Email.css'

const Email = () => {
    const post=useLoaderData()

    const {id,title,body}=post;
    return (
        <div className='post'>
            <p>Id: {id}</p>
            <h1>Title: {title}</h1>
            <p>body: {body}</p>

        </div>
    );
};

export default Email;