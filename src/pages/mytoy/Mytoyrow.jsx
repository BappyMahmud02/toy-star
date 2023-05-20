import React from 'react';
import Addtoy from '../addtoy/Addtoy';

const Mytoyrow = ({ toy, handleDelete, handleConfirm }) => {
    const { _id, name, price, sellerName, rating, quantity, sellerEmail, category, photo, status } = toy;

   
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>

            <div className="avatar">
                <div className="rounded w-12 h-12">
                    {
                        photo &&
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    }
                </div>
            </div>
            <td>
                <div>
                    <div className="font-bold">{sellerName}</div>

                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>

                </div>
            </td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
               
               {
                status === 'confirm' ? <span className='font-bold text-primary'>Updated</span> :
                <button onClick={() => handleConfirm(_id)} className="btn btn-warning btn-xs font-bold">Update</button>
               }
                <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-xs font-bold ms-4">Delete</button>
               
            </th>
        </tr>
    );
};

export default Mytoyrow;