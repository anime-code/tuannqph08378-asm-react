import React, {useEffect, useState} from 'react';
import api from "../../../Api";
import {Link, useParams} from "react-router-dom";
import ProductDetail from "../../../pages/views/Main/ProductDetail";

const getProductByCate = async (id) => {
    try {
        const {data} = await api.getDataByElement("products", `cate_id=${id}`);
        return data;
    } catch (e) {
        console.log('failed to request API: ', e)
    }
};
const getDataByPrice = async (start, end) => {
    try {
        const {data} = await api.getDataByElement("products", `price_sale_gte=${start}&price_sale_lte=${end}&status=1`);
        return data;
    } catch (e) {
        console.log('failed to request API: ', e)
    }
};
const Index = ({products, categories, onCart}) => {
    const getToCart = (item) => {
        onCart(item)
    };
    const {id} = useParams();
    const arr = [];
    useEffect(() => {
        if (products.length == 0) {
            getProductByCate(id).then(products => {
                arr.push(products);
            })
        } else {
            const product = products.filter(product => product.cate_id == parseInt(id));
            arr.push(product);
        }

    }, []);
    const getCate = categories.map(({name, id}, index) => {
        return (<li key={index}><Link to={`/categories/${id}`}>{name}</Link></li>
        );
    });
    const getData = () => {
        const product = products.filter(product => product.cate_id == parseInt(id));
        arr.push(product);
    };
    getData();
    const getProductByPrice = () => {
        let start;
        let end;
        const priceVal = document.querySelector("#priceValue").value;
        console.log(priceVal);
        switch (priceVal) {
            case "1":
                start = "100";
                end = "200";
                break;
            case "2":
                start = "200";
                end = "500";
                break;
            case "3":
                start = "500";
                end = "2000";
                break;
        }
        getDataByPrice(start, end).then(product => {
            arr.push(product);
        })

    };
    const result = arr[0].map(({id, name, price, price_sale, image, short_desc}, index) => {
        return (<div key={index} className="col-lg-4 col-md-4 col-sm-6">
            <div id={`pro-${id}`} className="single_product">
                <div className="product_thumb">
                    <Link className="primary_img" to={`/products/${id}`}><img
                        src={image} alt=""/></Link>
                    <Link className="secondary_img" to={`/products/${id}`}><img
                        src={image} alt=""/></Link>
                </div>
                <div className="product_content">
                    <h3><Link id="product-name"
                              to={`/products/${id}`}>{name}</Link></h3>
                    <div className="price_box">
                        <span className="old_price">${price}</span>
                        <span id="price-sale" className="current_price">${price_sale}</span>
                    </div>
                    <div style={{width: '100%'}} className="product_hover">
                        <div className="product_desc">
                            <p>{short_desc}</p>
                        </div>
                        <div className="action_links">
                            <ul>
                                <li className="add_to_cart"><a
                                    onClick={() => getToCart({id, name, price, price_sale, image,})}
                                    title="add to cart">add
                                    to cart</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    });
    const listProduct = arr[0].map(({id, image, name, price, price_sale, short_desc}, index) => {
        return (<div key={index} className="single_product product_list_item">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className="product_thumb">
                        <Link className="primary_img" to={`products/${id}`}><img
                            src={image} alt={name}/></Link>
                        <Link className="secondary_img" to={`products/${id}`}><img
                            src={image} alt={name}/></Link>

                    </div>
                </div>
                <div className="col-lg-8 col-md-7">
                    <div id="pro-${product.id}" className="product_content">
                        <h3><Link id="product-name"
                                  to={`/products/${id}`}>{name}</Link>
                        </h3>
                        <div className="product_desc">
                            <p>{short_desc}</p>
                        </div>
                        <div className="price_box">
                            <span className="old_price">${price}</span>
                            <span id="price-sale" className="current_price"> ${price}</span>
                        </div>
                        <div className="action_links">
                            <ul>
                                <li className="add_to_cart"><a
                                    onClick={() => getToCart({id, name, price, price_sale, image})}
                                    title="add to cart">add
                                    to cart</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    });
    return (
        <div>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <ul>
                                    <li><a href="pages/index.html">home</a></li>
                                    <li>&gt;</li>
                                    <li>Category</li>
                                    <li>&gt;</li>
                                    <li>Products</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*breadcrumbs area end*/}
            {/*shop  area start*/}
            <div className="shop_area shop_reverse">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            {/*sidebar widget start*/}
                            <div className="sidebar_widget">
                                <div className="widget_list widget_categories">
                                    <h2>Categories</h2>
                                    <ul>
                                        {getCate}
                                    </ul>
                                </div>
                                <div className="widget_list widget_filter">
                                    <h2>Filter by price</h2>
                                    <div className="form-group">
                                        <div className="row">
                                            <select onChange={getProductByPrice} id="priceValue"
                                                    className=" col-8 form-control">
                                                <option value={1}> 100$-200$</option>
                                                <option value={2}>200$-500$</option>
                                                <option value={3}>500$-2000$</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div className="widget_list Featured_p">
                                    <h2>Special Products</h2>
                                    <div id="special-product">
                                    </div>
                                </div>
                            </div>
                            {/*sidebar widget end*/}
                        </div>
                        <div className="col-lg-9 col-md-12">
                            {/*shop wrapper start*/}
                            {/*shop toolbar start*/}
                            <div className="shop_toolbar">
                                <div className="list_button">
                                    <ul className="nav" role="tablist">
                                        <li>
                                            <a className="active" data-toggle="tab" href="#large" role="tab"
                                               aria-controls="large" aria-selected="true"><i className="ion-grid"/></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#list" role="tab" aria-controls="list"
                                               aria-selected="false"><i className="ion-ios-list-outline"/> </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="orderby_wrapper">
                                    {/*                        <h3>Sort By : </h3>*/}
                                    {/*                        <div class=" niceselect_option">*/}
                                    {/*                            <select name="orderby" id="short">*/}
                                    {/*                                <option selected value="1">Sort by popularity</option>*/}
                                    {/*                                <option value="newness">Sort by newness</option>*/}
                                    {/*                                <option value="4">Sort by price: low to high</option>*/}
                                    {/*                                <option value="5">Sort by price: high to low</option>*/}
                                    {/*                                <option value="6">Product Name: Z</option>*/}
                                    {/*                            </select>*/}
                                    {/*                        </div>*/}
                                    <div className="page_amount">
                                        <p>Showing 1–9 of 21 results</p>
                                    </div>
                                </div>
                            </div>
                            {/*shop toolbar end*/}
                            {/*shop tab product start*/}
                            <div className="tab-content">
                                <div className="tab-pane grid_view fade show active" id="large" role="tabpanel">
                                    <div id="product" className="row">
                                        {result}
                                    </div>
                                </div>
                                <div className="tab-pane list_view fade" id="list" role="tabpanel">
                                    {listProduct}
                                </div>
                            </div>
                            {/*shop tab product end*/}
                            {/*shop toolbar start*/}
                            <div className="shop_toolbar t_bottom">
                                <div className="pagination">
                                    <ul>
                                        <li className="current">1</li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li className="next"><a href="#">next</a></li>
                                        <li><a href="#">&gt;&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*shop toolbar end*/}
                            {/*shop wrapper end*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
