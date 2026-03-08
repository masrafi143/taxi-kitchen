import { CookingPot, Heater, ScrollText } from 'lucide-react';
import React from 'react';

const States = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto gap-5 py-10'>
            <div className="flex justify-between p-5 border-4 border-dotted rounded-2xl border-amber-500 ">
                <ScrollText className="animate-pulse" color="#fcb700" size={100} />
                <div className='text-center'>
                    <h2 className='text-2xl'>Current Orders</h2>
                    <h2 className='text-5xl font-bold'>0</h2>
                </div>
            </div>
            <div className="flex justify-between p-5 border-4 border-dotted rounded-2xl border-amber-500 ">
                <Heater className="animate-pulse" color="#fcb700" size={100} />
                <div className='text-center'>
                    <h2 className='text-2xl'>Current Cooking</h2>
                    <h2 className='text-5xl font-bold'>0</h2>
                </div>
            </div>
            <div className="flex justify-between p-5 border-4 border-dotted rounded-2xl border-amber-500 ">
                <CookingPot className="animate-pulse" color="#fcb700" size={100} />
                <div className='text-center'>
                    <h2 className='text-2xl'>Order Ready</h2>
                    <h2 className='text-5xl font-bold'>0</h2>
                </div>
            </div>
        </div>
    );
};

export default States;