import React, { useState } from 'react';
import Nav from './Nav';
import { Bars4Icon,XCircleIcon } from '@heroicons/react/24/solid'


const Responsive = () => {

    const navData=[
        {id:1, Name:'Home', path:'/Home'},
        {id:2, Name:'Menu', path:'/Home'},
        {id:3, Name:'Details', path:'/Home'},
        {id:4, Name:'Contact', path:'/Home'},
        {id:5, Name:'More', path:'/Home'}
      ];

      const[open,setopen]=useState(false)

    return (
      <nav className='bg-slate-600 h-16 w-full'>
          <div className='h-8 w-8 md:hidden' onClick={()=>{setopen(!open)}}>
            {
            open ? <XCircleIcon/> : <Bars4Icon/>
            }
             </div>

            <ul className={`md:flex justify-center md:static w-full items-center absolute duration-300 ease-linear ${open ? "top-9" : 'top-[-120px]'}`}>
        {
         navData.map(item=> <Nav path={item.path} Name={item.Name} key={item.id}></Nav>)
        }
        </ul>
      </nav>
    );
};

export default Responsive;