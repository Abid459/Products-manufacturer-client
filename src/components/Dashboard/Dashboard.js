import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useIsAdmin from '../../hooks/useIsAdmin';

const Dashboard = () => {
    const isAdmin = useIsAdmin();
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
                        <li><Link to='my-profile'>My Profile</Link></li>
                        {!isAdmin && <>
                        <li className=''><Link to= 'my-orders'>My Orders</Link></li>
                        <li><Link to ='add-review'>Add a review</Link></li>
                        </>}

                        {isAdmin && <>
                        <li><Link to ='manage-orders'>Manage All orders</Link></li>
                        <li><Link to='add-product'>Add a product</Link></li>
                        <li><Link to= 'users'>All users</Link></li>
                        <li><Link to ='manage-products'>Manage Products</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;