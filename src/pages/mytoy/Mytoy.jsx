import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/Authprovider';
import Mytoyrow from './Mytoyrow';
import Addtoy from '../addtoy/Addtoy';

const Mytoy = () => {
    const { user } = useContext(AuthContext)
    const [addToy, setAddToy] = useState([])

    const url = `http://localhost:5000/toy/${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddToy(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('You want to delete');
        if(proceed){
            fetch(`http://localhost:5000/toy/${id}`, {
                method:'DELETE',
                
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted succesfull')
                    const remaining = addToy.filter(addToy => addToy._id !==id)
                    setAddToy(remaining);
                }
            })
        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/toy/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update state
                const remaining = addToy.filter(toy => toy._id !==id);
                const updated = addToy.find(toy => toy._id === id);
                updated.status = 'confirm'
                const newAddToy = [updated, ...remaining];
                setAddToy(newAddToy)
            }
        })
    }
    return (
        <div>
            <h2>your add toy: {addToy.length}</h2>

            <div className="overflow-x-auto w-full my-12">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th className='text-xl text-purple-600 font-extrabold'>Picture</th>
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
                            addToy.map(toy => <Mytoyrow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></Mytoyrow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Mytoy;



