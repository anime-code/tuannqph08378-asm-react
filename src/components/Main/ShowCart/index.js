import React, {useState} from 'react';
import $ from "jquery"

const Index = () => {

    let totalMn = 0;
    let carts = JSON.parse(localStorage.getItem('cart'));
    const [newCart, setNewCart] = useState(carts);

    let result = (cart, idx) => {
        return (
            <tr key={idx}>
                <td className="product_remove"><a onClick={() => removeCart(cart.id)}><i
                    className="fa fa-trash"></i></a></td>
                <td className="product_thumb"><img src={cart.image}
                                                   alt=""/></td>
                <td className="product_name">{cart.name}</td>
                <td className="product-price">${cart.price_sale}</td>
                <td className="product_quantity"><label>Quantity</label> <input id="quantity"
                                                                                onChange={event => changeNumberQuantity(event.target.value, cart.id)}
                                                                                defaultValue={cart.quantity}
                                                                                type="number"/>
                </td>
            </tr>)

    };
    const showCart =
        newCart.map((cart, idx) => {
            totalMn += cart.price * cart.quantity;
            return result(cart, idx)
        })
    ;
    const removeCart = (id) => {
        for (var i = 0; i < carts.length; i++) {
            if (carts[i].id === id) {
                carts.splice(i, 1);
                localStorage.setItem('cart', JSON.stringify(carts));
                setNewCart(carts);
                break;
            }
        }
    };
    const changeNumberQuantity = (e, id) => {
        if (e > 0) {
            for (var i = 0; i < carts.length; i++) {
                if (carts[i].id == id) {
                    carts[i].quantity = e;
                    localStorage.setItem('cart', JSON.stringify(carts));
                    setNewCart(carts);
                    break;
                }
            }
        }

    };
    return (
        <div className="shopping_cart_area">
            <div className="container">
                <form action="#">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_desc">
                                <div className="cart_page table-responsive">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className="product_remove">Delete</th>
                                            <th className="product_thumb">Image</th>
                                            <th className="product_name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product_quantity">Quantity</th>
                                        </tr>
                                        </thead>
                                        <tbody id="productCart">
                                        {showCart}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart_submit">
                                    <div className="d-flex flex-row bd-highlight ">
                                        <div className=" bd-highlight">Total: ${totalMn}</div>
                                    </div>
                                    <a href="/checkout" className=" btn btn-dark" type="submit">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Index;
