import React from 'react';
import Price from './Price';

const PriceTag = () => {
    const priceRange=[
        {id:1 ,Price:'Free', Amount: 0, feature:[
            '3 Active Project',
            'Upto 10 Blocks',
            'Team Management',
            'Api Integretion'
        ]},
        {id:2 ,Price:'Medium', Amount: 590,feature:[
            '3 Active Project',
            'Upto 10 Blocks',
            'Team Management',
            'Api Integretion'
        ]},
        {id:3 ,Price:'Premium', Amount: 999,feature:[
            '3 Active Project',
            'Upto 10 Blocks',
            'Team Management',
            'Api Integretion'
        ]}
    ]
    return (
        <div>
            <h1 className='bg-neutral-500 h-24 text-center text-6xl font-serif font-semibold'>Choose your Option</h1>
        <div className='md:flex m-6 justify-between'>
            {
                priceRange.map(item => <Price price={item.Price} amount={item.Amount} key={item.id} features={item.feature}></Price>)
            }
        </div>
        </div>
    );
};

export default PriceTag;