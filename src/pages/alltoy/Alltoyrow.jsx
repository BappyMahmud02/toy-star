import React from 'react';
import { Link } from 'react-router-dom';

const Alltoyrow = ({ alltoy }) => {
    const { _id, name, price, sellerName, rating, quantity, sellerEmail, category } = alltoy
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
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
                <Link to={`/details/${_id}`}><button className="btn btn-warning btn-xs font-bold">View details</button></Link>
            </th>
        </tr>
    );
};

export default Alltoyrow;