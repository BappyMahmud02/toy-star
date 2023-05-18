import React from 'react';

const Addtoy = () => {
    return (
        <div className="card-body">
            <h2 className='text-center text-3xl font-bold'>Add Toys : </h2>
            <form >
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
                        <label for="subcategory">Subcategory:</label>
                        <select name="subcategory">
                            <option value="">Select subcategory</option>
                            <option value="subcategory1">Subcategory 1</option>
                            <option value="subcategory2">Subcategory 2</option>
                            <option value="subcategory3">Subcategory 3</option>

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
                        <input type="text" name='raating' placeholder="Rating" className="input input-bordered" />

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