import React from 'react';
import logo1 from '../../../assets/picture.1.webp'
import logo2 from '../../../assets/picture.2.webp'
import logo3 from '../../../assets/picture.3.png'
import logo4 from '../../../assets/picture.4.png'
import logo5 from '../../../assets/picture.5.webp'
import logo6 from '../../../assets/picture-6.png'

const Gallery = () => {
    return (
        <>
        <div>
            <h2 className='font-extrabold text-center text-5xl text-amber-400'>Gallery Section</h2>
            <h2 className='font-bold mt-4 text-center text-2xl text-amber-400'>our kids will be very happy</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6  my-12'>
            <div className="card w-96 bg-base-100 shadow-xl border border-yellow-400">
                <figure className="px-10 pt-10">
                    <img src={logo1}alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">JEEP</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <button className="btn btn-outline  btn-warning">Product Details</button>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border border-yellow-400">
                <figure className="px-10 pt-10">
                    <img src={logo2}alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Police Car</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <button className="btn btn-outline  btn-warning">Product Details</button>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border border-yellow-400">
                <figure className="px-10 pt-10">
                    <img src={logo3}alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Pink JEEP</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <button className="btn btn-outline  btn-warning">Product Details</button>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border border-yellow-400">
                <figure className="px-10 pt-10">
                    <img src={logo4}alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Constructor Car</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <button className="btn btn-outline  btn-warning">Product Details</button>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border border-yellow-400">
                <figure className="px-10 pt-10">
                    <img src={logo5}alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Truck</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <button className="btn btn-outline  btn-warning">Product Details</button>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border border-yellow-400">
                <figure className="px-10 pt-10">
                    <img src={logo6}alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Lamborgini</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <button className="btn btn-outline  btn-warning">Product Details</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Gallery;