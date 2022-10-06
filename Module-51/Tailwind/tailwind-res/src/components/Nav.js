import React from 'react';
const Nav = ({path,Name}) => {
    
    return (
        <div>
            
            <li className='mr-6 my-6 bg-slate-600   w-full text-center text-white hover:bg-slate-400 rounded-md '>
            <a href={path}>{Name}</a>
            </li>
          
        </div>
    );
};

export default Nav;