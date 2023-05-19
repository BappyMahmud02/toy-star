import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../gallery/Gallery';
import Marquee from './marquee';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Marquee></Marquee>
            
        </div>
    );
};

export default Home;