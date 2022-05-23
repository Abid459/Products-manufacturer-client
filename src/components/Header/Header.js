import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import Home from '../Home/Home';
import Purchase from '../Purchase/Purchase';
import Dashboard from '../Dashboard/Dashboard';
import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';
import MyOrders from '../Dashboard/MyOrders';
import AddProduct from '../Dashboard/AddProduct';
import AddReview from '../Dashboard/AddReview';
import ManageOrders from '../Dashboard/ManageOrders';
import ManageProducts from '../Dashboard/ManageProducts';
import MyProfile from '../Dashboard/MyProfile';
import Users from '../Dashboard/Users';

const Header = ({setIsDark,isDark}) => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <>
                <div class="navbar bg-base-100">
                    <div class="flex-1">
                        <a class="btn btn-ghost normal-case text-xl">CRAFTSMAN</a>
                    </div>

                    <nav className='mx-10'>
                        <Link className='mr-6' to={'/'}>Home</Link>
                        <Link className='mr-6' to={'/purches'}>Purches</Link>
                        <Link className='mr-6' to={'/Dashboard'}>Dashboard</Link>
                        {!user && <Link className='mr-6' to={'/Login'}>Log in</Link>}
                    </nav>


                    <div class="flex-none">
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle">
                                <div class="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span class="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div class="card-body">
                                    <span class="font-bold text-lg">8 Items</span>
                                    <span class="text-info">Subtotal: $999</span>
                                    <div class="card-actions">
                                        <button class="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <input type="checkbox" class="toggle" /> */}
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=33791" />
                                </div>
                            </label>
                            
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <div onClick={()=>setIsDark(!isDark)}><li>Dark mood</li> <input type="checkbox" class="toggle" checked = {isDark}/></div>
                                {user && <li><a onClick={()=>signOut(auth)}>Logout</a></li>}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </>


            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/appontment' element={<Purchase></Purchase>}>  </Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}>
                    <Route path='add-review' element={<AddReview></AddReview>}></Route>
                    <Route path='add-product' element={<AddProduct></AddProduct>}></Route>
                    <Route path='manage-orders' element={<ManageOrders></ManageOrders>}></Route>
                    <Route path='manage-products' element={<ManageProducts></ManageProducts>}></Route>
                    <Route path='my-orders' element={<MyOrders></MyOrders>}></Route>
                    <Route path='my-profile' element={<MyProfile></MyProfile>}></Route>
                    <Route path='users' element={<Users></Users>}></Route>
                </Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/login' element={<LogIn></LogIn>}>  </Route>
            </Routes>
        </div>
    );
};

export default Header;