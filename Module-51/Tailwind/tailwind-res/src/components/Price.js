import React from 'react';
import Feature from './feature/Feature';
const Price = ({price,amount,features}) => {
  
    return (
        <div>
            <div className='bg-amber-700 h-80 w-64 text-center font-semibold rounded-md p-6 shadow-gray-900 shadow-lg my-12'>
              <h2>
                <span className='text-4xl font-semibold text-white '>{amount}</span> <small className='text-base'>/mon</small><br/>
                <span className='text-2xl text-zinc-800 font-bold'>{price}</span>
              </h2>
            <div className='mt-6'>
            {
                features.map((feature,id)=> <Feature feature={feature} id={id}></Feature>)
            }
            <button className='bg-blue-800 h-9 rounded-sm shadow-lg shadow-red-900 w-full mt-12 text-white active:bg-slate-900'>Buy Now</button>
            </div>
            </div>
        </div>
    );
};

export default Price;