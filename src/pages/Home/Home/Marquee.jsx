import React from 'react';
import Marquee from "react-fast-marquee";

const marquee = () => {
    return (
        <div className='mt-8'>
            <Marquee>
                
                <p className='text-4xl font-extrabold text-stone-700 my-12'>This is a toy shop , If you want you can bye any product from this website. </p>
            </Marquee>
        </div>
    );
};

export default marquee;