import React from 'react';
import Swal from 'sweetalert2';

const Addtoy = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value;

        const information = { name, photo, price, sellerName, rating, quantity, category, sellerEmail };
        console.log(information);

      

        fetch('https://kids-play-zone-server.vercel.app/alltoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(information)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your toys has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }



    return (
        <div className="card-body">
            <h2 className='text-center text-3xl font-bold'>Add Toys : </h2>
            <form onSubmit={handleAddToy}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' placeholder='sellerName' className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name='sellerEmail' placeholder="sellerEmail" className="input input-bordered" />
                    </div>
                    <div className='form-control'>
                        <select name="category" className="select select-bordered w-full max-w-xs">
                            <label className="label">
                                <option disabled selected>Sub Category</option>
                            </label>
                            <option>car</option>
                            <option>truck</option>
                            <option>jeep</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered" />

                    </div>



                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-warning btn-block" type="submit" value="order confirm" />
                </div>
            </form>
        </div>
    );
};

export default Addtoy;