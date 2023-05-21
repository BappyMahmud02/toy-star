import React, { useState } from 'react';
import './Reacttab.css';
const Reacttab = () => {

    const [toggle, setToggle] = useState(1)

    function uptateToggle(id) {
        setToggle(id)
    }
    return (
        <div className='flex items-center '>
            <div className='tab my-12 '>
                <ul className='flex gap-12 text-4xl'>
                    <li className='' onClick={() => uptateToggle(1)}>Car</li>
                    <li className='' onClick={() => uptateToggle(2)}>bus</li>
                    <li className='' onClick={() => uptateToggle(3)}>truck</li>
                </ul>
                <div className={toggle === 1 ? 'show-content' : 'content'}>
                    <h2 className='text-2xl p-5'>car</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorem omnis labore est natus et assumenda. Sint aliquam laboriosam, nisi a praesentium sed illo, commodi iste reprehenderit, eaque obcaecati vitae.</p>
                </div>
                <div className={toggle === 2 ? 'show-content' : 'content'}>
                    <h2 className='text-2xl p-5'>bus</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorem omnis labore est natus et assumenda. Sint aliquam laboriosam, nisi a praesentium sed illo, commodi iste reprehenderit, eaque obcaecati vitae.</p>
                </div>
                <div className={toggle === 3 ? 'show-content' : 'content'}>
                    <h2 className='text-2xl p-5'>truck</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorem omnis labore est natus et assumenda. Sint aliquam laboriosam, nisi a praesentium sed illo, commodi iste reprehenderit, eaque obcaecati vitae.</p>
                </div>
            </div>
        </div>
    );
};

export default Reacttab;