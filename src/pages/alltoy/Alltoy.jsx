import React, { useEffect, useState } from 'react';
import Alltoyrow from './Alltoyrow';


const Alltoy = () => {
    const [allToys, setallToys] = useState([])
    const [searchText, setSearchText] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setallToys(data))
    }, [])

    
    
    const handleSearch = () => {
        fetch(`http://localhost:5000/toysearchByTitle/${searchText}`)
        .then(res => res.json())
        .then(data => {
            setallToys(data);
        })
    }
    return (
        <div >
            <h2 className='text-3xl font-bold text-center mb-12'>All Toys Here</h2>

            <div className='text-center mb-6'>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type='text'
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                /> {" "}
                <button onClick={handleSearch} className="btn btn-outline btn-warning">Search</button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>

                            
                            <th className='text-xl text-purple-600 font-extrabold'>Seller Name</th>
                            <th className='text-xl text-purple-600 font-extrabold'>Toy Name</th>
                            <th className='text-xl text-purple-600 font-extrabold'>Sub-category</th>
                            <th className='text-xl text-purple-600 font-extrabold'>Price</th>
                            <th className='text-xl text-purple-600 font-extrabold'>Quantity</th>
                            <th className='text-xl text-purple-600 font-extrabold'>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            allToys.slice(0, 20).map(alltoy => <Alltoyrow
                                key={allToys._id}
                                alltoy={alltoy}
                            ></Alltoyrow>)

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Alltoy;