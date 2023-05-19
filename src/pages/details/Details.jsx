import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    console.log(details);

    const { _id, name, price, sellerName, rating, quantity, sellerEmail, category, photo } = details
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl my-12 border border-cyan-500">
                <figure><img className='p-6 ' src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> <span className='text-2xl font-bold'>Toy Name:</span> {name}</h2>
                    <h2 className="card-title"> <span className='text-2xl font-bold'>Seller Name:</span> {sellerName}</h2>
                    <h2 className="card-title"> <span className='text-2xl font-bold'>Seller Email:</span> {sellerEmail}</h2>
                    <h2 className="card-title"> <span className='text-2xl font-bold'>Price:</span> {price}</h2>
                    <h2 className="card-title"> <span className='text-2xl font-bold'>Available Quantity:</span> {quantity}</h2>
                    <h2 className="card-title"> <span className='text-2xl font-bold'>Detail description:</span> {sellerEmail}</h2>
                    
                    <div className="card-actions mt-6">
                        <Link to='/alltoy'><button className="btn btn-block btn-warning">Back to page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;