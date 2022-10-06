import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const carts=useLoaderData();
    console.log(carts)
    const{id,discountedTotal,products,total,totalProducts}=carts;

    
    return (
        <div>
           <h1>{products[0].title}</h1>
            <h2>{totalProducts}</h2>
            <h3>{discountedTotal}</h3>
            <p>{total}</p>
        </div>
    );
};

export default PostDetails;