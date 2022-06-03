import React, { useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import AllProducts from '../AllProducts/AllProducts';
import Payment from '../Dashboard/Payment';

const Header = ({ setIsDark, isDark }) => {
    const navigate = useNavigate();
    const [user, loading, aError] = useAuthState(auth);
    const email = user?.email;
    const [openNav, setOpenNav] = useState()
    const { isLoading, error, data, refetch } = useQuery(['user', email], () => axios.get(`https://limitless-earth-93689.herokuapp.com/user/${email}`));

    // console.log(data?.data.image);


    const handleNav = (e) => {
        console.log(e.target.checked)

    }
    return (
        <div>
            <>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link to={'/'} className="normal-case font-bold text-xl">CRAFTSMAN</Link>
                    </div>

                    <nav className='mx-10 hidden lg:block'>
                        <Link className='mr-6' to={'/'}>Home</Link>
                        {/* <Link className='mr-6' to={'/purchase'}>Purches</Link> */}
                        <Link className='mr-6' to={'/Dashboard'}>Dashboard</Link>
                        {/* <Link className='mr-6' to={'/blogs'}>Blogs</Link> */}
                        <Link className='mr-6' to={'/myPortfolio'}>My Portfolio</Link>
                        {!user && <Link className='mr-6' to={'/Login'}>Log in</Link>}

                    </nav>
                    <div >
                    <input type="checkbox" class="toggle toggle-sm" />
                    <p>Admin</p>
                    </div>

                    {!user&&<p className=" bg-base-300 p-3 rounded-md border-2 border-slate-900 fixed right-0 bottom-16 z-40 opacity-60 text-center">You are browsing as guest user <br />Some Option might not work <br />Log in to use full features </p>}


                    <div className="flex-none">

                        {/* <input type="checkbox" className="toggle" /> */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar m-1">
                                <div className="w-10 h-10 rounded-full bg-slate-400 flex justify-center items-center">
                                    {data?.data.image ? <img src={data?.data.image} alt='user image' /> : <FontAwesomeIcon className='w-5 h-5 p-2' icon={faUser}></FontAwesomeIcon>}
                                </div>
                            </label>

                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li onClick={() => navigate('/Dashboard')}>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li className='justify-between flex-row' onClick={() => setIsDark(!isDark)}><p>Dark mood</p> <input type="checkbox" className="toggle" checked={isDark} /></li>
                                {user && <li><a onClick={() => signOut(auth)}>Logout</a></li>}

                            </ul>
                        </div>



                        {/* Navigation for small device */}
                        <div className="dropdown dropdown-end">
                            <label className="btn bg-base-200 hover:bg-base-200 text-black btn-circle swap swap-rotate lg:hidden">

                                {/* this hidden checkbox controls the state  */}
                                <input type="checkbox" checked={false} />

                                {/* hamburger icon  */}
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                            </label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                {/* <Link className='mr-6' to={'/purchase'}>Purches</Link> */}
                                <li>{user && <Link className='mr-6' to={'/Dashboard'}>Dashboard</Link>}</li>
                                <li> <Link className='mr-6' to={'/blogs'}>Blogs</Link></li>
                                <li><Link className='mr-6' to={'/myPortfolio'}>My Portfolio</Link></li>
                                {!user && <Link className='mr-6' to={'/Login'}>Log in</Link>}

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
              
                        <Dashboard></Dashboard>
               

                }>
                    <Route path='add-review' element={<AddReview></AddReview>}></Route>
                    <Route path='add-product' element={<AddProduct></AddProduct>}></Route>
                    <Route path='manage-orders' element={<ManageOrders></ManageOrders>}></Route>
                    <Route path='manage-products' element={<ManageProducts></ManageProducts>}></Route>
                    <Route path='my-orders' element={<MyOrders></MyOrders>}></Route>
                    <Route index element={<MyProfile></MyProfile>}></Route>
                    <Route index path='my-profile' element={<MyProfile></MyProfile>}></Route>
                    <Route path='payment/:id' element={<Payment></Payment>}></Route>
                    <Route path='users' element={<Users></Users>}></Route>
                </Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/login' element={<LogIn></LogIn>}>  </Route>
                <Route path='blogs' element={<Blogs></Blogs>}></Route>
                <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
                <Route path='allProducts' element={<AllProducts></AllProducts>}></Route>
                <Route path='*' element={<NotFound></NotFound>}>  </Route>
            </Routes>
        </div>
    );
};

export default Header;