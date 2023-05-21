import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../gallery/Gallery';
import Marquee from './marquee';
import Reacttab from './tabs/Reacttab';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Reacttab></Reacttab>
            <Marquee></Marquee>
            
        </div>
    );
};

export default Home;