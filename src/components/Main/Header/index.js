import React, {useState} from 'react'

import Navbar from "../NavBar";
import cart from "../Cart/index"
import {Link} from "react-router-dom";


const Header = ({cateData}) => {

    const carts = JSON.parse(localStorage.getItem('cart'));
    let totalMn = 0;
    const cartPR = carts.map((cart, idx) => {
        totalMn += cart.price * cart.quantity;
        return (
            <div key={idx} className="cart_item">
                <div className="cart_img">
                    <img src={cart.image} alt=""/>
                </div>
                <div className="cart_info">
                    <a>{cart.name}</a>
                    <span className="quantity">Qty:{cart.quantity}</span>
                    <span className="price_cart">${cart.price}</span>
                </div>
                <div className="cart_remove">
                    <a onClick={() => getRemoveCart(cart.id)}><i className="ion-android-close"/></a>
                </div>
            </div>
        )
    });

    const getRemoveCart = (id) => {
        for (var i = 0; i < carts.length; i++) {
            if (carts[i].id === id) {
                carts.splice(i, 1);
                localStorage.setItem('cart', JSON.stringify(carts));
                break;
            }
        }
    };
    return (
        <div>
            {/* Main Wrapper Start */}
            {/*Offcanvas menu area start*/}
            <div className="off_canvars_overlay">
            </div>
            <div className="Offcanvas_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="canvas_open">
                                <a href=""><i className="ion-navicon"/></a>
                            </div>
                            <div className="Offcanvas_menu_wrapper">
                                <div className="canvas_close">
                                    <a href=""><i className="ion-android-close"/></a>
                                </div>
                                <div className="welcome_text">
                                    <p>Free shipping on all domestic orders with coupon code <span>“Watches2018”</span>
                                    </p>
                                </div>
                                <div className="top_right text-right">
                                    <ul>
                                        <li className="language"><a href="#"> English <i className="ion-chevron-down"/></a>
                                            <ul className="dropdown_language">
                                                <li><a href="#"> French</a></li>
                                                <li><a href="#">Germany</a></li>
                                                <li><a href="#">Japanese</a></li>
                                            </ul>
                                        </li>
                                        <li className="currency"><a href="#">USD <i className="ion-chevron-down"/></a>
                                            <ul className="dropdown_currency">
                                                <li><a href="#">EUR – Euro</a></li>
                                                <li><a href="#">GBP – British Pound</a></li>
                                                <li><a href="#">INR – India Rupee</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="home_contact">
                                    <div className="contact_box">
                                        <label>Location</label>
                                        <p>Street 12345 – USA</p>
                                    </div>
                                    <div className="contact_box">
                                        <label>Call free</label>
                                        <p><a href="tel:(012)800456789">+(012) 800 456 789</a></p>
                                    </div>
                                </div>
                                <div className="middel_right">
                                    <div className="search_btn">
                                        <a href="#"><i className="ion-ios-search-strong"/></a>
                                        <div className="dropdown_search">
                                            <form action="#">
                                                <input placeholder="Search product..." type="text"/>
                                                <button type="submit"><i className="ion-ios-search-strong"/></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="menu" className="text-left ">
                                    <ul className="offcanvas_main_menu">
                                        <li className="menu-item-has-children active">
                                            <a href="#">Home</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Home 1</a></li>
                                                <li><a href="index-2.html">Home 2</a></li>
                                                <li><a href="index-3.html">Home 3</a></li>
                                                <li><a href="index-4.html">Home 4</a></li>
                                                <li><a href="index-5.html">Home 5</a></li>
                                                <li><a href="index-6.html">Home 6</a></li>
                                                <li><a href="index-7.html">Home 7</a></li>
                                                <li><a href="index-8.html">Home 8</a></li>
                                                <li><a href="index-9.html">Home 9</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">Shop</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <a href="#">Shop Layouts</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="shop.html">shop</a></li>
                                                        <li><a href="shop-fullwidth.html">Full Width</a></li>
                                                        <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                                        <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                                        <li><a href="shop-right-sidebar-list.html"> Right Sidebar
                                                            list</a></li>
                                                        <li><a href="shop-list.html">List View</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="#">other Pages</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="portfolio.html">portfolio</a></li>
                                                        <li><a href="portfolio-details.html">portfolio details</a></li>
                                                        <li><a href="cart.html">cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="my-account.html">my account</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="#">Product Types</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="product-details.html">product details</a></li>
                                                        <li><a href="product-sidebar.html">product sidebar</a></li>
                                                        <li><a href="product-grouped.html">product grouped</a></li>
                                                        <li><a href="variable-product.html">product variable</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">blog</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="blog-details.html">blog details</a></li>
                                                <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                                <li><a href="blog-left.html">blog left</a></li>
                                                <li><a href="blog-none-sidebar.html">no sidebar</a></li>
                                                <li><a href="blog-right.html">blog right</a></li>
                                                <li><a href="blog-sticky.html">blog sticky</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">pages </a>
                                            <ul className="sub-menu">
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="services.html">services</a></li>
                                                <li><a href="faq.html">Frequently Questions</a></li>
                                                <li><a href="contact.html">contact</a></li>
                                                <li><a href="login.html">login</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="404.html">Error 404</a></li>
                                                <li><a href="compare.html">compare</a></li>
                                                <li><a href="privacy-policy.html">privacy policy</a></li>
                                                <li><a href="coming-soon.html">coming soon</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="my-account.html">my account</a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="contact.html"> Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="Offcanvas_footer">
                                    <span><a href="#"><i className="fa fa-envelope-o"/> info@yourdomain.com</a></span>
                                    <ul>
                                        <li className="facebook"><a href="#"><i className="fa fa-facebook"/></a></li>
                                        <li className="twitter"><a href="#"><i className="fa fa-twitter"/></a></li>
                                        <li className="pinterest"><a href="#"><i className="fa fa-pinterest-p"/></a>
                                        </li>
                                        <li className="google-plus"><a href="#"><i className="fa fa-google-plus"/></a>
                                        </li>
                                        <li className="linkedin"><a href="#"><i className="fa fa-linkedin"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Offcanvas menu area end*/}
            <header className="header_area">
                {/*header top start*/}
                <div className="header_top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="welcome_text">
                                    <p>Free shipping on all domestic orders with coupon code <span>“Watches2018”</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="top_right text-right">
                                    <ul>
                                        <li className="language"><a href="#"> English <i className="ion-chevron-down"/></a>
                                            <ul className="dropdown_language">
                                                <li><a href="#"> French</a></li>
                                                <li><a href="#">Germany</a></li>
                                                <li><a href="#">Japanese</a></li>
                                            </ul>
                                        </li>
                                        <li className="currency"><a href="#">USD <i className="ion-chevron-down"/></a>
                                            <ul className="dropdown_currency">
                                                <li><a href="#">EUR – Euro</a></li>
                                                <li><a href="#">GBP – British Pound</a></li>
                                                <li><a href="#">INR – India Rupee</a></li>
                                            </ul>
                                        </li>
                                        <li className="top_links"><a href="#">My Account <i
                                            className="ion-chevron-down"/></a>
                                            <ul className="dropdown_links">
                                                <li><Link to="cart">Checkout </Link></li>
                                                <li><a href="pages/cart.html">Shopping Cart</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*header top start*/}
                {/*header middel start*/}
                <div className="header_middel">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="home_contact">
                                    <div className="contact_box">
                                        <label>Location</label>
                                        <p className="address"/>
                                    </div>
                                    <div className="contact_box">
                                        <label>Call</label>
                                        <p className="numberPhone"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <div className="logo">
                                    <a href="pages/index.html"><img id="logo" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-9">
                                <div className="middel_right">
                                    <div className="search_btn">
                                        <a href="#"><i className="ion-ios-search-strong"/></a>
                                        <div className="dropdown_search">
                                            <form action="#">
                                                <input placeholder="Search product..." type="text"/>
                                                <button type="submit"><i className="ion-ios-search-strong"/></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="cart_link">
                                        <a href="pages/cart.html"><i className="ion-android-cart"/><span
                                            id="totalMn">{totalMn}</span>
                                            <i className="fa fa-angle-down"/></a>
                                        <span className="cart_quantity">{carts.length}</span>
                                        {/*mini cart*/}
                                        <div className="mini_cart">
                                            <div className="mini_cart_inner">
                                                <div id="product-cart">
                                                    {cartPR}
                                                </div>
                                            </div>
                                            <div className="mini_cart_footer">
                                                <div className="cart_button view_cart">
                                                    <Link to="/cart">View cart</Link>
                                                </div>
                                                <div className="cart_button checkout">
                                                    <a href="pages/checkout.html">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*mini cart end*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*header middel end*/}
                {/*header bottom satrt*/}
                <Navbar dataCate={cateData}/>
                {/*header bottom end*/}
            </header>
        </div>
    )
};

Header.propTypes = {};

export default Header
