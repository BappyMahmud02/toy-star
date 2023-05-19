import React from 'react';
import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/picture.1.webp'
import logo2 from '../../../assets/picture.2.webp'
import logo3 from '../../../assets/picture.3.png'
import logo4 from '../../../assets/picture.4.png'
import logo5 from '../../../assets/picture.5.webp'
import logo6 from '../../../assets/picture-6.png'
import logo7 from '../../../assets/pic-7.png'
import logo8 from '../../../assets/pic-8.png'
import logo9 from '../../../assets/pic-9.png'

const marquee = () => {
    return (
        <div className=''>
            <Marquee>
                {/* <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo8} alt="" />
                <img src={logo9} alt="" /> */}
                <p className='text-4xl font-extrabold text-stone-700 my-12'>I am a web developer (MERN), If you want you can hire me. </p>
            </Marquee>
        </div>
    );
};

export default marquee;