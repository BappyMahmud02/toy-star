import React, { useEffect, useState } from 'react';


const Alltoy = () => {
    const [allToys, setallToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setallToys(data))
    }, [])
    const{_id, name,price,sellerName, rating, quantity, sellerEmail,category} = allToys
    return (
        <div >
            <h2>toys: {allToys.length}</h2>
            <div className="overflow-x-auto my-12">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            allToys.map(tr => <td
                            key={allToys._id}
                            tr={tr}
                            ></td>)
                        }


                        {/* <tr>
                            <th>1</th>
                            <td>{sellerName}</td>
                            <td>{name}</td>
                            <td>{category}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <button>View details</button>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alltoy;