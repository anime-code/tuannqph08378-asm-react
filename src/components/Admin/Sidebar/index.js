import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"/>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0"/>
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/">
                    <i className="fas fa-fw fa-tachometer-alt"/>
                    <span>Dashboard</span></Link>
            </li>
            {/* Divider */}
            <div className="sidebar-heading">
                Interface
            </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                   aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa fa-baby"/>
                    <span>Categories</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">

                        <div className="nav-item">

                            <span className=" nav-link text-danger">Products</span>

                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                 data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <Link className="collapse-item" to="/admin/categories/">
                                        List</Link>
                                    <Link className="collapse-item" to="/admin/categories/create">Create</Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link collapsed" href="#">
                                <span className="text-danger">Blogs</span>
                            </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                 data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <Link className="collapse-item" to="/admin/categories_blog/"> List</Link>

                                    <Link className="collapse-item" to="/admin/categories_blog/create">Create</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                   aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"/>
                    <span>Menu</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                     data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <div className="nav-item">
                            <a className="nav-link" href="#">
                                <span className="text-danger">Products</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                 data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <Link className="collapse-item" to="/admin/products">List</Link>
                                    <Link className="collapse-item" to="/admin/products/create">Create</Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#">

                                <span className="text-danger">Blogs</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                 data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <Link className="collapse-item" to="/admin/blogs">List</Link>
                                    <Link className="collapse-item" to="/admin/blogs/create">Create</Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/admin/orders">
                                <span className="text-danger">Orders</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>


            {/* Divider */}
            <hr className=" sidebar-divider"/>

            <div className=" text-center d-none d-md-inline">
                <button className=" rounded-circle border-0" id=" sidebarToggle"/>
            </div>
        </ul>
    )
}

Sidebar.propTypes = {}

export default Sidebar
