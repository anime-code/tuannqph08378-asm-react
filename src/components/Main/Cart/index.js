import React from 'react';
import $ from "jquery"

let cart = [];
localStorage.getItem('cart', JSON.stringify(cart));
const getToCart = (id) => {
    let pName = $('#pro-' + id).find('#product-name').text();
    let price_sale = $('#pro-' + id).find('#price-sale').text();
    price_sale = parseInt(price_sale.replace("$", ""));
    let imgUrl = $('#pro-' + id).find('img').attr('src');
    let obj = {
        id: id,
        name: pName,
        image: imgUrl,
        price: price_sale
    };

    let flag = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == obj.id) {
            flag = true;
            console.log(true);
            break;
        }
    }
    if (flag == false) {
        obj.quantity = 1;
        cart.push(obj);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Add Success");
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
        cart[i].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Add Success");
    }
    showCartCheckOut();
};

const showCartCheckOut = () => {
    $('#product-cart').empty();
    $('.cart_quantity').empty();
    let result = "";
    let totalMoney = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
        totalMoney += cart[i].price * cart[i].quantity;
        result += `
                                    <div class="cart_item">
                                        <div class="cart_img">
                                            <img src="${cart[i].image}" alt="">
                                        </div>
                                        <div class="cart_info">
                                            <a>${cart[i].name}</a>

                                            <span class="quantity">Qty: ${cart[i].quantity}</span>
                                            <span class="price_cart">$${cart[i].price}</span>

                                        </div>
                                        <div class="cart_remove">
                                            <a onclick="removeProduct(${cart[i].id})"><i class="ion-android-close"></i></a>
                                        </div>
                                    </div>
                    `;
        // document.querySelector("#totalMn").innerHTML = `$${totalMoney}`;

    }
    $('#product-cart').append(result);
};
export default {getToCart, showCartCheckOut};
