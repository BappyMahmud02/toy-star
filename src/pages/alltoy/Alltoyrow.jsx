import React from 'react';

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
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">View details</button>
            </th>
        </tr>
    );
};

export default Alltoyrow;