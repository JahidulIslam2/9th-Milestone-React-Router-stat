import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({album,id}) => {
    const {title}=album;
    const navigate=useNavigate();
    const MoreHandler=()=>{

        navigate(`/post/${id}`)
    }
    return (
        <div>
            <h1>{title}</h1>
            <Link to={`/post/${id}`}>
            <button>Show More</button>
            </Link>
            <button onClick={MoreHandler}>More</button>
            <Link to={`/post/${id}`}>use link go More </Link>
        </div>
    );
};

export default Post;