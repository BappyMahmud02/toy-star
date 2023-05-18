import React from 'react';
import background from '../../../assets/background.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen" >
            <img src={background} alt="" />
            <div className=" bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-[80px] text-cyan-800 font-extrabold">Toy Stars</h1>
                    <p className="mb-5 text-[20px] text-cyan-700 font-bold ">“The Toys” consists of a total of 33 lines, grouped into a single stanza. Patmore shifts from one idea to the other by using end-stopped lines. He uses both the alternative rhyme scheme and the rhyming couplet form. The first two lines of each section begin with a rhyming couplet. .</p>
                    <button className="btn btn-warning font-bold text-cyan-800">Kids Toy Zone</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;