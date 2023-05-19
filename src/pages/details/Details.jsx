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
                    <h2 className="card-title">Toy Name: {name}</h2>
                    <h2 className="card-title">Seller Name: {sellerName}</h2>
                    <h2 className="card-title">Seller Email: {sellerEmail}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <h2 className="card-title">Available Quantity: {quantity}</h2>
                    <h2 className="card-title">Detail description: {sellerEmail}</h2>
                    
                    <div className="card-actions mt-6">
                        <Link to='/alltoy'><button className="btn btn-block btn-warning">Back to page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;