import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../albumPost/Post';
import './Albums.css'

const Albums = () => {
    const albums=useLoaderData()

    return (
        <div>
           { albums.map(album => <Post album={album} id={album.id}></Post> )}
        </div>
    );
};

export default Albums;