import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import api from "../../../Api";


const Index = ({products}) => {

    const {id} = useParams();

    const getAllProducts = async () => {
        try {
            const {data} = await api.getDataByElement("products", "cate_id", id);
            return data;
        } catch (e) {
            console.log('failed to request API: ', e)
        }
    };
    useEffect(() => {
        if (products.length == 0) {
            getAllProducts().then(products => {
                console.log(products);
                setNewProduct(products);
            })
        } else {
            let product = products.filter(products => products.cate_id == parseInt(id));
            setNewProduct(product);
        }
    }, []);

    const [newProduct, setNewProduct] = useState([]);

    const result = newProduct.map(({id, cate_id, name, image, price, price_sale, quantity, status}, index) => {

        let statusQuantity = quantity >= 1 ? <span className="text-success">Còn Hàng</span> :
            <span className="text-danger">Hết Hàng</span>;
        status = 1 ? <span className="text-success">Active</span> : <span className="text-danger">Disabled</span>
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}<br/>
                    ID:{id}</td>
                <td><img src={image} width="100px" alt=""/></td>
                <td>{price}</td>
                <td>{price_sale}</td>
                <td>{statusQuantity}({quantity})</td>
                <td>{status}</td>
            </tr>
        )
    });
    return (
        <div className="container-fluid">
            {/* Page Heading */}
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Category:</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Price Sale</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {result}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>);
};

export default Index;
