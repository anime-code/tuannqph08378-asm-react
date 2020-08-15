import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import api from "../../../../Api";

const getAllProducts = async () => {
    try {
        const {data} = await api.getAll("products");
        return data;
    } catch (e) {
        console.log('failed to request API: ', e)
    }
};
const Index = ({products, onCart}) => {
    const getToCart = (item) => {
        onCart(item)
    };
    const {id} = useParams();
    useEffect(() => {
        if (products.length == 0) {
            getAllProducts().then(products => {
                let product = products.find(product => product.id == parseInt(id));
                setDetailProduct(product);
            })
        } else {
            let product = products.find(product => product.id == parseInt(id));
            setDetailProduct(product);
        }
    }, []);

    const [detailProduct, setDetailProduct] = useState({});
    console.log(detailProduct);
    const result = () => {
        return (
            <div id={`pro-${detailProduct.id}`} className="col-12 row">
                <div className="col-lg-6 col-md-6">
                    <div className="product-details-tab">
                        <div id="img-1" className="zoomWrapper single-zoom">
                            <img width="100%" id="zoom1" src={detailProduct.image} data-zoom-image={detailProduct.image}
                                 alt={detailProduct.name}/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="product_d_right">
                        <h1 id="product-name">{detailProduct.name}</h1>
                        <div className="product_price">
                            <span className="old_price">${detailProduct.price}</span>
                            <span id="price-sale" className="current_price">${detailProduct.price_sale}</span>
                        </div>
                        <div className="product_desc">
                            <p>{detailProduct.detail}</p>
                        </div>
                        <div className="product_variant quantity">

                            <a onClick={() => getToCart(detailProduct)} className="btn btn-primary"><span
                                style={{color: "white"}}>Add to cart</span></a>
                        </div>

                    </div>
                </div>
            </div>

        );
    };
    return (
        <div>
            <div className="breadcrumbs_area product_bread">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </div>
            </div>
            {/*breadcrumbs area end*/}
            {/*product details start*/}
            <div className="product_details">
                <div className="container">
                    <div className="row">
                        {result()}
                    </div>
                </div>
            </div>
            {/*product details end*/}
            {/*product info start*/}
            <div className="product_d_info">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product_d_inner">
                                <div className="product_info_button">
                                    <ul className="nav" role="tablist">
                                        <li>
                                            <a className="active" data-toggle="tab" href="#info" role="tab"
                                               aria-controls="info" aria-selected="false">Description</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews"
                                               aria-selected="false">Reviews (1)</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="info" role="tabpanel">
                                        <div className="product_info_content">
                                            {detailProduct.detail}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="reviews" role="tabpanel">
                                        <div className="reviews_wrapper">
                                            <h2>1 review for Donec eu furniture</h2>
                                            <div className="reviews_comment_box">
                                                <div className="comment_thmb">
                                                    <img src="assets/img/blog/comment2.jpg" alt=""/>
                                                </div>
                                                <div className="comment_text">
                                                    <div className="reviews_meta">
                                                        <div className="star_rating">
                                                            <ul>
                                                                <li><a href="#"><i className="ion-ios-star"/></a></li>
                                                                <li><a href="#"><i className="ion-ios-star"/></a></li>
                                                                <li><a href="#"><i className="ion-ios-star"/></a></li>
                                                                <li><a href="#"><i className="ion-ios-star"/></a></li>
                                                                <li><a href="#"><i className="ion-ios-star"/></a></li>
                                                            </ul>
                                                        </div>
                                                        <p><strong>admin </strong>- September 12, 2018</p>
                                                        <span>roadthemes</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment_title">
                                                <h2>Add a review </h2>
                                                <p>Your email address will not be published. Required fields are
                                                    marked </p>
                                            </div>
                                            <div className="product_ratting mb-10">
                                                <h3>Your rating</h3>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-star"/></a></li>
                                                    <li><a href="#"><i className="fa fa-star"/></a></li>
                                                    <li><a href="#"><i className="fa fa-star"/></a></li>
                                                    <li><a href="#"><i className="fa fa-star"/></a></li>
                                                    <li><a href="#"><i className="fa fa-star"/></a></li>
                                                </ul>
                                            </div>
                                            <div className="product_review_form">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <label htmlFor="review_comment">Your review </label>
                                                            <textarea name="comment" id="review_comment"
                                                                      defaultValue={""}/>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <label htmlFor="author">Name</label>
                                                            <input id="author" type="text"/>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <label htmlFor="email">Email </label>
                                                            <input id="email" type="text"/>
                                                        </div>
                                                    </div>
                                                    <button type="submit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Index;
