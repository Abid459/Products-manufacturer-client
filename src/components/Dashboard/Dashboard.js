import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useIsAdmin from '../../hooks/useIsAdmin';
import auth from '../firebase.init';

const Dashboard = () => {
    const isAdmin = useIsAdmin();
    const [user, loading, aError] = useAuthState(auth);
    const[guestAdmin,setGuestAdmin] = useState(false)
    const handleMakeGuestAdmin = () =>{
        setGuestAdmin(!guestAdmin)
    }
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  bg-base-200 relative">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn  drawer-button lg:hidden absolute left-1 top-1"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></label>

                </div>
                <div className="drawer-side ">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80  text-base-content bg-base-300">
                        {/* Sidebar content here  */}
                        <li>{!isAdmin && <div>
                        <span>Switch to Admin</span>
                        <input type="checkbox" class="toggle toggle-sm" onClick={handleMakeGuestAdmin} />
                        </div>
                        }</li>
                        <li><Link to='my-profile'>My Profile</Link></li>
                        {(!isAdmin && !guestAdmin ) && <>
                        <li className=''><Link to= 'my-orders'>My Orders</Link></li>
                        <li><Link to ='add-review'>Add a review</Link></li>
                        </>}

                        {(isAdmin || guestAdmin) && <>
                        <li><Link to ='manage-orders'>Manage All orders</Link></li>
                        <li><Link to='add-product'>Add a product</Link></li>
                        <li><Link to= 'users'>All users</Link></li>
                        <li><Link to ='manage-products'>Manage Products</Link></li>
                        </>}
                        


                        {!user && <p className=" bg-base-300 border absolute bottom-36 p-3 rounded-md border-slate-900 mt-10 text-center">You are browsing as guest user <br />Some Option might not work <br />Log in to use full features </p>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;