import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
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
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import axios from 'axios';
import NotFound from '../NotFound/NotFound';
import RequireAuth from '../RequireAuth/RequireAuth';
import Blogs from '../Blogs/Blogs';
import MyPortfolio from '../MyPortfolio/MyPortfolio';

const Header = ({ setIsDark, isDark }) => {
    const navigate = useNavigate();
    const [user, loading, aError] = useAuthState(auth);
    const email = user?.email;
    const { isLoading, error, data, refetch } = useQuery(['user', email], () => axios.get(`http://localhost:5000/user/${email}`));
    // console.log(data?.data.image);
    return (
        <div>
            <>
                <div class="navbar bg-base-100">
                    <div class="flex-1">
                        <Link to={'/'} class="normal-case font-bold text-xl">CRAFTSMAN</Link>
                    </div>

                    <nav className='mx-10'>
                        <Link className='mr-6' to={'/'}>Home</Link>
                        {/* <Link className='mr-6' to={'/purchase'}>Purches</Link> */}
                        {user && <Link className='mr-6' to={'/Dashboard'}>Dashboard</Link>}
                        {!user && <Link className='mr-6' to={'/Login'}>Log in</Link>}
                        <Link className='mr-6' to={'/blogs'}>Blosg</Link>
                        <Link className='mr-6' to={'/myPortfolio'}>My Portfolio</Link>
                    
                    </nav>


                    <div class="flex-none">
                        <div class="dropdown dropdown-end">
                            
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
                                    <img src={data?.data.image} alt='user image' />
                                </div>
                            </label>

                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li onClick={() => navigate('/Dashboard')}>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li className='justify-between flex-row' onClick={() => setIsDark(!isDark)}><p>Dark mood</p> <input type="checkbox" class="toggle" checked={isDark} /></li>
                                {user && <li><a onClick={() => signOut(auth)}>Logout</a></li>}

                            </ul>
                        </div>
                    </div>
                </div>
            </>


            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/purchase/:id' element={
                    <RequireAuth>
                        <Purchase></Purchase>
                    </RequireAuth>
                }>  </Route>
                <Route path='/dashboard' element={
                    <RequireAuth>
                        <Dashboard></Dashboard>
                    </RequireAuth>

                }>
                    <Route path='add-review' element={<AddReview></AddReview>}></Route>
                    <Route path='add-product' element={<AddProduct></AddProduct>}></Route>
                    <Route path='manage-orders' element={<ManageOrders></ManageOrders>}></Route>
                    <Route path='manage-products' element={<ManageProducts></ManageProducts>}></Route>
                    <Route path='my-orders' element={<MyOrders></MyOrders>}></Route>
                    <Route index element={<MyProfile></MyProfile>}></Route>
                    <Route index path='my-profile' element={<MyProfile></MyProfile>}></Route>
                    <Route path='users' element={<Users></Users>}></Route>
                </Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/login' element={<LogIn></LogIn>}>  </Route>
                <Route path='blogs' element={<Blogs></Blogs>}></Route>
                <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
                <Route path='*' element={<NotFound></NotFound>}>  </Route>
            </Routes>
        </div>
    );
};

export default Header;