import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckIcon className='h-4 w-4 bg-green-600 text-white rounded-full'></CheckIcon>
            <p className='ml-4'>{feature}</p>
        </div>
    );
};

export default Feature;