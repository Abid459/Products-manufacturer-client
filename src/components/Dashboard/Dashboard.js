import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center bg-base-200">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side ">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80  text-base-content bg-base-300">
                        {/* Sidebar content here  */}
                        <li><Link to='my-profile'>My Profile</Link></li>
                        <li className=''><Link to= 'my-orders'>My Orders</Link></li>
                        <li><Link to ='add-review'>Add a review</Link></li>
                        <li><Link to ='manage-orders'>Manage All orders</Link></li>
                        <li><Link to='add-product'>Add a product</Link></li>
                        <li><Link to= 'users'>All users</Link></li>
                        <li><Link to ='manage-products'>Manage Products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;