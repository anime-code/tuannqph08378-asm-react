import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Index = ({categories, products, categories_blog, blogs, orders, order_detail}) => {
    let total = 0;
    orders.map(order => {
        total += order.total_money;
    });
    const countCategory = () => {
        return (
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"><Link
                                    to="/admin/categories">Categories</Link>
                                </div>
                                <div className="h1 mb-0 font-weight-bold text-gray-800">{categories.length}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    };
    const countProduct = () => {
        return (<div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"><Link
                                    to="/admin/products">Products</Link>
                                </div>
                                <div className="h1 mb-0 font-weight-bold text-gray-800">{products.length}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const countCategoriesBlog = () => {
        return (<div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"><Link
                                to="/admin/categories_blog">Categories Blog</Link>
                            </div>
                            <div className="h1 mb-0 font-weight-bold text-gray-800">{categories_blog.length}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
    };
    const countBlogs = () => {
        return (<div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"><Link
                                to="/admin/blogs">Blogs</Link>
                            </div>
                            <div className="h1 mb-0 font-weight-bold text-gray-800">{blogs.length}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
    };
    const countProductWasBought = () => {
        return (<div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"><Link
                                to="/admin/">Product Sold</Link>
                            </div>
                            <div className="h1 mb-0 font-weight-bold text-gray-800">{order_detail.length}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
    };
    const countTotalMoney = () => {


        return (<div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"><Link
                                to="/admin/">Total Money</Link>
                            </div>
                            <div id="total_money"
                                 className="h1 mb-0 font-weight-bold text-gray-800">{total}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
    };

    return (
        <div>

            <div className="row">

                {countCategory()}
                {countProduct()}
                {countCategoriesBlog()}
                {countBlogs()}
                {countProductWasBought()}
                {countTotalMoney()}
            </div>
        </div>
    );

};

export default Index;
