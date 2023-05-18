import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className='text-green-700 font-extrabold'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link className='text-cyan-500 font-extrabold'>All Toys</Link>
                            </li>
                            <li><Link className='text-violet-500 font-extrabold'>My Toy</Link></li>
                            <li><Link to='addtoy' className='text-pink-300 font-extrabold'>Add Toy</Link></li>
                            <li><Link to='/blog' className='text-yellow-500 font-extraabold'>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl h-40 w-40"> <img src={logo} alt="" /> </Link>
                    <Link to='/' className='font-extrabold text-3xl text-amber-400'>Toy Stars</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/' className='text-green-700 font-extrabold'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link className='text-cyan-500 font-extrabold'>All Toys</Link>
                        </li>
                        <li><Link className='text-violet-500 font-extrabold'>My Toy</Link></li>
                        <li><Link to='addtoy' className='text-pink-300 font-extrabold'>Add Toy</Link></li>
                        <li><Link to='/blog' className='text-yellow-500 font-extrabold'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <Link to='login'><button className="btn btn-outline btn-warning font-bold">Log In</button></Link>
                    <Link to='registration'><button className="btn btn-outline btn-warning font-bold">Registration</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;