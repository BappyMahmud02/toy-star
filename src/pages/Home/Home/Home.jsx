import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../gallery/Gallery';
import Marquee from './marquee';
import { Tab } from 'react-tabs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Marquee></Marquee>
            <Tab></Tab>
            
        </div>
    );
};

export default Home;