import React, { useEffect, useState } from 'react';
import Alltoyrow from './Alltoyrow';


const Alltoy = () => {
    const [allToys, setallToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setallToys(data))
    }, [])

    return (
        <div >
            <h2>toys: {allToys.length}</h2>
           
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(alltoy => <Alltoyrow
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