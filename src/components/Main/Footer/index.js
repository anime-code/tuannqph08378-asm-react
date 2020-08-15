import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer_widgets">
                <div className="container">
                    <div className="footer_top">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="widgets_container contact_us">
                                    <h3>About Monsta</h3>
                                    <div className="footer_contact">
                                        <p>Address: <span className="address" /></p>
                                        <p>Phone: <a className="numberPhone" href="tel:" /></p>
                                        <p>Email: <span className="email" /></p>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="#"><i className="ion-social-rss" /></a></li>
                                            <li><a href="#"><i className="ion-social-googleplus" /></a></li>
                                            <li><a href="#"><i className="ion-social-youtube" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-4">
                                <div className="widgets_container widget_menu">
                                    <h3>Pages</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li><a href="pages/index.html">Home</a></li>
                                            <li><a href="pages/shop.html">Shop</a></li>
                                            <li><a href="pages/blog.html">Blog</a></li>
                                            <li><a href="pages/contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-5">
                                <div className="widgets_container widget_menu">
                                    <h3>Shops</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-7">
                                <div className="widgets_container product_widget">
                                    <h3>Top Rated Products</h3>
                                    <div className="simple_product">
                                        <div className="simple_product_items">
                                            <div className="simple_product_thumb">
                                                <a href="#"><img src="assets/img/s-product/product5.jpg" alt="" /></a>
                                            </div>
                                            <div className="simple_product_content">
                                                <div className="tag_cate">
                                                    <a href="#">Clothing,</a>
                                                    <a href="#">Potato chips</a>
                                                </div>
                                                <div className="product_name">
                                                    <h3><a href="#">Donec eu animal</a></h3>
                                                </div>
                                                <div className="product_price">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$70.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="simple_product_items">
                                            <div className="simple_product_thumb">
                                                <a href="#"><img src="assets/img/s-product/product6.jpg" alt="" /></a>
                                            </div>
                                            <div className="simple_product_content">
                                                <div className="tag_cate">
                                                    <a href="#">Women</a>
                                                </div>
                                                <div className="product_name">
                                                    <h3><a href="#">Dummy animal</a></h3>
                                                </div>
                                                <div className="product_price">
                                                    <span className="old_price">$74.00</span>
                                                    <span className="current_price">$69.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_middel">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer_middel_menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Online Store</a></li>
                                        <li><a href="#">Promotion</a></li>
                                        <li><a href="#">Privacu Policy</a></li>
                                        <li><a href="#">Terms Of Use</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="row">
                            <div className="col-12">
                                <div className="copyright_area">
                                    <p>Copyright © 2019 <a href="#">monsta</a>  All Right Reserved.</p>
                                    <img src="assets/img/icon/papyel2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Footer
