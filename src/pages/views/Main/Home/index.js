import React, {useState} from 'react';
import {Link} from "react-router-dom";
import cart from "../../../../components/Main/Cart/index"
import {useForm} from "react-hook-form";

const Index = ({products, sliders, blogs, onCart}) => {

    const {register, handleSubmit, errors} = useForm();
    const resultBlogs = blogs.map((blog, index) => {
        return (
            <div key={index} className="col-4">
                <div className="single_blog">
                    <div className="blog_thumb">
                        <Link to={`blog-detail/${blog.id}`}><img height="300px" src={blog.image} alt=""/></Link>
                    </div>
                    <div className="blog_content">
                        <h3><Link to={`blog-detail/${blog.id}`}>{blog.title}</Link></h3>
                        <div className="author_name">
                            <p>
                                <span>by</span>
                                <span className="themes">{blog.author}</span>
                                / {blog.time_post}
                            </p>
                        </div>
                        <div className="post_desc">
                            <p>{blog.short_detail}</p>
                        </div>
                        <div className="read_more">
                            <Link to={`blog-detail/${blog.id}`}>read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    const resultSliders = sliders.map((item, index) => {
        return (
            <div key={index} className="carousel-item active">
                <img width="100%" style={{height: '500px'}} src={item.image} height={500}/>
            </div>
        );
    });
    const resultProducts = products.map((item, index) => {
        const getToCart = (item) => {
            onCart(item)
        };
        return (
            <div key={index} className="col-3">
                <div id={`pro-${item.id}`} className="single_product">
                    <div className="product_thumb">
                        <Link className="primary_img" to={`products/${item.id}`}><img
                            src={item.image} alt=""/></Link>
                        <Link className="secondary_img" to={`products/${item.id}`}><img
                            src={item.image} alt=""/></Link>
                    </div>
                    <div className="product_content">
                        <h3><Link id="product-name"
                                  to={`products/${item.id}`}>{item.name}</Link></h3>
                        <span className="old_price">${item.price}</span>
                        <span id="price-sale" className="current_price">${item.price_sale}</span>
                        <div style={{width: '100%'}} className="product_hover">
                            <div className="action_links">
                                <ul>
                                    <li className="add_to_cart"><a
                                        onClick={() => getToCart(item)}
                                        title="add to cart">add
                                        to cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div>
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                {/* The slideshow */}
                <div className="carousel-inner">
                    {resultSliders}
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"/>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"/>
                </a>
            </div>
            {/*slider area end*/}
            {/*banner area start*/}
            <section className="banner_section">
            </section>
            {/*banner area end*/}
            {/*product section area start*/}
            <section className="product_section p_bottom p_section1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>News Products</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="product_area ">
                                <div className="product_container bottom">
                                    <div className="row">
                                        <div className="custom-row product_row1">
                                            {resultProducts}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*product section area end*/}
            {/*banner fullwidth start*/}
            <section className="banner_fullwidth">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="banner_text">
                                <p>Sale Off 20% All Products</p>
                                <h2>New Trending Collection</h2>
                                <span>We Believe That Good Design is Always in Season</span>
                                <a href="pages/shop.html">shopping Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*banner area end*/}
            {/*blog section area start*/}
            <section className="blog_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>News</h2>
                            </div>
                        </div>
                    </div>
                    <div className="custom-row product_row1">

                        {resultBlogs}


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
